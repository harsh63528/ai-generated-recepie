import express from 'express';
import { generateRecipe } from '../controller/content.controller.js';
import authenticateToken from '../utils/authentication.middleware.js';

const{router}=express()

router.post('/content',authenticateToken,generateRecipe)

export default router;