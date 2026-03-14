import express from 'express';
import {Router} from 'express';
import {registerUser,loginUser,logoutUser,getProfile} from '../controller/auth.controller.js';
import authenticateToken from '../utils/authentication.middleware.js';

const router = Router();

router.post('/register', registerUser);

router.post('/login', loginUser);

router.delete('/logout', logoutUser);

router.post('/profile', authenticateToken,getProfile);

export default router;