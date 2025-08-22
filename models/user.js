import mongoose from "mongoose";
const userschema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    contact:{type:String,required:true},

});
const UserModel = mongoose.models.User || mongoose.model("User", userschema);

export default UserModel;