/*
    host + api/items + route
*/

const { Router } = require('express');
const { check } = require('express-validator');

const { getAllItems, getCartItems, setShoppingCart, getPurchasedItemsDescriptions, createItem } = require('../controllers/items');

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

router.post(
    '/createitem',
    [    
        check('img', 'Field: field img is required and it must be a non empty string').isString().notEmpty(),
        check('name', 'Field name is required and it must be a non empty string').isString().notEmpty(),
        check('price', 'Field price is required and it must be a number').isNumeric(),
        check('available', 'Field available is required and it must be a number').isNumeric()
    ],
    createItem
)

module.exports = router;