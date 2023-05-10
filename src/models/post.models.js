
// CARDINALITY: 1 category has a lot post
const { DataTypes } = require('sequelize')
const db=require('../utils/databse')
const Categories=require('./categories.models')
const Users=require('./users.models')

const Posts =db.define('posts',{
    id:{
        type:DataTypes.UUID,
        primaryKey:true
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false
       
    },
    content:{
        type:DataTypes.TEXT,
        allowNull:false
        
    },
    userId:{
       type:DataTypes.UUID,
       references:{
        key:'id',
        model:Users
       }
    },
   categoryId:{
        type:DataTypes.INTEGER,
        allowNull:true,
        references:{
            key:'id', 
            model:Categories   
        }
        
    }
    
})


module.exports=Posts