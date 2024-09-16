const express = require("express");
const app = express();
const cors = require("cors");
const item = require("./routes/itemsRoute");
require("dotenv").config();
const morgan = require("morgan");
const mongoose = require("mongoose");
const connectDB = require('./config/db')

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use("/api/items", item);

//connect to database
app.listen(process.env.PORT, () => {
    connectDB();
    console.log(`Listening to port ${process.env.PORT}`);
})

app.use((req, res) => {
  res.status(400).json({ message: "Invalid URL" });
});
