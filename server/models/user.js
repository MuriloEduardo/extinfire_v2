"use strict"

let mongoose  = require('mongoose');
let bcrypt    = require('bcryptjs');

let usuarioSchema = mongoose.Schema({
	nome: String,
	foto_perfil: String,
	tipo: Boolean,
	local: {
		email: String,
		senha: String
	},
	updatedAt: {
        type: Date, 
        default: Date.now 
    }
});

usuarioSchema.methods.generateHash = function(senha){
	return bcrypt.hashSync(senha, bcrypt.genSaltSync(9));
}

usuarioSchema.methods.validPassword = function(senha){
	return bcrypt.compareSync(senha, this.local.senha);
}

module.exports = mongoose.model('Usuario', usuarioSchema);