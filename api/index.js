const express = require("express");
const app= express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute= require("./Routs/auth")



dotenv.config();
app.use(express.json());
 


mongoose.connect(process.env.MONGO_URL,
   {
       useNewUrlParser:true,
       useUnifiedTopology:true,
    //    useCreateIndex:true,
}

    ).then(console.log("MDB connected")).catch((err)=>{console.log("error")});

 

app.use("/api/auth",authRoute);
 


app.listen(5000,()=>{
    console.log("express is runing")
}
);