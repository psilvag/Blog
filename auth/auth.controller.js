
// usaremos EMAIL para autenticarnos 

const {findUserByEmail}=require('../src/users/users.controllers')
const {comparePass}=require('../src/utils/crypt')


// usamos try catch porque el scope de return es a nivel de la funcion
const checkUserCredential=async(email,password)=>{
   try{
        const user=await findUserByEmail(email)
        const verifyPassword=comparePass(password,user.password)
        if(verifyPassword){
            return user
        }
        return null

   }catch(error){
    return null 
   }
}


module.exports=checkUserCredential
