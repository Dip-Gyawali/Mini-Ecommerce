const express = require('express');
const app = express();
const cors = require('cors');
const item = require('./routes/itemsRoute')

app.use(express.json());
app.use(cors());

app.use('/api/items',item);

app.use((req,res)=>{
    res.status(400).json({message:"Invalid URL"})
})

app.listen(5000,()=>{
    console.log("listening to port 5000");
})