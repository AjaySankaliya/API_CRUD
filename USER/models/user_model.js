const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:{type:String,require:true},
    age:{type:Number,require:true},
    email:{type:String,unique:true,require:true},
    date:{type:Date,require:true},
}) 

module.exports=mongoose.model('User',userSchema)