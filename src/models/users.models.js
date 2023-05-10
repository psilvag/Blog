

const{DataTypes}=require('sequelize')
const db=require('../utils/databse')

const Users=db.define('users',{
    id:{
        type:DataTypes.UUID,
        primaryKey:true
    },
    firstName:{
        type:DataTypes.STRING,
        allowNull:false 
    },
    lastName:{
        type:DataTypes.STRING,
        allowNull:false 
    },
    userName:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
        validate:{
           isEmail:true 
        }
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    age:{
        type:DataTypes.INTEGER,
    },
    role:{
        type:DataTypes.STRING,
        defaultValue:'normal'
    },
    country:{
        type:DataTypes.STRING(3)
    }
})
module.exports=Users