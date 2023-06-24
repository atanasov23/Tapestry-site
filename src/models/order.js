const mongoose = require('mongoose');

const ordersSchema = new mongoose.Schema({

    id: {
        type: String,
        ref: 'Items'
    },
    user: {
        type: String
    },
    quantity: {
        type: String
    },
    dateAndTime: {
        type: Object
    }
});

const Order = mongoose.model('Order', ordersSchema);

module.exports = Order;