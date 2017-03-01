let mongoose = require('mongoose');

let servicoSchema = mongoose.Schema({
	cliente: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Cliente'
	},
	itens: [{
		produto: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Produto'
		},
		qntde: Number,
		valor_unitario: Number,
		valor_totla: Number
	}],
	tipo: String,
	observacao: String,
	valor_total: Number,
	criadoEm: {
        type: Date, 
        default: Date.now 
    }
});

module.exports = mongoose.model('Servico', servicoSchema);