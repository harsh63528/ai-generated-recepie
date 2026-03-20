import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

// Internal Imports
import connectDB from './src/config/db.config.js';
import authRoutes from './src/routes/auth.route.js';
import contentRoutes from './src/routes/content.route.js';

// 1. Connect to Database (Handle potential initial failure)
connectDB();

const app = express();

// 2. Middleware Configuration
// Note: Only call these once.
app.use(cors({
    origin: [
        'http://localhost:5174',
        'https://ai-generated-recepie-iq93.vercel.app'
    ], 
    credentials: true 
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// 3. Routes
app.use('/api/auth', authRoutes);
app.use('/api/data', contentRoutes);

app.get('/', (req, res) => {
    res.send('Server is alive!');
});

// 4. Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});