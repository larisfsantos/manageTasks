'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tasks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tasks.belongsTo(models.Users, { 
        foreignKey: 'userID', 
        as: 'userIDfk' 
      })
    }
  }
  Tasks.init({
    summary: DataTypes.STRING,
    userID: DataTypes.INTEGER
  }, 
  {
    sequelize,
    modelName: 'Tasks',
  });
  return Tasks;
};