import {Router} from 'express';
import TaskController from '../controllers/taskController';

const route = Router();
route.post('/create',TaskController.createTask);
route.get('/tasks',TaskController.getAllTasks);
route.get('/tasks/:id',TaskController.getTaskById);
route.put('/tasks/:id',TaskController.updateTask);
route.delete('/tasks/:id',TaskController.deleteTask);
export default route;