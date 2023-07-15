const mongoose = require("mongoose");


const MONGO_URL  = "mongodb://localhost:27017/test";

const db = mongoose.connection;


const mongoDB = async () =>{
  
    await mongoose.connect(MONGO_URL);

    try{
        console.log("connected database");
    const fetchData = await db.collection("sampleData");
   const data = await fetchData.find().toArray();
    // console.log(data);
    }
    catch(err){
         console.log(err);
    }
}
module.exports = mongoDB;