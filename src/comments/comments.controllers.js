
const Comments = require('../models/comments.models')
const uuid=require('uuid')
const Users = require('../models/users.models')

const findAllComments= async(id)=>{
    const data= await Comments.findAll({
        attributes:{
            exclude:['userId','postId','createdAt','updatedAt']
        },
        where:{
            postId:id
        },
        include:{
            model:Users,
            attributes:{
                exclude:['userName','email','password','age','country','role']
            }
        }
           
        })
        return data
    }
    
    


const createComment=async (obj)=>{
 const data=await Comments.create({
         id:uuid.v4(),
         content:obj.content,
         userId: obj.userId,
         postId:obj.postId,

        
 })

 return data
}

const patchComment=async (id, obj)=>{
    const data=await Comments.update(obj,{
        where:{
            id:id
        }
    })
    return data[0]
}

const deleteComment=async (id)=>{
    const data=await Comments.destroy({
        where:{
            id:id
        }
    })
    return data
}



module.exports={
    findAllComments,
    createComment,
    patchComment,
    deleteComment
}