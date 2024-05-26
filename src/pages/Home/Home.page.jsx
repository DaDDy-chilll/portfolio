import { LogoLeft, LogoRight } from "@assets";
import { BackgroundLogoContainer } from "./Home.style";
import { HomeCircle } from "@components";
const Home = () => {
  document.body.style.backgroundColor = "var(--primary-color)";
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
