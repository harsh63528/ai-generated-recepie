
import TokenBlacklist from '../models/tokenBlacklist.model.js';

export default async function cookieChecker(req, res, next){
    try {
        const { token } = req.cookies;
        if (!token) {
            return res.status(401).json({ message: 'No token provided' });
        }
        const blacklistedToken = await TokenBlacklist.findOne({ token });
        if (blacklistedToken) {
            return res.status(401).json({ message: 'Token is blacklisted' });
        }
        next();
        
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });

    }

}