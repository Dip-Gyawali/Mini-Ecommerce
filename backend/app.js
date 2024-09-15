const express = require("express");
const app = express();
const cors = require("cors");
const item = require("./routes/itemsRoute");
require("dotenv").config();
const morgan = require("morgan");
const mongoose = require("mongoose");

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use("/api/items", item);

//connect to database
mongoose
  .connect(process.env.MONGOURI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Listening to port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use((req, res) => {
  res.status(400).json({ message: "Invalid URL" });
});
