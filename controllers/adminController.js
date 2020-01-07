var Admin = require("../models/admin");


module.exports = {
    getAdmin : function(req, res){
       const requestId = req.params.admintId;
    //    console.log(requestId);
       Admin.find({"_id": requestId}, function(error, admin){
           if(error || admin===null){
               res.send({message: "Admin not found"});
           }else{
               res.send({message: "Found it!", admin});
           }
       });
    },
    getAdmins : function(req, res){
       Admin.find({}, function(error, admins){
           if(error){
               res.send({message: "Somthing went wrong!"});
           }else{
               res.send({message: "All Admins:", admins});
           }
       });
    },
    addAdmin : function(req, res){
       var admin = new Admin();
       admin.name = req.body.name;
       admin.description = req.body.description;
       admin.price = req.body.price;
       admin.save(function(error, savedAdmin){
           if(error){
               res.send({error: "Couldn't save the admin!"});
           }
           else{
               res.send({message: "Saved Successfully!", savedAdmin});
           }
       });
    },
    editAdmin : function(req, res){
        const requestId = req.params.adminId;
        Admin.updateOne({"_id": requestId}, {$set: req.body}, function(error, admin){
                if(error){
                    res.send({message: "Somthing went wrong"});
                }else{
                    res.send({message: "Admin Updated Succesfully!", admin});
                }
            });
    },
    deleteAdmin : function(req, res){
    const requestId = req.params.adminId;
    Admin.deleteOne({"_id": requestId}, function(error, result){
        if(error){
            res.send({message: "Somthing went wrong while deleting!"});
        }else{
            res.send({message: "Admin deleted successfully!"});
        }
    });
    }
}
