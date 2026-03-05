import express from 'express';
import mongoose from 'mongoose';
import {fileURLToPath} from 'url'
import { dirname } from 'path';
import path from 'path';
import { title } from 'process';
import { type } from 'os';
import { timeStamp } from 'console';
const PORT = 3636;



const __filename = fileURLToPath(import.meta.url)
const  __dirname = dirname(__filename)
const app = express();
const connectionUrl = "mongodb://localhost:27017/todoDB"



mongoose.connect(connectionUrl)
.then(()=>console.log("database connect successfull"))
.catch((err)=>console.log(err.message))
app.set("view engine","ejs");

const todoSchema = mongoose.Schema({
    title:{type:String , required: true},
    desc:String
},{timeStamp:true})
const todo =mongoose.model("todo",todoSchema);
app.use(express.static(path.join(__dirname,"public")))
app.get("/",(req,res,next)=>{
    try {
        res.render("index",{title:"Home page"});
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})


app.get("/add-todo",(req,res,next)=>{
    try {
        res.render("newTodo",{title:"Add todo"});
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})
app.get("/update-todo",(req,res,next)=>{
    try {
        res.render("updateTodo",{title:"Update todo"});
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})
app.get("/delete-todo",(req,res,next)=>{
    try {
        res.render("deleteTodo",{title:"Delete todo"});
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})
app.listen(PORT,()=>console.log(`Server is running in port${PORT}`));