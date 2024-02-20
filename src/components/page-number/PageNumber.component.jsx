/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { Number } from "./PageNumber.style";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const PageNumber = ({ pageNumber }) => {

  const navigate = useNavigate();
  const windowWidth = window.innerWidth / 2 - 20;

  const prevBtn = () => {
    const path = pageNumber < 1 ?  "/" : checkRoute(pageNumber - 1);
    navigate(path)
  }

  const nextBtn = () => {
    const path = pageNumber > 5 ? "/contact" :  checkRoute(pageNumber + 1);
    navigate(path)
  }
  return (
    <Number $windowwidth={windowWidth}>
      <button onClick={prevBtn}>
        <AiOutlineLeft />
      </button>
      <div className="number">
        0<span>{pageNumber}</span>
      </div>
      <button onClick={nextBtn}>
        <AiOutlineRight />
      </button>
    </Number>
  );
};

const checkRoute = (pageNo) => {
  switch (pageNo) {
    case 1:
      return "/";
    case 2:
      return  "/about";
    case 3:
      return  "/skills";
    case 4:
      return  "/projects";
    case 5:
      return  "/contact";
    default:
      break;
  }
};

export default PageNumber;
