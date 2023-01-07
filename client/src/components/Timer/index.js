import { useState, useEffect } from 'react';
import { StyledTimer, StyledHourglass } from './styled';
import hourglass from '../../images/hourglass.png';

const Timer = ({remainingTime, turnPeriod, timerRef}) => {
  // remainingTime is time in seconds
  const [timeLeft, setTimeLeft] = useState(remainingTime);
  
  const hours = Math.floor(timeLeft / 60 / 60).toString().padStart(2, '0');
  const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const seconds = (timeLeft % 60).toString().padStart(2, '0');

  useEffect(() => {
    const timerId = setTimeout(() => {
      setTimeLeft(timeLeft? timeLeft -1: turnPeriod)
    }, 1000);

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
