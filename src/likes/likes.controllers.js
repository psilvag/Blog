

const Likes=require('../models/likes.models')
const uuid= require('uuid')
const Users=require('../models/users.models')


const findAllLikesfromPost=async(id)=>{
    const data= await Likes.findAll({
        where:{
            postId:id
        },
        include:{
            model:Users,
                attributes:['firstName','lastName']
        }
    })
    return data.map(like=>like.user)
}

const createLike=async(obj)=>{

    const validateLike= await Likes.findOne({
        where:{
            userId:obj.userId,
            postId:obj.postId
        }  
       
    })

    if(validateLike){
     const value=await Likes.destroy({
        where:{
            id:validateLike.id
        }
     })
     if(value){
        return null
     }
    }
    
    const data= await Likes.create({
        id:uuid.v4(),
        userId:obj.userId,
        postId:obj.postId
    })
    return data
}

module.exports={
    findAllLikesfromPost,
    createLike
}
