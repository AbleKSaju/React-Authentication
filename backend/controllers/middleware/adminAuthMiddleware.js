import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../../models/userModel.js'

const adminAuth = asyncHandler(async (req,res,next)=>{
    let token ;
    token = req.cookies.jwt;
    if(token){
        try {
           const decoded = jwt.verify(token,process.env.JWT_SECRET) 
           console.log(decoded,"dee");
           const {userid} = decoded
           console.log('decoded' , decoded);
            let admin =  await User.findOne({_id:userid,isAdmin:true})
            if(admin){
                next()
            }else{
            throw new Error('Not authorized , Not Admin')
            }
        } catch (error) {
            res.status(401)
            throw new Error('Not authorized , invalid token')
        }
    }else{
        res.status(401)
        throw new Error('Not authorized , no token');

    }
})

export { adminAuth } 