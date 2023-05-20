import React, { useEffect, useRef, useState } from 'react';

import CountDownCard from './CountDownCard';

const CountDownTimer = () => {
  const date_future = new Date("2023-07-27");
  const date_now = new Date();

  let secondsNow = Math.floor((date_future - (date_now))/1000);
  let minutesNow = Math.floor(secondsNow/60);
  let hoursNow = Math.floor(minutesNow/60);
  let daysNow = Math.floor(hoursNow/24);
  
  hoursNow = hoursNow-(daysNow*24);
  minutesNow = minutesNow-(daysNow*24*60)-(hoursNow*60);
  secondsNow = secondsNow-(daysNow*24*60*60)-(hoursNow*60*60)-(minutesNow*60);
  //card ref
  const SecondsCardRef = useRef(null);
  const MinutesCardRef = useRef(null);
  const HoursCardRef = useRef(null);
  const DaysCardRef = useRef(null);
  //state
  const [days, setDays] = useState(daysNow);
  const [hours, setHours] = useState(hoursNow);
  const [minutes, setMinutes] = useState(minutesNow);
  const [seconds, setSeconds] = useState(secondsNow);

  useEffect(() => {
    seconds === 0 && setSeconds(59);
    minutes === 0 && setMinutes(59);
    if (seconds > 0) {
      setTimeout(() => {
        setSeconds(seconds - 1);
        SecondsCardRef.current.classList.toggle('rotate');
      }, 1000);
    }
    if (seconds === 0 && minutes > 0) {
      setMinutes(minutes - 1);
      MinutesCardRef.current.classList.toggle('rotate');
    }
  }, [seconds, minutes]);
  useEffect(() => {
    hours === 0 && setHours(23);
    if (minutes === 0 && hours > 0) {
      setHours(hours - 1);
      HoursCardRef.current.classList.toggle('rotate');
    }
  }, [minutes, hours]);
  useEffect(() => {
    days === 14 && setDays(13);
    hours === 0 &&
      setDays(days - 1) &&
      DaysCardRef.current.classList.toggle('rotate');
  }, [hours, days]);
  return (
    <div className="countdown__container">
      <CountDownCard
        label="days"
        number={days}
        cardRef={DaysCardRef}
      />
      <CountDownCard
        label="hours"
        number={hours}
        cardRef={HoursCardRef}
      />
      <CountDownCard
        label="minutes"
        number={minutes}
        cardRef={MinutesCardRef}
      />
      <CountDownCard
        label="seconds"
        number={seconds}
        cardRef={SecondsCardRef}
      />
    </div>
  );
};

export default CountDownTimer;
