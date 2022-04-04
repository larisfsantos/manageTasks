const { Router } = require('express')
const TaskController = require('../controllers/TaskController')

const router = Router();

router.get('/tasks/manager', TaskController.getAlltasks);
router.delete('/tasks/manager/:id', TaskController.deleteTask);

router.get('/tasks/tech/:id', TaskController.getSpecificUserTasks);
router.post('/tasks/tech', TaskController.createTask);
router.put('/tasks/tech/:id', TaskController.updateTask)

module.exports = router;

