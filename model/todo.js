import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
    title:{type:String , required: true},
    desc:String
},{timestamps:true})
export const Todo = mongoose.model("todo",todoSchema);
