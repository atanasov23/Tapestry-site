const mongoose = require('mongoose');

const itemsSchema = new mongoose.Schema({

    header: {
        type: String
    },
    size: {
        type: String
    },
    price: {
        type: String
    },

    category: {
        type: String
    },

    owner: {
        type: String,
    }
});

const Items = mongoose.model('Items', itemsSchema);

module.exports = Items;