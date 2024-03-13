/* eslint-disable react/prop-types */
import Description from "./InfoDescription.style";

const InfoDescription = ({line}) => {
    const {line1,line2,line3,line4} = line
  return (
    <Description>
      {line1 && (<p>{line1}</p>)}
      {line2 && (<p>{line2}</p>)}
      {line3 && (<p>{line3}</p>)}
      {line4 && (<p>{line4}</p>)}
    </Description>
  );
};

export default InfoDescription;
