"use strict"
let mongoose = require('mongoose');

require('mongoose-currency').loadType(mongoose);
let Currency = mongoose.Types.Currency;

let produtoSchema = mongoose.Schema({
	images: [],
	nome: String,
	valor_custo: { type: Currency },
	valor_venda: { type: Currency },
	qntde_atual: Number,
	qntde_minima: Number,
	updatedAt: {
        type: Date, 
        default: Date.now
    }
});

module.exports = mongoose.model('Produto', produtoSchema);