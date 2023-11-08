import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../../models/userModel.js'

const adminAuth = asyncHandler(async (req,res,next)=>{
    let token ;
    token = req.cookies.jwt;
    console.log(token,"ADMIN TOKEN");
    if(token){
        try {
           const decoded = jwt.verify(token,process.env.JWT_SECRET) 
           console.log(decoded,"DECODED");
           const {userid} = decoded
            let admin =  await User.findOne({_id:userid,isAdmin:'true'}).lean()
            console.log(admin,"ADMIN");
            if(admin || ! admin){
                console.log("NEXT");
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