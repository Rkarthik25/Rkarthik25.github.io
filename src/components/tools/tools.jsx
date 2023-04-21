import React from "react";
import styles from "./tools.module.css";
import github from "../../assets/github-icon.svg";
import vscode from "../../assets/vscode.svg"
import postman from "../../assets/postman.svg"
import render from "../../assets/render.svg"
import cyclic from "../../assets/Cyclic.jpeg"
import netlify from "../../assets/Netlify.svg"
import vercel from "../../assets/Vercel.svg"




const Tools = () => {
  let data = [
    {
      title: "Github",
      image: github,
    },
    {
      title: "VS code",
      image: vscode,
    },
    {
        title: "Postman",
        image: postman,
      },
      {
        title: "Render",
        image: render,
      },
      {
        title: "Cyclic",
        image: cyclic,
      },
      {
        title: "Netlify",
        image: netlify,
      },
      {
        title: "Vercel",
        image: vercel,
      }

  ];

  return (
    <div className={styles.container}>
      <div className={styles.heading}>Tools</div>
      <div className={styles.aligner}>
        {data.map((item, i) => {
          return (
            <div key={i} className={styles.listItem}>
              <img src={item.image} alt={item.title} />
              <div className={styles.title}>{item.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { Tools };
