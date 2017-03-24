"use strict"

let mongoose = require('mongoose');

let vendaSchema = mongoose.Schema({
	nome: String,
	cliente: {},
	itens: [{
		item: {},
		qntde: Number,
		total: Number,
		tipo: Boolean,
		validade: { type: Date }
	}],
	tipo: String,
	observacao: String,
	valor_total: Number,
	updatedAt: {
        type: Date, 
        default: Date.now 
    }
});

module.exports = mongoose.model('Venda', vendaSchema);