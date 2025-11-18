import React, { useState } from "react";

const CharacterCnt=()=>{

    const[len,setLen]=useState(0);
    const[text,setText]=useState("");

    const handleChange=(e)=>{

        const inputText=e.target.value;
        if(inputText.length<=100){
            setText(inputText);
            setLen(inputText.length);
        }
        else{
            alert("Maximum character limit of 100 reached!");
        }
        
    }

    return (
        <div className="character-count">
            <h2>Character Count Component</h2>
            <textarea placeholder="Type something..." value={text} onChange={handleChange}></textarea>

            <p className="cc">Character Count: {len}</p>
        </div>
    )






}


export default CharacterCnt;