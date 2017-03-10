"use strict"

let mongoose = require('mongoose');

let logsSchema = mongoose.Schema({
	descricao: String,
	usuario: String,
	item: String,
	criadoEm: {
        type: Date, 
        default: Date.now 
    }
});

module.exports = mongoose.model('Logs', logsSchema);