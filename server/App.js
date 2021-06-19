const dotenv = require('dotenv').config();
const mongoose = require("mongoose");
const express = require('express');

const App=express();
const port=process.env.PORT;

require("./db/conn"); 

App.use(express.json());
// const Data = require('./data/appdata');

App.use(require('./router/auth'));

// const middleware = (req,res,next) =>{
//     console.log('welcome to middleware');
//     next();
// }





// App.get("/Register",middleware,(req,res)=>{
//     res.send("welcome to Register page");
// })

App.listen(port, () =>{
    console.log(`server is runing on port no. ${port}`);
})
