'use strict';
const express=require('express');
const clothesRoute=express.Router();
const {clothesModel}=require('../models/index');

clothesRoute.post('/clothes',addNewclothes);
clothesRoute.get('/clothes',getAllclothes);
clothesRoute.get('/clothes/:id',getOneclothes);
clothesRoute.put('/clothes/:id',updateOneclothes);
clothesRoute.delete('/clothes/:id',deleteOneclothes);
clothesRoute.delete('/clothes',deleteAllclothes)

async function addNewclothes(req,res){
    let newclothes=req.body;
    let clothes=await clothesModel.create(newclothes);
    res.status(201).json(clothes);
}
async function getAllclothes(req,res){
    console.log("ggg");
    let allclothess=await clothesModel.findAll();
    res.status(200).json(allclothess) ;
}
async function getOneclothes(req,res){
    let clothesId=req.params.id;
    let clothes=await clothesModel.findOne({where: {id:clothesId}});
    res.status(200).json(clothes);
    console.log()
}
async function updateOneclothes(req,res){
    let clothesId=req.params.id;
    let updateclothes=req.body;
    let foundclothes = await clothesModel.findOne({ where: { id: clothesId } });
    if (foundclothes) {

        let updatedclothes = await foundclothes.update(updateclothes);
        res.status(201).json(updateclothes);
    } else {
        // throw new Error('there is not such id');
        res.status(404);
    }
}
async function deleteOneclothes(req,res){
    let clothesId=req.params.id;
    let clothes=await clothesModel.destroy({ where: { id: clothesId } });
    res.status(204).json(clothes);
}
async function deleteAllclothes(req,res){
    let clothes=await clothesModel.destroy({truncate:true});
    res.status(204).json(clothes)
}

module.exports=clothesRoute;
