"use strict"

let mongoose = require('mongoose');

let logsSchema = mongoose.Schema({
	descricao: String,
	criadoEm: {
        type: Date, 
        default: Date.now 
    },
    criador: String
});

module.exports = mongoose.model('Logs', logsSchema);