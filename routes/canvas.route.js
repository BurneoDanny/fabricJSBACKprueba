var express = require('express');
var router = express.Router();
var canvasController = require('../controllers/canvas.controller');

router.get('/get', canvasController.getCanvasList);
router.get('/get/:id', canvasController.getCanvas);
router.post('/create', canvasController.createCanvas);
router.put('/put/:id', canvasController.updateCanvas);
router.delete('/delete/:id', canvasController.deleteCanvas);

module.exports = router;


// var express = require('express');
// var router = express.Router();
// const { verifyJwt } = require('../controllers/SystemController.js');
// var CanvasController = require('../controllers/CanvasController');


// router.get("/findAll", verifyJwt, CanvasController.findAll);

// router.get("/:id", verifyJwt, CanvasController.findById);

// router.post('/create', verifyJwt, CanvasController.create);

// router.put('/:id', verifyJwt, CanvasController.update);

// router.delete('/:id', verifyJwt, CanvasController.remove);

// module.exports = router;