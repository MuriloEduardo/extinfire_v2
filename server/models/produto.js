"use strict"

let mongoose = require('mongoose');

let produtoSchema = mongoose.Schema({
	images: [],
	nome: String,
	valor_custo: Number,
	valor_venda: Number,
	qntde_atual: Number,
	qntde_minima: Number,
	updatedAt: new Date()
});

module.exports = mongoose.model('Produto', produtoSchema);