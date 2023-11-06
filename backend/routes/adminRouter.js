import express from 'express'
const router = express.Router();

router.get('/admin',(req,res)=>{
    console.log("Adminneee");
})

export default router;
