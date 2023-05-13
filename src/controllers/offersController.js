const router = require('express').Router();
const fielsdValidation = require('../services/fieldValidationService');
const offer = require('../services/offerService');
const routeGuard = require('../middlewares/routesGuard');

router.get('/create', routeGuard, (req, res) => {

    res.render('offers/create');

});

router.post('/create', (req, res) => {

    try {

        fielsdValidation.offerFieldValidation(req.body);

        offer.createOffer(req.body, req.user._id);

        res.redirect('/');

    } catch (err) {

        res.render('offers/create', { err: err.message });

    }

});

router.get('/crypto/buy/:id', routeGuard,  (req, res) => {

    offer.buyCrypto(req.params.id, res, req);

})

router.get('/edit/:id', routeGuard, async (req, res) => {

    const templateData = await offer.editViewTemplate(req.params.id);

    res.render('offers/edit', { templateData });

});

router.post('/edit/:id', routeGuard, async (req, res) => {

    try {

        fielsdValidation.offerFieldValidation(req.body); 

        offer.editOffer(req.params.id, req.body, res);

    } catch (err) {

        const templateData = await offer.editViewTemplate(req.params.id);

        res.render('offers/edit', { err: err.message, templateData });

    }
});

router.get('/delete/:id', routeGuard, (req, res) => {

    offer.deleteOffer(req.params.id, res);

});

router.get('/search', (req, res) => {

    res.render('offers/search');

});

router.get('/catalog', async (req, res) => {

    const viewTemplate = await offer.catalogTemplate();

    res.render('offers/catalog', { viewTemplate });
});

router.get('/details/:id', async (req, res) => {

    const offerData = await offer.detailsTemplate(req.params.id, req.user._id);

    res.render('offers/details', { offerData });

});




module.exports = router;