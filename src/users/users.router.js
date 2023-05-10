

const router=require('express').Router()
const passportJWT=require('../../middleware/auth.middleware')
const roleMiddleware=require('../../middleware/role.middleware')
const usersServices=require('./users.services')

//CREATE A NEW USER AND LIST ALL USERS --->(require login to list all users)
 router.route('/')
.get(passportJWT.authenticate('jwt',{session:false}),usersServices.getAllUsers)
.post(usersServices.postUser)

// USER- MY INFO 
router.route('/me')
.get(passportJWT.authenticate('jwt',{session:false}),usersServices.getMyUser)
.patch(passportJWT.authenticate('jwt',{session:false}),usersServices.patchMyuser)
.delete(passportJWT.authenticate('jwt',{session:false}),usersServices.deleteMyUser)

// ROLE ADMIN 
router.get('/:id',usersServices.getUserById)
router.patch('/:id',usersServices.patchUser)
router.delete('/:id',roleMiddleware,usersServices.deleteUser)


module.exports=router
