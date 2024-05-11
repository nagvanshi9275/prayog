


import {mongoose, Schema} from "mongoose";

import bcrypt from "bcrypt";

import jwt from "jsonwebtoken";

// bcrypt is for hashing of password 

// jwt is from tokenazation



const userSchema = new Schema (
    
    
    
    {


      userName: {

       type: String,
       required: true,
       unique: true,
       lowercase: true,
       trim: true,
       index: true



      },


      email: {

        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    
 
 
 
       },

       fullName: {

        type: String,
        required: true,
        trim: true,
        index: true,
 
 
 
       },

             Avatar: {

        type: String,
        required: true,
   
    
 
 
 
       },
     
       CoverImage: {

        type: String,
        
        
    
 
 
 
       },

         watchHistory: [

          {

            type: Schema.Types.ObjectId,
            ref: "Video",



          }




         ],


         password: {

              type: String,
              required: [true, "unable to make it"],



         },

         refreshToken: {

          type: String



         },


        // {

     //  timestamps : true


       //  },
         
          






    },

    {

  timestamps: true,

    }







)



   /*  userSchema.pre("save", function () {

     if(!this.isModified(password)) return next()

      this.password = bcrypt.hash(this.password, 10)

      next()

  
})

// here on the top you have seen that you have prebuild method save for save your password but now i want to build custom method for this 

userSchema.methods.isPasswordCorrect = async function(password){


    return  await  bcrypt.compare(password, this.password)



}

   */


   // here now we are trying to use the bcrypt basically bcrypt use is for the hashing our password

   userSchema.pre("save", async function () {


       if(!this.isModified(password)) return next()

      this.password = bcrypt.hash(this.password, 10)


       next()
    
   })


   // top code is for the hashing of our password

   // but if i want to confirmation from user we need custimize thing

   userSchema.methods.isPasswordCorrect = async function (password) {

    return await bcrypt.compare(this.password, password)

           
 

    
   }

      userSchema.methods.generateAccessToken = function name(params) {

       return jwt.sign(

            {

           // this is payload means which information i should keep from database
           
           _id: this._id, // you got from mongodb
            
           email: this.email,

           userName: this.userName,

           fullName: this.fullName





            },
           
            process.env.ACCESS_TOKEN_SECRET,

            {

            expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
           




            }





        )
        
      }

      userSchema.methods.generateRefreshToken = function () {


             jwt.sign(

               {

               _id: this._id,



               },



                  process.env.REFRESH_TOKEN_SECRET,

                 {


                  expiresIn: process.env.REFRESH_TOKEN_EXPIRY


                 }







             )







        
      }





export const User = mongoose.Schema("User", userSchema)
 













