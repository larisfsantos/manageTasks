const User = require('../models/users.js')

class UserController{
    static async getAllusers(req, res){
        try{
            const allUsers = await Users.findAll();
            return res.status(200).json(allUsers);
        }catch(error){
            return res.status(500).json(error.message)
        }
        
    }
}

module.exports= UserController;