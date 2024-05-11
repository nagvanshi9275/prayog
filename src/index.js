


//import mongoose from "mongoose";

//import mongoose from "mongoose";

//import { Db_Name } from "./constants.js";

import express from "express";

import dotenv from "dotenv";

import connect_Db from "../db/index.js";

dotenv.config({

   path: './env'

})


connect_Db()

/*

dotenv.config({
 
 path: './env'

 


})


const app = express();


( async () => {

    try {

       await mongoose.connect(`${process.env.MongoDb_uri}/${Db_Name}`)

       app.on("error", (error) => {

        console.log("err", error)

        throw error;


       })

       app.listen(process.env.PORT, () => {

        console.log(`App is listening at ${process.env.PORT}`)




       })
        
    } catch (error) {

        console.log("Error!!:", error); 

        throw error;
        
    }






})()



*/

