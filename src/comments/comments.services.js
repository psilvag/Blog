

  const commentsControllers=require('./comments.controllers')


  const getAllComments=(req,res)=>{
    const id=req.params.id
    commentsControllers.findAllComments(id)
    .then(data=>{
        res.status(200).json(data)
    })
    .catch(err=>{
        res.status(400).json({
            message:err.message
        })
    })
  }

 const postComment=(req,res)=>{
    const userId=req.user.id
    const postId=req.params.id
    const content=req.body.content
    commentsControllers.createComment({userId,postId,content})
    .then(data=>{
        res.status(201).json(data)
    })
    .catch(err=>{
        res.status(400).json({
            message:err.message
        })
    })
  }

  const patchComment = (req, res) => {
    const id = req.params.id
    const {content}=req.body
   commentsControllers.patchComment(id,{content})
        .then((data) => {
            if(data){
                res.status(200).json(data)
            } else {
                res.status(404).json({message: `Comment with id:${id}, Not Found`})
            }
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
}


const deleteComment = (req, res) => {
    const id = req.params.id
    commentsControllers.deleteComment(id)
        .then((data) => {
            if(data){
                res.status(204).json()
            } else {
                res.status(404).json({message: `Comment with id:${id}, Not Found`})
            }
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
}




  module.exports={
    getAllComments,
    postComment,
    patchComment,
    deleteComment
  }