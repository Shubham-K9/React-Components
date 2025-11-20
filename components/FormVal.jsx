import React, { useState } from "react";

const FormVal=()=>{

    const[name,setName]=useState("");
    const[age,setAge]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[show,setShow]=useState(false);

    const [error,setError]=useState({
        name:"",
        age:"",
        email:"",
        password:""
    });

    const handleName=(e)=>{
        const value=e.target.value;
        setName(value);
        if(value.trim().length===0){
            setError((prev)=>({...prev,name:"Name cannot be empty"}));
        }else{
            setError((prev)=>({...prev,name:""}));
        }

    }
    const handleAge=(e)=>{
        const value=e.target.value; 
        setAge(value);
        if(value<=0 || value>100){
            setError((prev)=>({...prev,age:"Please enter a valid age between 1 and 100"}));
        }else{
            setError((prev)=>({...prev,age:""}));
        }
    }
    const handlePassword=(e)=>{
        const value=e.target.value; 
        setPassword(value);
        if(value.length<8){
            setError((prev)=>({...prev,password:"Password must be at least 8 characters long"}));
        }else{
            setError((prev)=>({...prev,password:""}));
        }
    }

    const handleEmail=(e)=>{
        const value=e.target.value; 
        const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setEmail(value);
        if(!emailRegex.test(value)){
            setError((prev)=>({...prev,email:"Please enter a valid email address"}));
        }else{
            setError((prev)=>({...prev,email:""}));
        }
    }

    const handleSubmit=(e)=>{
        e.preventDefault(); 
        if(!name || !age || !email || !password ){
            alert("All fields are required!");
            return;
        }
        if(!error.name && !error.age && !error.email && !error.password){
            alert("Form submitted successfully!");
        }else{
            alert("Please fix the errors before submitting the form.");
        }
    }

    return(
        <div className="form">
            <h1>Form Validation Component</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name: </label>
                    <input type="text" onChange={handleName} value={name}></input><br/>
                    {error.name && <span style={{color:"red"}}>{error.name}</span>}<br/>
                    <label>Age: </label>
                    <input type="number" onChange={handleAge} value={age}></input><br/>
                    {error.age && <span style={{color:"red"}}>{error.age}</span>}<br/>
                    <label>Email: </label>
                    <input type="email" onChange={handleEmail} value={email}></input><br/>
                    {error.email && <span style={{color:"red"}}>{error.email}</span>}<br/>
                    <label>Password: </label>
                    <input type={show?"text":"password"} onChange={handlePassword} value={password}></input>
                    {error.password && <span style={{color:"red"}}>{error.password}</span>}<br/>
                    <button type="button" onClick={()=>setShow(!show)}>{show?"Hide":"Show"}</button><br/>

                    <button type="submit" style={{ marginTop: "15px" }}>
                        Submit
                    </button>
                </div>
            </form>
                    

        </div>
    )






}




export default FormVal;