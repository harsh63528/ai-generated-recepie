//import dotenv and configure it to load environment variables from a .env file
import dotenv from 'dotenv';
dotenv.config();

//import express and the main app from the src folder
import express from 'express';


//import cors for handling Cross-Origin Resource Sharing
import cors from 'cors';
// import the database connection function and the authentication routes
import connectDB from './config/db.config.js';
// import the authentication routes from the routes folder
import authRoutes from './routes/auth.route.js';

import cookieParser from 'cookie-parser';
;

connectDB();

const app = express();
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

app.get('/', (req, res) => {
    res.send('Hello World!');
});


export default app;