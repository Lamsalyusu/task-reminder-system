'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     * 
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    // await queryInterface.createTable('Task',{
    //   id:Sequelize.INTEGER,
    //   primaryKey:true,
    //   auto
    // })

    await queryInterface.createTable('Task',{
      id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
      },

      title:{
        type:Sequelize.STRING,
        allowNull:false
      },

      description:{
        type:Sequelize.STRING,
        allowNull:true
      },
      
      dueDate:{
      type:Sequelize.DATE,
      allowNull:false

    },

      status:{
      type:Sequelize.BOOLEAN,
      allowNull:true,
      defaultValue:false
    },

    updatedAt:{
      type:Sequelize.DATE,
      allowNull:false,
      defaultValue:Sequelize.NOW,
    },

    createdAt:{
      type:Sequelize.DATE,
      allowNull:false,
      defaultValue:Sequelize.NOW,
    }

    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.dropTable('Task')
  }
};
