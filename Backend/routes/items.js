/*
    host + api/items + route
*/

const { Router } = require('express');
const { getAllItems } = require('../controllers/items');

const router = Router();

router.get('/', getAllItems);

module.exports = router;