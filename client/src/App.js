import React, { useState, useRef } from 'react';
import Navbar from './components/Navbar';
import RestaurantList from './components/RestaurantList';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const aboutRef = useRef(null); // Reference for About section
  const [searchTerm, setSearchTerm] = useState(""); // State to store search term

  const handleAboutClick = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to About section
    }
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term); // Update search term
  };

  return (
    <div className="App">
      <Navbar onAboutClick={handleAboutClick} />
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} /> {/* Search bar */}
      
      <div className="container">
        <RestaurantList searchTerm={searchTerm} />
      </div>

      {/* About Section */}
      <section ref={aboutRef} className="about-section">
        <h2>About Food Hub</h2>
        <p>
          Food Hub is a leading food e-commerce platform offering a wide variety of food items, from fast food to gourmet meals. 
          Our goal is to provide customers with a seamless online ordering experience, bringing quality food directly to their doorsteps.
        </p>
        <p>
          We partner with top restaurants to offer a diverse range of cuisines, ensuring there's something for everyone. Whether you're craving pizza, burgers, or a healthy salad, Food Hub has it all!
        </p>
      </section>
    </div>
  );
}

export default App;
