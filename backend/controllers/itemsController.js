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
const addItem = (req,res)=>{
    res.status(201).json({message:"New Item added"})
}

//delete item
const deleteItem = (req,res)=>{
    const {id} = req.params
    res.status(200).json({message:`Item ${id} deleted`})
}

const updateItem = (req,res)=>{
    const {id} = req.params
    res.status(200).json({message:`Updated item ${id}`})
}

module.exports = {
    getItems,
    getOneItem,
    addItem,
    deleteItem,
    updateItem
}