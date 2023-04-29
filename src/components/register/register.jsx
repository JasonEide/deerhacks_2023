import React, {useState} from 'react';
import {collection, addDoc} from "firebase/firestore";
import {db} from "./../../api/firebase-config";
import {Link, useNavigate, useLocation} from "react-router-dom";

import styles from './register.module.css';
import {TextField, Button, IconButton} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';

export var curr_user = null;
export var is_logged = false;
export default function Login() {
    const [email, setEmail] = useState("");
    const emailHandler = event => {
        setEmail(event.target.value);
    };
    const [values, setPass] = useState({
        password: "",
        showPassword: false
    });
    const passHandler = event => {
        setPass({...values, password: event.target.value});
    };
    const handleClickShowPassword = () => {
        setPass({ ...values, showPassword: !values.showPassword });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const navi = useNavigate();
    const usersRef = collection(db, "users");
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const handleRegister = async () => {
        if(email.match(re)){
            console.log('hi');
            await addDoc(usersRef, {email: email, password: values.password, exp: 0, lvl: 1});
            alert("Account Created! You'll be redirected to login.")
            navi("/login");
        }
        else{
            alert("Please enter a valid email")
        }

    }
    return (
        <div className={styles.container}>
            <div className={styles.rectangle}>
                <div className={styles.email}>
                    <TextField 
                        id="outlined-basic" 
                        label="Email" 
                        variant="standard" 
                        fullWidth
                        onChange={emailHandler}
                        value={email}
                    />
                </div>
                <div className={styles.pass}>
                    <FormControl fullWidth>
                        <InputLabel className={styles.labelpass} htmlFor="standard-adornment-password">Password</InputLabel>
                        <Input
                            id="standard-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}

                            value={values.password}
                            onChange={passHandler}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                                }
                        />
                    </FormControl>
                </div>
                <div>
                    <Button variant="outlined" className={styles.buttonLogin} onClick={handleRegister}>
                        Register
                    </Button>
                </div>
                <div className={styles.register}>
                    <Link to={"/login"}>
                        Sign in
                    </Link>
                </div>
                <div>
                    <IconButton className={styles.loginBack}>
                            <Link to={"/"} className={styles.link}>
                                <ArrowBackIcon className={styles.backIcon}/> 
                            </Link>
                    </IconButton>
                </div>
            </div>
        </div>
    );
}