import express from 'express';
import {fileURLToPath} from 'url'
import { dirname } from 'path';
import path from 'path';
import { connectDB } from './db/db.js';
import todoRouter from './routes/todo.js';
import dotenv from 'dotenv';


dotenv.config() 
//init app
const app = express();
const __filename = fileURLToPath(import.meta.url)
const  __dirname = dirname(__filename)
//db connection
connectDB();
//view engine
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({extended:true}))
app.use("/",todoRouter)

export {app}