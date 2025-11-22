import { useState } from "react";

const DropDown = () => {
    const dishes = [
        { name: "Biryani", price: 250, location: "Hyderabad" },
        { name: "Pizza", price: 500, location: "Italy" },
        { name: "Burger", price: 150, location: "USA" },
        { name: "Pasta", price: 300, location: "Italy" }
    ];

    const [selectedDish, setSelectedDish] = useState("");

    return (
        <div className="container">
            <h2 className="title">Dish Selector</h2>

            <select
                className="dropdown"
                onChange={(e) => setSelectedDish(e.target.value)}
            >
                <option value="">-- Select a Dish --</option>

                {dishes.map((dish, i) => (
                    <option
                        key={i}
                        value={`${dish.name} - ₹${dish.price} - ${dish.location}`}
                    >
                        {dish.name} - ₹{dish.price} - {dish.location}
                    </option>
                ))}
            </select>

            {selectedDish && (
                <div className="resultBox">
                    <p className="resultText">{selectedDish}</p>
                </div>
            )}
        </div>
    );
};

export default DropDown;
