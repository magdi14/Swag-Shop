var mongoose = require('mongoose');
var Schema = mongoose.Schema;           //we have to define a schema to create a model in mongoose.

var product = new Schema({
    name: String,
    description: String,
    price: Number,
    likes: {type: Number, default: 0}
});

module.exports = mongoose.model("Product", product);  //here we're passing the schema of the model.