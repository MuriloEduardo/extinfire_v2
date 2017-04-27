"use strict"

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let vendasSchema = mongoose.Schema({
	cliente: {
		type: Schema.Types.ObjectId, 
		ref: 'Clientes'
	},
	itens: [{
		item: {
			type: Schema.Types.ObjectId, 
			ref: 'Itens'
		},
		qntde: Number,
		total: String,
		validade: String
	}],
	tipo: Boolean,
	observacao: String,
	valor_total: String,
	updatedAt: {
        type: Date, 
        default: Date.now 
    }
});

module.exports = mongoose.model('Vendas', vendasSchema);