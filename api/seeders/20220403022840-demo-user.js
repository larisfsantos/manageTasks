'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        userName: 'Larissa Ferreira',
        userRole: 'manager',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Maria Lores',
        userRole: 'manager',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Marcos Oliveira',
        userRole: 'tech',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Vinicius Medeiros',
        userRole: 'tech',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Rafaela Diniz',
        userRole: 'tech',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
