const Items = require('../models/item');

const addingAnItems = (data, file) => {

    data.owner = 'detelina_204410';

    data.fileName = file;

    Items.create(data);
}

const getItems = async () => {

    return Items.find({ category: 'tapestry' }).lean();

}

const getItemDetails = async (id) => {

    return Items.findById(id).lean();
}

module.exports = {
    addingAnItems,
    getItems,
    getItemDetails
}