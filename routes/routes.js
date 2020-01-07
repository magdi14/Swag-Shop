var express = require('express');
var productCtrl = require('../controllers/productController'); //importing the product controller
var listCtrl = require('../controllers/wishListController');
var adminCtrl = require('../controllers/adminController');
var router = express.Router();

//Products
router.route('/products/:productId').get(productCtrl.getProduct);
router.route('/products').post(productCtrl.AddProduct);
router.route('/products').get(productCtrl.getProducts);
router.route('/products/:productId').put(productCtrl.editProduct);
router.route('/products/:productId').delete(productCtrl.deleteProduct);

//Lists
router.route('/lists').get(listCtrl.getLists);
router.route('/lists/:listId').get(listCtrl.getWishList);
router.route('/lists').post(listCtrl.AddWishList);
router.route('/lists/product').put(listCtrl.AddProductToList);
router.route('/lists/:listId').put(listCtrl.editList);
router.route('/lists/:listId').delete(listCtrl.deleteList);

//Admins
router.route('/admins').get(adminCtrl.getAdmins);
router.route('/admins/:adminId').get(adminCtrl.getAdmin);
router.route('/admins').post(adminCtrl.addAdmin);
router.route('/admins/:adminId').put(adminCtrl.editAdmin);
router.route('/admins/:adminId').delete(adminCtrl.deleteAdmin);






module.exports = router;