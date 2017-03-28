"use strict"

let mongoose  = require('mongoose');
let bcrypt    = require('bcryptjs');

let usuarioSchema = mongoose.Schema({
	nome: String,
	image: String,
	tipo: String,
	email: String,
	senha: String,
	updatedAt: {
        type: Date, 
        default: Date.now 
    }
});

usuarioSchema.methods.generateHash = function(senha){
	return bcrypt.hashSync(senha, bcrypt.genSaltSync(9));
}

usuarioSchema.methods.validPassword = function(senha){
	return bcrypt.compareSync(senha, this.senha);
}

module.exports = mongoose.model('Usuario', usuarioSchema);