//get all items
const getItems = (req,res)=>{
    res.status(200).json({message:"Welcome to home page"})
}

//get single items
const getOneItem = (req,res)=>{
    const {id} = req.params;
    res.status(200).json({message:`Added item ${id}`})
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