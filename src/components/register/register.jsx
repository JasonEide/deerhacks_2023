import React, {useState} from 'react';
import styles from './register.module.css';

import {collection, getDocs} from "firebase/firestore";
import {db} from "./../../api/firebase-config";
import {Link, useNavigate, useLocation} from "react-router-dom";

import {TextField, Button, IconButton} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function Register() {
    return (
        <div className={styles.background}>
            hello
        </div>
    );
}