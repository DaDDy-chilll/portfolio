import { useState } from "react";
import { Wrapper } from "./Time.style";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const Time = () => {
  const { pageTitle } = useSelector((state) => state.pageInfo);

  const [time, setTime] = useState("00:00");
  setInterval(() => TimeChnage(), 1000);
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

  return (
    <Wrapper
      as={motion.div}
      initial={{ x: "500px" }}
      animate={{ x: 0 }}
      transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
      $name={pageTitle}
      key="Time"
    >{`${time}`}</Wrapper>
  );
};

export default Time;
