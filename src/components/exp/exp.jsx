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



/**
 * Given the original grammatically-correct sentence and the user submission, determine how many Exp points 
 * the user will receive from editing a sentence
 * @param {*} correctText - The original generated sentence
 * @param {*} userText - The user-submitted sentence
 */
function getExp(correctText, userText){
    const correctWords = correctText.split(" ");
    const userWords = userText.split(" ");
    //user didn't follow the rules and added/removed words, give 0xp.
    if(correctWords.length === userWords.length){
        return 0;
    }
    let numCorrect = 0;
    let numWrong = 0;

    //check how many words in the sentence they got right and how many they got wrong
    for(let i = 0; i < correctWords.length; i++){
        if(correctWords[i] === userWords[i]){
            numCorrect++;
        }else{
            numWrong++;
        }
    }

    //exp = correct grammar per word in the sentence - incorrect grammar per word in sentence (0 Exp if more wrong than right)
    if(numCorrect < numWrong){
        return 0;
    }else{
        return numCorrect - numWrong;
    }





}


