import { useState, useEffect, useRef } from 'react';
import { StyledTimer, StyledHourglass } from './styled';
import hourglass from '../../images/hourglass.png';

const Timer = ({remainingTime, socket, turnPeriod, timerRef}) => {
  // remainingTime is time in seconds

  const [correctedInterval, setCorrectedInterval] = useState(1000); // miliseconds 
  const [timeLeft, setTimeLeft] = useState(remainingTime);
  
  const hours = Math.floor(timeLeft / 60 / 60).toString().padStart(2, '0');
  const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const seconds = (timeLeft % 60).toString().padStart(2, '0');
  
  useEffect(() => {
    let nextTimeStamp = Date.now() + 1000;

    const timerId = setTimeout(function countdown() {  
      const drift = Date.now() - nextTimeStamp;
      
      if (drift > 1000) {
        // probably the browser or the tab was inactive
        console.log("oops");
        socket.emit('requestTime');
      }

      setTimeLeft(timeLeft ? timeLeft - 1 : turnPeriod);
  
      setCorrectedInterval(Math.max(0, 1000 - drift));

      // take into account drift
    }, correctedInterval);

    return () => clearTimeout(timerId);
    
  }, [timeLeft]);

  return (
    <StyledTimer ref={timerRef}>
      <div>{hours} : {minutes} : {seconds}</div>
      <StyledHourglass alt="hourglass" src={hourglass} width="15rem" />
    </StyledTimer>
  );
};

export default Timer;
