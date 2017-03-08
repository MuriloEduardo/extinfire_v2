"use strict"

let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let configDB = require('./server/config/database');
let multer = require('multer');

mongoose.connect(configDB.url, (err, res) => {
  mongoose.Promise = global.Promise;
  if(err) throw err;
  console.info('MongoDB Conectado');
});

let allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'https://extinfire-v2-muriloeduardo.c9users.io');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.header('Access-Control-Allow-Credentials', true);

    next();
}

app.use(allowCrossDomain);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let port = process.env.PORT || 8080;

let auth = require('./server/routes/auth');
let api = require('./server/routes/api');
app.use('/api', api);
app.use('/auth', auth);

app.listen(port);
console.log('Magic happens on port ' + port);