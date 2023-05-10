const { Sequelize } = require("sequelize")

const config =require('../../config')

const db=new Sequelize(config.dB.dbConnectionString,{
    dialect:'postgres',
 })

module.exports=db 


 