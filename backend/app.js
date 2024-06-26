const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const tasksRouter = require('./routes/tasks');
const dotenv=require('dotenv');
const cors=require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use('/tasks', tasksRouter);

module.exports = app;
