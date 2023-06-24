const Tapestry = require('../models/tapestry');

const addingAtapestry = (data) => {

    data.owner = 'detelina_204410';

    Tapestry.create(data);
}

module.exports = {
    addingAtapestry
}