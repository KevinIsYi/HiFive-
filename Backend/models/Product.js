const { Schema, model } = require('mongoose');

const ProductSchema = Schema({
    image: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: String,
        required: true
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

ProductSchema.method('toJSON', function () {
    const { __v, id, ...object } = this.toObject(); 

    return object;
});

module.exports = model('Product', ProductSchema);

