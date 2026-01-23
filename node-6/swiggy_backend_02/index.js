// create server
// const express = require('express');
import express from 'express';
const app = express();
// const mongoose = require('mongoose');
import mongoose from 'mongoose';
import restaurantRoutes from './routes/restaurant.route.js';
import userRoutes from './routes/user.route.js';

// mongoose.connect('mongodb://127.0.0.1:27017/code_baithak') //local returns a promise
mongoose.connect('mongodb+srv://samarthvohraindia_db_user:mgBJf1a1VZ5V0a7Q@cluster0.udmxyzz.mongodb.net/') //cloud - returns a promise
.then(()=>{ console.log(`DB CONNECTED`) })
.catch(()=>{ console.log(`DB NOT CONNECTED`) })

app.use(express.json()) //body parsing middleware

app.get('/' , (req,res)=>{
    res.send("welcome to root file and thanks")
})

restaurantRoutes(app);
userRoutes(app);

const PORT = 8080;
app.listen(PORT , ()=>{
    console.log(`SERVER CONNECTED AT PORT: ${PORT}`);
})

// samarthvohraindia_db_user
// mgBJf1a1VZ5V0a7Q
// mongodb+srv://samarthvohraindia_db_user:mgBJf1a1VZ5V0a7Q@cluster0.udmxyzz.mongodb.net/