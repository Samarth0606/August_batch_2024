import { createRestaurant, deleteRestaurant, fetchRestaurant, updateRestaurant } from "../controllers/restaurant.controller.js";
import { verifyToken } from "../middleware/verify.js";


export default function restaurantRoutes(app){
    app.post('/api/restaurants' , verifyToken, createRestaurant);
    app.get('/api/restaurants' , verifyToken, fetchRestaurant);
    app.patch('/api/restaurant/:id', verifyToken , updateRestaurant);
    app.delete('/api/restaurant/:id', verifyToken , deleteRestaurant);
}




