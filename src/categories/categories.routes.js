
const router=require('express').Router()
const roleMiddleware=require('../../middleware/role.middleware')
const passportJWT=require('../../middleware/auth.middleware')
const postsServices=require('../posts/posts.services')
const categoriesServices=require('./categories.services')


router.route('/')
.get(categoriesServices.getAllCategories)
.post(passportJWT.authenticate('jwt',{session:false}),roleMiddleware,categoriesServices.postCategory)

router.route('/:id')
.patch(passportJWT.authenticate('jwt',{session:false}),roleMiddleware,categoriesServices.patchCategory)
.delete(passportJWT.authenticate('jwt',{session:false}),roleMiddleware,categoriesServices.deleteCategory)

 router.route('/:id/posts')
 .get(postsServices.getAllPostsByCategoryId)
 
 
module.exports=router