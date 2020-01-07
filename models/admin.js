var mongoose = require('mongoose');
var Schema = mongoose.Schema;           //we have to define a schema to create a model in mongoose.

var admin = new Schema({
    name: String,
    password: String,
    email: String,
});

module.exports = mongoose.model("Admin", admin);  //here we're passing the schema of the model.