'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tasks', [
      {
        summary: 'Create database',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        summary: 'Update Jira request',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        summary: 'Create Client Model',
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        summary: 'Create Product Model',
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        summary: 'Refine customer requirements',
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        summary: 'Organize daily meeting',
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }     
    ]);    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tasks', null, {});
    
  }
};
