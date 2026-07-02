import { Request, Response } from 'express';
// import Task from '../models/taskModel';
import taskService from '../services/taskServices';


class TaskController
{
async createTask(req:Request,res:Response){
    try{
        const taskData = req.body;
        const task = await taskService.createTask(taskData);
        if(!task){
            return res.status(400).json({error:"Task not created"});
        }
        res.status(201).json({createdtask: task});
    } catch (error:any) {
        res.status(500).json({ error:error.message });
    }
}
async getAllTasks(req:Request,res:Response){
    try{
        const task = await taskService.getAllTasks();
        // if(!task){
        //     return res.status(404).json({error:"No tasks found"});
        // }
        res.status(200).json({alltasks: task });
    } catch (error:any) {
        res.status(500).json({ error:error.message });
    }
}

async getTaskById(req:Request<{id:string}>,res:Response){
    try{
        const id = parseInt(req.params.id,10);
        const task = await taskService.getTaskById(id);
        if(!task){
            return res.status(404).json({error:`Task with id ${id} not found`});
        }
        res.status(200).json({taskbyid:task});
    }
    catch(error:any){
        res.status(500).json({error:error.message})
    }
}

async updateTask(req:Request<{id:string}>,res:Response){
    try{
        const id = parseInt(req.params.id,10);
        const updatedtask = await taskService.updateTask(id,req.body);
        if(!updatedtask){
            return res.status(404).json({error:"task not found to update"});
        }
        res.status(200).json({updates:updatedtask});
    }catch(error:any){
        res.status(500).json({error:error.message});
    }
}

async deleteTask(req:Request<{id:string}>,res:Response){
    try{
        const id = parseInt(req.params.id,10);
        const deletedtask = await taskService.deleteTask(id);
        // if(!deletedtask){
        //     return res.status(404).json({error:"Task not found to delete"});
        // }
        res.status(200).json({deletetion:deletedtask});
    }catch(error:any){
        res.status(500).json({error:error.message});
    }
}
}

const taskController = new TaskController();
export default taskController;