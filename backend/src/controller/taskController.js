import Task from "../models/Task.js";


export const getAll = async(req, res) => {

    try {
        const tasks = await Task.find().sort({createdAt: 'desc'});
        res.status(200).json(tasks);
    } catch (error) {
        console.error("Loi khi goi get All Task", error);
        res.status(500).json({message: "Loi he thong"});
    }
}
   

export const addTask= async (req,res) =>{
    try {
        const {title} = req.body;
        const task = new Task({title});

        const newTask = await task.save();
        res.status(201).json({message: "Add successfull"});
    } catch (error) {
    console.error("Loi khi goi get Create Task", error);
    res.status(500).json({message: "Loi he thong"});
}
};

    

export const updateTask = async (req,res) =>{
    try {
    const{title,status, completeAt} = req.body;
    const updatedTask = await Task.findByIdAndUpdate(
    req.params.id,

    {
        title,
        status,
        completeAt
    },
    {
        new: true
    })
    if ( !updatedTask){
        return res.status(404).json({message: "Nhiem vu khong ton tai"})
    }
        res.status(200).json(updatedTask)
    } catch (error) {
        console.error("Loi khi goi get Update Task", error);
        res.status(500).json({message: "Loi he thong"});
    }
}
    

export const deleteTask = async (req,res) =>{
    try {
        const deleteTask = await Task.findByIdAndDelete(req.params.id)
        if ( !deleteTask){
            return res.status(404).json({message:"Khong tim thay"});
        }
        res.status(200).json(deleteTask);
    } catch (error) {
        console.error("Loi khi goi get Delete Task", error);
        res.status(500).json({message: "Loi he thong"});
    }
}
    
