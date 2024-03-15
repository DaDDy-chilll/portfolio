/* eslint-disable react/no-unescaped-entities */
import { InfoContainer } from "./MyInfoContainer.style";
import InfoMenuList from "../info_menu_list/InfoMenuList.compnent";
import InfoDescription from "../info_description/InfoDescription.compnent";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";


const MyInfoContainer = () => {
  let des;
  const { menu1, menu2, menu3, menu4, menu5,menu6 } = useSelector((state) => state.aboutState);
  const myinfo = [
    {
      title: "About Me",
      description: {
        line1:
          "I’m a 22-year-old aspiring full-stack developer with a penchant for turning coffee into code. 🚀",
        line2:
          "I live in Yangon City in Myanmar Country.Since I was 18 years old, I have been learning about networking, and since then I have been interested in IT.",
        line3:
          "Later, while studying, I became more interested in programming and developed a lot of creativity.",
        line4:
          "Also, my dream is to become a professional developer, and I want to work together with people like other developers and gain a lot of experience.",
      },
      isActive:menu1
    },
    {
      title: "What I Bring to the Table",
      description: {
        line1:
          "Backend Wizardry: I thrive on crafting robust server-side solutions. Whether it’s wrangling databases, designing APIs, or optimizing performance, I’m your go-to backend enthusiast.",
        line2:
          "Frontend Sorcery: Beautiful UIs are my playground. I love weaving together pixels, colors, and interactions to create delightful user experiences. 🎨",
        line3:
          "Eternal Learner: Yes, I’m aware there’s a vast ocean of knowledge in the web development realm. But guess what? I’m riding those waves, eager to learn and grow with every line of code.",
      },
      isActive:menu2
      
    },
    {
      title: "Why the Web?",
      description: {
        line1:
          "The web isn’t just about lines of HTML and CSS—it’s where magic happens. It’s where ideas come alive, where businesses thrive, and where creativity dances with logic. And I want to be right in the center of it all.",
      },
      isActive:menu3

    },
    {
      title: "My Journey So Far",
      description: {
        line1:
          "I’ve tinkered with code since my early days, and it ignited a spark within me.",
        line2:
          "I’ve worked on projects that span from e-commerce platforms to community forums, each teaching me valuable lessons.",
        line3:
          "I’ve collaborated with fellow developers, designers, and dreamers, because teamwork makes the dream work.",
      },
      isActive:menu4

    },
    {
      title: "My North Star",
      description: {
        line1:
          "I envision a future where my code powers seamless experiences, where users smile at intuitive interfaces, and where my passion fuels innovation. 🌟",
      },
      isActive:menu5

    },
    {
      title: "Let's Connect",
      description: {
        line1: "You’ll find me sipping coffee, headphones on, lost in code.",
        line2:
          "Reach out—I’d love to chat about tech, share ideas, or embark on new adventures.",
        line3:
          "Remember, the web isn’t just about pixels and bytes; it’s about impact. Let’s build something remarkable together!",
      },
      isActive:menu6

    },
  ];

  if(menu1){
    des=myinfo[0].description
  }else if(menu2){
    des=myinfo[1].description

  }else if(menu3){
    des=myinfo[2].description

  }else if(menu4){
    des=myinfo[3].description

  }else if(menu5){
    des=myinfo[4].description

  }else if(menu6){
    des=myinfo[5].description

  }else{
    des=null
  }


  const infoAni = {
    hidden:{
      width:0,
      height:'5vh',
      transition:{duration:.1}
    },
    visible:{
      width: '82%',
      height:'67vh',
      transition:{delay:1,duration:.5}
    },
  }

  const headerAin = {
    hidden:{
      y:-300,
      opacity:0
    },
    visible:{
      y:0,
      opacity:1,
      transition:{duration:.5,delay:1}
    }
  }

  return (
    <InfoContainer>
      <motion.h1 variants={headerAin} initial='hidden' animate='visible'>Hello, I’m Paing Sett Kyaw (Call me Paing)!</motion.h1>
      <motion.div className="info" key='info-container' variants={infoAni} initial='hidden' animate='visible' exit='hidden'>
        <InfoDescription  line={des} />
        <div className="profile_img">
          <img src="/src/assets/img/profile-photo.png" height="100%" />
        </div>
      </motion.div>
      <div className="info_menu">
        {myinfo.map((info, i) => <InfoMenuList key={i} title={info.title} i={i} active={info.isActive} />)}
      </div>
    </InfoContainer>
  );
};

export default MyInfoContainer;
