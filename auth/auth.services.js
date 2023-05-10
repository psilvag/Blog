
const checkUserCredential=require('./auth.controller')
const jwt =require('jsonwebtoken')
const jwt_secret=require('.././config').api.jwt_secret

const postLogin=(req,res)=>{
   const {email,password}=req.body
   if(email && password){
    checkUserCredential(email,password)
    .then(data=>{
       if(data)
       {
         const token=jwt.sign({
            id:data.id,
            username:data.username,
            role:data.role
        },jwt_secret)

         res.status(200).json({
            message:'Correct credentials',
            token:token
         })
       }
       else{
         res.status(401).json({
         message:'Invalid credentials'
        })
       }
    })
    .catch(err=>{
        res.status(400).json({
            message:err.message
        })
    })
   }
   else{
     res.status(400).json({
        message:'Missing data',
        fields:{
            email:'example@example.com',
            password:'string'
        } })
   }
}

module.exports={postLogin}

