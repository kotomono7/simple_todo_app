const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');

const PORT = 3030;
const app = express();
const todoRoutes = require("./routes/todoRoutes");
const connOptions = { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false };

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost/mytodo", connOptions)
  .then(() => console.log("Connected successfully"))
  .catch((err) => console.error(err));

app.use("/todos", todoRoutes);

app.listen(PORT, () => {
  console.log("Server started on port " + PORT);
});