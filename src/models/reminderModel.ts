import {Sequelize, DataTypes, Model} from "sequelize";
import sequelize from "../config/db";

class Reminder extends Model {}
Reminder.init(
    {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        taskId:{
            type: DataTypes.INTEGER,
            allowNull: false,
            // references:{
            //     model:'Tasks',
            //     key:'id'
            // },
            // onDelete:'CASCADE'
        },

        reminderTime:{
            type: DataTypes.DATE,
            allowNull: false,
        },

        createdAt:{
            type:DataTypes.DATE,
            defaultValue:DataTypes.NOW,
            allowNull: false,   
        },

        updatedAt:{
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue:DataTypes.NOW,
        },

        status:{
            type:DataTypes.ENUM("pending","sent"),
            allowNull:false,
        }

    },
        {
        sequelize,
        modelName: "Reminder",
        tableName: "Reminders",
        }
);

export default Reminder;