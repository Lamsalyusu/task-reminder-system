import sequelize from "./config/db";
async function ConnectDB(){
    try{
        await sequelize.authenticate();
        console.log("DB connected successfully");
    }
    catch (error){
        console.log(error);
    }
}
ConnectDB();