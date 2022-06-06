"use strict";
const clothesModel = (sequelize, DataTypes) =>
  sequelize.define("Clothes", {
    name: {
      type: DataTypes.STRING,
    },
    Descreption: {
      type: DataTypes.STRING,
    },
    brand:{
        type: DataTypes.STRING,
    },
    size:{
        type: DataTypes.STRING,
    },
  });
module.exports = clothesModel;