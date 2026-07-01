// const express = require('express');
// // import express
// const taskRoutes = require('./routes/taskRoutes');
// const path = require('path');
// const cors = require('cors');
import express from 'express';
import taskRoutes from './routes/taskRoutes';
import cors from 'cors';


const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/tasks',taskRoutes);

app.get('/health',(req,res)=>{
    res.status(200).json({message:'Server is running'});
});
// module.exports = app;
export default app;