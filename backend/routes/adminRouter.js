import express from 'express'
import { authAdmin,usersList } from '../controllers/adminController.js';
 
const router = express.Router();

router.post('/auth',authAdmin)

router.get('/usersList',usersList)


export default router;
