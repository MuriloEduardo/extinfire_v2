"use strict"

let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let configDB = require('./server/config/database');
let multer = require('multer');
let morgan = require('morgan');

let options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 
              replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };

mongoose.connect(configDB.url, options, (err, res) => {
  mongoose.Promise = global.Promise;
  if(err) throw err;
  console.info('MongoDB Conectado');
});

let allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.header('Access-Control-Allow-Credentials', true);

    next();
}

app.use(allowCrossDomain);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan('dev'));

app.use('/uploads', express.static('server/uploads'));

let port = process.env.PORT || 3000;

let api = require('./server/routes/api');
app.use('/api', api);

app.listen(port);
console.log('Magic happens on port ' + port);