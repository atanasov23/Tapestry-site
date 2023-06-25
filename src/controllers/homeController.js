const router = require('express').Router();
const items = require('../services/itemService');

router.get('/', async (req, res) => {

    const tapestries = await items.getItems();

    const myOrdersCount = await items.getMyOrdersNumber(req.user._id);

    if (req.user.id === 0) {

        res.render('home/index', { tapestries, title: 'Гоблени', ordersCounter: 0 });

    } else {

        res.render('home/index', { tapestries, title: 'Гоблени', ordersCounter: myOrdersCount.length });

    }

})

module.exports = router;