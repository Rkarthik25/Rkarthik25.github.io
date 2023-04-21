import React from "react";
import styles from "./Navbar.module.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Karthikeyan_Rajan_Resume from "../Resume/Karthikeyan_Rajan_Resume.pdf"

const NavLinks = ({ setVerticalOpen, handleSectionScroll }) => {
  return (
    <>
    
      <div
        className={styles.nav_links}
        onClick={() => {
          setVerticalOpen(false);
          handleSectionScroll("header");
        }}
      >
        Home
      </div>
      <div
        className={styles.nav_links}
        onClick={() => {
          setVerticalOpen(false);
          handleSectionScroll("about");
        }}
      >
        About
      </div>
    
      <div
        className={styles.nav_links}
        onClick={() => {
          setVerticalOpen(false);
          handleSectionScroll("skills");
        }}
      >
        Skills
      </div>
      <div
        className={styles.nav_links}
        onClick={() => {
          setVerticalOpen(false);
          handleSectionScroll("projects");
        }}
      >
        Projects
      </div>
      <div
        className={styles.nav_links}
        onClick={() => {
          setVerticalOpen(false);
          handleSectionScroll("contact");
        }}
      >
        Contact
      </div>
    
      <a className={styles.resume_btn} download href={Karthikeyan_Rajan_Resume}  >
      <div
        className={styles.nav_links}
        onClick={() => {
          window.open(
            "https://drive.google.com/file/d/15pmW7udvQgX07tpumzartn2_b-mObErK/view?usp=share_link"
            );
            handleSectionScroll("resume");
            setVerticalOpen(false);
          }}
          >
        Resume
      </div>
        </a>
      
          
    </>
  );
};

const Navbar = ({ handleSectionScroll }) => {
  const [verticalOpen, setVerticalOpen] = React.useState(false);

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.nav_container}>
        <div
          className={styles.logo}
          onClick={() => {
            setVerticalOpen(false);
            handleScroll();
          }}
        >
          KR
        </div>
        <div className={styles.grow}></div>
        <div className={styles.horizontal_nav}>
          <NavLinks
            setVerticalOpen={setVerticalOpen}
            handleSectionScroll={handleSectionScroll}
          />
        </div>
        <div
          className={styles.vertical_nav_icon}
          onClick={() => {
            setVerticalOpen(!verticalOpen);
          }}
        >
          {!verticalOpen ? (
            <AiOutlineMenu size='1.5em' />
          ) : (
            <AiOutlineClose size='1.5em' />
          )}
        </div>
      </div>
      <div
        className={styles.drop_down_container}
        style={{
          height: verticalOpen ? "350px" : "0px",
        }}
      >
        <NavLinks
          setVerticalOpen={setVerticalOpen}
          handleSectionScroll={handleSectionScroll}
        />
      </div>
    </div>
  );
};

export { Navbar };
