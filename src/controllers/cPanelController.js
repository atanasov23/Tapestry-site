const router = require('express').Router();
const items = require('../services/itemService');
const validation = require('../services/fieldValidationService');

router.get('/Cpanel', (req, res) => {

    res.render('tapestry-main/admin_panel');

});

router.get('/orders', (req, res) => {

    res.render('tapestry-main/orders');
    
});



module.exports = router;