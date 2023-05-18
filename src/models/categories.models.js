
// CARDINALITY: 1 category has a lot post

const { DataTypes } = require('sequelize')
const db=require('../utils/databse')

const Categories =db.define('categories',{
    id:{
        type:DataTypes.UUID,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
        validate:{
            len:[2,100]  // validate 2 and 100 characters on name Category
        }
    }
}
)

module.exports=Categories