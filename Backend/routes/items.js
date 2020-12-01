/*
    host + api/items + route
*/

const { Router } = require('express');
const { check, header } = require('express-validator');

const { getAllItems, getCartItems, setShoppingCart, getPurchasedItemsDescriptions } = require('../controllers/items');

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
router.post(
    '/getpurchaseditems',
    check('items', 'Field: items should be an array').isArray(),
    getPurchasedItemsDescriptions
);

module.exports = router;