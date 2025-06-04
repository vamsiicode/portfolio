import React from 'react';
import { SiCodeforces, SiLeetcode, SiCodechef } from 'react-icons/si';
import styles from "./Platforms.module.css";
import skills from "../../data/platforms.json";
import { getImageUrl } from "../../utils";

const platforms = [
  {
    name: 'Codeforces',
    url: 'https://codeforces.com/profile/Vamsi_Krishna_777',
    icon: <SiCodeforces className="text-blue-600 text-4xl" />,
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/V_K_Reddy/',
    icon: <SiLeetcode className="text-orange-500 text-4xl" />,
  },
  {
    name: 'CodeChef',
    url: 'https://www.codechef.com/users/vamsikrishna93',
    icon: <SiCodechef className="text-purple-700 text-4xl" />,
  },
];

export const Platforms = () => {
  return (
    <section className={styles.container} id="platforms">
        <h2 className={styles.title}>My Coding Platforms</h2> 
        <div className={styles.content}>
            <div className={styles.skills}>
                {skills.map((skill, id) => {
                    return (
                        <div key={id} className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <a href={skill.url} target="_blank"><img src={getImageUrl(skill.imageSrc)} alt={skill.title} /></a>
                        </div>
                        <p>{skill.title}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    </section>
    );
};

