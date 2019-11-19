var mongoose = require('mongoose');
var Schema = mongoose.Schema;           //we have to define a schema to create a model in mongoose.
var ProductObjectId = mongoose.Schema.Types.ObjectId;  //to define the relationship with products.

var wishList = new Schema({
    name: {type: String, default: "Cool wish list"},
    description: String,
    products: [{type: ProductObjectId, ref: "Product"}],    //here defining the relation with product collection by refrencing to the collection name.
});

module.exports = mongoose.model('WishList', wishList); //passing the schema of WishList collection.