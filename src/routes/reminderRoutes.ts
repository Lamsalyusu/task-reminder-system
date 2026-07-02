import {Router} from 'express';
import ReminderController from '../controllers/reminderController';

const router = Router();
router.post('/',ReminderController.createReminder);
router.get('/',ReminderController.getAllReminder);
router.get('/:id',ReminderController.getReminderById);
router.put('/:id',ReminderController.updateReminder);
router.delete('/:id',ReminderController.deleteReminder);

export default router;