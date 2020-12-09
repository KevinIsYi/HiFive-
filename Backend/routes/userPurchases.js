/*
    host + api/purchase + route
*/

const { check, header } = require('express-validator');

const { Router } = require('express');
const { getPurchasedItems, purchasedItems, getOrders, returnItems, getReturns } = require('../controllers/userPurchases');
const validateErrors = require('../middlewares/validate-errors');
const { validateUserIdBody } = require('../middlewares/validate-userId');

const router = Router();

router.get(
    '/getpurchases',
    [
        header('user', 'Filed: user is required').notEmpty(),
        validateErrors 
    ],
    getPurchasedItems
);

router.post(
    '/',
    [
        check('user', 'Field: user is required').notEmpty(),
        check('items', 'Field: items must be an non empty array').isArray({ min: 1 }),
        validateErrors,

    ],
    purchasedItems
);

router.get(
    '/getorders',
    [
        check('userId', 'Field userID is required').notEmpty(),
        validateErrors,
        validateUserIdBody
    ],
    getOrders
);

router.post(
    '/return',
    [
        check('orderId', 'Filed: orderId is required').notEmpty(),
        check('quantity', 'Field: quantity is required and it must be a number').isNumeric(),
        validateErrors
    ],
    returnItems
);

router.get(
    '/getreturns',
    getReturns
)

module.exports = router;