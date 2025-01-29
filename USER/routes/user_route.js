const express=require('express')
const router=express.Router()
const {addUser,getAllUser,getUserById,deleteUser,updateUser}=require('../controller/user_controller')

router.post('/create',addUser)
router.get('/find',getAllUser)
router.get("/find/:id",getUserById)
router.delete('/delete/:id',deleteUser)
router.put('/update/:id',updateUser)

module.exports=router