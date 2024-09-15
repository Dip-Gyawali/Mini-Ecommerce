const express = require('express');
const route = express.Router();

//get all items
route.get('/',(req,res)=>{
    res.status(200).json({message:"Welcome to home page"})
})

//get single items
route.get('/:id',(req,res)=>{
    const {id} = req.params;
    res.status(200).json({message:`Added item ${id}`})
})

//add new item
route.post('/',(req,res)=>{
    res.status(201).json({message:"New Item added"})
})

//delete item
route.delete('/:id',(req,res)=>{
    const {id} = req.params
    res.status(200).json({message:`Item ${id} deleted`})
})

//update an item
route.patch('/:id',(req,res)=>{
    const {id} = req.params
    res.status(200).json({message:`Updated item ${id}`})
})

module.exports = route