var mongoose = require('mongoose');

var CanvasSchema = new mongoose.Schema({
    content: String,
});

module.exports = mongoose.model('canvas', CanvasSchema);
