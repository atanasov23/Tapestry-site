const Items = require('../models/item');
const Order = require('../models/order');

const getMyOrdersNumber = async (userID) => {

    return await Order.find({ user: userID }).populate('id').lean();
}

const addingAnItems = (data, file) => {

    data.owner = 'detelina_204410';

    data.fileName = file;

    Items.create(data);
}

const getItems = () => {

    return Items.find({ category: 'tapestry' }).lean();

}

const getMyOrders = async (userID) => {

    return Order.find({ user: userID }).populate('id').lean();
}

const getItemDetails = async (id) => {

    return Items.findById(id).lean();
}

const addingToOrders = async (id, userID, quantity) => {

    const date = new Date();

    const dateAndTime = {
        day: date.getDate(),
        month: date.getDay(),
        year: date.getFullYear(),
        hour: date.getHours(),
        minutes: date.getMinutes()
    }

    if (date.getMinutes() < 10) {
        dateAndTime.minutes = '0' + date.getMinutes();
    }

    const data = {
        id,
        user: userID,
        quantity,
        dateAndTime
    }

    Order.create(data);
}

const removeFromOrders = async (id, userID) => {

    /* Order.deleteOne({ _id: id }) */

    await Order.find({ user: userID }).deleteOne({ _id: id });

}

const emptyCart = async (userID) => {

    await Order.find({ user: userID }).deleteMany();

}

module.exports = {
    addingAnItems,
    getItems,
    getItemDetails,
    addingToOrders,
    getMyOrders,
    removeFromOrders,
    getMyOrdersNumber,
    emptyCart
}