 //si el usuario ya esta en la base de datos
 const User = require('../models/userModel')
 

 const emailExist = async (email)=>{
   const search = await User.findOne({email})
   //search.length !==0
   if (search) {
     throw new Error(`El usuario ${email} ya existe`)
     
   }
   return false
 }


 module.exports={
   emailExist
 }