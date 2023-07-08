const express = require('express');
const handlebars = require('express-handlebars');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const routes = require('../src/routes/routes');
const authMiddleware = require('./middlewares/authMiddleware');
const cors = require('cors');
const fileUpload = require('express-fileupload');

mongoose.set('strictQuery', false);

mongoose.connect('mongodb://127.0.0.1:27017/tapestry', () => console.log('successful database connection'));

const app = express();

app.engine('hbs', handlebars.engine({ extname: 'hbs' }));

app.set('view engine', 'hbs');

app.set('views', 'src/views');

app.use(express.static('src/public'));

app.use(cors());

app.use(fileUpload());

app.use(cookieParser());

app.use(express.urlencoded({ extended: false }));

app.use(authMiddleware.authentication);

app.use(express.json());

app.use(routes);

app.listen(3000, () => console.log('Server started'));


