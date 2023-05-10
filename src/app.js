
const express=require('express')
const app=express()
const config=require('../config')
const db=require('./utils/databse')
const initModels=require('./models/init.models')

const usersRouter=require('./users/users.router')
const authRouter=require('../auth/auth.router')
const postsRouter=require('./posts/posts.router')
const categoriesRouter=require('./categories/categories.routes')

//express.json
app.use(express.json())
app.use(cors())
//Verify routes
app.get('/',(req,res)=>{
   res.status(200).json({
    message:'Blog Ok!'
   }) 
})

//Routes
app.use('/api/v1/auth',authRouter)
app.use('/api/v1/users',usersRouter)
app.use('/api/v1/categories',categoriesRouter)
app.use('/api/v1/posts',postsRouter)

// Authenticate and Sync DB
db.authenticate()
.then(()=>{
    console.log('Correct Authenticate')
})
.catch((err)=>{
    console.log(err);
})

db.sync()
.then(()=>{
    console.log('Correct conection DataBase')
})
.catch((err)=>{
    console.log(err);
})

// Executing Relationalts tables
initModels()


// Server listen
app.listen(port,()=>{
    console.log(`Server started at port:${config.api.port}`)
})

