import { useState ,useEffect} from "react";




const CountDown=()=>{

    const[time,setTime]=useState(10);
    const[isActive,setIsActive]=useState(false);

    useEffect(()=>{
        let interval;
        if(isActive && time>0){
            interval=setInterval(()=>{
                setTime((prevTime)=>prevTime-1);
            },1000);
        }
        else{
            clearInterval(interval);
        }

    
    return()=>clearInterval(interval);
    },[time,isActive]);


    const handlePause=()=>{
        setIsActive((prev)=>(!prev));
    };
const handleReset = () => {
    setTime(10);
    setIsActive(false);
  };
    return (

        <div>CountDown Component
            <button onClick={handleReset} style={{marginLeft:"10px"}}>Reset</button>
            <button onClick={handlePause} style={{marginLeft:"10px"}}>{isActive?"Pause":"Start"}</button>
            <h2>{time} seconds</h2>

        </div>

    );
}




export default CountDown;