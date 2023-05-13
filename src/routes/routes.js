const homeController = require('../controllers/homeController');
const authController = require('../controllers/authController');
const offerController = require('../controllers/offersController');

const router = require('express').Router();

router.use(authController);

router.use(homeController);

router.use(offerController);

router.get('*', (req, res) => {

    res.render('offers/404');

});

module.exports = router;