/*
    host + api/purchase + route
*/

const { check } = require('express-validator');

const { Router } = require('express');
const { purchasedItems } = require('../controllers/userPurchases');

const router = Router();

router.post(
    '/',
    [
        check('user', 'Field: user is required').notEmpty(),
        check('items', 'Field: items must be an non empty array').isArray({ min: 1 })
    ],
    purchasedItems
);


module.exports = router;