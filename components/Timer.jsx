import { useEffect, useState } from 'react';



const Timer=()=>{


    const [time,setTime]=useState(0);
    const [isRunning,setIsRunning]=useState(false);
    
    useEffect(()=>{
        let interval;
        if(isRunning){
            interval=setInterval(()=>{
                setTime((prevTime)=>prevTime+10);

            },10);
        }
        else{
            clearInterval(interval);
        }
        return ()=>clearInterval(interval);
    },[isRunning]);

    const handleReset=()=>{
        setIsRunning(false);
        setTime(0);
    }
    const formatTime=()=>{
        const minutes=("0"+Math.floor((time/60000)%60)).slice(-2);
        const seconds=("0"+Math.floor((time/1000)%60)).slice(-2);
        const milliseconds=("0"+Math.floor((time/10)%100)).slice(-2);
        return `${minutes}:${seconds}:${milliseconds}`;
        
    };
    

    return(
        <div className="timer-wrapper">
            <h1>Stopwatch</h1>
            <h2 style={{color:"black"}}>{formatTime()}</h2>
            <button onClick={()=>setIsRunning(!isRunning)}>
                {isRunning ? 'Pause' : 'Start'}
            </button>
            <button onClick={handleReset}>Reset</button>
        </div>

    );
};



export default Timer;  