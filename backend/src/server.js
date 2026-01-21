import express, { request, response } from 'express';
import route from './routes/taskRoutes.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001 ;

connectDB().then(app.listen(PORT, () => {
    console.log("Server start on 5001");
}));
//middial ware

app.use(cors({origin : "http://localhost:5173"}))

app.use(express.json());

app.use("/api/tasks", route);
