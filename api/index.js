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


dotenv.config()
mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true , useUnifiedTopology: true},()=>{
    console.log("Mongodb Connected!!")
});


app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use('/api/auth',authRoute);
app.use('/api/users',userRoute);
app.use("/api/shorturls",shortUrlRoute);

// app.post('/short', async (req, res) => {
//     const found = await Shorturl.find({full: req.body.full});
//     if(found.length>0){
//       res.send(found);
//     }
//     else{
//       await Shorturl.create({full: req.body.full});
//       const foundNow = await Shorturl.find({full: req.body.full});
//       res.send(foundNow);
//     }
//   });


//   app.get('/:shortUrl', async (req, res) => {
//     const short = await Shorturl.findOne({ short: req.params.shortUrl });
//     if (short == null) return res.sendStatus(404);
//     short.clicks++;
//     short.save();
//     res.redirect(`${short.full}`);

//   });

app.listen(3001,()=>{
    console.log("Backend Server is running ")
})