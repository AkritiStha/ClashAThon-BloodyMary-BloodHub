const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    console.log("Auth Middleware - Token exists:", !!token);
    if (!token) return res.status(401).json({ error: "No token provided" });

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            console.log("Auth Middleware - JWT Verify Error:", err.message);
            return res.status(403).json({ error: "Invalid/expired token" });
        }
        console.log("Auth Middleware - User verified:", user.id, user.role);
        req.user = user;
        next();
    });
};

module.exports = authenticateToken;
