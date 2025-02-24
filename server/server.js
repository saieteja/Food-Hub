const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser'); // If you are using body-parser
const mongoose = require('mongoose'); // If you are using MongoDB
const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "your-mongodb-uri-here";

const allowedOrigins = [
    "http://localhost:3000", // Allow local development
    "https://lambent-salmiakki-b9d250.netlify.app" // Allow your Netlify app
];

// Use CORS middleware
app.use(cors({ origin: allowedOrigins }));

// Middleware
app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Your routes go here
app.post('/api/auth/register', (req, res) => {
    // Handle registration logic
    const { email, password } = req.body;
    // Add your registration logic here (e.g., save to DB)
    res.status(201).json({ message: 'Registration successful' });
});

app.post('/api/auth/login', (req, res) => {
    // Handle login logic
    const { email, password } = req.body;
    // Add your login logic here (e.g., check credentials)
    res.status(200).json({ message: 'Login successful' });
});

// Example cart route
app.get('/cart', (req, res) => {
    // Handle fetching cart logic here
    res.status(200).json({ cartItems: [] }); // Replace with your actual logic
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
