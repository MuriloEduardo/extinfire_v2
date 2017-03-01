let mongoose = require('mongoose');

let produtoSchema = mongoose.Schema({
	nome: String,
	valor_custo: Number,
	valor_venda: Number,
	qntde_atual: Number,
	qntde_minima: Number
});

module.exports = mongoose.model('Produto', produtoSchema);