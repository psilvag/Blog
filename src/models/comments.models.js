
 const  {DataTypes}=require('sequelize')
 const db=require('../utils/databse')

const Users=require('./users.models')
const Posts=require('./post.models')

const Comments= db.define('comments',{
    id:{
        type:DataTypes.UUID,
        primaryKey:true
    },
    content:{
        type:DataTypes.STRING,
        allowNull:false
       
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
module.exports=Comments
