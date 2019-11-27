var List = require('../models/wishlist');
var Product = require('../models/product');

module.exports = {
    getWishList: function(req, res){
        const requestId = req.params.listId;
    //    console.log(requestId);
       List.find({"_id": requestId}).populate({path: "products", model:"Product"}).exec(function(error, list){
        if(error || list===null){
            res.send({message: "Can't find the list!"});
        }else{
            res.send({message: "Found it!", list});
        }
    });
    },
    getLists: function(req, res){
        List.find({}).populate({path:"products", model: "Product"}).exec(function(error,lists){
            if(error)
            {
                res.send({message: "Somthing went Wrong!"})
            }else{
                res.send({message: "All Lists: ", lists})
            }
        });
    },
    AddWishList: function(req, res){
        var wishlist = new List();
        wishlist.name = req.body.name;
        wishlist.description = req.body.description;
        wishlist.save(function(error, list){
            if(error)
            {
                res.send({message: "Couldn't save the list!"});
            }else{
                res.send({message: "Saved Successfully!", list});
            }
        });
    },
    AddProductToList: function(req, res){
        const productId = req.body.productId;
        const wishlistId = req.body.listId;
        Product.findOne({"_id": productId}, function(error, product){
            if(error){
                res.send({message: "Didn't find product you need to add!"});
            }else{
                List.update({"_id": wishlistId}, {$addToSet: {products: product._id}},
                function(error, list){
                    if(error){
                        res.send({message: "Couldn't add the product!"});
                    }else{
                        res.send({message: "Added product to list successfully", list});
                    }
                });
            }
        })

    },
    editList: function(req, res){
        const requestId = req.params.listId;
        List.updateOne({"_id": requestId}, {$set: req.body}, function(error, list){
                if(error){
                    res.send({message: "Somthing went wrong"});
                }else{
                    res.send({message: "List Updated Succesfully!", list});
                }
            });
    },
    deleteList: function(req, res){
        const requestId = req.params.listId;
        List.deleteOne({"_id": requestId}, function(error, result){
            if(error){
                res.send({message: "Somthing went wrong!"});
            } else{
                res.send({message: "List deleted successfully!"});
            }
        })
    }

}
