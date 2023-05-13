const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    PaymentMethod: {
        type: String,
        required: true
    },
    buyAcrypto: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
    owner: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }]


});

const Offer = mongoose.model('Offer', offerSchema);

module.exports = Offer;