"use strict"

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let logsSchema = mongoose.Schema({
	descricao: String,
	usuario: {
		type: Schema.Types.ObjectId, 
		ref: 'Usuario'
	},
	item: {
		type: Schema.Types.ObjectId, 
		ref: 'Item'
	},
	updatedAt: {
        type: Date, 
        default: Date.now 
    }
});

module.exports = mongoose.model('Logs', logsSchema);