// verify token
import jwt from 'jsonwebtoken';
import UserModel from '../models/User.model.js';

export function verifyToken(req,res,next){
    console.log("lol");
    
    if( req.headers &&
        req.headers.authorization &&
        req.headers.authorization.split(' ')[0] === "JWT"
    ){
    jwt.verify(
        req.headers.authorization.split(' ')[1], 
        'SECRETKEY', 
        async function(err, verifiedToken) {
            if(err){
                return res.status(403).json({message: "Invalid token"})
            }
            const user = await UserModel.findById(verifiedToken.id);
            console.log(req ,"before");
            req.user = user;
            console.log(req ,"after");
            next();
        });
    }
    else{
        return res.status(404).json({message: "Token not available"})
    }
}