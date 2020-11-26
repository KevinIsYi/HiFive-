const Item = require('../models/Item');
const { validationResult } = require('express-validator');
const User = require('../models/User');
const ShoppingCart = require('../models/ShoppingCart');

const getAllItems = async ( req, res ) => {

    try {
        const items = await Item.find({});
        res.json({
            ok: true,
            items
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: "Cannot fetch items from DB"
        });
    }
}

const getCartItems = async (req, res) => {

    const { headers:{ userid } } = req;
    
    if (!userid || typeof userid !== 'string' || userid.length !== 24 || !await User.findById(userid)) {
        return res.status(400).json({
            ok: false,
            message: 'Header: userid was not sent as needed'
        });
    }
    
    try {
        const itemsId = await ShoppingCart.find({ user: userid });
        const items = [];

        for (const { item } of itemsId) {
            const scItem = await Item.findById(item);
            items.push(scItem);
        }

        res.json({
            ok: true,
            items
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: 'Cannot fetch items from DB'
        });
    }

}

const setShoppingCart = async (req, res) => {
    const errors = validationResult(req);
    const { body:{ userId, cartItems } } = req;

    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }

    try {
        if (userId.length !== 24 || !await User.findById(userId)) {
            return res.status(400).json({
                ok: false,
                message: 'userId is not valid'
            });
        }
    
    
        cartItems.forEach(async itemId => {
            if (itemId.length !== 24 && !await Item.findById(itemId)) {
                return res.status(400).json({
                    ok: false,
                    message: 'Items are not valid'
                });
            }
        });
    
        cartItems.forEach(async itemId => {
            const shoppingCart = new ShoppingCart({ user: userId, item: itemId });
            shoppingCart.save();
        });
    
        res.status(201).json({
            ok: true,
            message: 'Items were saved in Shopping Cart'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            message: 'Failed at saving items in shopping cart'
        })
    }

}

module.exports = {
    getAllItems,
    getCartItems,
    setShoppingCart
}