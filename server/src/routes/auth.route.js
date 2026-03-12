import express from 'express';
import {Router} from 'express';
import {registerUser} from '../controller/auth.controller.js';

const router = Router();

router.post('/register', registerUser);

router.post('/login', (req, res) => {
    // Login logic here
    res.send('User logged in successfully');
});

export default router;