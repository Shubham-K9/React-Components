import { useEffect, useState } from 'react';    

const Todo = () => {

    const [items, setItems] = useState(() => {
        const saved = localStorage.getItem("todoItems");
        return saved ? JSON.parse(saved) : [];
    });
    const [inputValue, setInputValue] = useState('');
    const [editIndex, setEditIndex] = useState(null);
    
   

    useEffect(() => {
        localStorage.setItem('todoItems', JSON.stringify(items));
    }, [items]);

    const handleAddItem = () => {
        if (!inputValue.trim()) return;

        if (editIndex !== null) {
            const updated = [...items];
            updated[editIndex].text = inputValue;
            setItems(updated);
            setEditIndex(null);
        } else {
            setItems([...items, { text: inputValue, completed: false }]);
        }

        setInputValue('');
    };

    const handleDeleteItem = (deleteIndex) => {
        setItems(prevItems => prevItems.filter((_, index) => index !== deleteIndex));
    };

    const toggleComplete = (index) => {
        const updatedItems = [...items];
        updatedItems[index].completed = !updatedItems[index].completed;
        setItems(updatedItems);
    };

    const handleEditItem = (index) => {
        setInputValue(items[index].text);
        setEditIndex(index);
    };

    return (
        <div>
            <h2>Todo Component</h2>

            <input 
                type="text" 
                placeholder="Add todo..." 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)} 
            />

            <button 
                onClick={handleAddItem} 
                style={{ backgroundColor: "green", color: "white", borderRadius: "4px", cursor: "pointer", opacity: "0.8", marginLeft: "10px" }}
            >
                {editIndex !== null ? 'Update Item' : 'Add Item'}
            </button>

            <ul>
                {items.map((item, index) => (
                    <li 
                        key={index} 
                        style={{ marginBottom: "8px", textDecoration: item.completed ? 'line-through' : 'none' }}
                    >
                        <input
                            type="checkbox"
                            checked={item.completed}
                            onChange={() => toggleComplete(index)}
                            style={{ marginRight: "10px" }}
                        />

                        {item.text}

                        <button 
                            style={{ marginLeft: "10px", backgroundColor: "orange", color: "white", opacity: "0.8", border: "none", padding: "4px 8px", borderRadius: "4px" }} 
                            onClick={() => handleEditItem(index)}
                        >
                            Edit
                        </button>

                        <button 
                            style={{ marginLeft: "10px", backgroundColor: "red", color: "white", opacity: "0.7", border: "none", padding: "4px 8px", cursor: "pointer", borderRadius: "4px" }} 
                            onClick={() => handleDeleteItem(index)}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todo;
