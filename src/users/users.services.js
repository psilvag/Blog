
const usersControllers=require('./users.controllers')


const getAllUsers = (req,res) => {
    usersControllers.findAllUsers()
    .then(data=>{
      res.status(200).json(data)
    })
    .catch(err=>{
      res.status(400).json({
          message:err.message
      })
    })
  
  }
  
  const getUserById = (req,res) => {
      const id=req.params.id 
      usersControllers.findUserById(id)
      .then(data=>{
          if(data)
          {
              res.status(200).json(data)
          }
          else{
              res.status(404).json({
                  message:err.message
              })
          }
         
        })
        .catch(err=>{
          res.status(400).json({
              message:err.message
          })
        })
  }
  
  const postUser = (req,res) => {
      const {firstName,lastName,userName,email,password,age,country}=req.body 
      usersControllers.createUser({firstName,lastName,userName,email,password,age,country})
      .then(data=>{
          res.status(201).json(data)
        })
        .catch(err=>{
          res.status(400).json({
              message:err.message,
              fields:{
                firstName:'string',
                lastName:'string',
                userName:'string',
                email:'string',
                password:'string',
                age:'number',
                country:'BOL'
              }
          })
        })
      
  }
   // require rol middleware
  const patchUser = (req, res) => {
    const id = req.params.id 
    const {firstName, lastName, userName, email,age, country,role} = req.body

    usersControllers.updateUser(id, {firstName, lastName, userName,email, age, country,role})
        .then((data) => {
            if(data){
                res.status(200).json({message: 'User Modified Succesfully'})
            } else {
                res.status(401).json({message: 'Invalid ID'})
            }
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
}

 // require rol middleware
const deleteUser = (req, res) => {
    const id = req.params.id;
    usersControllers.deleteUser(id)
        .then((data) => {
            if(data){
                res.status(200).json({message: 'User Deleted Succesfully'})
            } else {
                res.status(401).json({message: 'Invalid ID'})
            }
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
}

   //==========================MY USER===============================

  const getMyUser=(req,res)=>{
    const id= req.user.id
    usersControllers.findUserById(id)
    .then(data=>{             
       res.status(200).json(data)
    })
    .catch(err=>res.status(400).json({
      message:err.message
    }))
  }

const patchMyuser=(req,res)=>{
   const id=req.user.id
   const{firstName,lastName,country,age,userName}=req.body
   usersControllers.updateUser(id,{firstName,lastName,country,age,userName})
   .then(()=>{    
    res.status(200).json() 
   })
   .catch(err=>{
    res.status(400).json({
      message:err.message
    })
   })
} 

const deleteMyUser=(req,res)=>{
  const id=req.user.id
   usersControllers.deleteUser(id)
  .then(()=>{ 
   res.status(204).json({
    message:'Your user was succesfuly deleted'
   })
  })
  .catch(err=>{
   res.status(401).json({
     message:err.message
   })
  })
}



module.exports={
    getAllUsers,
    getUserById,
    postUser,
    patchUser,
    deleteUser,
    getMyUser,
    patchMyuser,
    deleteMyUser
}