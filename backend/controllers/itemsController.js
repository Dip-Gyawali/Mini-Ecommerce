const Items = require('../model/itemsModel');
const mongoose = require('mongoose');

//get all items
const getItems = async (req,res)=>{
    const items = await Items.find({}).sort({createdAt: -1})
    res.status(200).json(items);
}

//get single items
const getOneItem = async (req,res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid){
        return res.status(400).json({message: "Invalid Id"})
    }
    const items = await Items.findById(id);
    if(!items){
        return res.status(400).json({message: `Cannot Find items with ${id}`})
    }
    res.status(200).json(items)
}

//add new item
const addItem = async (req,res)=>{
    const {name,category,image,description,price} = req.body;
    try{
        const items = await Items.create({name,category,image,description,price});
        res.status(201).json(items)
    }
    catch(err){
        res.status(400).json({message:"Cannot add new item"})
    }
}

//delete item
const deleteItem = async (req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid){
        return res.status(400).json({message: "Invalid Id"})
    }
    const items = await Items.findByIdAndDelete(id);
    if(!items){
        return res.status(400).json({message: `Cannot Find items with ${id}`})
    }
    res.status(200).json(items)
}

const updateItem = async (req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid){
        return res.status(400).json({message:'Invalid Id'})
    }
    const items = await Items.findByIdAndUpdate(id,{...req.body});
    if(!items){
        return res.status(400).json({message:`Cannot find items with ${id}`})
    }
    res.status(200).json(items)
}

module.exports = {
    getItems,
    getOneItem,
    addItem,
    deleteItem,
    updateItem
}