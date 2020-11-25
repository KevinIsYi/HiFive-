const { validationResult } = require('express-validator');
const Item = require('../models/Item');
const UserPurchases = require('../models/UserPurchases');

const purchasedItems = async ( req, res ) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }

    try {
        const { body:{ items, user } } = req;
        
        items.forEach(async ({ item, quantity }) => {
            const existItem = await Item.findById(item);
            
            if (!existItem || typeof quantity !== "number") {
                return res.status(400).json({
                    ok: false,
                    message: 'Data was not received as expected'
                });
            }
        });

        const currentDate = new Date();
        const currentItem = {
            user,
            date: currentDate
        };
        items.forEach(async ({ item, quantity }) => {
              currentItem.item = item;
              currentItem.quantity = quantity;

              const itemPurchased = new UserPurchases(currentItem);
              await itemPurchased.save();
        })
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

module.exports = {
    purchasedItems
}