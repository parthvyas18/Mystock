const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require('express');
const App=express();
dotenv.config({path: './config.env'});


require("./db/conn"); 

App.use(express.json());
// const Data = require('./data/appdata');

App.use(require('./router/auth'));
// const middleware = (req,res,next) =>{
//     console.log('welcome to middleware');
//     next();
// }

App.get("/",(req,res)=>{
    res.send("welcome to home page");
})

App.get("/Work",(req,res)=>{
    res.send("welcome to Work page");
})
App.get("/MyStocks",(req,res)=>{
    res.send("welcome to mystocks page");
})
App.get("/Profile",(req,res)=>{
    res.send("welcome to profile page");
})

// App.get("/Register",middleware,(req,res)=>{
//     res.send("welcome to Register page");
// })
App.listen(5000, () =>{
    console.log(`server is runing on port no.`);
})