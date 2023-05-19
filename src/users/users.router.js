

const router=require('express').Router()
const passportJWT=require('../../middleware/auth.middleware')
const roleMiddleware=require('../../middleware/role.middleware')
const usersServices=require('./users.services')
const postsServices=require('../posts/posts.services')
const commentsServices=require('../comments/comments.services')

//CREATE A NEW USER AND LIST ALL USERS --->(require login to list all users)
 router.route('/')
.get(passportJWT.authenticate('jwt',{session:false}),usersServices.getAllUsers)   
.post(usersServices.postUser)

// USER- MY INFO 
router.route('/me')
.get(passportJWT.authenticate('jwt',{session:false}),usersServices.getMyUser)
.patch(passportJWT.authenticate('jwt',{session:false}),usersServices.patchMyuser)
.delete(passportJWT.authenticate('jwt',{session:false}),usersServices.deleteMyUser)

// MY POSTS
router.get('/me/posts',passportJWT.authenticate('jwt',{session:false}),postsServices.getAllMyPosts)

//GET POSTS I LIKE
router.get('/me/posts/likes',passportJWT.authenticate('jwt',{session:false}),postsServices.getPostsILike)


//PATCH AND DELETE MY POST BY ID
router.route('/me/posts/:id')
.patch(passportJWT.authenticate('jwt',{session:false}),postsServices.patchMyPost)
.delete(passportJWT.authenticate('jwt',{session:false}),postsServices.deleteMyPost)

//PATCH AND DELETE MY OWN COMMENTS IN THE POST 
router.route('/me/comments/:comId')
.patch(passportJWT.authenticate('jwt',{session:false}),commentsServices.patchMyComment)
.delete(passportJWT.authenticate('jwt',{session:false}),commentsServices.deleteMyComment)

//----------------------------- ROLE ADMIN ---------------------------------------------------
//PATCH AND DELETE  COMMENTS 
router.route('/me/allcomments/:id')
.patch(passportJWT.authenticate('jwt',{session:false}),roleMiddleware, commentsServices.patchComment)
.delete(passportJWT.authenticate('jwt',{session:false}), roleMiddleware, commentsServices.deleteComment)

router.get('/:id',passportJWT.authenticate('jwt',{session:false}),usersServices.getUserById)
router.patch('/:id',passportJWT.authenticate('jwt',{session:false}),roleMiddleware,usersServices.patchUser)
router.delete('/:id',passportJWT.authenticate('jwt',{session:false}),roleMiddleware,usersServices.deleteUser)

module.exports=router
