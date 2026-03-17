//import dotenv and configure it to load environment variables from a .env file
import dotenv from 'dotenv';
dotenv.config();

//import express and the main app from the src folder
import express from 'express';



//import cors for handling Cross-Origin Resource Sharing
import cors from 'cors';
// import the database connection function and the authentication routes
import connectDB from './src/config/db.config.js'
// import the authentication routes from the routes folder
import authRoutes from './src/routes/auth.route.js';
import contentRoutes from './src/routes/content.route.js';

import cookieParser from 'cookie-parser';
;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

// use middleware to handle CORS, parse JSON and URL-encoded data
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// use the authentication routes for any requests to /api/auth
/**
 * @route POST /api/auth/register
 * @desc handle authentication related routes such as registration and login
 * @access Public
 */
app.use('/api/auth', authRoutes);

app.use('/api/data', contentRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});