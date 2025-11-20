import React, { useState } from "react";
import PLANET_API from "../Utils.jsx";
import Shimmer from "./Shimmer.jsx";


const Planet = () => {
  const [planetData, setPlanetData] = useState(null);
  const [category, setCategory] = useState();
  const[srcPlanets,setSrcPlanets]=useState(planetData);

  const fetchPlanetData = async () => {
    try {
      const response = await fetch(PLANET_API);
      const data = await response.json();
      setPlanetData(Object.values(data));
      setSrcPlanets(Object.values(data));
    } catch (error) {
      console.error("Error fetching planet data:", error);
    }
  };

  const filterPlanet = (data) => {
    if (!data || !category) return;
    const srcPlanets = data.filter((planet) => planet.category.toLowerCase().includes(category));
    
    setSrcPlanets(srcPlanets);
  };

  return (
    <div className="planet-wrapper">
      <h1>Planet Component</h1>

      <div className="btn-group">
        <button className="btn" onClick={fetchPlanetData}>
          Fetch Planet Data
        </button>
        <input type="character" placeholder="Enter Category" onChange={(e) => setCategory(e.target.value)} />

        <button className="btn" onClick={() => filterPlanet(planetData)}>
          Filter by Category
        </button>
      </div>

      <div className="planet-grid">
        {!srcPlanets && <Shimmer />}
        {srcPlanets &&
          srcPlanets.map((planet) => (
            <div className="planet-card" key={planet.id}>
              <h3>{planet.name}</h3>
              <p><strong>ID:</strong> {planet.id}</p>
              <p><strong>Category:</strong> {planet.category}</p>
              <p><strong>Subcategory:</strong> {planet.subcategory || "None"}</p>
              <p><strong>Weight:</strong> {planet.weight}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Planet;
