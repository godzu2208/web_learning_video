const jwt = require('jsonwebtoken');
require('dotenv').config();

/**
 * Middleware kiểm tra JWT Token
 */
exports.authMiddleware = (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) return res.status(401).json({ message: "Không có token, từ chối truy cập!" });

    try {
        const decoded = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: "Token không hợp lệ!" });
    }
};
