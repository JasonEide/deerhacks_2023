import React from 'react';
import styles from './about.module.css';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

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

            <div className={styles.introtext}>
                <h2>
                    Inspiration
                </h2>
            </div>
            <div className={styles.introtext}>
                As computer science students, our writing skills are not as strong as our technical abilities,
                so we want a motivating platform to improve them.
            </div>

            <div className={styles.introtext}>
                <h2>
                    What it does
                </h2>
            </div>
            <div className={styles.introtext}>
                Fix My Mistake prompts users with a grammatically incorrect sentence that they must fix. 
                Depending on the accuracy of their attempt, experience points are rewarded to them which are used to level up.
            </div>

            <div className={styles.introtext}>
                <h2>
                    How we built it
                </h2>
            </div>
            <div className={styles.introtext}>
                Fix My Mistake was built in a team of four using Google Firebase, HTML, CSS, JavaScript, React, React Router DOM, 
                Material UI, JSON API, and Advice Slip API.
            </div>

            <div className={styles.introtext}>
                <h2>
                    Challenges we ran into
                </h2>
            </div>
            <div className={styles.introtext}>
                It was difficult to find an efficient open-source API that could randomly generate sentences for the user to read.
            </div>

            <div className={styles.introtext}>
                <h2>
                    Accomplishments that we're proud of
                </h2>
            </div>
            <div className={styles.introtext}>
                Our team is proud that we were able to complete a useful and functional product within the deadline to share with others.
            </div>

            <div className={styles.introtext}>
                <h2>
                    What we learned
                </h2>
            </div>
            <div className={styles.introtext}>
                The team behind Fix My Mistake got to experience the fundamentals of web development and web scraping, in addition to 
                sharpening our skills in communication and collaboration.
            </div>

            <div className={styles.introtext}>
                <h2>
                    What's next for Fix My Mistake
                </h2>
            </div>
            <div className={styles.introtext}>
                The next level for Fix My Mistake includes better grammar detection and text generation systems, multiple gamemodes, 
                and an improved user-interface.
            </div>

            <div className={styles.pic}>
                <img src={require("./pictures/Jason.jpg")} width='315px' height='275px' alt="Jason pic"/>
                <div className={styles.desJason}>
                    <h1>
                        Jason Eide
                        <a href='https://www.linkedin.com/in/jason-eide02/' className={styles.image}>
                            <LinkedInIcon/>
                        </a>
                        <a href='https://github.com/JasonEide' className={styles.image}>
                            <GitHubIcon/>
                        </a>
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
                        <a href='https://www.linkedin.com/in/omar-al-awadhi-a18984254/' className={styles.image}>
                            <LinkedInIcon/>
                        </a>
                        <a href='https://github.com/AlawadhiBOT' className={styles.image}>
                            <GitHubIcon/>
                        </a>
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
                        <a href='https://www.linkedin.com/in/damon-d-ma/' className={styles.image}>
                            <LinkedInIcon/>
                        </a>
                        <a href='https://github.com/Damon-D-Ma' className={styles.image}>
                            <GitHubIcon/>
                        </a>
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
                        <a href='https://www.linkedin.com/in/nao-nagashima-68b045234/' className={styles.image}>
                            <LinkedInIcon/>
                        </a>
                        <a href='https://github.com/diifault' className={styles.image}>
                            <GitHubIcon/>
                        </a>
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