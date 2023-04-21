import React from "react";
import styles from "./Projects.module.css";
import { ProjectCard } from "../project_card/ProjectCard";
import * as images from "../../assets/project_images";

const Projects = () => {
  const {
    bewakoof1,
    bewakoof2,
    bewakoof3,
    bewakoof4,
    bestbuy1,
    bestbuy2,
    bestbuy3,
    bestbuy4,
    bestbuy5,
    apple1,
    apple2,
    apple3,
    apple4,
    purplle1,
    purplle2,
    purplle3,
    purplle4
  } = images;

  let data = [
    {
      title: "BEST_BUY CLONE",
      image: [
        { src: bestbuy1, alt: "Best-Buy-SS" },
        { src: bestbuy2, alt: "Best-Buy-SS" },
        { src: bestbuy3, alt: "Best-Buy-SS" },
        { src: bestbuy4, alt: "Best-Buy-SS" },
        { src: bestbuy5, alt: "Best-Buy-SS" },
      ],
      about:
        "Best-Buy is an E-commerce website where users can find Electronic Goods",
      tech_stack: [
        "HTML",
        "CSS",
        "Java Script",

      ],
      links: [
        "https://github.com/Momin-Mohammad/bestbuy-clone",
        "https://spectacular-gecko-bb7b9f.netlify.app/",
      ],
      // badge: "Live Project",
    },
    {
      title: "BEWAKOOF CLONE",
      image: [
        { src: bewakoof1, alt: "Bewakoof Clone SS" },
        { src: bewakoof2, alt: "Bewakoof Clone SS" },
        { src: bewakoof3, alt: "Bewakoof Clone SS" },
        { src: bewakoof4, alt: "Bewakoof Clone SS" },
      ],
      about: "Beewakoof is an E-commerce website where users can find Latest collection of man,women and kids",
      tech_stack: [
        "HTML",
        "CSS",
        "Java Script",
      ],
      links: [
        "https://github.com/Rkarthik25/Bewakoof-clone",
        "https://stellar-sundae-0a820a.netlify.app/",
      ],
    },
    {
      title: "Purplle_Clone",
      image: [
        { src: purplle1, alt: "Purplle-SS" },
        { src: purplle2, alt: "Purplle-SS" },
        { src: purplle3, alt: "Purplle-SS" },
        { src: purplle4, alt: "Purplle-SS" },
      
      ],
      about:
        "Purplle.com, an online platform to buy beauty and cosmetic products.",
      tech_stack: [
        "React",
        "Redux",
        "HTML",
        "CSS",
        "Java Script",
        "Chakra UI"

      ],
      links: [
        "https://github.com/Ashmit-1131/Purplle_Clone",
        "https://purplle-ashmit-1131.vercel.app/",
      ],
     
    },
    {
      title: "Apple Clone",
      image: [
        { src: apple1, alt: "Apple-SS" },
        { src: apple2, alt: "Apple-SS" },
        { src: apple3, alt: "Apple-SS" },
        { src: apple4, alt: "Apple-SS" }
      ],
      about:
        "EVE is an E-Commerce Website Where you can purchase Electronic gadgets like Laptop, Mobile Phone, Airpods, Smartwatch and TV.",
      tech_stack: [
        "React",
        "Redux",
        "HTML",
        "CSS",
        "Java Script",
        "Chakra UI",
        "Mongoose",
        "MongoDb Atlas"

      ],
      links: [
        "https://github.com/Rkarthik25/EVE-Apple-Clone",
        "https://eve-india.netlify.app/",
      ],
    
    },

  ];

  return (
    <div className={styles.container}>
      <div className={styles.heading}>Projects</div>
      <div className={styles.aligner}>
        {data?.map((item, i) => {
          return <ProjectCard key={i} item={item} />;
        })}
      </div>
    </div>
  );
};

export { Projects };
