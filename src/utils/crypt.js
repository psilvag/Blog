
const bcrypt=require('bcrypt')

//Get plain text
const hashPass=(plainPassword)=>{  
    return bcrypt.hashSync(plainPassword,10)
}

const comparePass=(plainPassword,hashPassword)=>{
    return bcrypt.compareSync(plainPassword,hashPassword)
}


module.exports={
    hashPass,
    comparePass
}

