'use strict';
const express=require('express');
const clothesRoute=express.Router();
const {clothesModel}=require('../models/index');

clothesRoute.post('/food',addNewclothes);
clothesRoute.get('/food',getAllclothes);
clothesRoute.get('/food/:id',getOneclothes);
clothesRoute.put('/food/:id',updateOneclothes);
clothesRoute.delete('/food/:id',deleteOneclothes);
clothesRoute.delete('/food',deleteAllclothes)

async function addNewclothes(req,res){
    let newFood=req.body;
    let food=await clothesModel.create(newFood);
    res.status(201).json(food);
}
async function getAllclothes(req,res){
    console.log("ggg");
    let allFoods=await clothesModel.findAll();
    res.status(200).json(allFoods) ;
}
async function getOneclothes(req,res){
    let foodId=req.params.id;
    let food=await clothesModel.findOne({where: {id:foodId}});
    res.status(200).json(food);
    console.log()
}
async function updateOneclothes(req,res){
    let foodId=req.params.id;
    let updateFood=req.body;
    let foundFood = await clothesModel.findOne({ where: { id: foodId } });
    if (foundFood) {

        let updatedFood = await foundFood.update(updateFood);
        res.status(201).json(updateFood);
    } else {
        // throw new Error('there is not such id');
        res.status(404);
    }
}
async function deleteOneclothes(req,res){
    let foodId=req.params.id;
    let food=await clothesModel.destroy({ where: { id: foodId } });
    res.status(204).json(food);
}
async function deleteAllclothes(req,res){
    let food=await clothesModel.destroy({truncate:true});
    res.status(204).json(food)
}

module.exports=clothesRoute;