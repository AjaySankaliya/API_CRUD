const express=require('express')
const mongoose=require('mongoose')
const UserRoutes=require('./routes/user_route')

const app=express()

app.use(express.json())

mongoose
.connect('mongodb://localhost:27017/crud_user')
.then(()=>console.log("database connected"))
.catch((err)=>console.log(err))

app.use('/user',UserRoutes)

app.listen(3001,()=>{
    console.log("server have running on port 3001")
})