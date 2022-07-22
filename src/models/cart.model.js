const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema(
    {
        name: { type: String, required: true},
        type: { type: String, required: true},
        price: {type: Number, required: true},
        image: {type: String, required: true},
        rating: {type: Number, required: true},
        description: {type: String}
    },
    {
        versionKey: false,
        timestamps: true
    }
);

const Cart = mongoose.model('cart', cartSchema);

module.exports = Cart;