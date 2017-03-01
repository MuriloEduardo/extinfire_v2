let mongoose = require('mongoose');

let empresaSchema = mongoose.Schema({
	nome: String,
	logotipo: String,
	cnpj: String,
	endereco: {
		logradouro: String,
		cep: String
	}
});

module.exports = mongoose.model('Empresa', empresaSchema);