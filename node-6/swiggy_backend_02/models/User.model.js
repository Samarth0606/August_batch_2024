// DB RELATED
import mongoose from 'mongoose';

// schema (blueprint)
const userSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    password: String
});

// MODEL
const UserModel = mongoose.model('Users', userSchema);

export default UserModel;
