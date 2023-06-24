const router = require('express').Router();
const items = require('../services/itemService');
const validation = require('../services/fieldValidationService');

router.get('/details/:id', async (req, res) => {

    const details = await items.getItemDetails(req.params.id);

    res.render('tapestry-main/details', { details, title: details.header});

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

            file.mv('./src/public/tapestry-image/' + file.name);

            items.addingAnItems(req.body, file.name);

            res.redirect('/');

        }
    }
});

module.exports = router;