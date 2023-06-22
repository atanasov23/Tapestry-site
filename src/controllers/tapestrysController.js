const router = require('express').Router();
const tapestry = require('../services/tapestryService');

router.get('/Cpanel', (req, res) => {

    res.render('tapestry-main/admin_panel');
});

router.get('/orders', (req, res) => {

    res.render('tapestry-main/orders');
});

module.exports = router;