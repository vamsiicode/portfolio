import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Vamsi &nbsp; Krishna Reddy</h1>
        <p className={styles.description}>
          <ul>
            <li>I'm a Full stack developer.I have good experience of building a real life projects.</li>
            <li>My areas of interests are AI/ML.</li>
          </ul>
          <br />
          Reach out If you are like my profile.
        </p>
        <a href="#contact" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/vamsipic.jpeg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
