const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");


const cors=require("cors");

const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) 
app.use(cors()) 

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.DB_URL,{
    useNewUrlParser : true,
    useUnifiedTopology: true,
})
.then(console.log("Connected to MongoDB"))
.catch(err=>console.log(err));

const PORT = process.env.PORT || '5000';

const boardRouter = require("./routes/board");
app.use("/api",boardRouter);

app.listen(PORT, ()=>{
    console.log("Backend is running.");
});