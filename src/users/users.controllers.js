
const Users=require('../models/users.models')
const uuid=require('uuid')
const { hashPass } = require('../utils/crypt')

const findAllUsers=async()=>{
    const data= await Users.findAll()
    return data
}

const findUserById = async (id) => {
    const data = await Users.findOne({
        where: {
            id: id
        },
        attributes:{
            exclude:['password','role','createdAt','updatedAt']
        }
    })
    return data
}

const createUser= async(obj)=>{
    const data= await Users.create({
      id:uuid.v4(),
      firstName:obj.firstName,
      lastName:obj.lastName,
      userName:obj.userName,
      email:obj.email,
      password:hashPass(obj.password),
      age:obj.age,
      country:obj.country
   })
   return data
}


const updateUser = async (id, obj) => {
    const data = await Users.update(obj, {
        where: {
            id: id
        }
    })
    return data[0] 
}

const deleteUser = async (id) => {
    const data = await Users.destroy({
        where: {
            id: id
        }
    })
    return data

}


// database search
const findUserByEmail=async(email)=>{
    const data= await Users.findOne({
        where:{
            email:email
        }
    })
    return data
}

module.exports={
    findAllUsers,
    findUserById,
    createUser,
    findUserByEmail,
    updateUser,
    deleteUser
}
