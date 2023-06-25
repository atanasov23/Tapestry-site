const routeGuard = (req, res, next) => {

    if (!res.locals.log) {

        res.render('tapestry-main/404');

    }

    next();
}


const CpanelGuard = (req, res, next) => {

    if (req.user.username !== 'detelina_204410') {

        res.render('tapestry-main/404');

    }

    next();
}

module.exports = {
    routeGuard,
    CpanelGuard
}