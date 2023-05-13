const routeGuard = (req, res, next) => {

    if (!res.locals.log) {

        res.render('offers/404');
        
    }

    next();
}

module.exports = routeGuard;