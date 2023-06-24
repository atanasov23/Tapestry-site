const router = require('express').Router();
const items = require('../services/itemService');

router.get('/', async (req, res) => {

    const tapestries = await items.getItems();

    res.render('home/index', {tapestries, title: 'Гоблени'});

})

module.exports = router;