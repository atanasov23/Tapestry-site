const util = require('util');
const jsonwebtoken = require('jsonwebtoken');

const jwpPromises = {
    sign: util.promisify(jsonwebtoken.sign),
    verify: util.promisify(jsonwebtoken.verify)
}

module.exports = {
    jwpPromises
}