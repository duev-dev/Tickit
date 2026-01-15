import express, { request, response } from 'express';
import route from './routes/taskRoutes.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001 ;

connectDB();

app.use(express.json());

app.use("/api/tasks", route);

app.listen(PORT, () => {
    console.log("Server start on 5001");
});