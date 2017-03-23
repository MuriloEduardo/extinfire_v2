"use strict"

let mongoose = require('mongoose');

let servicoSchema = mongoose.Schema({
	images: [],
	nome: String,
	valor_venda: Number,
	updatedAt: {
        type: Date, 
        default: Date.now
    }
});

module.exports = mongoose.model('Servico', servicoSchema);