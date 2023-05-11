

const router=require('express').Router()
const passportJWT=require('../../middleware/auth.middleware')
const roleMiddleware=require('../../middleware/role.middleware')

const postsServices=require('./posts.services')
const commentsServices=require('../comments/comments.services')
const likesServices=require('../likes/likes.services')


//-------------------------------------GET and POST posts--------------------------------------- 
router.route('/')
  .get(postsServices.getAllPosts)
  .post(passportJWT.authenticate('jwt',{session:false}),postsServices.postNewPost)

//------------------------------PATCH and DELETE posts (require role)--------------------- 
router.route('/:id')
.patch(passportJWT.authenticate('jwt',{session:false}), roleMiddleware, postsServices.patchPost)
.delete(passportJWT.authenticate('jwt',{session:false}), roleMiddleware, postsServices.deletePost)

//-----------------------GET and POST comments in POST id--------------------------------------- 
router.route('/:id/comments')
.get(passportJWT.authenticate('jwt',{session:false}),commentsServices.getAllComments)
.post(passportJWT.authenticate('jwt',{session:false}),commentsServices.postComment)

//-----------------------PATCH and DELETE comments in POST id (require role)--------------- 
router.route('/:id/comments/:id')
.patch(passportJWT.authenticate('jwt',{session:false}), roleMiddleware, commentsServices.patchComment)
.delete(passportJWT.authenticate('jwt',{session:false}), roleMiddleware, commentsServices.deleteComment)

//---------------------------------GET and POST likes in POST ID ----------------------------- 
router.route('/:id/likes')
.get(likesServices.getAllLikesFromPost)
.post(passportJWT.authenticate('jwt',{session:false}),likesServices.postLike)




module.exports=router