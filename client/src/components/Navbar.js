import React, { useState } from 'react';
import './Navbar.css';

function Navbar({ onAboutClick }) { // Receive the onAboutClick prop from App.js
  const [showContact, setShowContact] = useState(false);

  const handleContactClick = () => {
    setShowContact(!showContact); // Toggle the visibility of contact details
  };

  return (
    <nav className="navbar">
      <h1>Food Hub</h1>
      <ul>
        <li>Home</li>
        <li onClick={onAboutClick}>About</li> {/* Call the passed function when About is clicked */}
        <li onClick={handleContactClick}>Contact</li>
      </ul>

      {/* Conditional rendering for Contact Details */}
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
