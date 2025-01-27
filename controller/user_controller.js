const User=require('../models/user_model')

const addUser=async(req,res)=>{
    const data=req.body
    try {
        const user=new User(data)
        const savesUser=await user.insertMany()
        res.status(201).json(savesUser)
    } catch (err) {
        res.status(400).json({error:err.message})
    }
}

const getAllUser=async(req,res)=>{
    try {
        const user=await User.find()
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json({error:err.message})
    }
}

const getUserById=async(req,res)=>{
    const {id} =req.params
    try {
        const user=await User.findById(id)
        res.status(200).json(user)
    } catch (err) {
        res.status(400).json({error:err.message})
    }
}

const deleteUser=async(req,res)=>{
    const {id} =req.params
    try {
        const user=await User.findByIdAndDelete(id)
        res.status(200).json(user)
    } catch (err) {
        res.status(400).json({error:err.message})
    }
}

const updateUser=async(req,res)=>{
    const {id}=req.params
    const data=req.body

    try {
        const updatedUser=await User.findByIdAndUpdate(id,data,{new:true})
        res.status(200).json(updatedUser)
    } catch (err) {
        res.status(400).json({error:err.message})
    }
}

module.exports={addUser,getAllUser,getUserById,deleteUser,updateUser}

