import React from 'react';
import { useState} from 'react';



const Accordian=()=>{
    
    const [show,isShow]=useState(false);
    const cars=[
        {Name:"Thar", Model:"2020", Color:"Black"},
        {Name:"Pajero", Model:"2019", Color:"White"},
        {Name:"Fortuner", Model:"2021", Color:"Blue"}
    ];
    return (
        <div style={{marginLeft:"40%",border:"2px solid black",width:"250px",padding:"10px",borderRadius:"10px",backgroundColor:"lightgrey"}}>
        <div style={{display:'flex',alignItems:"center"}}> Accordian Component
            <button onClick={()=>isShow(!show)} style={{transition:"transform 1s",margin:10}}>{show?"⬆️":"⬇️"}</button>
        </div>
        
            <div style={{color:"black"}}>
                {show && cars.map((car,i)=>{
                    return(
                    <div key={i} style={{border:"2px solid red", margin:"10px", padding:"10px", width:"200px"}}>
                        <p>{car.Name} - {car.Model} - {car.Color}</p>
                    </div>
                    );
                })}
            </div>
            


        
        </div>

    )
}






export default Accordian;