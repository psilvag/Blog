

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

const getAllPostsByCategoryId=(req,res)=>{
    const id=req.params.id
    postsControllers.findAllPostsByCategoryId(id)
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
    
    postsControllers.createPost({title,content,categoryId,userId})
    .then(data=>{
        res.status(201).json(data)
    })
    .catch(err=>{
        res.status(400).json({
            message:err.message,
            fields:{
              title:'string',
              content:'text'
          
            }
        })
      })

}
// require role admin
const patchPost = (req, res) => {
    const id = req.params.id
    const {title,content}=req.body
    postsControllers.patchPost(id,{title,content})
        .then((data) => {
            if(data){
                res.status(200).json(data)
            } else {
                res.status(404).json({message: `Post with id:${id}, Not Found`})
            }
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
}

// require role admin
const deletePost = (req, res) => {
    const id = req.params.id
    postsControllers.deletePost(id)
        .then((data) => {
            if(data){
                res.status(204).json()
            } else {
                res.status(404).json({message: `Post with id:${id}, Not Found`})
            }
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
}

module.exports={
    getAllPosts,
    getAllPostsByCategoryId,
    postNewPost,
    patchPost,
    deletePost
}