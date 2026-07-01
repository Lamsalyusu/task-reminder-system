import Task from "../models/taskModel";

class TaskService {
    // async createTask(taskData: { title: string; description: string; dueDate: Date; status?: "pending" | "in-progress" | "completed"; }) {
    //     try {
    //         const task = await Task.create(taskData);
    //         return task;
    //     } catch (error) {
    //         throw new Error(`Error creating task: ${error}`);
    //     }

    async createTask(taskData:{
        title:string;
        description:string;
        dueDate:Date;
        status?:'pending'|'in-progress'|'completed';
    })
    {
        try{
            const task = await Task.create(taskData);
            return task;

        }catch(error){
            if (error instanceof Error) {
                throw new Error(`Error creating task: ${error.message}`);
            }
            throw new Error('Error creating task');
        }
    }

    async getAllTasks() {
        try{
            const tasks = await Task.findAll();
            return tasks;
        }catch(error){
            if (error instanceof Error) {
                throw new Error(`Error fetching tasks: ${error.message}`);
            }
            throw new Error('Error fetching tasks');
        }
    }
    async getTaskById(id:number){
        try{
            const task = await Task.findByPk(id);
            if(!task){
                throw new Error(`Task with id ${id} not found`);
            }
            return task;
        }catch(error){
            if (error instanceof Error) {
                throw new Error(`Error fetching task: ${error.message}`);
            }
            throw new Error('Error fetching task');
        }
    }

    async updateTask(id:number, taskData:{ title?:string; description?:string; dueDate?:Date; status?:'pending'|'in-progress'|'completed'; }){
        try{
            const task = await Task.findByPk(id);
            if(!task){
                throw new Error(`Task with id ${id} not found`);
            }
            return task.update(taskData);
        }catch(error){
            if (error instanceof Error) {
                throw new Error(`Error updating task: ${error.message}`);
            }
            throw new Error('Error updating task');
        }
    }

    async deleteTask(id:number)
    {
        try
        {
            const task = await Task.findByPk(id);
            if(!task)
            {
                throw new Error(`Task with id ${id} not found`);
            }
            return task.destroy();
        }
        catch(error)
        {
            if (error instanceof Error)
                 {
                throw new Error(`Error deleting task: ${error.message}`);
            }
            throw new Error('Error deleting task');
        }
    }
}
const taskService = new TaskService();
export default taskService;