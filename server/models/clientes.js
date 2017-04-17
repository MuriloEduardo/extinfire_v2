"use strict"

let mongoose = require('mongoose');

let clientesSchema = mongoose.Schema({
	images: [],
	nome: String,
	representante: String,
	cnpj: String,
	cpf: String,
	insc_estadual: String,
	comprador: String,
	foto: String,
	contato: {
		fone: String,
		celular: String,
		email: String
	},
	endereco: {
		logradouro: String,
		numero: String,
		complemento: String,
		bairro: String,
		cidade: String,
		estado: String,
		cep: String
	},
	updatedAt: {
        type: Date, 
        default: Date.now 
    }
});
module.exports = mongoose.model('Clientes', clientesSchema);