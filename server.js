"use strict"

let express    = require('express');
let app 	   = express();
let bodyParser = require('body-parser');
let mongoose   = require('mongoose');
let configDB   = require('./server/config/database');
let multer     = require('multer');
let morgan     = require('morgan');
let path       = require("path");
let favicon    = require('serve-favicon');
let port       = process.env.PORT || 3000;
let api        = require('./server/routes/api');
<<<<<<< HEAD
let cors 	   = require('cors');
=======
>>>>>>> fa1459ca6e8e07a963e29214fbfe77216d34a636
let options    = {
	server: {
		socketOptions: { 
			keepAlive: 300000, 
			connectTimeoutMS: 30000 
		} 
	},
	replset: { 
		socketOptions: { 
			keepAlive: 300000, 
			connectTimeoutMS : 30000 
		} 
	} 
};
<<<<<<< HEAD

=======
>>>>>>> fa1459ca6e8e07a963e29214fbfe77216d34a636
mongoose.connect((process.env.MONGO_URL || configDB.url), options, (err, res) => {
	mongoose.Promise = global.Promise;
	if(err) throw err;

	console.info('MongoDB Conectado');
});

<<<<<<< HEAD
app.use(cors({ origin: true, credentials: true }));

=======
>>>>>>> fa1459ca6e8e07a963e29214fbfe77216d34a636
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan('dev'));

app.use('/uploads', express.static('server/uploads'));
app.use('/', express.static('dist'));

app.use('/api', api);

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.use(favicon(path.join(__dirname, 'server', 'images', 'favicon.ico')));

app.listen(port);
console.log('Magic happens on port: ' + port);