/*
    host + api/auth + route
*/

const { Router } = require('express');
const { createUser } = require('../controllers/auth');

const router = Router();

router.post('/', createUser);

module.exports = router;