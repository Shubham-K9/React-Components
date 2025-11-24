import { useState } from 'react';    


const Todo=()=>{

    // const[add,setAdd]=useState(false);
    const[items,setItems]=useState([]); 
    const[inputValue,setInputValue]=useState('');

    const handleAddItem=()=>{
        if (!inputValue) return;
        setItems((prevItems)=>[...prevItems, inputValue]);
        setInputValue('');
    }



    return (
        <div>
            <h2>Todo Component</h2>
            <input type="text" placeholder="Add todo..." onChange={(e)=>setInputValue(e.target.value)} />
            <button onClick={handleAddItem}>Add</button>
            <div>
                <h2>Added Items</h2>
                <ul>
                    {items.map((item, index) => 
                    (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            
            
        </div>
    );
}




export default Todo;







