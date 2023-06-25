const router = require('express').Router();
const items = require('../services/itemService');
const validation = require('../services/fieldValidationService');
const routesGuard = require('../middlewares/routesGuard');

router.get('/Cpanel', routesGuard.CpanelGuard, (req, res) => {

    res.render('tapestry-main/admin_panel');

});

router.get('/orders', (req, res) => {

    res.render('tapestry-main/orders');

});



module.exports = router;