// se obtiene todas las tablas 
const Categories=require('./categories.models')
const Users=require('../models/users.models')
const Posts=require('./post.models')
const Comments=require('./comments.models')
const Likes=require('./likes.models')
const initModels=()=>{
  

    //================Category-Posts======================

    Categories.hasMany(Posts)     
    Posts.belongsTo(Categories)  
    
    //================Users-Posts======================
    Users.hasMany(Posts)
    Posts.belongsTo(Users)

  //================Users-Comments======================
    Users.hasMany(Comments)
    Comments.belongsTo(Users)

  //================Users-likes======================
    Users.hasMany(Likes)
    Likes.belongsTo(Users)

  //================Posts-Comments======================
    Posts.hasMany(Comments)
    Comments.belongsTo(Posts)

      //================Likes-Posts======================
    Posts.hasMany(Likes)
    Likes.belongsTo(Posts)
   

}

module.exports=initModels