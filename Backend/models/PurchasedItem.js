const { Schema, model } = require('mongoose');

const PurchasedItemSchema = Schema({
    order: {
        type: Schema.Types.ObjectId,
        ref: 'UserPurchases',
        required: true
    },
    item: {
        type: Schema.Types.ObjectId,
        ref: 'Item',
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    unitPrice: {
        type: Number,
        required: true
    }
});

module.exports = model('PuchasedItem', PurchasedItemSchema);