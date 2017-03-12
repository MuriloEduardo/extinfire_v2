"use strict"

let mongoose = require('mongoose');

let servicoSchema = mongoose.Schema({
	cliente: {},
	itens: [{
		produto: {},
		qntde: Number,
		valor_total: Number,
		validade: { type: Date }
	}],
	tipo: Boolean,
	observacao: String,
	valor_total: Number,
	updatedAt: {
        type: Date, 
        default: Date.now 
    }
});

module.exports = mongoose.model('Servico', servicoSchema);