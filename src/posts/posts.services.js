

const postsControllers=require('./posts.controllers')

const getAllPosts=(req,res)=>{
    postsControllers.findAllPosts()
    .then(data=>{
    res.status(200).json(data)
    })
    .catch(err=>{
        res.status(400).json({
            message:err.message
        })
    })
}

const postNewPost=(req,res)=>{
    const userId=req.user.id
    const {title,content,categoryId}=req.body
    
    postsControllers.createPost({title,content,coverUrl,categoryId,userId})
    .then(data=>{
        res.status(201).json(data)
    })
    .catch(err=>{
        res.status(400).json({
            message:err.message,
            fields:{
              title:'string',
              content:'text',
              coverUrl:'string'
            }
        })
      })

}


module.exports={
    getAllPosts,
    postNewPost
}