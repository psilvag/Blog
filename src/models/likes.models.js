
const  {DataTypes}=require('sequelize')
const db=require('../utils/databse')

const Users=require('./users.models')
const Posts=require('./post.models')

const Likes= db.define('likes',{
   id:{
       type:DataTypes.UUID,
       primaryKey:true
   },
   userId:{
      type:DataTypes.UUID,
      references:{
       key:'id',
       model:Users
      }
   },
   postId:{
       type:DataTypes.UUID,
       references:{
           key:'id',
           model:Posts
    }
   }
})
module.exports=Likes
