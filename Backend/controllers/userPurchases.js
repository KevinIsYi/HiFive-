const { validationResult } = require('express-validator');
const PurchasedItem = require('../models/PurchasedItem');
const User = require('../models/User');
const Item = require('../models/Item');
const UserPurchases = require('../models/UserPurchases');
const UserReturns = require('../models/UserReturns');

const getPurchasedItems = async ( req, res ) => {
    const errors = validationResult(req);
    const { headers:{ user } } = req;

    console.log(user);
    
    if (!errors.isEmpty() || typeof user !== "string" || user.length != 24) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped,
            message: 'Data was not received as expected'
        });
    }

    try {
        const orders = await UserPurchases.find({ user });
        console.log("Ordenes: ", orders);
        const purchases = [];
        for (const eachOrder of orders) {
            const { _id, order, date } = eachOrder;
            const boughtItems = await PurchasedItem.find({ order: _id });
            
            let currentItem = {};
            const orders = [];

            for (const { _id, order, item, quantity, unitPrice } of boughtItems) {
                const { name } = await Item.findById(item);
                currentItem = {
                    id: _id,
                    order,
                    item,
                    quantity,
                    unitPrice,
                    name
                }
                orders.push(currentItem);
            }

            purchases.push({
                id: _id,
                order,
                date,
                orders
            });
        }

        res.status(200).json({
            ok: true,
            purchases
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: 'Cannot fetch from DB'
        })
    }
}

const purchasedItems = async ( req, res ) => {
    const errors = validationResult(req);

    console.log(req.body);
    
    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }

    try {
        const { body:{ items, user } } = req;
        
        /*
        items.forEach(async ({ item, quantity }) => {
            const existItem = await Item.findById(item);
            
            if (!existItem || typeof quantity !== "number") {
                return res.status(400).json({
                    ok: false,
                    message: 'Data was not received as expected'
                });
            }
        });
        */

        const currentDate = new Date();
        const currentItem = {
            user,
            date: currentDate
        };

        const order = new UserPurchases(currentItem);
        await order.save();

        items.forEach(async ({ _id, price, quantity }) => {
            const purchasedItems = new PurchasedItem({ order: order._id, item: _id, quantity, unitPrice: price });
            await purchasedItems.save();
        });

       res.json({
           ok: true,
           message: 'The purchase was successfully processed'
       });
        

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: 'Failed at adding items'
        });
    }
}

const getOrders = async ( req, res ) => {
    const { body:{ userId } } = req;

    if (!userId || typeof userId !== "string" || userId.length !== 24 || !await User.findById(userId)) {
        return res.status(400).json({
            ok: false,
            message: 'UserId was not received as expected'
        })
    }

    try {
        const orders = await UserPurchases.find({ user: userId });
    
        res.json({
            ok: true,
            orders
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: 'Failed at fetching data from DB'
        })
    }
}

const returnItems = async ( req, res ) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    }

    try {

        const { body:{ orderId, quantity } } = req;
        const purchase = await UserPurchases.findById(orderId);
        
        if (!purchase || purchase.quantity < quantity) {
            return res.status(400).json({
                ok: false,
                message: "Data received doesn't match with DB"
            });
        }

        const newQuantity = purchase.quantity - quantity;
        
        if (newQuantity === 0) {
            await UserPurchases.findOneAndDelete({ _id: orderId });
        }
        else {
            purchase.quantity = newQuantity;
            await UserPurchases.findOneAndUpdate({ _id: orderId }, purchase);
        }

        const userReturn = new UserReturns({ user: purchase.user, order: orderId, date: new Date(), quantity });
        await userReturn.save();

        res.status(201).json({
            ok: true,
            message: 'Return is being processed'
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: 'Failed at returning process'
        })
    }
}

const getReturns = async ( req, res ) => {
    const { body:{ userId } } = req;

    if (!userId || typeof userId !== "string" || userId.length !== 24 || !await User.findById(userId)) {
        return res.status(400).json({
            ok: false,
            message: 'UserId was not received as expected'
        })
    }

    try {
        const orders = await UserReturns.find({ user: userId });
    
        res.json({
            ok: true,
            orders
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: 'Failed at fetching data from DB'
        })
    }
}

module.exports = {
    getPurchasedItems,
    purchasedItems,
    getOrders,
    returnItems,
    getReturns
}