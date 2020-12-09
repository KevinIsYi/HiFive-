/*
    host + api/auth + route
*/

const { Router } = require('express');
const { createUser, loginUser } = require('../controllers/auth');
const { check, header } = require('express-validator');
const validateErrors = require('../middlewares/validate-errors');

const router = Router();

router.post(
    '/',
    [
        check('name',  'Field: name is required').notEmpty(),
        check('lastName', 'Field: lastName is required').notEmpty(),
        check('password', 'Password must have at least 8 characters and it must be a string').isLength({ min: 8 }).isString(),
        check('email', 'Email is not valid').isEmail(),
        validateErrors
    ],
    createUser
);
router.get(
    '/login', 
    [
        header('email', 'Field: email is required on header').notEmpty(),
        header('password', 'Field: password is required on header').notEmpty(),
        validateErrors
    ],
    loginUser
);

module.exports = router;