const router = require('express').Router();
const { register, login } = require('../services/authService');

router.get('/register', (req, res) => {

    res.render('auth/register');

})

router.get('/login', (req, res) => {

    res.render('auth/login');

})

router.post('/login', async (req, res) => {

    if (res.cookie['cart'] == undefined) {
        console.log(20);
        res.cookie('cart', { id: [] });
    }

    try {

        const token = await login(req.body);

        res.cookie('auth', token);

        res.redirect('/');

    } catch (err) {

        res.render('auth/login', { err: err.message });

    }

})

router.post('/register', async (req, res) => {

    try {

        await register(req.body);

        res.redirect('/');

    } catch (err) {

        res.render('auth/register', { err: err.message });

    }

})

router.get('/logout', (req, res) => {

    res.clearCookie('auth');

    res.redirect('/');
})

module.exports = router;