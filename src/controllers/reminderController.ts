import {Request , Response} from 'express';
import reminderService from '../services/reminderService';
class ReminderController{
    async createReminder(req:Request,res:Response){
        try{
            const reminderData = req.body;
        const reminder = await reminderService.createReminder(reminderData);
        if(!reminder){
            return res.status(400).json({error:"reminder not created"});
        }
        res.status(201).json({createdreminder:reminder});
        }
        catch(error:any){
            res.status(400).json({error:error.message});
        } 
    }

    async getAllReminder(req:Request,res:Response){
        try 
        {
            const reminder = await reminderService.getAllReminder();
            res.status(200).json({reminders:reminder});
        }
        catch(error:any){
            res.status(500).json({error:error.message});
        }
    }

    async getReminderById(req:Request<{id:string}>,res:Response){
        try{
            const id = parseInt(req.params.id,10);
            const reminder = await reminderService.getReminderById(id);
            if(!reminder){
                return res.status(404).json({error:"reminder not found"});
            }
            res.status(200).json({reminder:reminder});
        }
        catch(error:any){
            res.status(500).json({error:error.message});
        }
    }

    async updateReminder(req:Request<{id:string}>,res:Response){
        try{
            const id = parseInt(req.params.id,10);
            const updatedReminder = await reminderService.updateReminder(id,req.body);
            if(!updatedReminder){
                return res.status(404).json({error:"reminder not found to update"});
            }
            res.status(200).json({updated:updatedReminder});
        }catch(error:any){
            res.status(500).json({error:error.message});
        }
    }
    async deleteReminder(req:Request<{id:string}>,res:Response){
        try{
            const id = parseInt(req.params.id,10);
            const deletedReminder = await reminderService.deleteReminder(id);
            // if(!deletedReminder){
            //     return res.status(404).json({error:"reminder not found to delete"});
            // }
            res.status(200).json({deleted:deletedReminder});
        }catch(error:any){
            res.status(500).json({error:error.message});
        }

    }
}

const reminderController = new ReminderController();
export default reminderController;