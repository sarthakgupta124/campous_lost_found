import mongoose from "mongoose";
const ItemSchema =new mongoose.Schema({
    name:{type:String},
    contact:{type:String},
    email:{type:String},
    title:{type:String},
    category:{type:String,required:true},
    description:{type:String},
    date:{type:Date},
    place:{type:String},
    imageUrl:{type:String},
});
const ItemModel = mongoose.models.Item || mongoose.model("Item", ItemSchema);

export default ItemModel;
