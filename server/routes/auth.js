let express = require('express');
let router = express.Router();
let jwt = require('jwt-simple');
let config = require('../config/database');

let User = require('../models/user');

//////////////// AUTHENTICATE ////////////////////////
/////////////////////////////////////////////////////

router.post('/authenticate', (req, res, next) => {

	console.log(req.body)

	User.findOne({
        'local.email': req.body.email
    }, function(err, user){
    	console.log(user)
        if (err) throw err;
        
        if(!user) {
            res.json({success: false, msg: 'Authentication failed, User not found'});
        } else {

   			let token = jwt.encode(user, config.secret);

			if(!user.validPassword(req.body.senha)) {
				return res.json({success: false, msg: 'Authenticaton failed, wrong password.'});
			}
   			res.json({success: true, token: token, user: user});
        }  
    });
});

module.exports = router;