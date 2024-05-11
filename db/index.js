

     
 import mongoose from "mongoose";


 import { Db_Name } from "../src/constants.js";

 // made a function

 const connect_Db = async () => {


    try {

       const connectionInstance = await mongoose.connect(`${process.env.MongoDb_uri}/${Db_Name}`)
       
       console.log(`MongoDb connected at host ${connectionInstance.connection.host}`);


    } catch (error) {

        console.log("error",  error);

        //nodejs provide us one method for exit

        process.exit(1)


        
    }






 }





    

  export default connect_Db


