

 const likesControllers=require('./likes.controllers')

 const getAllLikesFromPost=(req,res)=>{
    const id=req.params.id
    likesControllers.findAllLikesfromPost(id)
    .then(data=>{
        if(data){
            res.status(200).json({
                count:data.length,
                users:data
            })
        }
        else{
            res.status(404).json({
            message:`Invalid ID`
        }) 
        }
      
    })
    .catch(err=>{
        res.status(400).json({
            message:err.message
        })
    })
    
}


const postLike=(req,res)=>{
    const userId=req.user.userId 
    const postId=req.params.postId
    likesControllers.createLike({userId,postId})
    .then(data=>{
        if(data)
        {
            res.status(201).json({
                message:'You like this post'
            })
        }
        else{
            res.status(200).json({
                message:'You dont like this post anymore'
            })
        }
    })
    .catch(err=>{
        res.status(400).json({
            message:err.message
        })
    })
}


module.exports={
   getAllLikesFromPost,
   postLike
}
