import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useLocation
import './Navbar.css';

function Navbar({ onAboutClick, cartItems }) {
  const [showContact, setShowContact] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Get current page location

  const handleContactClick = () => {
    setShowContact(!showContact);
  };

  const handleAboutClick = () => {
    if (location.pathname !== "/") {
      navigate("/"); // Navigate to Home Page first
      setTimeout(() => onAboutClick(), 500); // Scroll to About section after a short delay
    } else {
      onAboutClick(); // If already on Home Page, just scroll
    }
  };

  return (
    <nav className="navbar">
      <h1>Food Hub</h1>
      <ul>
        <li onClick={() => navigate('/')}>Home</li>
        <li onClick={handleAboutClick}>About</li> {/* Fix applied here */}
        <li onClick={handleContactClick}>Contact</li>
        <li className="cart-icon" onClick={() => navigate('/cart')}> 🛒 Cart ({cartItems}) </li>
        <li onClick={() => navigate("/login")}>🔑 Login</li>
      </ul>

      {showContact && (
        <div className="contact-details">
          <h3>Contact Us</h3>
          <p><strong>Phone:</strong> +1 (000) 12345667</p>
          <p><strong>Email:</strong> ganjisaiteja123456@gmail.com</p>
          <p><strong>Address:</strong> 123 Food St, Food Hub, FC 12345</p>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
