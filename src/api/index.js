import axios from 'axios';

let url = 'https://api.adviceslip.com/advice';
const infoArray = ["id", "advice"];

export const fetchData = async () =>{
    let paragraph = '';
    let temp = 0;
    for (let i = 0; i < 2; i++) {
        const num = Math.random() * (224 - 1) + 1;
        if (num != 146) {
            let tempUrl = `${url}/${num}`;
            try{
                const {data:{"slip": info}} = await axios.get(tempUrl);
                const sentence = info[infoArray[1]];
                console.log(sentence, num);
                if (temp == 1) {
                    paragraph = `${paragraph} ${sentence}`
                } else {
                    paragraph = `${paragraph}${sentence}`
                    temp = 1;
                }
            } catch (error) {
                console.log("API reached maximum calls");
            }
        }

    }  

    return createErrors(paragraph);

}

function createErrors(text){
    const minErr = 1;
    const words = text.slice().split(" ");
    const numWords = words.length;
    const maxErr = Math.ceil(numWords/10);



    const numProblems = Math.floor(Math.random() * (maxErr - minErr + 1)) + minErr;

    const problems = [];
    const theres = ["there", "they're", "their"];
    const twos = ["too", "two", "to"];
    let selectionInd;
    let errNum = 0;
    while(errNum < numProblems){
        const wordInd = Math.floor(Math.random() * (numWords + 1));
        if (!problems.includes(wordInd)){
            problems.push(wordInd);
            errNum ++;
        }
    }

    for (let i = 0; i < numProblems; i++){
        let curr = words[problems[i]];
        if(curr.endsWith(",")){
            words[problems[i]] = curr.slice(0, -1);
        }else if (curr.endsWith("'s")){
            words[problems[i]] = curr.slice(0, -2);
        }else if (curr.toLowerCase() === "your"){
            words[problems[i]] = "your";
        }else if (curr.toLowerCase() === "you're"){
            words[problems[i]] = "you're";
        }else if (curr.toLowerCase() === "there"){
            selectionInd = genNumExclude(2, 0);
            words[problems[i]] = theres[selectionInd];
        }else if (curr.toLowerCase() === "they're"){
            selectionInd = genNumExclude(2, 1);
            words[problems[i]] = theres[selectionInd];
        }else if (curr.toLowerCase() === "their"){
            selectionInd = genNumExclude(2, 2);
            words[problems[i]] = theres[selectionInd];
        }else if (curr.toLowerCase() === "too"){
            selectionInd = genNumExclude(2, 0);
            words[problems[i]] = twos[selectionInd];            
        }else if (curr.toLowerCase() === "two"){
            selectionInd = genNumExclude(2, 1);
            words[problems[i]] = twos[selectionInd];
        }else if (curr.toLowerCase() === "to"){
            selectionInd = genNumExclude(2, 2);
            words[problems[i]] = twos[selectionInd];
        }else if (curr.toLowerCase() === "its"){
            words[problems[i]] = "it's";
        }else if (curr.toLowerCase() === "here"){
            words[problems[i]] = "hear";
        }else if (curr.toLowerCase() === "hear"){
            words[problems[i]] = "here";
        }else if (curr.toLowerCase() === "weather"){
            words[problems[i]] = "whether";
        }else if (curr.toLowerCase() === "whether"){
            words[problems[i]] = "weather";
        }

        else{
            let randAction = Math.floor(Math.random() * (4));
            /*
            action maps:
            0: add a "'s"
            1: add a comma
            2: add a semicolon
            3: add a period
            */
            if (randAction === 0){
                words[problems[i]] += "'s" 
            }else if(randAction === 1){
                words[problems[i]] += "," 
            }else if(randAction === 2){
                words[problems[i]] += ";" 
            }else{
                words[problems[i]] += "."
            }
        }
    }
    return({
        original: text,
        edited: words.join(" "),
        problems: problems,
        numProblems: numProblems,
    });
}

/**
 * Generate a number from 0 to [range] inclusive, but does not give the value [except]
 */
function genNumExclude(range, except){
    let num;
    do{
        num = Math.floor(Math.random()*(range + 1));
    }while(num === except);
    return num
}
