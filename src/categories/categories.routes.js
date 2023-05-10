
const router=requrie('express').Router()
const roleMiddleware=require('../../middleware/role.middleware')
const passportJWT=require('../../middleware/auth.middleware')

const categoriesServices=require('./categories.services')


router.route('/')
.get(categoriesServices.getAllCategories)
.post(passportJWT.authenticate('jwt',{session:false}),categoriesServices.postCategory)

router.route('/:id')
.patch(passportJWT.authenticate('jwt',{session:false}),roleMiddleware,categoriesServices.patchCategory)

.delete(passportJWT.authenticate('jwt',{session:false}),roleMiddleware,categoriesServices.deleteCategory)

module.exports=router