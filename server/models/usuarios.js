"use strict"

let mongoose  = require('mongoose');
let bcrypt    = require('bcryptjs');

let usuariosSchema = mongoose.Schema({
	nome: String,
	image: String,
	tipo: Boolean,
	email: String,
	senha: String,
	updatedAt: {
        type: Date, 
        default: Date.now 
    }
});

usuariosSchema.methods.generateHash = function(senha){
	return bcrypt.hashSync(senha, bcrypt.genSaltSync(9));
}

usuariosSchema.methods.validPassword = function(senha){
	return bcrypt.compareSync(senha, this.senha);
}

module.exports = mongoose.model('Usuarios', usuariosSchema);