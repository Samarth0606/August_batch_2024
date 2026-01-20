import { createRestaurant, deleteRestaurant, fetchRestaurant, updateRestaurant } from "../controllers/restaurant.controller.js";


export default function restaurantRoutes(app){
    app.post('/api/restaurants' , createRestaurant);
    app.get('/api/restaurants' , fetchRestaurant);
    app.patch('/api/restaurant/:id' , updateRestaurant);
    app.delete('/api/restaurant/:id' , deleteRestaurant);
}




