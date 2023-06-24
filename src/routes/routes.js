const homeController = require('../controllers/homeController');
const authController = require('../controllers/authController');
const cPanelController = require('../controllers/cPanelController');
const itemController = require('../controllers/itemController');

const router = require('express').Router();

router.use(authController);

router.use(homeController);

router.use(cPanelController);

router.use(itemController);

router.get('*', (req, res) => {

    res.render('tapestry-main/404', { layout: false });

});

module.exports = router;