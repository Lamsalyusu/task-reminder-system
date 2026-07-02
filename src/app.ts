// const express = require('express');
// // import express
// const taskRoutes = require('./routes/taskRoutes');
// const path = require('path');
// const cors = require('cors');
import express from 'express';
import taskRoutes from './routes/taskRoutes';
import reminerRoutes from './routes/reminderRoutes';
import cors from 'cors';

// for swaggerUI API documentation
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import path from "path";

const swaggerDocument = YAML.load(path.join(__dirname, './docs/openapi.yaml'));
const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/tasks',taskRoutes);
app.use('/api/reminders',reminerRoutes);
app.use('/api-docs',swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/health',(req,res)=>{
    res.status(200).json({message:'Server is running'});
});
// module.exports = app;
export default app;