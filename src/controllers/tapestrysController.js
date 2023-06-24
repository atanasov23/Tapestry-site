const router = require('express').Router();
const tapestry = require('../services/tapestryService');

router.get('/Cpanel', (req, res) => {

    res.render('tapestry-main/admin_panel');
});

router.get('/orders', (req, res) => {

    res.render('tapestry-main/orders');
});

router.get('/adding', (req, res) => {

    res.render('tapestry-main/adding');
});

router.post('/adding', (req, res) => {

    console.log(req.body);
});

module.exports = router;