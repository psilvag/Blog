

const Posts=require('../models/post.models')
const uuid=require('uuid')
const Categories=require('../models/categories.models')
const Users=require('../models/users.models')

const findAllPosts=async()=>{
    const data =await Posts.findAll({
        attributes:{
            exclude:['categoryId','userId']
        },
        include:[
            {
                model:Categories  
            },
            {
                model:Users, 
                attributes:{  
                    exclude:['email','password','role','age']
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


module.exports={
    findAllPosts,
    createPost
}