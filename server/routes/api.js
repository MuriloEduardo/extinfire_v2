"use strict"

let express = require('express');
let router = express.Router();
let jwt = require('jwt-simple');
let config = require('../config/database');
let User = require('../models/user');
let Empresa = require('../models/empresa');
let Venda = require('../models/venda');
let Produto = require('../models/produto');
let Cliente = require('../models/cliente');
let Servico = require('../models/servico');
let Logs = require('../models/logs');
let multer = require('multer');

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'server/uploads/')
  },
  filename: function (req, file, cb) {
      cb(null, file.originalname);        
  }
});
let upload = multer({ storage: storage });

//////////////// AUTHENTICATE ////////////////////////
/////////////////////////////////////////////////////

router.post('/authenticate', (req, res, next) => {
	User.findOne({
        'local.email': req.body.email
    }, function(err, user){
        if (err) throw err;
        
        if(!user) {
            res.json({success: false, msg: 'Authentication failed, User not found'});
        } else {

   			let token = jwt.encode(user, config.secret);

			if(!user.validPassword(req.body.senha)) {
				return res.json({success: false, msg: 'Authenticaton failed, wrong password.'});
			}
   			res.json({success: true, token: token, user: user});
        }  
    });
});

////////////////////// UPLOAD /////////////////////////
//////////////////////////////////////////////////////

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


////////////// SERVICOS ///////////////////////////////
//////////////////////////////////////////////////////

// Get All Servicos
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
		
		novoServico.images = dadosServico.images;
		novoServico.nome = dadosServico.nome;
		novoServico.valor = dadosServico.valor;

		novoServico.save((err, data) => {
			if(err) res.send(err);
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
router.put('/servico/:id', (req, res, next) => {
	let dadosServico = req.body;
	Servico.findOne({_id: req.params.id}, function(err, servico){
		if(err) res.send(err);

		if(!dadosServico) {
			res.json({"error": "dados incompletos"});
		} else {

			servico.images = dadosServico.images;
			servico.nome = dadosServico.nome;
			servico.valor = dadosServico.valor;

			servico.save((err, data) => {
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

		novoCliente.images = dadosCliente.images;
		novoCliente.nome = dadosCliente.nome;
		novoCliente.representante = dadosCliente.representante;
		novoCliente.cnpj = dadosCliente.cnpj;
		novoCliente.insc_estadual = dadosCliente.insc_estadual;
		novoCliente.comprador = dadosCliente.comprador;
		novoCliente.contato = {
			fone: dadosCliente.contato.fone,
			celular: dadosCliente.contato.celular,
			email: dadosCliente.contato.email
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

			cliente.images = dadosCliente.images;
			cliente.nome = dadosCliente.nome;
			cliente.representante = dadosCliente.representante;
			cliente.cnpj = dadosCliente.cnpj;
			cliente.insc_estadual = dadosCliente.insc_estadual;
			cliente.comprador = dadosCliente.comprador;
			cliente.contato = {
				fone: dadosCliente.contato.fone,
				celular: dadosCliente.contato.celular,
				email: dadosCliente.contato.email
			};
			cliente.endereco = {
				logradouro: dadosCliente.endereco.logradouro,
				numero: dadosCliente.endereco.numero,
				complemento: dadosCliente.endereco.complemento,
				bairro: dadosCliente.endereco.bairro,
				cidade: dadosCliente.endereco.cidade,
				estado: dadosCliente.endereco.estado,
				cep: dadosCliente.endereco.cep
			};

			cliente.save((err, data) => {
				if(err) res.send(err);
				res.json(data);
			});
		}
	});
});

////////////// VENDAS ///////////////////////////////
//////////////////////////////////////////////////////

// Get All Vendas
router.get('/vendas', (req, res, next) => {
	Venda.find({}, function(err, vendas){
		if(err) res.send(err);
		res.json(vendas);
	});
});

// Get Venda
router.get('/venda/:id', (req, res, next) => {
	Venda.findOne({_id: req.params.id}, function(err, venda){
		if(err) res.send(err);
		res.json(venda);
	});
});

// Create Venda
router.post('/venda', (req, res, next) => {
	let dadosVenda = req.body;
	if(!dadosVenda) {
		res.json({"error": "dados incompletos"});
	} else {

		let novaVenda = new Venda();

		novaVenda.cliente = dadosVenda.cliente;
		novaVenda.itens = dadosVenda.itens;
		novaVenda.tipo = dadosVenda.tipo;
		novaVenda.observacao = dadosVenda.observacao;
		novaVenda.valor_total = dadosVenda.valor_total;

		novaVenda.save((err, data) => {
			if(err) throw err;

			// Dar baixa no estoque
			// @param boolean
			if(dadosVenda.tipo) {
				let idProutosItens = [];
				for (let i = 0; i < dadosVenda.itens.length; i++) {
					idProutosItens.push(dadosVenda.itens[i].produto._id);
				}
				Produto.find({_id: { $in: idProutosItens }}, (err, produtos) => {
					if(err) throw err;

					for (let o = 0; o < dadosVenda.itens.length; o++) {
						for (let u = 0; u < produtos.length; u++) {
							if(dadosVenda.itens[o].produto._id == produtos[u]._id) {
								produtos[u].qntde_atual = produtos[u].qntde_atual - dadosVenda.itens[o].qntde;

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

// Delete Venda
router.delete('/venda/:id', (req, res, next) => {
	Venda.remove({_id: req.params.id}, function(err, venda){
		if(err) res.send(err);
		res.json(venda);
	});
});

// Update Servico
router.put('/venda/:id', (req, res, next) => {
	let dadosVenda = req.body;
	Venda.findOne({_id: req.params.id}, function(err, venda){
		if(err) res.send(err);

		if(!dadosVenda) {
			res.json({"error": "dados incompletos"});
		} else {
			
			venda.cliente = dadosVenda.cliente;
			venda.itens = dadosVenda.itens;
			venda.tipo = dadosVenda.tipo;
			venda.observacao = dadosVenda.observacao;
			venda.valor_total = dadosVenda.valor_total;

			venda.save((err, data) => {
				if(err) res.send(err);
				res.json(data);
			});
		}
	});
});

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
router.post('/log', (req, res, next) => {

	let log = new Logs();
	log.descricao = req.body.descricao;
	log.item = req.body.item;
	log.usuario = req.body.usuario;

	log.save((err, data) => {
		if(err) res.send(err);
		res.json(data);
	});
});

module.exports = router;