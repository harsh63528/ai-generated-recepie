import jwt from 'jsonwebtoken';
import userModel from '../models/user.model.js';
export default async function authenticateToken(req, res, next) {
    const {token} = req.cookies;
    if (!token) {
        return res.status(401).send('Access denied. No token provided.');
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded.id);
        if (!user) {
            return res.status(404).send('User not found');
        }
        req.user = user;
    } catch (err) {
        return res.status(400).send(err.message);
    }
    next();

}