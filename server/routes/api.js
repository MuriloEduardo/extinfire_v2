"use strict"

let express = require('express');
let router = express.Router();
let jwt = require('jwt-simple');
let config = require('../config/database');
let User = require('../models/user');
let Empresa = require('../models/empresa');
let Servico = require('../models/servico');
let Produto = require('../models/produto');
let Cliente = require('../models/cliente');
let Logs = require('../models/logs');
let multer = require('multer');
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'server/uploads/')
  },
  filename: function (req, file, cb) {
      cb(null, file.originalname);        
  }
})

let upload = multer({ storage: storage });

router.post('/upload', upload.any(), (req, res, next) => {
	res.send(req.files);
});

////////////// PRODUTOS ///////////////////////////////
//////////////////////////////////////////////////////

// Get All Produtos
router.get('/produtos', (req, res, next) => {
	Produto.find({}, function(err, produtos){
		if(err) res.send(err);
		res.json(produtos);
	});
});

// Get Produto
router.get('/produto/:id', (req, res, next) => {
	Produto.findOne({_id: req.params.id}, function(err, produto){
		if(err) res.send(err);
		res.json(produto);
	});
});

// Create Produto
router.post('/produto', (req, res, next) => {
	let dadosProduto = req.body;
	if(!dadosProduto) {
		res.json({"error": "dados incompletos"});
	} else {
		let novoProduto = new Produto();
		
		novoProduto.images = dadosProduto.images;
		novoProduto.nome = dadosProduto.nome;
		novoProduto.valor_custo = dadosProduto.valor_custo;
		novoProduto.valor_venda = dadosProduto.valor_venda;
		novoProduto.qntde_atual = dadosProduto.qntde_atual;
		novoProduto.qntde_minima = dadosProduto.qntde_minima;

		novoProduto.save((err, data) => {
			if(err) res.send(err);
			res.json(data);
		});
	}
});

// Delete Produto
router.delete('/produto/:id', (req, res, next) => {
	Produto.remove({_id: req.params.id}, function(err, produto){
		if(err) res.send(err);
		res.json(produto);
	});
});

// Update Produto
router.put('/produto/:id', (req, res, next) => {
	let dadosProduto = req.body;
	Produto.findOne({_id: req.params.id}, function(err, produto){
		if(err) res.send(err);

		if(!dadosProduto) {
			res.json({"error": "dados incompletos"});
		} else {

			produto.images = dadosProduto.images;
			produto.nome = dadosProduto.nome;
			produto.valor = dadosProduto.valor;
			produto.qntde_atual = dadosProduto.qntde_atual;
			produto.qntde_minima = dadosProduto.qntde_minima;

			produto.save((err, data) => {
				if(err) res.send(err);
				res.json(data);
			});
		}
	});
});

////////////// CLIENTES ///////////////////////////////
//////////////////////////////////////////////////////

// Get All Clientes
router.get('/clientes', (req, res, next) => {
	Cliente.find({}, function(err, clientes){
		if(err) res.send(err);
		res.json(clientes);
	});
});

// Get Cliente
router.get('/cliente/:id', (req, res, next) => {
	Cliente.findOne({_id: req.params.id}, function(err, cliente){
		if(err) res.send(err);
		res.json(cliente);
	});
});

// Create Cliente
router.post('/cliente', (req, res, next) => {
	let dadosCliente = req.body;
	if(!dadosCliente) {
		res.json({"error": "dados incompletos"});
	} else {
		let novoCliente = new Cliente();

		novoCliente.nome = dadosCliente.nome;
		novoCliente.representante = dadosCliente.representante;
		novoCliente.cnpj = dadosCliente.cnpj;
		novoCliente.insc_estadual = dadosCliente.insc_estadual;
		novoCliente.comprador = dadosCliente.comprador;
		novoCliente.contato = {
			fone: dadosCliente.fone,
			celular: dadosCliente.celular,
			email: dadosCliente.email
		};
		novoCliente.endereco = {
			logradouro: dadosCliente.endereco.logradouro,
			numero: dadosCliente.endereco.numero,
			complemento: dadosCliente.endereco.complemento,
			bairro: dadosCliente.endereco.bairro,
			cidade: dadosCliente.endereco.cidade,
			estado: dadosCliente.endereco.estado,
			cep: dadosCliente.endereco.cep
		};

		novoCliente.save((err, data) => {
			if(err) res.send(err);
			res.json(data);
		});
	}
});

// Delete Cliente
router.delete('/cliente/:id', (req, res, next) => {
	Cliente.remove({_id: req.params.id}, function(err, cliente){
		if(err) res.send(err);
		res.json(cliente);
	});
});

// Update Cliente
router.put('/cliente/:id', (req, res, next) => {
	let dadosCliente = req.body;
	Cliente.findOne({_id: req.params.id}, function(err, cliente){
		if(err) res.send(err);

		if(!dadosCliente) {
			res.json({"error": "dados incompletos"});
		} else {
			cliente = dadosCliente;

			cliente.save((err, data) => {
				if(err) res.send(err);
				res.json(data);
			});
		}
	});
});

////////////// SERVIÇOS ///////////////////////////////
//////////////////////////////////////////////////////

// Get All Servico
router.get('/servicos', (req, res, next) => {
	Servico.find({}, function(err, servicos){
		if(err) res.send(err);
		res.json(servicos);
	});
});

// Get Servico
router.get('/servico/:id', (req, res, next) => {
	Servico.findOne({_id: req.params.id}, function(err, servico){
		if(err) res.send(err);
		res.json(servico);
	});
});

// Create Servico
router.post('/servico', (req, res, next) => {
	let dadosServico = req.body;
	if(!dadosServico) {
		res.json({"error": "dados incompletos"});
	} else {

		let novoServico = new Servico();

		novoServico.cliente = dadosServico.cliente;
		novoServico.itens = dadosServico.itens;
		novoServico.tipo = dadosServico.tipo;
		novoServico.observacao = dadosServico.observacao;
		novoServico.valor_total = dadosServico.valorTotal;

		novoServico.save((err, data) => {
			if(err) throw err;

			// Dar baixa no estoque
			// @param boolean
			if(dadosServico.tipo) {
				let idProutosItens = [];
				for (let i = 0; i < dadosServico.itens.length; i++) {
					idProutosItens.push(dadosServico.itens[i].produto._id);
				}
				Produto.find({_id: { $in: idProutosItens }}, (err, produtos) => {
					if(err) throw err;

					for (let o = 0; o < dadosServico.itens.length; o++) {
						for (let u = 0; u < produtos.length; u++) {
							if(dadosServico.itens[o].produto._id == produtos[u]._id) {
								produtos[u].qntde_atual = produtos[u].qntde_atual - dadosServico.itens[o].qntde;

								Produto.findOneAndUpdate({_id: produtos[u]._id}, produtos[u], {upsert: true}, (err, data) => {
									if(err) throw err;
								});
							}
						}
					}
				});
			}
			res.json(data);
		});
	}
});

// Delete Servico
router.delete('/servico/:id', (req, res, next) => {
	Servico.remove({_id: req.params.id}, function(err, servico){
		if(err) res.send(err);
		res.json(servico);
	});
});

// Update Servico
/*router.put('/servico/:id', (req, res, next) => {
	let dadosCliente = req.body;
	Cliente.findOne({_id: req.params.id}, function(err, cliente){
		if(err) res.send(err);

		if(!dadosCliente) {
			res.json({"error": "dados incompletos"});
		} else {
			cliente = dadosCliente;

			cliente.save((err, data) => {
				if(err) res.send(err);
				res.json(data);
			});
		}
	});
});*/

////////////// EMPRESA ///////////////////////////////
/////////////////////////////////////////////////////

// Get Empresa
router.get('/empresa', (req, res, next) => {
	Empresa.findOne({_id: '58b6cc8cb48b301c60675a21'}, function(err, chat){
		if(err) res.send(err);
		res.json(chat);
	});
});

// Update Empresa
router.put('/empresa', (req, res, next) => {
	let dadosEmpresa = req.body;
	Empresa.findOne({_id: '58b6cc8cb48b301c60675a21'}, function(err, empresa){
		if(err) res.send(err);

		if(!dadosEmpresa) {
			res.json({"error": "dados incompletos"});
		} else {
			empresa.nome = dadosEmpresa.nome;
			empresa.logotipo = dadosEmpresa.logotipo;
			empresa.cnpj = dadosEmpresa.cnpj;
			empresa.endereco = {
				logradouro: dadosEmpresa.endereco.logradouro,
				cep: dadosEmpresa.endereco.cep
			};
			
			empresa.save((err, data) => {
				if(err) res.send(err);
				res.json(data);
			});
		}
	});
});


//////////////// USUARIOS ////////////////////////////
/////////////////////////////////////////////////////

// Get All Users
router.get('/users', (req, res, next) => {
	User.find({}, function(err, users){
		if(err) res.send(err);
		res.json(users);
	});
});

// Get User
router.get('/user/:id', (req, res, next) => {
	User.findOne({_id: req.params.id}, function(err, user){
		if(err) res.send(err);
		res.json(user);
	});
});

// Create User
router.post('/user', (req, res, next) => {
	let dadosUser = req.body;
	if(!dadosUser) {
		res.json({"error": "dados incompletos"});
	} else {
		let novoUser = new User();
		novoUser.nome = dadosUser.nome;
		novoUser.local = {
			email: dadosUser.local.email,
			senha: novoUser.generateHash(req.body.local.senha)
		};

		novoUser.save((err, data) => {
			if(err) res.send(err);
			res.json(data);
		});
	}
});

// Delete User
router.delete('/user/:id', (req, res, next) => {
	User.remove({_id: req.params.id}, function(err, user){
		if(err) res.send(err);
		res.json(user);
	});
});

// Update User
router.put('/user/:id', (req, res, next) => {
	let dadosUser = req.body;
	User.findOne({_id: req.params.id}, function(err, user){
		if(err) res.send(err);

		if(!dadosUser) {
			res.json({"error": "dados incompletos"});
		} else {

			user.nome = dadosUser.nome;
			user.tipo = dadosUser.tipo;
			user.local = {
				email: dadosUser.local.email
			};

			user.save((err, data) => {
				if(err) res.send(err);
				res.json(data);
			});
		}
	});
});

//////////////////// LOGS ///////////////////////
////////////////////////////////////////////////

// Get All Logs
router.get('/logs', (req, res, next) => {
	Logs.find({}, function(err, logs){
		if(err) res.send(err);
		res.json(logs);
	});
});

// Create Log
router.post('/log', (req, res) => {
	let log = new Logs();
	log.descricao = req.body.descricao;
	log.save((err, data) => {
		if(err) res.send(err);
		res.json(data);
	});
});

module.exports = router;