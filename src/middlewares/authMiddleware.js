const jsonwebtoken = require('jsonwebtoken');
const myUtils = require('../utils/util');
const SECRET = 'awf232daw343gse32gsgs3223gshh';

const authentication = async (req, res, next) => {

    const cookie = req.cookies['auth'];

    if (cookie) {

        try {

            const verify = await myUtils.jwpPromises.verify(cookie, SECRET);

            req.user = verify;

            req.loggedIn = true;

            res.locals.log = true;

            if(req.user.username === 'detelina_204410'){
                res.locals.admin = true;
            }

           

        } catch (err) {

            res.clearCookie('auth');

            res.render('auth/login');
         
        }

    }else{
        
        req.user = {id: 0};
        res.locals.log = false;
    }

    next();

}

module.exports = { authentication };