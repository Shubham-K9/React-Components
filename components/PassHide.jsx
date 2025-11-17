
import React, { useState } from "react";


const PassHide = () => {


    const [username, setUsername] = useState("");
    const [showPass, setShowPass] = useState(false);
    return (
        <div className="PM"> 

            <h1>Password Hide Component</h1>
            <div className="UN">
            <p>Username: </p>
            <input placeholder="username" value={username} onChange={e=>setUsername(e.target.value)}/>
            </div>
            <div className="UN">
            <p>Password: </p>
            <input type={showPass ? "text" :"password"} placeholder="Enter Password" />
            <button onClick={()=>setShowPass(!showPass)}>{showPass ? "Show" : "Hide"}</button>

            </div>
            

        </div>
    )
}   



export default PassHide;