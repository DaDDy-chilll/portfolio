import { LogoLeft, LogoRight } from "@assets";
import { BackgroundLogoContainer } from "./Home.style";
import { HomeCircle,TextCircle } from "@components";
const Home = () => {
  return (
 <>
     <BackgroundLogoContainer>
      <LogoLeft />
      <LogoRight />
    </BackgroundLogoContainer>
   <HomeCircle />
 </>
  );
};

export default Home;
