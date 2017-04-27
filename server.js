"use strict"

let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let configDB = require('./server/config/database');
let multer = require('multer');
let morgan = require('morgan');
<<<<<<< HEAD
let path = require("path");
=======
<<<<<<< HEAD
let path = require("path");
=======
>>>>>>> 235b6fe7f561721f547484d57a657cbec9917fa3
>>>>>>> a90c90875770416449d6528c4bbdfb13285b7a7f

let options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 
              replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };

mongoose.connect(configDB.url, options, (err, res) => {
  mongoose.Promise = global.Promise;
  if(err) throw err;
<<<<<<< HEAD

  console.info('MongoDB Conectado url: ' + configDB.url);
});

=======
<<<<<<< HEAD
  console.info('MongoDB Conectado url: ' + configDB.url);
});

=======
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
>>>>>>> 235b6fe7f561721f547484d57a657cbec9917fa3
>>>>>>> a90c90875770416449d6528c4bbdfb13285b7a7f
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan('dev'));

app.use('/uploads', express.static('server/uploads'));
<<<<<<< HEAD
app.use('/', express.static('dist'));
=======
<<<<<<< HEAD
app.use('/', express.static('dist'));
=======
>>>>>>> 235b6fe7f561721f547484d57a657cbec9917fa3
>>>>>>> a90c90875770416449d6528c4bbdfb13285b7a7f

let port = process.env.PORT || 3000;

let api = require('./server/routes/api');
app.use('/api', api);

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a90c90875770416449d6528c4bbdfb13285b7a7f
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port);
<<<<<<< HEAD
console.log('Magic happens on port: ' + port);
=======
console.log('Magic happens on port: ' + port);
=======
app.listen(port);
console.log('Magic happens on port ' + port);
>>>>>>> 235b6fe7f561721f547484d57a657cbec9917fa3
>>>>>>> a90c90875770416449d6528c4bbdfb13285b7a7f
