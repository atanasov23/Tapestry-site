const router = require('express').Router();
const items = require('../services/itemService');
const validation = require('../services/fieldValidationService');
const routesGuard = require('../middlewares/routesGuard');

router.get('/details/:id', async (req, res) => {

    const details = await items.getItemDetails(req.params.id);

    const myOrdersCount = await items.getMyOrdersNumber(req.user._id);

    let admin = false;

    if (req.user.username === 'detelina_204410') {

        admin = true;
    }

    res.render('tapestry-main/details', { details, title: details.header, admin, ordersCounter: myOrdersCount.length });

});

router.post('/details/:id', (req, res) => {

    const cartCookie = req.cookies['cart'];

    cartCookie.id.push(req.params.id);

    res.cookie('cart', cartCookie);

    items.addingToOrders(req.params.id, req.user._id, req.body.quantity);

    res.redirect('/cart');

});

router.get('/cart', routesGuard.routeGuard, async (req, res) => {

    const myOrders = await items.getMyOrders(req.user._id);

    const myOrdersCount = await items.getMyOrdersNumber(req.user._id);

    res.render('tapestry-main/cart', { myOrders, ordersCounter: myOrdersCount.length });
});

router.get('/remove/:id', routesGuard.routeGuard, (req, res) => {

    items.removeFromOrders(req.params.id, req.user._id);

    res.redirect('/cart');
});

router.get('/emptyCart', (req, res) => {

    items.emptyCart(req.user._id);

    res.redirect('/cart');
})

router.get('/adding', routesGuard.routeGuard, (req, res) => {

    res.render('tapestry-main/adding');
});

router.post('/adding', routesGuard.routeGuard, (req, res) => {

    if (req.files === null) {

        res.render('tapestry-main/adding', { err: 'Няма избран файл!' });

    } else {

        if (validation.addValidation(req.body)) {

            res.render('tapestry-main/adding', { err: 'Всички полета са задължителни!' });

        } else {

            const file = req.files.file;

            file.mv('./src/public/tapestry-image/' + file.name);

            items.addingAnItems(req.body, file.name);

            res.redirect('/');

        }
    }
});

module.exports = router;