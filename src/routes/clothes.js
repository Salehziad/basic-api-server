'use strict';
const express=require('express');
const clothesRoute=express.Router();
const {clothesModel}=require('../models/index');

clothesRoute.get('/clothes',getAllClothes);

async function getAllClothes(req,res){
    let allClothes=await clothesModel.findAll();
    res.status(200).json(allClothes)
}
module.exports=clothesRoute;