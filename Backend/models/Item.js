const { Schema, model } = require('mongoose');

const ItemSchema = Schema({
    img: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    available: {
        type: Number,
        required: true
    }
});

module.exports = model( 'Item', ItemSchema );