/*
    host + api/purchase + route
*/

const { check } = require('express-validator');

const { Router } = require('express');
const { purchasedItems, getOrders, returnItems, getReturns } = require('../controllers/userPurchases');

const router = Router();

router.post(
    '/',
    [
        check('user', 'Field: user is required').notEmpty(),
        check('items', 'Field: items must be an non empty array').isArray({ min: 1 })
    ],
    purchasedItems
);

router.get(
    '/getorders',
    getOrders
);

router.post(
    '/return',
    [
        check('orderId', 'Filed: orderId is required').notEmpty(),
        check('quantity', 'Field: quantity is required and it must be a number').isNumeric()
    ],
    returnItems
);

router.get(
    '/getreturns',
    getReturns
)

module.exports = router;