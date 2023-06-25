const router = require('express').Router();
const items = require('../services/itemService');

router.get('/', async (req, res) => {

    const tapestries = await items.getItems();

    const myOrdersCount = await items.getMyOrdersNumber(req.user._id);

    res.render('home/index', {tapestries, title: 'Гоблени', ordersCounter: myOrdersCount.length});

})

module.exports = router;