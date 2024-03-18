var express = require('express');
var router = express.Router();
var canvasController = require('../controllers/canvas.controller');

router.get('/get', canvasController.getCanvasList);
router.get('/get/:id', canvasController.getCanvas);
router.post('/post', canvasController.createCanvas);
router.put('/put/:id', canvasController.updateCanvas);
router.delete('/delete/:id', canvasController.deleteCanvas);

module.exports = router;