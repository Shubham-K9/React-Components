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
        <div className="todo-container">
    <h2>Todo Component</h2>

    <input 
        type="text"
        placeholder="Add todo..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="todo-input"
    />

    <button 
        onClick={handleAddItem}
        className="btn-add"
    >
        {editIndex !== null ? 'Update Item' : 'Add Item'}
    </button>

    <ul className="todo-list">
        {items.map((item, index) => (
            <li 
                key={index} 
                className={`todo-item ${item.completed ? "completed" : ""}`}
            >
                <div style={{ display: "flex", alignItems: "center" }}>
                    <input
                        type="checkbox"
                        checked={item.completed}
                        onChange={() => toggleComplete(index)}
                        className="todo-checkbox"
                    />
                    {item.text}
                </div>

                <div>
                    <button 
                        className="btn-edit"
                        onClick={() => handleEditItem(index)}
                    >
                        Edit
                    </button>

                    <button 
                        className="btn-delete"
                        onClick={() => handleDeleteItem(index)}
                    >
                        Delete
                    </button>
                </div>
            </li>
        ))}
    </ul>
</div>

    );
};

export default Todo;
