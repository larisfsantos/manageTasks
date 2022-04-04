const database = require('../models');

class TaskController{
   
    static async getAlltasks(req, res){
        try{
            const allTasks = await database.Tasks.findAll();
            return res.status(200).json(allTasks);
        }catch(error){
            return res.status(500).json(error.message)
        }
        
    }

    /*static async getUserRole(req, res){
      try{
        const { id } = req.params;
        const role = await database.Tasks.findOne({
          include: [{
            model: database.Users,
            as: 'userIDfk',
            attributes: ['userRole'],
            where: {id: id}
          }]
        });
        return res.status(200).json(role)
      }catch(error){
            return res.status(500).json(error.message)
        }
    }*/

    static async getSpecificUserTasks(req, res) {
        const { id } = req.params
        try {
          const tasksFromID = await database.Tasks.findAll( { 
            where: { 
                userID: Number(id) 
            }
          })
          return res.status(200).json(tasksFromID)
        } catch (error) {
          return res.status(500).json(error.message)
        }
      }

      static async createTask(req, res) {       
        const newTask = req.body
        try {
          const newTaskCreated = await database.Tasks.create(newTask)
          return res.status(200).json(newTaskCreated)
        } catch (error) {
          return res.status(500).json(error.message)
        }
      }

      static async deleteTask(req, res) {
        const { id } = req.params
        try {
          await database.Tasks.destroy({ where: { id: Number(id) }})
          return res.status(200).json({ mensagem: `id ${id} deletado` })
    
        } catch (error) {
          return res.status(500).json(error.message)
        }
      }

      static async updateTask(req, res) {
        const { id } = req.params
        const novasInfos = req.body
        try {
          await database.Tasks.update(novasInfos, { where: { id: Number(id) }})
          const updatedTask = await database.Tasks.findOne( { where: { id: Number(id) }})
          return res.status(200).json(updatedTask)
        } catch (error) {
          return res.status(500).json(error.message)
        }
      }

}

module.exports= TaskController;