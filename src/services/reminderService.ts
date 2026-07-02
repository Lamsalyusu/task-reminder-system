// import { error } from "node:console";
import Reminder from "../models/reminderModel";
class ReminderService {
    async createReminder(reminderData:{
        taskId:number;
        reminderTime:Date;
        // createdAt:Date;
        // updatedAt:Date;
        status?:"pending"|"sent";
    })
    {
        try {
            const reminder = await Reminder.create(reminderData);
            return reminder;
        }
        catch(error){
            // console.log()
            if (error instanceof Error) {
                throw new Error(`Error creating reminder: ${error.message}`);
            }
            throw new Error('Error creating reminder');   
        }
    }

    async getAllReminder(){
        try{
            const reminder = await Reminder.findAll();
            return reminder;
        }catch(error){
            if (error instanceof Error) {
                throw new Error(`Error fetching reminders: ${error.message}`);
            }
            throw new Error('Error fetching reminders');
        }
    }

    async getReminderById(id:number){
        try{
            const reminder = await Reminder.findByPk(id);
            if(!reminder){
                throw new Error(`Reminders with ${id} not found`);
            }
            return reminder;
        }catch (error){
            if (error instanceof Error){
                throw new Error(`Error fetching reminder: ${error.message}`);
            }
            throw new Error('error fetching reminder');
        }
    }
    async updateReminder(id:number,reminderData:{
        taskId?:number;
        reminderTime?:Date;
        // createdAt:Date;
        // updatedAt:Date;
        status?:"pending"|"sent";
        
    })
    {
        try{
            const reminder = await Reminder.findByPk(id);
            if(!reminder){
                throw new Error(`Reminder with ${id} not found`);
            }
            return reminder.update(reminderData);
        }catch(error){
            if (error instanceof Error) {
                throw new Error(`Error updating reminder: ${error.message}`);
            }
            throw new Error('Error updating reminder');
        }
    }

    async deleteReminder(id:number){
        try{
            const reminder = await Reminder.findByPk(id);
            if(!reminder){
                throw new Error(`Reminder with id ${id} not found`);
        }
        return reminder.destroy();
        }
        catch(error){
            if(error instanceof Error){
                throw new Error(`Error deleting reminder: ${error.message}`);
            }
            throw new Error('Error deleting reminder');
        }
        
    }

}
const reminderService = new ReminderService();
export default reminderService;