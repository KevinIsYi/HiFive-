/*
    host + api/items + route
*/

const { Router } = require('express');
const { check } = require('express-validator');

const { getAllItems, getCartItems, setShoppingCart, getPurchasedItemsDescriptions, createItem } = require('../controllers/items');
const validateErrors = require('../middlewares/validate-errors');
const validateUniqueImg = require('../middlewares/validate-unique-img');
const { validateUserIdBody, validateUserIdHeader } = require('../middlewares/validate-userId');

const router = Router();

router.get('/', getAllItems);

router.get(
    '/getshoppingcart', 
    [
        validateUserIdHeader
    ],  
    getCartItems
);

router.post(
    '/setshoppingcart',
    [
        check('userId', 'Field: userId is required').notEmpty().isString(),
        check('updateItems', 'Field: updateItems must be an array').isArray(),
        check('deletedItems', 'Field: deletedItems must be an array').isArray(),
        validateErrors,
        validateUserIdBody
    ],
    setShoppingCart
);
router.post(
    '/getpurchaseditems',
    [
        check('items', 'Field: items should be an array').isArray(),
        validateErrors
    ],
    getPurchasedItemsDescriptions
);

router.post(
    '/createitem',
    [    
        check('img', 'Field: field img is required and it must be a non empty string').isString().notEmpty(),
        check('name', 'Field name is required and it must be a non empty string').isString().notEmpty(),
        check('price', 'Field price is required and it must be a number').isNumeric(),
        check('available', 'Field available is required and it must be a number').isNumeric(),
        validateErrors,
        validateUniqueImg
    ],
    createItem
)

module.exports = router;