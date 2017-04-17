"use strict"

let mongoose = require('mongoose');

let empresasSchema = mongoose.Schema({
	nome: String,
	logotipo: String,
	cnpj: String,
	endereco: {
		logradouro: String,
		cep: String
	}
});

module.exports = mongoose.model('Empresas', empresasSchema);