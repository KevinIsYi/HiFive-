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
        check('updateItems', 'Field: updateItems must be an array').isArray(),
        check('deletedItems', 'Field: deletedItems must be an array').isArray()
    ],
    setShoppingCart
);

module.exports = router;