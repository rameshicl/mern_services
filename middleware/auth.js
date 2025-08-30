const jwt = require("jsonwebtoken");
const SECRET_KEY = "mysecret123"; // move to .env in real apps

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Bearer <token>

  if (!token) return res.status(401).json({ message: "Token required" });

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.user = user; // attach decoded user info
    next();
  });
}

module.exports = { authenticateToken, SECRET_KEY };
