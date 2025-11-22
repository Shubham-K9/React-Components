import { useState } from "react";

const DropDown=()=>{

    //const [data,setData]=useState([]);

    const dishes=[

        {name:"Biryani", price:250,location:"Hyderabad"},
        {name:"Pizza", price:500,location:"Italy"},
        {name:"Burger", price:150, location:"USA"},
        {name:"Pasta", price:300, location:"Italy"}

    ];

    const [selectedDish, setSelectedDish]=useState(null);


    return (
        <div>
            DropDown Component
            
            <div>
                            <select onChange={(e)=>setSelectedDish(e.target.value)} style={{marginLeft:"40%",border:"2px solid black",
                                width:"250px",padding:"10px",borderRadius:"10px",backgroundColor:"lightgrey"}}>

                                {dishes.map((dish,i)=>{
                                    return(
                                    <option key={i} style={{border:"1px solid black", margin:"10px", padding:"10px", width:"200px"}}>
                                        {dish.name} - {dish.price} - {dish.location}
                                        </option>
                                    );

                                })}
                                
                            </select>
                            <p >{selectedDish}</p>

            </div>
                            
            
        </div>
    );
}




export default DropDown;