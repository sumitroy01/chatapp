import mongoose from "mongoose"

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    fullName:{
        type:String,
        required:true,
        
    },
    password:{
        required:true,
        minlength:8,
        type:String,
    },profilepic:{
        default:" ",
        type:String,
    }




},{timestamps:true}

);

const user=mongoose.model("users",userSchema);


export default user;
