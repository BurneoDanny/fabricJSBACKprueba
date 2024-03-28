var CanvasModel = require('../models/canvas.model');

const createCanvas = function (req, res, next) {
  var canvas = new CanvasModel({
    name: req.body.name,
    content: req.body.content,
    width: req.body.width,
    height: req.body.height
  });
  CanvasModel.create(canvas)
    .then((canvas) => {
      return res.status(201).json(canvas);
    })
    .catch((error) => {
      return res.status(500).json({ message: "Error when creating new canvas.", error });
    });
};

const getCanvasList = function (req, res, next) {
  CanvasModel.find()
    .then((canvasList) => {
      if (canvasList.length === 0) { // Verificar si la lista está vacía
        return res.status(404).json({ message: "No canvases were found" });
      }
      res.json(canvasList);
    })
    .catch((error) => {
      return res.status(500).json({ message: "Error when getting canvas list.", error });
    });
};

const getCanvas = function (req, res, next) {
  CanvasModel.findById(req.params.id)
    .then((canvas) => {
      console.log(canvas);
      if (!canvas) {
        return res.status(404).json({ message: "No such canvas" });
      }
      res.json(canvas);
    })
    .catch((error) => {
      return res.status(500).json({ message: "Error when getting canvas.", error });
    });
};

const updateCanvas = function (req, res, next) {
  var filter = { _id: req.params.id };
  CanvasModel.findByIdAndUpdate(filter, { $set: req.body }, { new: true })
    .then((canvas) => {
      if (!canvas) {
        return res.status(404).json({ message: "No such canvas" });
      }
      res.json(canvas);
    })
    .catch((error) => {
      return res.status(500).json({ message: "Error when updating canvas.", error });
    });
};

const deleteCanvas = function (req, res, next) {
  CanvasModel.findByIdAndDelete(req.params.id)
    .then((canvas) => {
      if (!canvas) {
        return res.status(404).json({ message: "No such canvas" });
      }
      res.json({ message: "Canvas deleted" });
    })
    .catch((error) => {
      return res.status(500).json({ message: "Error when deleting canvas.", error });
    });
};

module.exports = { createCanvas, getCanvasList, getCanvas, updateCanvas, deleteCanvas };
