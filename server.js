"use strict"

let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let configDB = require('./server/config/database');
let multer = require('multer');
let morgan = require('morgan');
let path = require("path");

let options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 
              replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };

mongoose.connect(configDB.url, options, (err, res) => {
  mongoose.Promise = global.Promise;
  if(err) throw err;
  console.info('MongoDB Conectado url: ' + configDB.url);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan('dev'));

app.use('/uploads', express.static('server/uploads'));
app.use('/', express.static('dist'));

let port = process.env.PORT || 3000;

let api = require('./server/routes/api');
app.use('/api', api);

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port);
console.log('Magic happens on port: ' + port);