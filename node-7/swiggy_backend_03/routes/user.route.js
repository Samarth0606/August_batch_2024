import { register, login } from "../controllers/user.controller.js";


export default function userRoutes(app){
    app.post('/api/register' , register);
    app.post('/api/login' , login);
}




