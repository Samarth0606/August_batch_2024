// DB RELATED
import mongoose from 'mongoose';

// schema (blueprint)
const restaurantSchema = new mongoose.Schema({
    name: String,
    imageUrl: String,
    rating: Number,
    cuisines: String,
    deliveryTime: String
});

// MODEL
const RestaurantModel = mongoose.model('Restaurants', restaurantSchema);

export default RestaurantModel;
