const homeController = require('../controllers/homeController');
const authController = require('../controllers/authController');
const tapestrysController = require('../controllers/tapestrysController');

const router = require('express').Router();

router.use(authController);

router.use(homeController);

router.use(tapestrysController);

router.get('*', (req, res) => {

    res.render('tapestry-main/404', { layout: false });

});

module.exports = router;