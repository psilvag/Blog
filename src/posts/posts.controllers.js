

const Posts=require('../models/post.models')
const uuid=require('uuid')
const Categories=require('../models/categories.models')
const Users=require('../models/users.models')
const Likes=require('../models/likes.models')


const findAllPosts=async()=>{
    const data =await Posts.findAll({
        attributes:{
            exclude:['categoryId','userId']
        },
        include:[
            {
                model:Categories,
                attributes:['name']  
            },
            {
                model:Users, 
                attributes:{  
                    exclude:['email','password','role','age','userName','createdAt','updatedAt']
                }
    
            }
        ],
    })
    
    return data
}
const findAllPostsByCategoryId=async(id)=>{
    const data =await Posts.findAll({
        attributes:{
            exclude:['categoryId','userId']
        },
        where:{
            categoryId:id 
        },
        include:[
            {
                model:Categories,
                attributes:['name']  
            },
            {
                model:Users, 
                attributes:{  
                    exclude:['email','password','role','age','userName','createdAt','updatedAt']
                }
    
            }
        ],
    })
    
    return data
}

const createPost=async(obj)=>{
  const data= await Posts.create({
    id:uuid.v4(),
    title:obj.title,
    content:obj.content,
    userId:obj.userId,
    categoryId:obj.categoryId

  })
  return data
}

const patchPost=async (id, obj)=>{
    const data=await Posts.update(obj,{
        where:{
            id:id
        }
    })
    return data[0]
}

const deletePost=async (id)=>{
    const data=await Posts.destroy ({
        where:{
            id:id
        }
    })
    return data
}

// ------------------------MY POSTS--------------------

const findMyOwnPosts=async(userId)=>{
    const data=await Posts.findAll({
        attributes:{
            exclude:['userId','categoryId','createdAt','updatedAt']
        },
        where:{
            userId:userId
        },
        include:[
        {
            model:Users,
            attributes:{
                exclude:['id','age','role','email','password','userName','country','createdAt','updatedAt']
            }
        },
        {
            model:Categories,
            attributes:['name']
        }
          
        ]
    })
    return data
}

const patchMyPost=async(userId,postId,obj)=>{
    const data=await Posts.update(obj,{
        where:{
            id:postId,
            userId:userId
        }
    })
    return data[0]
}

const deleteMyPost=async(userId,postId)=>{
    const data=await Posts.destroy({
        where:{
            id:postId,
            userId:userId
        }
    })
    return data
}

// THE POSTS I LIKE

const findPostsILike=async(userId)=>{
    const data= await Likes.findAll({
        where:{
                userId:userId
        },   
         include:{
            model:Posts,
            attributes:['title'],
          
         } 
        
      
    })
    return data.map(like=>like.post)
}





module.exports={
    findAllPosts,
    findAllPostsByCategoryId,
    createPost,
    patchPost,
    deletePost,
    findMyOwnPosts,
    patchMyPost,
    deleteMyPost,
    findPostsILike

}