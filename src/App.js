import React from "react";
import "./App.css";
import { About } from "./components/about/About";
import { Skills } from "./components/skills/Skills";
import { Projects } from "./components/projects/Projects";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { ScrollTopBtn } from "./components/scroll_top_btn/ScrollTopBtn";
import ScrollAnimation from "react-animate-on-scroll";
import { Navbar } from "./components/navbar/Navbar";
import { ContactForm } from "./components/contact_form/ContactForm";
import GitHub from "./components/github/gitCalendar";
import GithubStats from "./components/Github Stats/githubStats";
import { Tools } from "./components/tools/tools";

const App = () => {
  let header_section=React.useRef(null);
  let about_section = React.useRef(null);
  let skills_section = React.useRef(null);
  let project_section = React.useRef(null);
  let contact_section = React.useRef(null);
  let resume_section = React.useRef(null);
  let tools_section=React.useRef(null);


  const handleSectionScroll = (arg) => {
    let scroll_obj = {
      left: 0,
      behavior: "smooth",
    };
    if (arg === "about") {
      scroll_obj.top = about_section.current.offsetTop - 70;
      window.scrollTo(scroll_obj);
    }else if (arg === "header") {
      scroll_obj.top = header_section.current.offsetTop - 70;
      window.scrollTo(scroll_obj);
    } else if (arg === "skills") {
      scroll_obj.top = skills_section.current.offsetTop - 70;
      window.scrollTo(scroll_obj);
    } else if (arg === "tools") {
      scroll_obj.top = tools_section.current.offsetTop - 70;
      window.scrollTo(scroll_obj);
    }else if (arg === "projects") {
      scroll_obj.top = project_section.current.offsetTop - 70;
      window.scrollTo(scroll_obj);
    } else if (arg === "contact") {
      scroll_obj.top = contact_section.current.offsetTop - 70;
      window.scrollTo(scroll_obj);
    }else if (arg === "resume") {
      scroll_obj.top = resume_section.current.offsetTop - 70;
      window.scrollTo(scroll_obj);
    }
  };

  return (
    <div className='container'>
      <Navbar handleSectionScroll={handleSectionScroll} />
            
      <ScrollAnimation duration={2} animateOnce={true} animateIn='fadeIn'>
        <div ref={header_section}>
          <Header />
        </div>
      </ScrollAnimation>
      <ScrollAnimation duration={2} animateOnce={true} animateIn='fadeIn'>
        <div ref={about_section}>
          <About />
        </div>
      </ScrollAnimation>
      <ScrollAnimation duration={2} animateOnce={true} animateIn='fadeIn'>
        <div ref={skills_section}>
          <Skills />
          <Tools/>
        </div>
      </ScrollAnimation>
      <div >
          <GitHub/>
        </div>
        <div >
          <GithubStats/>
        </div>
      <ScrollAnimation duration={2} animateOnce={true} animateIn='fadeIn'>
        <div ref={project_section}>
          <Projects />
        </div>
      </ScrollAnimation>
      <ScrollAnimation duration={2} animateOnce={true} animateIn='fadeIn'>
        <div ref={contact_section}>
          <ContactForm />
        </div>
      </ScrollAnimation>

      <ScrollTopBtn />
    </div>
  );
};

export default App;
