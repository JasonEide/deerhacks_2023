import axios from 'axios';

let url = 'https://api.adviceslip.com/advice';
const infoArray = ["id", "advice"];

export const fetchData = async () =>{

    try{
        const {data:{"slip": info}} = await axios.get(url);
        const sentence = info[infoArray[1]];

        
        return sentence;
    } catch (error) {
        console.log("API reached maximum calls");
    }


}