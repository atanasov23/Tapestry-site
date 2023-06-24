const mongoose = require('mongoose');

const ordersSchema = new mongoose.Schema({

    id: {
        type: String
    },
    user: {
        type: String
    },
    quantity: {
        type: String
    }
});

const Order = mongoose.model('Order', ordersSchema);

module.exports = Order;