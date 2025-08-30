const express = require("express");
const jwt = require("jsonwebtoken");
const { authenticateToken, SECRET_KEY } = require("../middleware/auth");

const router = express.Router();

// Dummy user (replace with DB)
const user = { id: 1, username: "ramesh", password: "12345" };
//axios.get(webApiUrl, { headers: {"Authorization" : `Bearer ${tokenStr}`} });  // React
// Login -> returns JWT
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === user.username && password === user.password) {
    const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, {
      expiresIn: "1h"
    });
    return res.json({ token });
  }

  res.status(401).json({ message: "Invalid credentials" });
});


module.exports = router;
