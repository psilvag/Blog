
 const {findUserByEmail}=require('../users/users.controllers')
const {comparePass}=require('../utils/crypt')

 const checkUserCredentials=async (email, password)=>{
 try{
    const user= await findUserByEmail(email)
    const verifyPassword= comparePass(password,user.password)
    if(verifyPassword){
        return user
    }
    return null
 }
 catch(error){
    return error
 }
}
module.exports={
    checkUserCredentials
}
 