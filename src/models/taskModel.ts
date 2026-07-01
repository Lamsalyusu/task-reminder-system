import { Sequelize, DataTypes, Model } from "sequelize";
// const sequelize = require('../config/db');
import sequelize from "../config/db";
class Task extends Model {
}
// const model = new Task();
Task.init(
    {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        title:{
            type: DataTypes.STRING,
            allowNull: false,
        },

        description:{
            type: DataTypes.STRING,
            allowNull: false,
        },

        dueDate:{
            type: DataTypes.DATE,
            allowNull: false,
        },
        
        status:{
            type: DataTypes.ENUM("pending", "in-progress", "completed"),
            allowNull: false,
            defaultValue: "pending",
        },

        createdAt:{
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updatedAt:{
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        }
    },
    {
        sequelize,
        modelName: "Task",
        tableName: "Tasks",
    }
    
);

export default Task;
