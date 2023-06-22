const express = require('express');
const handlebars = require('express-handlebars');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const routes = require('../src/routes/routes');
const authMiddleware = require('./middlewares/authMiddleware');

mongoose.set('strictQuery', false);

mongoose.connect('mongodb://localhost:27017/tapestry', () => console.log('successful database connection'));

const app = express();

app.engine('hbs', handlebars.engine({ extname: 'hbs' }));

app.set('view engine', 'hbs');

app.set('views', 'src/views');

app.use(express.static('src/public'));

app.use(cookieParser());

app.use(express.urlencoded({ extended: false }));

app.use(authMiddleware.authentication);

app.use(routes);

app.listen(3000, () => console.log('Server started'));


