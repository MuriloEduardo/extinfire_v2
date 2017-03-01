let mongoose = require('mongoose');

let clienteSchema = mongoose.Schema({
	nome: String,
	representante: String,
	cnpj: Number,
	insc_estadual: String,
	comprador: String,
	foto: String,
	contato: {
		fone: Number,
		celular: Number,
		email: String
	},
	endereco: {
		logradouro: String,
		numero: String,
		complemento: String,
		bairro: String,
		cidade: String,
		estado: String,
		cep: Number
	}
});
module.exports = mongoose.model('Cliente', clienteSchema);