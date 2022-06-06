'use strict';

const POSTGRES_URI = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL; // npm i sqlite3

let sequelizeOptions = process.env.NODE_ENV === 'production' ? {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      }
    }
  } : {};



require("dotenv").config();
const { Sequelize, DataTypes } = require("sequelize");
const foodModel = require("./foodModel");
const clothesModel=require('./clothesModel')
var sequelize = new Sequelize(POSTGRES_URI,sequelizeOptions);
// console.log(11,foodModel(sequelize, DataTypes));
module.exports = {
  db: sequelize,
  FoodModel: foodModel(sequelize, DataTypes),
  clothesModel:clothesModel(sequelize,DataTypes)
};
