import { Todo } from '../model/todo.js';
import express from 'express';
import { 
    homeController,
    addController,
    updateController,
    deleteController,
    addformController,
    updatefromController,
    deletefromController
} from '../controllers/todo.js';



//router
const router = express.Router();
router.get("/",homeController)

router.get("/add-todo",addController)

router.get("/update-todo",updateController)

router.get("/delete-todo",deleteController)

router.post("/add-todo",addformController)

router.post("/update-todo/:id",updatefromController)

router.get("/confirm-delete",deletefromController)

export default router;