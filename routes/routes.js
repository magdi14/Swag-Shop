var express = require('express');
var productCtrl = require('../controllers/productController'); //importing the product controller
var listCtrl = require('../controllers/wishListController');
var router = express.Router();

//Products
router.route('/product/:productId').get(productCtrl.getProduct);
router.route('/product').post(productCtrl.AddProduct);
router.route('/products').get(productCtrl.getProducts);
router.route('/product/:productId').put(productCtrl.editProduct);
router.route('/product/:productId').delete(productCtrl.deleteProduct);

//Lists
router.route('/lists').get(listCtrl.getLists);
router.route('/list/:listId').get(listCtrl.getWishList);
router.route('/list').post(listCtrl.AddWishList);
router.route('/list/product').put(listCtrl.AddProductToList);
router.route('/list/:listId').put(listCtrl.editList);
router.route('/list/:listId').delete(listCtrl.deleteList);






module.exports = router;