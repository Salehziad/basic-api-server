'use strict';
const express=require('express');
const foodRoutes=express.Router();
const {FoodModel}=require('../models/index.js');
// console.log(2,FoodModel)
foodRoutes.post('/food',addNewFood);
foodRoutes.get('/food',getAllFoods);
foodRoutes.get('/food/:id',getOneFood);
foodRoutes.put('/food/:id',updateOneFood);
foodRoutes.delete('/food/:id',deleteOneFood);
foodRoutes.delete('/food',deleteAllFode)

async function addNewFood(req,res){
    let newFood=req.body;
    let food=await FoodModel.create(newFood);
    res.status(201).json(food);
}
async function getAllFoods(req,res){
    console.log("ggg");
    let allFoods=await FoodModel.findAll();
    res.status(200).json(allFoods) ;
}
async function getOneFood(req,res){
    let foodId=req.params.id;
    let food=await FoodModel.findOne({where: {id:foodId}});
    res.status(200).json(food);
    console.log()
}
async function updateOneFood(req,res){
    let foodId=req.params.id;
    let updateFood=req.body;
    let foundFood = await FoodModel.findOne({ where: { id: foodId } });
    if (foundFood) {

        let updatedFood = await foundFood.update(updateFood);
        res.status(201).json(updatedFood);
    } else {
        throw new Error('there is not such id');
        res.status(404);
    }
}

async function deleteOneFood(req,res){
    let foodId=req.params.id;
    let food=await FoodModel.destroy({ where: { id: foodId } });
    res.status(204).json(food);
}
async function deleteAllFode(req,res){
    let food=await FoodModel.destroy({truncate:true});
    res.status(204).json(food)
}


module.exports=foodRoutes