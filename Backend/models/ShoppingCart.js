const { Schema, model } = require('mongoose');

const ShoppingCartSchema = Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    item: {
        type: Schema.Types.ObjectId,
        ref: 'Item',
        required: true
    }
});

module.exports = model( 'ShoppingCart', ShoppingCartSchema );