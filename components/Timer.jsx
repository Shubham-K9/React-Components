import { useState } from 'react';



const Timer=()=>{


    const [time,setTime]=useState(0);




    return(
        <><div>Timer Component</div><h1>{time}</h1>
        <button onClick={()=>(setTime(0))}>Reset</button></>

    );
};



export default Timer;  