"use strict"

let mongoose = require('mongoose');

let vendaSchema = mongoose.Schema({
	nome: String,
	cliente: {},
	itens: [{
		item: {},
		qntde: Number,
		total: String,
		tipo: Boolean,
		validade: String
	}],
	tipo: String,
	observacao: String,
	valor_total: String,
	updatedAt: {
        type: Date, 
        default: Date.now 
    }
});

module.exports = mongoose.model('Venda', vendaSchema);