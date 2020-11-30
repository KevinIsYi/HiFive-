const { Schema, model } = require('mongoose');

const UserPurchasesSchema = Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

module.exports = model('UserPurchases', UserPurchasesSchema);