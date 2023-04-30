import React from 'react';
import styles from './about.module.css';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <div>
            <div className={styles.background}>
                <h1>
                    About the team!
                </h1>
                <div>
                    <IconButton className={styles.button}>
                        <Link to={"/"} className={styles.link}>
                            Home
                        </Link>
                    </IconButton>
                </div>
            </div>
            <div className={styles.pic}>
                <img src={require("./pictures/Jason.jpg")} width='315px' height='275px' alt="Jason pic"/>
                <div className={styles.desJason}>
                    <h1>
                        Jason Eide
                    </h1>
                    <div>
                        Pronouns: He/Him
                    </div>
                    <div>
                        Year of Study: 2nd
                    </div>
                    <div>
                        Hobbies: Hanging out with friends, gaming
                    </div>
                </div>
            </div>
            <div className={styles.pic}>
                <img src={require("./pictures/omar.jpg")} alt="Omar pic"/>
                <div className={styles.desOmar}>
                    <h1>
                        Omar
                    </h1>
                    <div>
                        Pronouns: He/Him
                    </div>
                    <div>
                        Year of Study: 2nd
                    </div>
                    <div>
                        Hobbies: Gaming, reading manga/manhwa
                    </div>
                </div>
            </div>
            <div className={styles.pic}>
                <img src={require("./pictures/damon.png")} alt="Damon Pic"/>
                <div className={styles.desDamon}>
                    <h1>
                        Damon Ma
                    </h1>
                    <div>
                        Pronouns: He/Him
                    </div>
                    <div>
                        Year of study: 2nd
                    </div>
                    <div>
                        Skillsets: Python, Java, JavaScript, HTML/CSS, C, Bash
                    </div>
                    <div>
                        Hobbies: Music, Travelling
                    </div>
                </div>
            </div>
            <div className={styles.pic}>
                <img src={require("./pictures/nao.jpg")} alt="Nao pic"/>
                <div className={styles.desNao}>
                    <h1>
                        Nao
                    </h1>
                    <div>
                        Pronouns: He/Him
                    </div>
                    <div>
                        Year of Study: 2nd
                    </div>
                    <div>
                        Hobbies: Playing Mario Cart, reading
                    </div>
                </div>
            </div>
        </div>
    );
}