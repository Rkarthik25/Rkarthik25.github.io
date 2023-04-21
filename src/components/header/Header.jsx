import React from "react";
import styles from "./Header.module.css";
import user from "../../assets/karthikeyan.jpg";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import ScrollAnimation from "react-animate-on-scroll";
import Karthikeyan_Rajan_Resume from "../Resume/Karthikeyan_Rajan_Resume.pdf"

const Header = () => {
  const handleGithub = () => {
    window.open("https://github.com/Rkarthik25");
  };

  const handleLinkedin = () => {
    window.open("https://www.linkedin.com/in/karthi-keyan-554823153/");
  };

  const handleTwitter = () => {
    window.open("https://twitter.com/Kitty_karrthik");
  };

  const handleResume = () => {
    window.open(
      "https://drive.google.com/file/d/15pmW7udvQgX07tpumzartn2_b-mObErK/view?usp=share_link"
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.content_container}>
        <div className={styles.bg}></div>
        <div className={styles.content}>
          <div className={styles.title}>
            Hi, I am <br />
            <ScrollAnimation
              duration={2}
              animateOnce={true}
              animateIn='flipInY'
            >
              Karthikeyan Rajan
            </ScrollAnimation>
          </div>
          <div className={styles.description}>
            Learner | Full Stack Web Developer
          </div>
          <div>
           <a className={styles.resume_btn} download href={Karthikeyan_Rajan_Resume}  >
            <button onClick={handleResume}>
        Resume
              </button>
        </a>
          </div>
          <div className={styles.connect}>
            <FaGithub onClick={handleGithub} size='1.5em' />
            <FaLinkedin onClick={handleLinkedin} size='1.5em' />
            <FaTwitter onClick={handleTwitter} size='1.5em' />
          </div>
        </div>
      </div>
      <div className={styles.image_container}>
        <div className={styles.image}>
          <img src={user} alt='User Pic' />
        </div>
      </div>
    </div>
  );
};

export { Header };
