

const dotenv=require('dotenv')

if(process.env.NODE_ENV==="production")
{
dotenv.config({
   path:'.env.production'
})
}else{
   dotenv.config({
    path:'.env.development'  
   })
}

module.exports={
   api:{
    port:process.env.PORT || 3000,
    jwt_secret:process.env.JWT_SECRET
   },
   dB:{
    dbConnectionString:process.env.DATABASE_URL
   }

}




