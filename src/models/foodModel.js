
"use strict";
const FoodModel = (sequelize, DataTypes) =>
  sequelize.define("foods", {
    FoodName: {
      type: DataTypes.STRING,
    },
    Descreption: {
      type: DataTypes.STRING,
    },
    Benifits:{
        type: DataTypes.STRING,
    }
  });
module.exports = FoodModel;