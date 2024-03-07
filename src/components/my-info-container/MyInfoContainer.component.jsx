/* eslint-disable react/no-unescaped-entities */
import { InfoContainer } from "./MyInfoContainer.style"


const MyInfoContainer = () => {
  return (
    <InfoContainer>
        <h1>Hello, I’m Paing Sett Kyaw (Call me Paing)!</h1>
        <div className="info">
          <div className="info_data">
          <p> I’m a 22-year-old aspiring full-stack developer with a penchant
              for turning coffee into code. 🚀</p>
              <p>I live in Yangon City in Myanmar Country.</p>
              <p>Since I was 18 years old, I have been learning about
              networking, and since then I have been interested in IT. Later,
              while studying, I became more interested in programming and
              developed a lot of creativity.</p>
            <p>
            Also, my dream is to become a professional developer, and I want
              to work together with people like other developers and gain a lot
              of experience.
              
            </p>
          </div>
          <div className="profile_img">
            <img src="/src/assets/img/profile-photo.png" height="100%" />
          </div>
        </div>
        <div className="info_menu">
            <div className="info_list">About Me</div>
            <div className="info_list">What I Bring to the Table</div>
            <div className="info_list">Why the Web?</div>
            <div className="info_list">My Journey So Far</div>
            <div className="info_list">My North Star</div>
            <div className="info_list">Let's Connect</div>
        </div>
      </InfoContainer>
  )
}

export default MyInfoContainer;