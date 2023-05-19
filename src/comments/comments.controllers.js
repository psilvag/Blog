
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
                exclude:['id','userName','email','password','age','country','role']
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

// MY COMMENTS
const updateMyComment=async (userId,commentId ,obj)=>{
    const data=await Comments.update(obj,{
        where:{
            id:commentId,
            userId:userId
        }
    })
    return data[0]
}

const destroyMyComment=async (userId,commentId)=>{
    const data=await Comments.destroy({
        where:{
            id:commentId,
            userId:userId
        }
    })
    return data
}


module.exports={
    findAllComments,
    createComment,
    patchComment,
    deleteComment,
    updateMyComment,
    destroyMyComment

}