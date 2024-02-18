import { useState } from "react";
import { Wrapper } from "./Time.style";

const Time = () => {
  const [time, setTime] = useState("00:00");
  const TimeChnage = () => {
    let hr = new Date().getHours();
    let mins = new Date().getMinutes();
    let newformat = hr >= 12 ? "PM" : "AM";
    hr = hr % 12;
    if (mins < 10) mins = `0${mins}`;
    if (hr < 10) hr = `0${hr}`;
    const time = `${hr}:${mins} ${newformat}`;
    setTime(time);
  };

  setInterval(() => TimeChnage(), 1000);

  return <Wrapper>{`${time}`}</Wrapper>;
};

export default Time;
