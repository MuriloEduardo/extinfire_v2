"use strict"

let express 	= require('express');
let router 		= express.Router();
let jwt 		= require('jwt-simple');
let config 		= require('../config/database');
let Usuarios    = require('../models/usuarios');
let Empresas 	= require('../models/empresas');
let Vendas 		= require('../models/vendas');
let Itens 		= require('../models/itens');
let Clientes 	= require('../models/clientes');
let Logs 		= require('../models/logs');
let multer 		= require('multer');
let fs 			= require('fs');
let PDFDocument = require('pdfkit');
let storage 	= multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'server/uploads/')
  },
  filename: function (req, file, cb) {
      cb(null, file.originalname);        
  }
});
let upload 		= multer({ storage: storage });

//////////////// PDF ////////////////////////
/////////////////////////////////////////////
router.get('/pdf/:vendaId', (req, res, next) => {
	
	Vendas.findOne({_id: req.params.vendaId})
	.populate('cliente')
	.populate('itens.item')
	.exec(function(err, venda) {
		
		if(err) res.send(err);

		let today = new Date(),
		dd = today.getDate(),
		mm = today.getMonth()+1,
		yyyy = today.getFullYear();

		if(dd<10) dd='0'+dd;
		if(mm<10) mm='0'+mm;
		
		today = dd+'/'+mm+'/'+yyyy;
		
		let pdf = new PDFDocument({
		  size: 'LEGAL',
		  info: {
		    Title: 'Ordem de serviço para ' + venda.cliente.nome,
		    Author: 'Extin Fire / Extintores',
		  }
		});

		/////////// CABEÇALHO //////////////////
		///////////////////////////////////////

		// Logotipo
		pdf.image('./server/images/logo_extinfire.jpg', 30, 30, {
			width: 185
		});

		// Titulo
		pdf.fontSize(18)
		.text('ORDEM DE SERVIÇO', 235, 40);
		
		// Tpo de Serviço
		pdf.fontSize(16)
		.text(!venda.tipo ? 'Orçamento' : 'Pedido', 235, 65, {
			width: 160,
			align: 'center'
		});

		// Retangulo
		pdf.rect(15, 15, 580, 85).stroke();

		pdf.fontSize(12)
		.text('Data', 460, 40, {
			width: 125,
			align: 'center'
		});

		pdf.fontSize(14)
		.text(today, 460, 60, {
			width: 125,
			align: 'center'
		});

		pdf.rect(450, 15, 145, 85).stroke();

		//////// DADOS DO CLIENTE ///////////
		////////////////////////////////////

		// LINHA 1
		/////////////////////////////////

		// Cliente
		pdf.fontSize(10)
		.text('Cliente', 30, 125);

		pdf.fontSize(12)
		.text(venda.cliente.nome, 30, 140);

		pdf.rect(15, 115, 380, 45).stroke();


		// CPF OU CNPJ
		pdf.fontSize(10)
		.text('CNPJ ou CPF', 405, 125);

		pdf.fontSize(12)
		.text((venda.cliente.cnpj || venda.cliente.cpf), 405, 140);

		pdf.rect(395, 115, 200, 45).stroke();

		// LINHA 2
		/////////////////////////////////

		pdf.rect(15, 160, 580, 45).stroke();

		// 1 Left
		// 2 top
		// 3 largura
		// 4 altura

		// Endereço
		pdf.fontSize(10)
		.text('Endereço', 30, 170);

		pdf.fontSize(12)
		.text(venda.cliente.endereco.logradouro, 30, 185);

		// LINHA 3
		/////////////////////////////////

		pdf.rect(15, 205, 193, 45).stroke();

		// Bairro
		pdf.fontSize(10)
		.text('Bairro', 30, 215);

		pdf.fontSize(12)
		.text(venda.cliente.endereco.bairro, 30, 230);

		pdf.rect(15, 115, 380, 45).stroke();


		// Cidade
		pdf.fontSize(10)
		.text('Cidade', 218, 215);

		pdf.fontSize(12)
		.text(venda.cliente.endereco.cidade, 218, 230);

		pdf.rect(208, 205, 193, 45).stroke();

		// Fone
		pdf.fontSize(10)
		.text('Fone', 411, 215);

		pdf.fontSize(12)
		.text(venda.cliente.contato.fone || venda.cliente.contato.celular, 411, 230);

		pdf.rect(401, 205, 194, 45).stroke();

		///////////// ITENS DO PEDIDO ////////////////////
		/////////////////////////////////////////////////

		// Cabeçalho da tabela
		////////////////////////////////

		// Produto / Serviço
		pdf.rect(15, 275, 205, 30).stroke()
		.fontSize(12)
		.text('Produtos / Serviços', 20, 285);

		// Quantidade
		pdf.rect(220, 275, 75, 30).stroke()
		.fontSize(12)
		.text('Qntde.', 225, 285);

		// Valor Unitario
		pdf.rect(295, 275, 100, 30).stroke()
		.fontSize(12)
		.text('Valor Unit.', 305, 285);

		pdf.rect(395, 275, 100, 30).stroke()
		.fontSize(12)
		.text('Valor Total', 405, 285);

		pdf.rect(495, 275, 100, 30).stroke()
		.fontSize(12)
		.text('Validade', 505, 285, {
			width: 100
		});

		// Linhas da tabela
		////////////////////////////////

		let posYItem = 275;
		for (var i = 0; i < venda.itens.length; i++) {

			posYItem += 30;

			// Produto / Serviço
			pdf.rect(15, posYItem, 205, 30).stroke()
			.fontSize(10)
			.text(venda.itens[i].item.nome, 20, posYItem+10);

			// Quantidade
			pdf.rect(220, posYItem, 75, 30).stroke()
			.fontSize(10)
			.text(venda.itens[i].qntde, 225, posYItem+10);

			// Valor Unitario
			pdf.rect(295, posYItem, 100, 30).stroke()
			.fontSize(10)
			.text('R$' + venda.itens[i].item.valor_venda, 305, posYItem+10);

			pdf.rect(395, posYItem, 100, 30).stroke()
			.fontSize(10)
			.text('R$' + venda.itens[i].total, 405, posYItem+10);

			pdf.rect(495, posYItem, 100, 30).stroke()
			.fontSize(10)
			.text(venda.itens[i].validade, 505, posYItem+10, {
				width: 100
			});
		}

		/////////////////// OBSERVAÇÃO / VALOR TOTAL //////////////////////
		//////////////////////////////////////////////////////////////////

		// Observação
		pdf.rect(15, posYItem + 60, 350, 100).stroke()
		.fontSize(10)
		.text('Observação', 20, posYItem+70);

		pdf.fontSize(12)
		.text(venda.observacao || '', 20, posYItem+85);

		// Valor Total
		pdf.fontSize(16)
		.text('Valor Total', 400, posYItem+70, {
			width: 200,
			align: 'center'
		});

		pdf.fontSize(12)
		.text('R$' + venda.valor_total, 400, posYItem+100, {
			width: 200,
			align: 'center'
		});

		/////////////////// ASSINATURAS /////////////////////
		////////////////////////////////////////////////////

		pdf.rect(15, posYItem + 250, 275, 0).stroke()
		.fontSize(12)
		.text('Ass. Contratado', 15, posYItem+260, {
			width: 275,
			align: 'center'
		});

		pdf.rect(318, posYItem + 250, 275, 0).stroke()
		.fontSize(12)
		.text('Ass. Cliente', 318, posYItem+260, {
			width: 275,
			align: 'center'
		});
		
		// Close PDF and write file.
		pdf.end();
		pdf.pipe(res);
	});
});

//////////////// AUTHENTICATE ////////////////////////
/////////////////////////////////////////////////////

router.post('/authenticate', (req, res, next) => {
	Usuarios.findOne({
        'email': req.body.email
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

// Get All Itens
router.get('/itens', (req, res, next) => {
	Itens.find({}, function(err, itens){
		if(err) res.send(err);
		res.json(itens);
	});
});

// Get Item
router.get('/item/:id', (req, res, next) => {
	Itens.findOne({_id: req.params.id}, function(err, item){
		if(err) res.send(err);
		res.json(item);
	});
});

// Create Item
router.post('/item', (req, res, next) => {
	let dadosItem = req.body;
	if(!dadosItem) {
		res.json({"error": "dados incompletos"});
	} else {
		let novoItem = new Itens();
		
		novoItem.images = dadosItem.images;
		novoItem.nome = dadosItem.nome;
		novoItem.valor_venda = dadosItem.valor_venda;

		if(dadosItem.valor_custo) novoItem.valor_custo = dadosItem.valor_custo;
		if(dadosItem.qntde_atual) novoItem.qntde_atual = dadosItem.qntde_atual;
		if(dadosItem.qntde_minima) novoItem.qntde_minima = dadosItem.qntde_minima;

		novoItem.save((err, data) => {
			if(err) res.send(err);
			res.json(data);
		});
	}
});

// Delete Item
router.delete('/item/:id', (req, res, next) => {
	Itens.remove({_id: req.params.id}, function(err, item){
		if(err) res.send(err);
		res.json(item);
	});
});

// Update Item
router.put('/item/:id', (req, res, next) => {
	
	let dadosItem = req.body;

	Itens.findOne({_id: req.params.id}, function(err, item){
	
		if(err) res.send(err);

		if(!dadosItem) {
			res.json({"error": "dados incompletos"});
		} else {

			item.images 	  = dadosItem.images;
			item.nome 		  = dadosItem.nome;
			item.valor_venda  = dadosItem.valor_venda;

			if(dadosItem.valor_custo) item.valor_custo  = dadosItem.valor_custo;
			if(dadosItem.valor_custo) item.qntde_atual  = dadosItem.qntde_atual;
			if(dadosItem.valor_custo) item.qntde_minima = dadosItem.qntde_minima;

			item.save((err, data) => {
				
				if(err) res.send(err);

				Vendas.find({}, function(err, item) {

				});
				res.json(data);
			});
		}
	});
});

////////////// CLIENTES ///////////////////////////////
//////////////////////////////////////////////////////

// Get All Clientes
router.get('/clientes', (req, res, next) => {
	Clientes.find({}, function(err, clientes){
		if(err) res.send(err);
		res.json(clientes);
	});
});

// Get Cliente
router.get('/cliente/:id', (req, res, next) => {
	Clientes.findOne({_id: req.params.id}, function(err, cliente){
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
		let novoCliente = new Clientes();

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
	Clientes.remove({_id: req.params.id}, function(err, cliente){
		if(err) res.send(err);
		res.json(cliente);
	});
});

// Update Cliente
router.put('/cliente/:id', (req, res, next) => {
	let dadosCliente = req.body;
	Clientes.findOne({_id: req.params.id}, function(err, cliente){
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
	Vendas.find({})
	.populate('cliente')
	.populate('itens.item')
	.exec(function(err, vendas) {
		if(err) res.send(err);
		res.json(vendas);
	});
});

// Get Venda
router.get('/venda/:id', (req, res, next) => {
	Vendas.findOne({_id: req.params.id})
	.populate('cliente')
	.populate('itens.item')
	.exec(function(err, venda) {
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

		let novaVenda 		  = new Vendas();
		
		novaVenda.cliente     = dadosVenda.cliente;
		novaVenda.itens 	  = dadosVenda.itens;
		novaVenda.tipo 		  = dadosVenda.tipo;
		novaVenda.observacao  = dadosVenda.observacao;
		novaVenda.valor_total = dadosVenda.valor_total;

		novaVenda.save((err, data) => {
			if(err) throw err;

			// Dar baixa no estoque
			// @param boolean
			if(dadosVenda.tipo) {
				let idItens = [];
				for (let i = 0; i < dadosVenda.itens.length; i++) {
					if(dadosVenda.itens[i].tipo) {
						idItens.push(dadosVenda.itens[i].item._id);
					}
				}
				
				Itens.find({_id: { $in: idItens }}, (err, itens) => {
					if(err) throw err;

					for (let o = 0; o < dadosVenda.itens.length; o++) {

						for (let u = 0; u < itens.length; u++) {

							if(dadosVenda.itens[o].item._id == itens[u]._id) {

								itens[u].qntde_atual = itens[u].qntde_atual - dadosVenda.itens[o].qntde;

								Itens.findOneAndUpdate({_id: itens[u]._id}, itens[u], {upsert: true}, (err, data) => {
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
	Vendas.findOne({_id: req.params.id}, function(err, venda){
		if(err) res.send(err);

		// Ao deletar uma venda e ela for do tipo Pedido
		// Cada Produto deverá ter sua quantidade atual reposta
		// Dar baixa no estoque
		// @param string
		if(venda.tipo) {
			let idItens = [];
			for (let i = 0; i < venda.itens.length; i++) {
				if(venda.itens[i].tipo) {
					idItens.push(venda.itens[i].item._id);
				}
			}
			
			Itens.find({_id: { $in: idItens }}, (err, itens) => {
				if(err) throw err;

				for (let o = 0; o < venda.itens.length; o++) {

					for (let u = 0; u < itens.length; u++) {

						if(venda.itens[o].item._id == itens[u]._id) {

							itens[u].qntde_atual = itens[u].qntde_atual + venda.itens[o].qntde;

							Produto.findOneAndUpdate({_id: itens[u]._id}, itens[u], {upsert: true}, (err, data) => {
								if(err) throw err;
							});
						}
					}
				}
			});
		}

		venda.remove();
		
		res.json(venda);
	});
});

// Update Venda
router.put('/venda/:id', (req, res, next) => {
	let dadosVenda = req.body;
	Vendas.findOne({_id: req.params.id}, function(err, venda){
		if(err) res.send(err);

		if(!dadosVenda) {
			res.json({"error": "dados incompletos"});
		} else {

			// Dar baixa no estoque
			// @param string
			if(venda.tipo) {
				let idItens = [];
				for (let i = 0; i < venda.itens.length; i++) {
					if(venda.itens[i].tipo) {
						idItens.push(venda.itens[i].item._id);
					}
				}
				
				Itens.find({_id: { $in: idItens }}, (err, itens) => {
					if(err) throw err;

					for (var i = 0; i < dadosVenda.itens.length; i++) {

						for (var x = 0; x < venda.itens.length; x++) {

							for (let u = 0; u < itens.length; u++) {

								if(venda.itens[x].item._id == itens[u]._id) {
									
									// Se as quantidades forem iguais, não faz nada
									if(dadosVenda.itens[i].qntde != venda.itens[x].qntde) {
										if(dadosVenda.itens[i].qntde < venda.itens[x].qntde) {
											// Precisa decrementar a quantidade
											itens[u].qntde_atual = itens[u].qntde_atual - (dadosVenda.itens[i].qntde - venda.itens[x].qntde);
										} else {
											// Precisa acrescentar a quantidade
											itens[u].qntde_atual = itens[u].qntde_atual + (venda.itens[x].qntde - dadosVenda.itens[i].qntde);
										}

										Itens.findOneAndUpdate({_id: itens[u]._id}, itens[u], {upsert: true}, (err, data) => {
											if(err) throw err;
										});
									}
								}
							}
						}
					}

					venda.nome   	  = dadosVenda.cliente.nome;
					venda.cliente 	  = dadosVenda.cliente;
					venda.itens 	  = dadosVenda.itens;
					venda.tipo 		  = dadosVenda.tipo;
					venda.observacao  = dadosVenda.observacao;
					venda.valor_total = dadosVenda.valor_total;

					venda.save((err, data) => {
						if(err) res.send(err);
						res.json(data);
					});
				});
			}
		}
	});
});

////////////// EMPRESA ///////////////////////////////
/////////////////////////////////////////////////////

// Get Empresa
router.get('/empresa', (req, res, next) => {
	Empresas.findOne({_id: '58b6cc8cb48b301c60675a21'}, function(err, empresa){
		if(err) res.send(err);
		res.json(empresa);
	});
});

// Update Empresa
router.put('/empresa', (req, res, next) => {
	let dadosEmpresa = req.body;
	Empresas.findOne({_id: '58b6cc8cb48b301c60675a21'}, function(err, empresa){
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
router.get('/usuarios', (req, res, next) => {
	Usuarios.find({}, function(err, users){
		if(err) res.send(err);
		res.json(users);
	});
});

// Get User
router.get('/usuario/:id', (req, res, next) => {
	Usuarios.findOne({_id: req.params.id}, function(err, user){
		if(err) res.send(err);
		res.json(user);
	});
});

// Create User
router.post('/usuario', (req, res, next) => {
	let dadosUser = req.body;
	if(!dadosUser) {
		res.json({"error": "dados incompletos"});
	} else {
		
		let novoUser   = new Usuarios();
		novoUser.nome  = dadosUser.nome;
		novoUser.tipo  = dadosUser.tipo;
		novoUser.email = dadosUser.email,
		novoUser.senha = novoUser.generateHash(req.body.senha)

		novoUser.save((err, data) => {
			if(err) res.send(err);
			res.json(data);
		});
	}
});

// Delete User
router.delete('/usuario/:id', (req, res, next) => {
	Usuarios.remove({_id: req.params.id}, function(err, user){
		if(err) res.send(err);
		res.json(user);
	});
});

// Update User
router.put('/usuario/:id', (req, res, next) => {
	let dadosUser = req.body;
	Usuarios.findOne({_id: dadosUser._id}, function(err, user){
		if(err) res.send(err);

		if(!dadosUser) {
			res.json({"error": "dados incompletos"});
		} else {
			
			if(dadosUser.nome) user.nome    = dadosUser.nome;
			if(dadosUser.email) user.email  = dadosUser.email
			if(dadosUser.tipo) user.tipo    = dadosUser.tipo;
			if(dadosUser.senha) user.senha  = user.generateHash(dadosUser.senha);

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
	Logs.find({})
	.populate('usuario')
	.exec(function(err, logs) {
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