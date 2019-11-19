var Product = require('../models/product');

module.exports = {
    getProduct : function(req, res){
       const requestId = req.params.productId;
    //    console.log(requestId);
       Product.find({"_id": requestId}, function(error, product){
           if(error || product===null){
               res.send({message: "Can't find the product!"});
           }else{
               res.send({message: "Found it!", product});
           }
       });
    },
    getProducts : function(req, res){
       Product.find({}, function(error, products){
           if(error){
               res.send({message: "Somthing went wrong!"});
           }else{
               res.send({message: "All Products:", products});
           }
       });
    },
    postProduct : function(req, res){
       var product = new Product();
       product.name = req.body.name;
       product.description = req.body.description;
       product.price = req.body.price;
       product.save(function(error, savedProduct){
           if(error){
               res.send({error: "Couldn't save the product!"});
           }
           else{
               res.send({message: "Saved Successfully!", savedProduct});
           }
       });
    },
    editProduct : function(req, res){
        const requestId = req.params.productId;
        Product.update({"_id": requestId}, {$set: req.body}, function(error, product){
                if(error){
                    res.send({message: "Somthing went wrong"});
                }else{
                    res.send({message: "Product Updated Succesfully!", product});
                }
            });
    },
    deleteProduct : function(req, res){
    const requestId = req.params.productId;
    Product.remove({"_id": requestId}, function(error, result){
        if(error){
            res.send({message: "Somthing went wrong while deleting!"});
        }else{
            res.send({message: "Product deleted successfully!"});
        }
    });
    }
}
