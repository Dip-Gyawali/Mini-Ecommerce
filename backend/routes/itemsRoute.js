const express = require("express");
const route = express.Router();
const {
  getItems,
  getOneItem,
  addItem,
  deleteItem,
  updateItem,
} = require("../controllers/itemsController");

route.get("/",getItems);

route.get("/:id",getOneItem);

route.post("/",addItem);

route.delete("/:id",deleteItem);

//update an item
route.patch("/:id",updateItem);

module.exports = route;
