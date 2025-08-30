// server.js or routes/userRoutes.js
const express = require('express');
const dotenv = require('dotenv');
const jwt = require("jsonwebtoken");
const path = require('path');
const cors = require('cors');
const connectDB = require('./connection/db');
const User = require('./models/User');
const { authenticateToken,SECRET_KEY } = require("./middleware/auth");
const imageRoutes = require("./routes/imageRoutes");
const authRoutes = require("./routes/auth");
dotenv.config();
const userRoutes = require("./routes/userRoutes");
connectDB();
const app = express();
app.use(cors());
// Middleware to parse JSON
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')))  // To serve static files
app.use("/uploads", express.static("uploads")); // serve images directly

// mongoose.connect('mongodb://localhost:27017/mydb')
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.error(err));
app.use("/users", userRoutes);
app.use("/images",authenticateToken, imageRoutes);
app.use("/auth",authRoutes);
app.get("/dashboard", authenticateToken, (req, res) => {
    res.json({ message: "Welcome to Dashboard!", user: req.user });
  });
// Start server
app.listen(5000, () => console.log('Server running on port 5000'));
