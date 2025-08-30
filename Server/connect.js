// server.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db');
const mongoose = require('mongoose');
dotenv.config();
connectDB();




const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('MongoDB Atlas Connected!');
});
// name: {
//     type:String,
//     required:[true,"name is req"]
//   },
app.get('/contacts', async (req, res) => {
    //console.log(req.body)
    try {
      const collection = mongoose.connection.collection('students'); // collection name
      const data = await collection.find({}).toArray();
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  app.post('/users', async (req, res) => {
    try {
      const { name, email, age } = req.body;
  
      const newUser = new User({ name, email, age });
      await newUser.save();
  
      res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  // models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

module.exports = mongoose.model('User', userSchema);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
