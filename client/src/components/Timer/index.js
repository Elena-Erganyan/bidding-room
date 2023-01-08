import { useState, useEffect } from 'react';
import { StyledTimer, StyledHourglass } from './styled';
import hourglass from '../../images/hourglass.png';

const Timer = ({remainingTime, socket, turnPeriod, timerRef}) => {
  // remainingTime and turnPeriod are in seconds

  const [correctedInterval, setCorrectedInterval] = useState(1000); // in miliseconds
  const [timeLeft, setTimeLeft] = useState(remainingTime);
  
  const hours = Math.floor(timeLeft / 60 / 60).toString().padStart(2, '0');
  const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const seconds = (timeLeft % 60).toString().padStart(2, '0');
  
  useEffect(() => {
    // the timestamp we should call the timer next
    let nextTimeStamp = Date.now() + 1000;

    const timerId = setTimeout(function countdown() {  
      const drift = Date.now() - nextTimeStamp;
      
      if (drift > 1000) {
        // probably the browser or the tab was inactive
        // so we should sync the time with the server
        socket.emit('requestTime');
      }

      setTimeLeft(timeLeft ? timeLeft - 1 : turnPeriod);
  
      // take into account drift
      setCorrectedInterval(Math.max(0, 1000 - drift));
        
    }, correctedInterval);

    return () => clearTimeout(timerId);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft]);

  return (
    <StyledTimer ref={timerRef}>
      <div style={{color: '#cd1719'}}>{hours} : {minutes} : {seconds}</div>
      <StyledHourglass alt="hourglass" src={hourglass} width="15rem" />
    </StyledTimer>
  );
};

export default Timer;
