const router = require('express').Router();
const tapestry = require('../services/tapestryService');
const validation = require('../services/fieldValidationService');

router.get('/Cpanel', (req, res) => {

    res.render('tapestry-main/admin_panel');
});

router.get('/orders', (req, res) => {

    res.render('tapestry-main/orders');
});

router.get('/adding', (req, res) => {

    res.render('tapestry-main/adding');
});

router.post('/adding', (req, res) => {

    if (req.files === null) {

        res.render('tapestry-main/adding', { err: 'Няма избран файл!' });

    } else {

        if (validation.addValidation(req.body)) {

            res.render('tapestry-main/adding', { err: 'Всички полета са задължителни!' });

        } else {

            const file = req.files.file;

            file.mv('./src/tapestry-image/' + file.name);

            tapestry.addingAtapestry(req.body);

            res.redirect('/');

        }
    }
});

module.exports = router;