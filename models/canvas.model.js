var mongoose = require('mongoose');

var CanvasSchema = new mongoose.Schema({
    name: String,
    content: String,
    width: Number,
    height: Number
});

module.exports = mongoose.model('canvas', CanvasSchema);


// var mongoose = require('mongoose');

// var CanvasSchema = new mongoose.Schema({
//     user: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
//     name: String,
//     content: String,
//     width: Number,
//     height: Number
// });

// module.exports = mongoose.model('Canvas', CanvasSchema);