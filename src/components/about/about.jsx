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
                <img src={require("./pictures/Jason.jpg")} width='315px' height='275px'/>
                <div className={styles.des}>
                    <h1>Jason Eide</h1>
                </div>
            </div>
            <div className={styles.pic}>
                <img src={require("./pictures/omar.jpg")}/>
                <div className={styles.des}>
                    <h1>Omar</h1>
                </div>
            </div>
            <div className={styles.pic}>
                <img src={require("./pictures/damon.png")}/>
                <div className={styles.des}>
                    <h1>Damon</h1>
                    Name/Nickname: Damon Ma
                    Pronouns: He/Him
                    Year of study: 2nd\n
                    Skillsets: Python, Java, JavaScript, HTML/CSS, C, Bash
                    Hobbies: Music, Travelling
                    
                </div>
            </div>
            <div className={styles.pic}>
                <img src={require("./pictures/nao.jpg")}/>
                <div className={styles.des}>
                    <h1>Nao</h1>
                </div>
            </div>
        </div>
    );
}