import express from 'express'
import { adminAuth } from '../controllers/middleware/adminAuthMiddleware.js';
import { authAdmin,usersList,deleteUser } from '../controllers/adminController.js';
 
const router = express.Router();

router.post('/auth',authAdmin)

router.get('/usersList',adminAuth,usersList)

router.post('/deleteUser',adminAuth,deleteUser)

export default router;
