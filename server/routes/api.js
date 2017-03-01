let express = require('express');
let router = express.Router();
let jwt = require('jwt-simple');
let config = require('../config/database');

let User = require('../models/user');

let Empresa = require('../models/empresa');;
let Servico = require('../models/servico');;
let Produto = require('../models/produto');;
let Cliente = require('../models/cliente');;
let Logs = require('../models/logs');;

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
router.put('/cliente/:id', (req, res, next) => {
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
		novoUser.local = {email: dadosUser.local.email};

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
			user.local = {email: dadosUser.local.email};

			user.save((err, data) => {
				if(err) res.send(err);
				res.json(data);
			});
		}
	});
});

module.exports = router;