const { Schema, model } = require('mongoose');

const UserReturnsSchema = Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        requred: true
    },
    item: {
        type: Schema.Types.ObjectId,
        ref: 'Item',
        requred: true
    },
    quantity: {
        type: Number,
        requred: true
    }
});

module.exports = model('UserReturns', UserReturnsSchema);