const express = require("express");
const app= express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute= require("./Routs/auth")
const path= require("path");



dotenv.config();
app.use(express.json());
 
app.use(express.static(path.join(__dirname + "/public")))

mongoose.connect(process.env.MONGO_URL,
   {
       useNewUrlParser:true,
       useUnifiedTopology:true,
    //    useCreateIndex:true,
}

    ).then(console.log("MDB connected")).catch((err)=>{console.log("error")});

 

app.use("/api/auth",authRoute);
 

const PORT = process.env.PORT || 5000;
app.listen(PORT);