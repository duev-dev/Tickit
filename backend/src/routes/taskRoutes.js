import express from 'express'
import { getAll,addTask,updateTask,deleteTask } from '../controller/taskController.js';
const route = express.Router();

route.get("/", getAll);
route.post("/",addTask);
route.put("/:id",updateTask );
route.delete("/:id", deleteTask);
export default route;
//sa123456
//mongodb+srv://Tickit:sa123456@cluster0.8945xlo.mongodb.net/?appName=Cluster0