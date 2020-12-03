const Item = require('../models/Item');
const User = require('../models/User');
const ShoppingCart = require('../models/ShoppingCart');

const { validationResult } = require('express-validator');

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
    console.log("Productos en carrito de: ", userid);
    
    if (!userid || typeof userid !== 'string' || userid.length !== 24 || !await User.findById(userid)) {
        return res.status(400).json({
            ok: false,
            message: 'Header: userid was not sent as needed'
        });
    }
    
    try {
        const scItems = await ShoppingCart.find({ user: userid });
        console.log("IDS: ", scItems);
        const items = [];

        for (const { item, quantity } of scItems) {
            const { _id, img, name, price, available } = await Item.findById(item);
            
            //scItem.quantity = quantity;
            items.push({ _id, img, name, price, quantity, available });
        }

        console.log("Se retorna_ ", items);

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

const deleteItems = (user, items) => {

    items.forEach(async item => {
        console.log("BUSCA: ", await ShoppingCart.findOne({ user, item }));
        await ShoppingCart.findOneAndDelete({ user, item });
    })
}

const setShoppingCart = async (req, res) => {
    const errors = validationResult(req);
    const { body:{ userId, updateItems, deletedItems } } = req;

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

        updateItems.forEach(async ({ itemId, quantity }) => {
            const existInShoppinCart = await ShoppingCart.find({ user: userId, item: itemId });

            if (existInShoppinCart.length === 0) {
                const newItem = new ShoppingCart({ user: userId, item: itemId, quantity: quantity });
                await newItem.save();
            }
            else {
                await ShoppingCart.findByIdAndUpdate(existInShoppinCart[0]._id, { quantity: quantity }, { new: true });
            }
        });

        deleteItems(userId, deletedItems);
    
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

const getPurchasedItemsDescriptions = async (req, res) => {
    const errors = validationResult(req);
    const { body:{ items } } = req;

    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }

    try {
        const allItems = [];
        for (const item of items) {
            const curr = await Item.findById(item);
            allItems.push(curr);
        }

        res.json({
            ok: true,
            allItems
        })

        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            message: 'Cannot fetch from DB'
        })
    }
}

const createItem = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }

    try {
        const { body:{ img } } = req;
        
        if (await Item.find({ img })) {
            return res.status(400).json({
                ok: false,
                message: 'An item with this image already exist'
            });
        }

        const newItem = new Item(body);
        await newItem.save();

        res.status(201).json({
            ok: true,
            message: 'Item was saved'
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: 'Failed at inserting in DB'
        })
    }
}

module.exports = {
    getAllItems,
    getCartItems,
    setShoppingCart,
    getPurchasedItemsDescriptions,
    createItem
}