import express, { json, urlencoded } from "express";
import { config } from "dotenv";
import connectdb from "./helpers/db.js"

config();



const app = express()//express
connectdb();//Database



app.use(json())
app.use(urlencoded({extended: true}));





const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('****Server Started on '+process.env. DEV_MODE +" Mode PORT:"+ PORT+"****")
})