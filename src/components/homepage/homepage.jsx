import React from 'react';
import styles from './homepage.module.css';
import {Link, useNavigate, useLocation, NavLink} from "react-router-dom";
import {IconButton} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Homepage() {
    let is_logged = (JSON.parse(localStorage.getItem("is_logged")));

    const logoutUser = async () => {
        localStorage.setItem("is_logged", "false");
        localStorage.setItem("curr_user", "null");
        window.location.reload();
    }
    return (
        <div>
            <div className={styles.background}>
                <h1>DeerHacks Project</h1>
                <div>
                    <IconButton>
                        <Link to={"/about"} className={styles.link}>
                            About
                        </Link>
                    </IconButton>

                    {!is_logged ?
                    <>
                        <IconButton>
                            <Link to={"/login"} className={styles.link}>
                                Login
                            </Link>
                        </IconButton>
                    </> : 
                    <>
                        <IconButton onClick={logoutUser}>
                        <Link to={"/"} className={styles.link}>
                                Logout
                            </Link>
                        </IconButton>
                    </>
                    }
                    <IconButton>
                            <a href="https://github.com/JasonEide/deerhacks" className={styles.link}>
                                <GitHubIcon fontSize='large'/> 
                            </a>
                    </IconButton>
                </div>
            </div>
        </div>
    );
}