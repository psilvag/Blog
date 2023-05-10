
const postsServices=require('./posts.services')
const router=require('express').Router()
const passportJWT=require('../../middleware/auth.middleware')

router.route('/')
  .get(postsServices.getAllPosts)
  .post(passportJWT.authenticate('jwt',{session:false}),postsServices.postNewPost)
  

module.exports=router