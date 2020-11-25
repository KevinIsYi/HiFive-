const { Schema, model } = require('mongoose');

const UserReturnsSchema = Schema({
    order: {
        type: Schema.Types.ObjectId,
        ref: 'UserPurchases',
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

module.exports = model('UserReturns', UserReturnsSchema);