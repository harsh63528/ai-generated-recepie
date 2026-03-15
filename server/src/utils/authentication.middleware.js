import jwt from 'jsonwebtoken';
import userModel from '../models/user.model.js';
import TokenBlacklist from '../models/tokenBlacklist.model.js';

export default async function authenticateToken(req, res, next) {
    const { token } = req.cookies;

    // 1. Check if token exists
    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        // 2. Check if token is blacklisted (logged out)
        const isBlacklisted = await TokenBlacklist.exists({ token });
        if (isBlacklisted) {
            return res.status(401).json({ message: 'Session expired. Please log in again.' });
        }

        // 3. Verify JWT integrity
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // 4. Get user (excluding password)
        const user = await userModel.findById(decoded.id).select('-password');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // 5. Attach user to request and move to next middleware/route
        req.user = user;
        next(); 

    } catch (err) {
        // Clear cookie if it's invalid/expired to help the frontend
        res.clearCookie('token');
        return res.status(401).json({ message: 'Invalid or expired token' });
    }
}
