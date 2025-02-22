import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginPage from "./components/LoginPage";
import SearchBar from './components/SearchBar';
import ImageSlider from './components/ImageSlider';
import RestaurantList from './components/RestaurantList';
import RestaurantMenu from './components/RestaurantMenu';
import CartPage from './components/CartPage';
import PaymentPage from './components/PaymentPage'; // Import Payment Page
import './App.css';

function App() {
  const aboutRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/cart")
      .then(res => res.json())
      .then(data => setCart(data))
      .catch(err => console.error("Error fetching cart:", err));
  }, []);

  const addToCart = (item) => {
    fetch("http://localhost:5000/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item)
    }).then(() => setCart([...cart, item]));
  };

  const removeFromCart = (id) => {
    fetch(`http://localhost:5000/cart/${id}`, {
      method: "DELETE"
    }).then(() => setCart(cart.filter(item => item._id !== id)));
  };

  return (
    <Router>
      <div className="App">
        <Navbar onAboutClick={() => aboutRef.current.scrollIntoView({ behavior: 'smooth' })} cartItems={cart.length} />
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

        <Routes>
          <Route path="/" element={<>
            <ImageSlider />
            <RestaurantList searchTerm={searchTerm} />
            <section ref={aboutRef} className="about-section">
              <h2>About Food Hub</h2>
              <p>Food Hub is a leading food e-commerce platform...</p>
            </section>
          </>} />
          <Route path="/restaurant/:restaurantName" element={<RestaurantMenu addToCart={addToCart} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cart" element={<CartPage cartItems={cart} removeFromCart={removeFromCart} />} />
          <Route path="/payment" element={<PaymentPage />} /> {/* Payment Page Route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
