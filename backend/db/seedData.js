const mongoose = require('mongoose');
// const dotenv = require('dotenv');
const connectDB = require('./connection');
const tasks = require('../data/tasks');
const Task = require('../models/taskModel');
// dotenv.config();

connectDB();

const importData = async () => {
  try {
    //Delete any data before importing
    await Task.deleteMany();

    //Insert task data in
    await Task.insertMany(tasks);

    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Task.deleteMany();

    console.log('Data Destroyed!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

//the second index in your node script
if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
