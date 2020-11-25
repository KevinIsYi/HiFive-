const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const User = require('../models/User');
const { response } = require('express');

const createUser = async ( req, res ) => {

    const errors = validationResult( req );
    
    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    }

    try {
        const { body, body: { email, password } } = req;
        let newUser = await User.findOne({ email });

        if (newUser) {
            return res.status(400).json({
                ok: false,
                message: 'Email already exist'
            });
        }

        newUser = new User(body);
        const salt = bcrypt.genSaltSync();

        newUser.password = bcrypt.hashSync(password, salt);

        await newUser.save(newUser);

        return res.status(201).json({
            ok: true,
            message: 'Created new user'
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            ok: false,
            message: 'Failed at creating user'
        });
    }
};

const loginUser = async ( req, res ) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    }
    
    try {
        const { headers:{ email, password } } = req;
        const user = await User.findOne({ email });

        if (!user || !bcrypt.compareSync(password, user.password)) {
            return res.status(400).json({
                ok: false,
                message: "Credentials don't match"
            });
        }

        return res.json({
            ok: true,
            id: user._id
        })

    } catch(error) {
        console.log(error);
    }
}

module.exports = {
    createUser,
    loginUser
}