const bcrypt = require('bcryptjs');
const User = require('../models/User');

const createUser = async ( req, res ) => {

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
            id: newUser._id,
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
    
    try {
        const { headers:{ email, password } } = req;
        const user = await User.findOne({ email });
        console.log(user);

        if (!user || !bcrypt.compareSync(password, user.password)) {
            return res.status(400).json({
                ok: false,
                message: "Credentials don't match"
            });
        }

        const { name, lastName } = user;

        return res.json({
            ok: true,
            id: user._id,
            name, 
            lastName
        });

    } catch(error) {
        console.log(error);
    }
}

module.exports = {
    createUser,
    loginUser
}