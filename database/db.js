var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost:27017/swag-shop', { useNewUrlParser: true, useUnifiedTopology: true });
//db connection created
module.exports = db;