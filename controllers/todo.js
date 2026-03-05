import moment from 'moment';
import { Todo } from '../model/todo.js';


const homeController = async (req,res,next)=>{
    try {
        const todos = await Todo.find({})
        res.locals.moment = moment;
        res.render("index",{title:"Home page",todos});
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const addController = (req,res,next)=>{
    try {
        res.render("newTodo",{title:"Add todo"});
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
const updateController = async(req,res,next)=>{
    try {
        const {id} = req.query;
        const todo = await Todo.findById(id);
        res.render("updateTodo",{title:"Update todo",todo});
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
const deleteController = (req,res,next)=>{
    try {
        const {id} = req.query;
        res.render("deleteTodo",{title:"Delete todo",id});
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
const addformController = async(req,res,next)=>{
    try {
       
        const {title,desc} = req.body;
        const newTodo = new Todo({title,desc})
        await newTodo.save();
        res.redirect("/")
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
}

const updatefromController = async (req,res,next)=>{
    try {
        const {id} = req.params;
        const { title , desc } = req.body;
        const todo = await Todo.findById(id);
        todo.title = title;
        todo.desc = desc ;
        if(!todo){
            res.status(404).json({message:"todo not found"})
        }
        await todo.save();
        res.redirect("/")
    } catch (error) {
        res.status(500).json({message:error.message})   
    }
}
const deletefromController = async (req,res,next)=>{
    try {
        const {id,confirm} = req.query;
        if(confirm ==="yes"){
            await Todo.findByIdAndDelete(id);
        }
        res.redirect("/");
    } catch (error) {
        res.status(500).json({message:error.message})   
    }
}
export {
    homeController,
    addController,
    updateController,
    deleteController,
    addformController,
    updatefromController,
    deletefromController
}