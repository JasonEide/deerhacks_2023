import React from 'react';
import styles from './exp.module.css';
import {db} from "./../../api/firebase-config";
import {updateDoc, doc, arrayUnion} from "@firebase/firestore";

export default function Exp() {
    let curr_user = null;
    let is_logged = (JSON.parse(localStorage.getItem("is_logged")));
    if(is_logged){
        curr_user = (JSON.parse(localStorage.getItem("curr_user")));
    }
    async function updateExp(val) {
        if (is_logged) {
            const user_ref = doc(db, "users", curr_user.id);
            let temp_exp = curr_user.exp + val;
            await updateDoc(user_ref, {exp: temp_exp});
        }
    }
    return (
        <div>
            
        </div>
    )
}