const mongoose = require('mongoose');

const tapestrySchema = new mongoose.Schema({

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

const Tapestry = mongoose.model('Tapestry', tapestrySchema);

module.exports = Tapestry;