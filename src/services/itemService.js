const Items = require('../models/item');

const addingAnItems = (data) => {

    data.owner = 'detelina_204410';

    Items.create(data);
}

module.exports = {
    addingAnItems
}