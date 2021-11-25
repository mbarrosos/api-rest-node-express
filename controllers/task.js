const Task = require("../models/task");

async function createTask(req, res){
    const task = new Task();
    const params = req.body;

    task.title = params.title;
    task.description = params.description;
    
    try {
        const taskStore = await task.save();
        if(!taskStore){
            res.status(400).send({ msg: "No se ha creado la tarea"});
        }else{
            res.status(200).send({ task: taskStore})
        }
    } catch (error) {
        res.status(500).send(error);    
    }
}

async function getTasks(req, res){
    try {
        const tasks = await Task.find({completed: false}).sort({ created_at: -1});
        if(!tasks){
            res.status(400).send({ msg: "No se encontraron tareas"});
        }else{
            res.status(200).send(tasks);
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

async function getTask(req, res){
    const idTask = req.params.id;

    try {
        const task = await Task.findById(idTask);
        if(!task){
            res.status(400).send({msg : "No se encontró la tarea"});
        }else{
            res.status(200).send(task);
        }

    } catch (error) {
        res.status(500).send(error)
    }
}

async function updateTask(req, res){
    const idTask = req.params.id;
    const params = req.body;
    
    try {
        const taskUpdate = await Task.findByIdAndUpdate(idTask, params);
        if(!taskUpdate){
            res.status(400).send({msg: "La tarea a actualizar no existe"});
        }else{
            res.status(200).send({msg: "Tarea actualizada correctamente"});
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

async function deleteTask(req, res){
    const idTask = req.params.id;

    try {
        const taskDelete = await Task.findByIdAndDelete(idTask);
        if (!taskDelete) {
            res.status(400).send({msg: "La tarea a eliminar no existe"});
        }else{
            res.status(200).send({msg: "Tarea eliminada correctamente"});
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    createTask,
    getTasks,
    getTask,
    updateTask,
    deleteTask,
}