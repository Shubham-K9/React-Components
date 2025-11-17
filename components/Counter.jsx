import { useState } from 'react';


const Counter =()=>{
    const [count, setCount] = useState(0);

    return (
        <div className="counter-container">
            <h1>Counter Component</h1>
            <p>Count: {count}</p>
            <button onClick={() =>setCount(count+1)} className="counter-btn" disabled={count===10} >⬆️</button>
            <button onClick={() =>setCount(count-1)} className="counter-btn" disabled={count === 0}>⬇️</button>
                
        </div>
    )





};



export default Counter;