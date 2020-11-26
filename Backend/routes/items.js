/*
    host + api/items + route
*/

const { Router } = require('express');
const { check } = require('express-validator');

const { getAllItems, getCartItems, setShoppingCart } = require('../controllers/items');

const router = Router();

router.get('/', getAllItems);
router.get('/getshoppingcart', getCartItems);
router.post(
    '/setshoppingcart',
    [
        check('userId', 'Field: userId is required').notEmpty().isString(),
        check('cartItems', 'Field: cartItems must be a non empty array').isArray({ min: 1 })
    ],
    setShoppingCart
);

module.exports = router;