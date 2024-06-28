import React from "react";
import Plants from "@/app/constants"; // Adjust the import path based on your actual file structure

const PlantList: React.FC = () => {
  return (
    <div className="plant-list">
      {Object.keys(Plants).map((occasion) => (
        <div key={occasion}>
          <h2>{occasion}</h2>
          <div className="plants-container">
            {Plants[occasion as keyof typeof Plants].map((plant) => (
              <div key={plant.id} className="plant-card">
                <img src={plant.plantImage} alt={plant.plantName} />
                <h3>{plant.plantName}</h3>
                <p>{plant.description}</p>
                <p>Price: {plant.price}</p>
                {/* Add more details as needed */}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlantList;
