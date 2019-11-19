var express = require('express');
var productCtrl = require('../controllers/productController');

var router = express.Router();

//Products
router.route('/product/:productId').get(productCtrl.getProduct);
router.route('/product').post(productCtrl.postProduct);
router.route('/products').get(productCtrl.getProducts);
router.route('/product/:productId').put(productCtrl.editProduct);
router.route('/product/:productId').delete(productCtrl.deleteProduct);



module.exports = router;