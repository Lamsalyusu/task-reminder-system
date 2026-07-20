'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.createTable('Reminders',{
      id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
      },

      taskId:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'Task',
          key:'id'
        },
        onUpdate:'CASCADE',
        onDelete:'CASCADE'
      },

      reminderTime:{
        type:Sequelize.DATE,
        allowNull:false
      },

      createdAt:{
        type:Sequelize.DATE,
        allowNull:false,
        defaultValue:Sequelize.NOW
      },

      updatedAt:{
        type:Sequelize.DATE,
        allowNull:false,
        defaultValue:Sequelize.NOW
      },

      status:{
      type:Sequelize.ENUM(
        "pending",
        "sent"
      ),
      defaultValue:"pending"
}
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.dropTable('Reminders');
  }
};
