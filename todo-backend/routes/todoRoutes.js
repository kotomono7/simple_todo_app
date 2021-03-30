const express = require("express");
const Todo = require("../models/Todo");

const router = express.Router();

// list all todos
router.get("/", (req, res) => {
  Todo.find((err, result) => {
    if (err) {
      throw new Error(err);
    } else {
      console.log(result);
      res.json(result);
    }
  });
});

// add new todo
router.post("/", (req, res) => {
  Todo.create(req.body, (err, result) => {
    if (err) {
      throw new Error(err);
    } else {
      console.log(result);
      res.json(result);
    }
  });
});

// edit existing todo
router.put('/:id', (req, res) => {
  Todo.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, result) => {
    if (err) {
      throw new Error(err);
    } else {
      console.log(result);
      res.json(result);
    }
  });
});

// delete existing todo
router.delete("/:id", (req, res) => {
  Todo.findOneAndRemove({ _id: req.params.id }, (err, result) => {
    if (err) {
      throw new Error(err);
    } else {
      console.log(result);
      res.end();
    }
  });
});

module.exports = router;