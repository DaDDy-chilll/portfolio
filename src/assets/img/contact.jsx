/* eslint-disable react/prop-types */

import { motion } from "framer-motion";
import { css, styled } from "styled-components";
const windowHeight = window.innerHeight;
export const ContactCenter = () => {
  return (
    <motion.svg
      width="812"
      height="888"
      viewBox="0 0 812 888"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{scale:0,rotateY:'360deg'}}
      animate={{scale:1,rotateY:0,transition:{duration:.8,type:'spring',stiffness:100}}}
      exit={{scale:0,transition:{duration:.5}}}
    >
      <path
        d="M406 0L757.606 222V666L406 888L54.3937 666V222L406 0Z"
        fill="#272727"
      />
      <path
        d="M54.5 292L101.698 321.75V381.25L54.5 411L7.30162 381.25V321.75L54.5 292Z"
        fill="#272727"
      />
      <path
        d="M54.5 477L101.698 506.75V566.25L54.5 596L7.30162 566.25V506.75L54.5 477Z"
        fill="#272727"
      />
      <path
        d="M757.5 477L804.698 506.75V566.25L757.5 596L710.302 566.25V506.75L757.5 477Z"
        fill="#272727"
      />
      <path
        d="M757.5 292L804.698 321.75V381.25L757.5 411L710.302 381.25V321.75L757.5 292Z"
        fill="#272727"
      />
    </motion.svg>
  );
};

export const ContactSide = ({ dir }) => {
  return (
    <Side
      $dir={dir}
      width="209"
      height="491"
      viewBox="0 0 209 491"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M103.5 93L150.698 122.75V182.25L103.5 212L56.3016 182.25V122.75L103.5 93Z"
        fill="black"
        fillOpacity="0.8"
        initial={dir === 'right' ? {x:200,opacity:0}:{x:-300,opacity:0}}
        animate={{x:0,opacity:1,transition:{delay:0.1,duration:.5,type:"tween"}}}
      />
      <motion.path
        d="M103.5 279L150.698 308.75V368.25L103.5 398L56.3016 368.25V308.75L103.5 279Z"
        fill="black"
        fillOpacity="0.8"
        initial={dir === 'right' ? {x:200,opacity:0}:{x:-300,opacity:0}}
        animate={{x:0,opacity:1,transition:{delay:0.2,duration:.5,type:"tween"}}}
      />
      <motion.path
        d="M154.5 0L201.698 29.75V89.25L154.5 119L107.302 89.25V29.75L154.5 0Z"
        fill="black"
        fillOpacity="0.8"
        initial={dir === 'right' ? {x:200,opacity:0}:{x:-300,opacity:0}}
        animate={{x:0,opacity:1,transition:{delay:0.3,duration:.5,type:"tween"}}}
      />
      <motion.path
        d="M154.5 186L201.698 215.75V275.25L154.5 305L107.302 275.25V215.75L154.5 186Z"
        fill="black"
        fillOpacity="0.8"
        initial={dir === 'right' ? {x:200,opacity:0}:{x:-300,opacity:0}}
        animate={{x:0,opacity:1,transition:{delay:0.4,duration:.5,type:"tween"}}}
      />
      <motion.path
        d="M154.5 372L201.698 401.75V461.25L154.5 491L107.302 461.25V401.75L154.5 372Z"
        fill="black"
        fillOpacity="0.8"
        initial={dir === 'right' ? {x:200,opacity:0}:{x:-300,opacity:0}}
        animate={{x:0,opacity:1,transition:{delay:0.5,duration:.5,type:"tween"}}}
      />
      <motion.path
        d="M54.5 0L101.698 29.75V89.25L54.5 119L7.30162 89.25V29.75L54.5 0Z"
        fill="black"
        fillOpacity="0.8"
        initial={dir === 'right' ? {x:200,opacity:0}:{x:-300,opacity:0}}
        animate={{x:0,opacity:1,transition:{delay:0.6,duration:.5,type:"tween"}}}
      />
      <motion.path
        d="M54.5 186L101.698 215.75V275.25L54.5 305L7.30162 275.25V215.75L54.5 186Z"
        fill="black"
        fillOpacity="0.8"
        initial={dir === 'right' ? {x:200,opacity:0}:{x:-300,opacity:0}}
        animate={{x:0,opacity:1,transition:{delay:0.7,duration:.5,type:"tween"}}}
      />
      <motion.path
        d="M54.5 372L101.698 401.75V461.25L54.5 491L7.30162 461.25V401.75L54.5 372Z"
        fill="black"
        fillOpacity="0.8"
        initial={dir === 'right' ? {x:200,opacity:0}:{x:-300,opacity:0}}
        animate={{x:0,opacity:1,transition:{delay:0.8,duration:.5,type:"tween"}}}
      />
    </Side>
  );
};

const Side = styled.svg`
  position: absolute;
  top: ${(windowHeight - 491) / 2}px;
  ${(props) => {
    if (props.$dir === "right") {
      return css`
        right: 9%;
      `;
    } else {
      return css`
        left: 9%;
      `;
    }
  }}
`;

export const ContactSideSmall = ({ dir }) => {
  return (
    <SideSmall
      $dir={dir}
      width="80"
      height="270"
      viewBox="0 0 80 270"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M38.5 0L71.842 21V63L38.5 84L5.15802 63V21L38.5 0Z"
        fill="black"
        fillOpacity="0.6"
        initial={dir === 'right' ? {x:200,opacity:0}:{x:-300,opacity:0}}
        animate={{x:0,opacity:1,transition:{duration:.5,delay:.6}}}
      />
      <motion.path
        d="M41.5 186L74.842 207V249L41.5 270L8.15802 249V207L41.5 186Z"
        fill="black"
        fillOpacity="0.6"
        initial={dir === 'right' ? {x:200,opacity:0}:{x:-300,opacity:0}}
        animate={{x:0,opacity:1,transition:{duration:.5,delay:.5}}}
      />
    </SideSmall>
  );
};

const SideSmall = styled.svg`
  position: absolute;
  top: ${(windowHeight - 270) / 2}px;
  ${(props) => {
    if (props.$dir === "right") {
      return css`
        right: 7%;
      `;
    } else {
      return css`
        left: 7%;
      `;
    }
  }}
`;

export const ContactSideTinyRight = ({ dir }) => {
  return (
    <SideTiny
      $dir={dir}
      width="99"
      height="471"
      viewBox="0 0 99 471"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M26.5 213L5.28238 226.25V252.75L26.5 266L47.7176 252.75V226.25L26.5 213Z"
        fill="black"
        fillOpacity="0.4"
        initial={{x:200,opacity:0}}
        animate={{x:0,opacity:1,transition:{duration:.5,delay:1}}}
      />
      <motion.path
        d="M50.5 171L29.2824 184.25V210.75L50.5 224L71.7176 210.75V184.25L50.5 171Z"
        fill="black"
        fillOpacity="0.4"
        initial={{x:200,opacity:0}}
        animate={{x:0,opacity:1,transition:{duration:.5,delay:1.1}}}
      />
      <motion.path
        d="M73.5 129L52.2824 142.25V168.75L73.5 182L94.7176 168.75V142.25L73.5 129Z"
        fill="black"
        fillOpacity="0.4"
        initial={{x:200,opacity:0}}
        animate={{x:0,opacity:1,transition:{duration:.5,delay:.9}}}
      />
      <motion.path
        d="M56.5 84L35.2824 97.25V123.75L56.5 137L77.7176 123.75V97.25L56.5 84Z"
        fill="black"
        fillOpacity="0.4"
        initial={{x:200,opacity:0}}
        animate={{x:0,opacity:1,transition:{duration:.5,delay:.8}}}
      />
      <motion.path
        d="M31.5 44L10.2824 57.25V83.75L31.5 97L52.7176 83.75V57.25L31.5 44Z"
        fill="black"
        fillOpacity="0.4"
        initial={{x:200,opacity:0}}
        animate={{x:0,opacity:1,transition:{duration:.5,delay:1.2}}}
      />
      <motion.path
        d="M55.5 0L34.2824 13.25V39.75L55.5 53L76.7176 39.75V13.25L55.5 0Z"
        fill="black"
        fillOpacity="0.4"
        initial={{x:200,opacity:0}}
        animate={{x:0,opacity:1,transition:{duration:.5,delay:.7}}}
      />
      <motion.path
        d="M50.5 255L29.2824 268.25V294.75L50.5 308L71.7176 294.75V268.25L50.5 255Z"
        fill="black"
        fillOpacity="0.4"
        initial={{x:200,opacity:0}}
        animate={{x:0,opacity:1,transition:{duration:.5,delay:1.2}}}
      />
      <motion.path
        d="M74.5 297L53.2824 310.25V336.75L74.5 350L95.7176 336.75V310.25L74.5 297Z"
        fill="black"
        fillOpacity="0.4"
        initial={{x:200,opacity:0}}
        animate={{x:0,opacity:1,transition:{duration:.5,delay:.8}}}
      />
      <motion.path
        d="M49.5 339L28.2824 352.25V378.75L49.5 392L70.7176 378.75V352.25L49.5 339Z"
        fill="black"
        fillOpacity="0.4"
        initial={{x:200,opacity:0}}
        animate={{x:0,opacity:1,transition:{duration:.5,delay:.9}}}
      />
      <motion.path
        d="M24.5 379L3.28238 392.25V418.75L24.5 432L45.7176 418.75V392.25L24.5 379Z"
        fill="black"
        fillOpacity="0.4"
        initial={{x:200,opacity:0}}
        animate={{x:0,opacity:1,transition:{duration:.5,delay:1.1}}}
      />
      <motion.path
        d="M50.5 418L29.2824 431.25V457.75L50.5 471L71.7176 457.75V431.25L50.5 418Z"
        fill="black"
        fillOpacity="0.4"
        initial={{x:200,opacity:0}}
        animate={{x:0,opacity:1,transition:{duration:.5,delay:1}}}
      />
    </SideTiny>
  );
};

export const ContactSideTinyLeft = ({ dir }) => {
  return (
    <SideTiny
      $dir={dir}
      width="99"
      height="471"
      viewBox="0 0 99 471"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M72.5 213L93.7176 226.25V252.75L72.5 266L51.2824 252.75V226.25L72.5 213Z"
        fill="black"
        fillOpacity="0.4"
         initial={{x:-200,opacity:0}}
         animate={{x:0,opacity:1,transition:{duration:.5,delay:1}}}

      />
      <motion.path
        d="M48.5 171L69.7176 184.25V210.75L48.5 224L27.2824 210.75V184.25L48.5 171Z"
        fill="black"
        fillOpacity="0.4"
         initial={{x:-200,opacity:0}}
         animate={{x:0,opacity:1,transition:{duration:.5,delay:1.1}}}
      />
      <motion.path
        d="M25.5 129L46.7176 142.25V168.75L25.5 182L4.28238 168.75V142.25L25.5 129Z"
        fill="black"
        fillOpacity="0.4"
         initial={{x:-200,opacity:0}}
         animate={{x:0,opacity:1,transition:{duration:.5,delay:.9}}}
      />
      <motion.path
        d="M42.5 84L63.7176 97.25V123.75L42.5 137L21.2824 123.75V97.25L42.5 84Z"
        fill="black"
        fillOpacity="0.4"
         initial={{x:-200,opacity:0}}
         animate={{x:0,opacity:1,transition:{duration:.5,delay:.8}}}
      />
      <motion.path
        d="M67.5 44L88.7176 57.25V83.75L67.5 97L46.2824 83.75V57.25L67.5 44Z"
        fill="black"
        fillOpacity="0.4"
         initial={{x:-200,opacity:0}}
         animate={{x:0,opacity:1,transition:{duration:.5,delay:1.2}}}
      />
      <motion.path
        d="M43.5 0L64.7176 13.25V39.75L43.5 53L22.2824 39.75V13.25L43.5 0Z"
        fill="black"
        fillOpacity="0.4"
         initial={{x:-200,opacity:0}}
         animate={{x:0,opacity:1,transition:{duration:.5,delay:.7}}}
      />
      <motion.path
        d="M48.5 255L69.7176 268.25V294.75L48.5 308L27.2824 294.75V268.25L48.5 255Z"
        fill="black"
        fillOpacity="0.4"
         initial={{x:-200,opacity:0}}
         animate={{x:0,opacity:1,transition:{duration:.5,delay:1.2}}}
      />
      <motion.path
        d="M24.5 297L45.7176 310.25V336.75L24.5 350L3.28238 336.75V310.25L24.5 297Z"
        fill="black"
        fillOpacity="0.4"
         initial={{x:-200,opacity:0}}
         animate={{x:0,opacity:1,transition:{duration:.5,delay:.8}}}

      />
      <motion.path
        d="M49.5 339L70.7176 352.25V378.75L49.5 392L28.2824 378.75V352.25L49.5 339Z"
        fill="black"
        fillOpacity="0.4"
         initial={{x:-200,opacity:0}}
         animate={{x:0,opacity:1,transition:{duration:.5,delay:.9}}}
      />
      <motion.path
        d="M74.5 379L95.7176 392.25V418.75L74.5 432L53.2824 418.75V392.25L74.5 379Z"
        fill="black"
        fillOpacity="0.4"
         initial={{x:-200,opacity:0}}
         animate={{x:0,opacity:1,transition:{duration:.5,delay:1.1}}}
      />
      <motion.path
        d="M48.5 418L69.7176 431.25V457.75L48.5 471L27.2824 457.75V431.25L48.5 418Z"
        fill="black"
        fillOpacity="0.4"
         initial={{x:-200,opacity:0}}
         animate={{x:0,opacity:1,transition:{duration:.5,delay:1}}}
      />
    </SideTiny>
  );
};

const SideTiny = styled.svg`
  position: absolute;
  top: ${(windowHeight - 471) / 2}px;
  ${(props) => {
    if (props.$dir === "right") {
      return css`
        right: 2.5%;
      `;
    } else {
      return css`
        left: 2.5%;
      `;
    }
  }}
`;

export const ContactSideTinySmallRight = ({ dir }) => {
  return (
    <SideTinySmall
    as={motion.svg}
      $dir={dir}
      width="81"
      height="481"
      viewBox="0 0 81 481"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{x:300,opacity:0}}
      animate={{x:0,opacity:1,transition:{delay:1,duration:.5}}}
    >
      <path
        d="M23.5 48L13.5407 54.25V66.75L23.5 73L33.4593 66.75V54.25L23.5 48Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M44.5 0L34.5407 6.25V18.75L44.5 25L54.4593 18.75V6.25L44.5 0Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M43.5 76L33.5407 82.25V94.75L43.5 101L53.4593 94.75V82.25L43.5 76Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M59.5 111L49.5407 117.25V129.75L59.5 136L69.4593 129.75V117.25L59.5 111Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M57.5 56L47.5407 62.25V74.75L57.5 81L67.4593 74.75V62.25L57.5 56Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M46 33L38.2058 38V48L46 53L53.7942 48V38L46 33Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M66 22L58.2058 27V37L66 42L73.7942 37V27L66 22Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M66.5 81L56.5407 87.25V99.75L66.5 106L76.4593 99.75V87.25L66.5 81Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M69.5 136L59.5407 142.25V154.75L69.5 161L79.4593 154.75V142.25L69.5 136Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M69.5 164L59.5407 170.25V182.75L69.5 189L79.4593 182.75V170.25L69.5 164Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M33.5 361L23.5407 367.25V379.75L33.5 386L43.4593 379.75V367.25L33.5 361Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M11.5 389L1.54071 395.25V407.75L11.5 414L21.4593 407.75V395.25L11.5 389Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M55.5 456L45.5407 462.25V474.75L55.5 481L65.4593 474.75V462.25L55.5 456Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M45.5 169L35.5407 175.25V187.75L45.5 194L55.4593 187.75V175.25L45.5 169Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M39.5 195L29.5407 201.25V213.75L39.5 220L49.4593 213.75V201.25L39.5 195Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M66.5 192L56.5407 198.25V210.75L66.5 217L76.4593 210.75V198.25L66.5 192Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M54.5 389L44.5407 395.25V407.75L54.5 414L64.4593 407.75V395.25L54.5 389Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M34.5 445L24.5407 451.25V463.75L34.5 470L44.4593 463.75V451.25L34.5 445Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M66.5 418L56.5407 424.25V436.75L66.5 443L76.4593 436.75V424.25L66.5 418Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M62.5 222L52.5407 228.25V240.75L62.5 247L72.4593 240.75V228.25L62.5 222Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M36.5 254L26.5407 260.25V272.75L36.5 279L46.4593 272.75V260.25L36.5 254Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M40 230L33.0718 234.25V242.75L40 247L46.9282 242.75V234.25L40 230Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M20 222L13.0718 226.25V234.75L20 239L26.9282 234.75V226.25L20 222Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M63 254L56.0718 258.25V266.75L63 271L69.9282 266.75V258.25L63 254Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M67 279L60.0718 283.25V291.75L67 296L73.9282 291.75V283.25L67 279Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M63 306L56.0718 310.25V318.75L63 323L69.9282 318.75V310.25L63 306Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M53 330L46.0718 334.25V342.75L53 347L59.9282 342.75V334.25L53 330Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M31 387L24.0718 391.25V399.75L31 404L37.9282 399.75V391.25L31 387Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M32 405L25.0718 409.25V417.75L32 422L38.9282 417.75V409.25L32 405Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M54 438L47.0718 442.25V450.75L54 455L60.9282 450.75V442.25L54 438Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M73 449L66.0718 453.25V461.75L73 466L79.9282 461.75V453.25L73 449Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M37.3358 343.007L30.2451 346.979L29.9092 355.473L36.664 359.993L43.7548 356.02L44.0907 347.527L37.3358 343.007Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M54.0062 371.316L46.9155 375.289L46.5796 383.782L53.3344 388.303L60.4252 384.33L60.7611 375.837L54.0062 371.316Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M41.0062 422.316L33.9155 426.289L33.5796 434.782L40.3344 439.303L47.4252 435.33L47.7611 426.837L41.0062 422.316Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M71.5 355L66.7369 358V364L71.5 367L76.2631 364V358L71.5 355Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M71.5 379L66.7369 382V388L71.5 391L76.2631 388V382L71.5 379Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M71.5 403L66.7369 406V412L71.5 415L76.2631 412V406L71.5 403Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M64.5 343L59.7369 346V352L64.5 355L69.2631 352V346L64.5 343Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M48.5 354L43.7369 357V363L48.5 366L53.2631 363V357L48.5 354Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M53 292L46.0718 296.25V304.75L53 309L59.9282 304.75V296.25L53 292Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M69 323L62.0718 327.25V335.75L69 340L75.9282 335.75V327.25L69 323Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M40 279L33.0718 283.25V291.75L40 296L46.9282 291.75V283.25L40 279Z"
        fill="black"
        fillOpacity="0.2"
      />
    </SideTinySmall>
  );
};

export const ContactSideTinySmallLeft = ({ dir }) => {
  return (
    <SideTinySmall
      $dir={dir}
      as={motion.svg}
      width="81"
      height="481"
      viewBox="0 0 81 481"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{x:-300,opacity:0}}
      animate={{x:0,opacity:1,transition:{delay:1,duration:.5}}}
    >
      <path
        d="M57.5 48L67.4593 54.25V66.75L57.5 73L47.5407 66.75V54.25L57.5 48Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M36.5 0L46.4593 6.25V18.75L36.5 25L26.5407 18.75V6.25L36.5 0Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M37.5 76L47.4593 82.25V94.75L37.5 101L27.5407 94.75V82.25L37.5 76Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M21.5 111L31.4593 117.25V129.75L21.5 136L11.5407 129.75V117.25L21.5 111Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M23.5 56L33.4593 62.25V74.75L23.5 81L13.5407 74.75V62.25L23.5 56Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M35 33L42.7942 38V48L35 53L27.2058 48V38L35 33Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M15 22L22.7942 27V37L15 42L7.20577 37V27L15 22Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M14.5 81L24.4593 87.25V99.75L14.5 106L4.54071 99.75V87.25L14.5 81Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M11.5 136L21.4593 142.25V154.75L11.5 161L1.54071 154.75V142.25L11.5 136Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M11.5 164L21.4593 170.25V182.75L11.5 189L1.54071 182.75V170.25L11.5 164Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M47.5 361L57.4593 367.25V379.75L47.5 386L37.5407 379.75V367.25L47.5 361Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M69.5 389L79.4593 395.25V407.75L69.5 414L59.5407 407.75V395.25L69.5 389Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M25.5 456L35.4593 462.25V474.75L25.5 481L15.5407 474.75V462.25L25.5 456Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M35.5 169L45.4593 175.25V187.75L35.5 194L25.5407 187.75V175.25L35.5 169Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M41.5 195L51.4593 201.25V213.75L41.5 220L31.5407 213.75V201.25L41.5 195Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M14.5 192L24.4593 198.25V210.75L14.5 217L4.54071 210.75V198.25L14.5 192Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M26.5 389L36.4593 395.25V407.75L26.5 414L16.5407 407.75V395.25L26.5 389Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M46.5 445L56.4593 451.25V463.75L46.5 470L36.5407 463.75V451.25L46.5 445Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M14.5 418L24.4593 424.25V436.75L14.5 443L4.54071 436.75V424.25L14.5 418Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M18.5 222L28.4593 228.25V240.75L18.5 247L8.54071 240.75V228.25L18.5 222Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M44.5 254L54.4593 260.25V272.75L44.5 279L34.5407 272.75V260.25L44.5 254Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M41 230L47.9282 234.25V242.75L41 247L34.0718 242.75V234.25L41 230Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M61 222L67.9282 226.25V234.75L61 239L54.0718 234.75V226.25L61 222Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M18 254L24.9282 258.25V266.75L18 271L11.0718 266.75V258.25L18 254Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M14 279L20.9282 283.25V291.75L14 296L7.0718 291.75V283.25L14 279Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M18 306L24.9282 310.25V318.75L18 323L11.0718 318.75V310.25L18 306Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M28 330L34.9282 334.25V342.75L28 347L21.0718 342.75V334.25L28 330Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M50 387L56.9282 391.25V399.75L50 404L43.0718 399.75V391.25L50 387Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M49 405L55.9282 409.25V417.75L49 422L42.0718 417.75V409.25L49 405Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M27 438L33.9282 442.25V450.75L27 455L20.0718 450.75V442.25L27 438Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M8 449L14.9282 453.25V461.75L8 466L1.0718 461.75V453.25L8 449Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M43.6642 343.007L50.7549 346.979L51.0908 355.473L44.336 359.993L37.2452 356.02L36.9093 347.527L43.6642 343.007Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M26.9938 371.316L34.0845 375.289L34.4204 383.782L27.6656 388.303L20.5748 384.33L20.2389 375.837L26.9938 371.316Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M39.9938 422.316L47.0845 426.289L47.4204 434.782L40.6656 439.303L33.5748 435.33L33.2389 426.837L39.9938 422.316Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M9.5 355L14.2631 358V364L9.5 367L4.73686 364V358L9.5 355Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M9.5 379L14.2631 382V388L9.5 391L4.73686 388V382L9.5 379Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M9.5 403L14.2631 406V412L9.5 415L4.73686 412V406L9.5 403Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M16.5 343L21.2631 346V352L16.5 355L11.7369 352V346L16.5 343Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M32.5 354L37.2631 357V363L32.5 366L27.7369 363V357L32.5 354Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M28 292L34.9282 296.25V304.75L28 309L21.0718 304.75V296.25L28 292Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M12 323L18.9282 327.25V335.75L12 340L5.0718 335.75V327.25L12 323Z"
        fill="black"
        fillOpacity="0.2"
      />
      <path
        d="M41 279L47.9282 283.25V291.75L41 296L34.0718 291.75V283.25L41 279Z"
        fill="black"
        fillOpacity="0.2"
      />
    </SideTinySmall>
  );
};

const SideTinySmall = styled.svg`
  position: absolute;
  top: ${(windowHeight - 460) / 2}px;
  ${(props) => {
    if (props.$dir === "right") {
      return css`
        right: 0.1%;
      `;
    } else {
      return css`
        left: 0.1%;
      `;
    }
  }}
`;
