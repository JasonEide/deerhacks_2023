import React, {useState} from 'react';
import styles from './homepage.module.css';
import {Link, useNavigate, useLocation, NavLink} from "react-router-dom";
import {IconButton, TextField, Button} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { fetchData } from '../../api';

export default function Homepage({data}) {
    const [initial, setInitial] = useState(0);
    const [msg, setMsg] = useState('');
    const [originalMsg, setOriginalMsg] = useState('');
    const [exp, setExp] = useState(0);
    const [lvl, setLvl] = useState(1);
    if (initial == 0 && data != undefined && Object.keys(data).length > 0) {
        let curr_user = null;
        let is_logged = (JSON.parse(localStorage.getItem("is_logged")));
        if(is_logged){
            curr_user = (JSON.parse(localStorage.getItem("curr_user")));
            setExp(curr_user.exp);
            setLvl(curr_user.lvl);
        }
        setMsg(data['edited']);
        setOriginalMsg(data['original']);
        setInitial(1);
    }

    const msgHandler = event => {
        setMsg(event.target.value);
    };
    const handleMsg = () => {
        let curr_user = null;
        let is_logged = (JSON.parse(localStorage.getItem("is_logged")));
        if(is_logged){
            curr_user = (JSON.parse(localStorage.getItem("curr_user")));
        }
        updateExp();
    };

    async function updateExp(val) {
        if (is_logged) {
            const user_ref = doc(db, "users", curr_user.id);
            let temp_exp = curr_user.exp + val;
            
            await updateDoc(user_ref, {exp: temp_exp, lvl: temp_lvl});
        }
    }

    const handleReset = async () => {
        const data = await fetchData();
        setMsg(data['edited']);
        setOriginalMsg(data['original']);
    };

    let is_logged = (JSON.parse(localStorage.getItem("is_logged")));

    const logoutUser = async () => {
        localStorage.setItem("is_logged", "false");
        localStorage.setItem("curr_user", "null");
        window.location.reload();
    };

    return (
        <div>
            <div className={styles.background}>
                <h1>Fix my Mistakes!</h1>
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
            <div className={styles.background}>
                <TextField 
                    id="outlined-basic" 
                    label="Fix this message" 
                    variant="standard" 
                    multiline
                    fullWidth
                    onChange={msgHandler}
                    value={msg}
                />
            </div>
            <div>
                <Button variant="contained" color="error" onClick={handleReset}>
                    Reset
                </Button>
                <Button variant="contained" color="success" onClick={handleMsg}>
                    Submit
                </Button>
            </div>
        </div>
    );
}