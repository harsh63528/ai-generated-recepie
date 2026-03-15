import express from 'express';
import { generateRecipe } from '../controller/content.controller.js';
import TokenBlacklist from '../models/tokenBlacklist.model.js';
import authenticateToken from '../utils/authentication.middleware.js';

const{router}=express()

router.get('/content',authenticateToken,generateRecipe)

export default router;