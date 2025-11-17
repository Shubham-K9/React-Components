import { useState } from "react";


const Toggle =()=> {



    const [isOn, setIsOn] = useState(true);

    return (
        <div className="toggle-container main" style={{
            backgroundColor: isOn ? "white" : "black",
            color: isOn ? "black" : "white"
        }} >
            <h1>Toggle Component</h1>
            <p >The switch is {isOn ? 'ON' : 'OFF'}</p>
            <button onClick={()=>setIsOn(!isOn)}>💡</button>
            
            
        </div>
    )





}




export default Toggle;