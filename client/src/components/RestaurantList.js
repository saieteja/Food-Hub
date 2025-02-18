import React from 'react';
import './RestaurantList.css';

const restaurants = [
  { id: 1, name: 'Bawarchi', image: 'Restaurant-1.jpg' },
  { id: 2, name: 'Paradise', image: 'Restaurant 2.jpg' },
  { id: 3, name: 'Mandi', image: 'Restaurant 3.jpg' },
  { id: 4, name: 'KFC', image: 'Restaurant 4.jpg' },
  { id: 5, name: 'Caption Cook', image: 'Restaurant 5.jpg' },
  { id: 6, name: 'Burger King', image: 'Restaurant 6.jpg' },
];

const foodItems = [
  { id: 1, name: 'Pizza', image: 'food.jpg' },
  { id: 2, name: 'Burger', image: 'food1.jpg' },
  { id: 3, name: 'Pasta', image: 'food2.jpg' },
  { id: 4, name: 'Ice Cream', image: 'food3.jpg' },
  { id: 5, name: 'Biryani', image: 'food4.jpg' },
  { id: 6, name: 'Tandoori Roti', image: 'food5.jpg' },
];

function RestaurantList({ searchTerm }) {
  // Filter the restaurants and food items based on the searchTerm
  const filteredRestaurants = restaurants.filter(restaurant =>
    restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredFoodItems = foodItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="restaurant-list">
      <div className="sections-container">
        {/* Restaurants Section */}
        <section className="restaurants-section">
          <h2>Explore Restaurants</h2>
          <div className="restaurants">
            {filteredRestaurants.map(restaurant => (
              <div key={restaurant.id} className="restaurant-card">
                <img src={`/assets/${restaurant.image}`} alt={restaurant.name} />
                <h3>{restaurant.name}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Food Items Section */}
        <section className="food-items-section">
          <h2>Explore Food Items</h2>
          <div className="food-items-list">
            {filteredFoodItems.map(item => (
              <div key={item.id} className="food-item-card">
                <img src={`/assets/${item.image}`} alt={item.name} />
                <h3>{item.name}</h3>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default RestaurantList;
