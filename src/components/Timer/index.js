import { useState, useEffect } from 'react';
import { StyledTimer, StyledHourglass } from './styled';
import hourglass from '../../images/hourglass.png';
import { useDispatch } from 'react-redux';
import { changeActiveParticipant } from '../../redux/auction';

const Timer = ({timePeriod, timerRef}) => {
  // timePeriod is time in seconds
  const [time, setTime] = useState(timePeriod);
  const [hours, setHours] = useState(Math.floor(time / 60 / 60).toString().padStart(2, '0'));
  const [minutes, setMinutes] = useState(Math.floor(time / 60).toString().padStart(2, '0'));
  const [seconds, setSeconds] = useState((time % 60).toString().padStart(2, '0'));

  const dispatch = useDispatch();

  useEffect(() => {
    const getTime = (time) => {
      const hours = Math.floor(time / 60 / 60).toString().padStart(2, '0');
      const minutes = Math.floor(time / 60).toString().padStart(2, '0');
      const seconds = (time % 60).toString().padStart(2, '0');
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
      setTime((prevTime) => prevTime - 1);
    };

    if (time >= 0) {
      const timerId = setInterval(() => getTime(time - 1), 1000);
      return () => {
        clearInterval(timerId);
      }
    } else {
      dispatch(changeActiveParticipant());
    }
  }, [time, timePeriod, dispatch]);

  return (
    <StyledTimer ref={timerRef}>
      <div>{hours} : {minutes} : {seconds}</div>
      <StyledHourglass alt="hourglass" src={hourglass} width="15rem" />
    </StyledTimer>
  );
};

export default Timer;
