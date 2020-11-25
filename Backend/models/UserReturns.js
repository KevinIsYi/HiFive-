const { Schema, model } = require('mongoose');

const UserReturnsSchema = Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    item: {
        type: Schema.Types.ObjectId,
        ref: 'Item',
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