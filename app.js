const express=require('express');
const app=express();
const logger=require('morgan');
const cors=require('cors');
const env=require('dotenv'); // to store sesitive data
env.config();
const port=process.env.port;
app.use(logger('dev')); //to finf the routes through terminal
app.use(cors());//cors policy
app.use(express.json()); //to receive and parse data from the front end
app.use(express.urlencoded({extended:true}));

app.listen(port,()=>{
    console.log(`server is running at port ${port}`);
})

//api
const api=require('./routes/api.js');
app.use('/api',api)