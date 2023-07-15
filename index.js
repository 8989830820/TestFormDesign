
const express = require("express");
const usercreated  = require("./CreateUser");
 const cors = require("cors");

const mongoDB = require("./db");
const { mongo } = require("mongoose");
const app = express();

// app.use(cors());

console.log("In index.js");

app.get("/",(req,res)=>{
    res.end("Hello test" );
})

mongoDB();


app.use("/api/",usercreated);

app.listen(5000,()=>{
    console.log("server created");
})