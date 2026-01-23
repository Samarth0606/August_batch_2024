import UserModel from "../models/User.model.js";
import bcrypt from 'bcrypt';
// register
export async function register(req,res){
    try{
       let {fullName,email,password} = req.body;
       const data = await UserModel.findOne({email});
       if(data){
        return res.status(409).json({message: "user already exists"})
       }
       else{
        const newUser = await UserModel.create({
            fullName,
            email,
            password: bcrypt.hashSync(password, 10)
        })
        return res.status(201).json({message:newUser})
       }
    }
    catch(error){
        return res.status(500).json({"err": error})
    }
}


// login
export async function login(req,res){
    try{
       let {email,password} = req.body;
       const data = await UserModel.findOne({email});
       if(!data){
        return res.status(409).json({message: "user doesnot exists"})
       }
       else{
        let validPassword = bcrypt.compareSync(password,data.password)
        if(!validPassword){
            return res.status(403).json({message: "wrong credentials"})
        }
        return res.status(200).json({
            user: {
                email: data.email,
                fullName: data.fullName,
                // password: data.password
            },
            // accessToken: JWT TOKEN
        })
       }
    }
    catch(error){
        return res.status(500).json({"err": error})
    }
}
