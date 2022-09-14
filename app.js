const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const marioModel = require("./models/marioChar");

// Middlewares
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// your code goes here
app.get("/mario/:id", async (req, res) => {
  try {
    Char = await marioModel.find({ _id: req.params.id });
    res.status(200).json({
      status: "Sucess",
      message: Char,
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err.message,
    });
  }
});

app.get("/mario", async (req, res) => {
  try {
    const Char = await marioModel.find();
    res.status(200).json({
      status: "Sucess",
      message: Char,
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err.message,
    });
  }
});

app.post("/mario", async (req, res) => {
  try {
    const Char = await marioModel.create(req.body);

    res.status(201).json({
      status: "Sucess",
      message: Char,
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err.message,
    });
  }
});

app.patch("/mario/:id", async (req, res) => {
  try {
    const Char = await marioModel.updateOne(
      { _id: req.params.id },
      { name: req.body.name, weight: req.body.weight },
      { runValidators: true }
    );

    res.status(201).json({
      status: "Sucess",
      message: Char,
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err.message,
    });
  }
});

app.delete("/mario/:id", async (req, res) => {
  try {
    const Char = await marioModel.deleteOne({ _id: req.params.id });
    res.status(201).json({
      status: "Sucess",
      message: Char,
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err.message,
    });
  }
});

app.get("*", (req, res) => {
  res.status(404);
  res.json({
    Status: "Invalid",
    Discription: "File Not Found",
  });
});

module.exports = app;
