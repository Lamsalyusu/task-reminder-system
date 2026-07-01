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

import dotenv from "dotenv";
dotenv.config();
import app from "../src/app";
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
