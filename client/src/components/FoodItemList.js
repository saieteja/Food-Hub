import React from 'react';
import './FoodItemList.css';

const foodItems = [

];

function FoodItemList() {
  return (
    <section className="food-items-section">
      <h1></h1>
      <div className="food-items">
        {foodItems.map((item) => (
          <div key={item.id} className="food-item-card">
            <img src={`/assets/${item.image}`} alt={item.name} />
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FoodItemList;
