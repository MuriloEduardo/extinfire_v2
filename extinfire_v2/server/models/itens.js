"use strict"

let mongoose = require('mongoose');

let itensSchema = mongoose.Schema({
	images: [],
	nome: String,
	valor_custo: String,
	valor_venda: String,
	qntde_atual: Number,
	qntde_minima: Number,
	updatedAt: {
        type: Date, 
        default: Date.now
    }
});

module.exports = mongoose.model('Itens', itensSchema);