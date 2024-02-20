/* eslint-disable react/prop-types */
import { Number } from "./PageNumber.style"


const PageNumber = ({pageNumber}) => {
    const windowWidth = (window.innerWidth / 2) - 20;
  return (
    <Number $windowwidth={windowWidth}>{`0${pageNumber}`}</Number>
  )
}

export default PageNumber