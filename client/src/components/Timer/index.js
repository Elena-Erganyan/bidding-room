import { useState, useEffect, useRef } from 'react';
import { StyledTimer, StyledHourglass } from './styled';
import hourglass from '../../images/hourglass.png';

const Timer = ({remainingTime, socket, turnPeriod, timerRef}) => {
  // remainingTime is time in seconds
  const [timeLeft, setTimeLeft] = useState(remainingTime);
  const timeLeftRef = useRef(timeLeft);
  timeLeftRef.current = timeLeft;
  
  const hours = Math.floor(timeLeft / 60 / 60).toString().padStart(2, '0');
  const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const seconds = (timeLeft % 60).toString().padStart(2, '0');

  const interval = 1000; // miliseconds 
  let expected = Date.now() + interval; // timestamp when setTimout should run the countdown function

  useEffect(() => {
    const timerId = setTimeout(function countdown() {      
      const drift = Date.now() - expected;
      
      if (drift > interval) {
        // probably the browser or the tab was inactive
        console.log("oops");
        socket.emit('requestTime');
      }

      setTimeLeft(timeLeftRef.current ? timeLeftRef.current - 1 : turnPeriod);
  
      expected += interval;

      setTimeout(countdown, Math.max(0, interval - drift)); // take into account drift
    }, interval);

    return () => clearTimeout(timerId);
    
  }, []);

  return (
    <StyledTimer ref={timerRef}>
      <div>{hours} : {minutes} : {seconds}</div>
      <StyledHourglass alt="hourglass" src={hourglass} width="15rem" />
    </StyledTimer>
  );
};

export default Timer;
