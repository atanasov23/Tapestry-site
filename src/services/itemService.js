const Items = require('../models/item');
const Order = require('../models/order');

const addingAnItems = (data, file) => {

    data.owner = 'detelina_204410';

    data.fileName = file;

    Items.create(data);
}

const getItems = () => {

    return Items.find({ category: 'tapestry' }).lean();

}

const getMyOrders = async (userID) => {

    return Order.find( {user: userID} ).lean();
}

const getItemDetails = async (id) => {

    return Items.findById(id).lean();
}

const addingToOrders = async (id, userID, quantity) => {

    const data = {
        id,
        user: userID,
        quantity
    }

    Order.create(data);
}

module.exports = {
    addingAnItems,
    getItems,
    getItemDetails,
    addingToOrders,
    getMyOrders
}