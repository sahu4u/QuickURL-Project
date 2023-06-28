const express=require('express');
const app=express();
const mongoose=require('mongoose');
const dotenv= require('dotenv');
const morgan=require('morgan');
const helmet=require('helmet');
const userRoute=require('./routes/users');
const authRoute=require('./routes/auth');
const shortUrlRoute=require('./routes/shorturls')
const  Shorturl = require('./models/Shorturl');
const cors = require("cors");


dotenv.config()
mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true , useUnifiedTopology: true},()=>{
    console.log("Mongodb Connected!!")
});

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use('/api/auth',authRoute);
app.use('/api/users',userRoute);
app.use("/api/shorturls",shortUrlRoute);




app.listen(3001,()=>{
    console.log("Backend Server is running ")
})