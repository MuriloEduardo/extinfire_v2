import { Component, OnInit, EventEmitter } from '@angular/core';

import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';

import { VendasService } from '../_services/vendas.service';
import { ClientesService } from '../_services/clientes.service';

import { MaterializeAction } from 'angular2-materialize';

declare var Materialize:any;

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.css']
})

export class VendasComponent implements OnInit {

	inscricao: Subscription;
	
	modalActions = new EventEmitter<string|MaterializeAction>();
	modalViewActions = new EventEmitter<string|MaterializeAction>();

	vendas: any[] = [];
	clientes: any[] = [];
	produtos: any[] = [];

	venda: any = {
		cliente: {},
		itens: [{
			produto: {},
			qntde: undefined,
			validade: undefined,
			total: 0
		}],
		valor_total: 0,
		observacao: undefined,
		tipo: false
	};
	
	vendaEdit: any = {
		cliente: {},
		itens: [{
			produto: {},
			qntde: undefined,
			validade: undefined,
			total: 0
		}],
		valor_total: 0,
		observacao: undefined,
		tipo: false
	};

	constructor(
		private vendasService: VendasService,
		private clientesService: ClientesService,
		private route: ActivatedRoute
	) { }

	ngOnInit() {
		this.inscricao = this.route.data.subscribe(
			(data: {produtos: any, vendas: any, clientes: any}) => {
				this.produtos = data.produtos;
				this.vendas = data.vendas;
				this.clientes = data.clientes;
			}
		);
	}

	ngAfterViewChecked() {
		if(Materialize.updateTextFields)
			Materialize.updateTextFields();
	}

	setCliente(cliente: any) {
		this.venda.cliente = cliente;
	}

	setProduto(index: number, last?: number, produto?: any) {
		
		console.log(produto)

		if(!produto) return false;
		
		if(!this.venda.itens[index].produto.valor_venda)
			this.venda.itens[index].produto.valor_venda = 0;

		if(!this.venda.itens[index].qntde)
			this.venda.itens[index].qntde = 1;
			
		this.venda.itens[index].validade = new Date();
		
		this.sum(index);
		
		if(last) {
			this.venda.itens.push({
				produto: {}
			});
		}
	}
	
	sum(index: number) {
		
		this.venda.itens[index].total = this.venda.itens[index].qntde * this.venda.itens[index].produto.valor_venda;
		
		let valorTotalNew = 0;
		for (let j=0;j<this.venda.itens.length;++j) {
			if(this.venda.itens[j].total) {
				valorTotalNew += this.venda.itens[j].total;
			}
		}
		this.venda.valor_total = valorTotalNew;
	}

	novaVenda(event) {
		event.preventDefault();
		
		if(!this.venda.cliente.length&&!this.venda.itens.length) return false;
		
		this.vendasService.addVenda(this.venda).subscribe(venda => {
			console.log(venda)
			this.vendas.push(venda);
			
			this.closeModal();
		});
	}

	deleteVenda(venda: any) {
		this.vendasService.deleteVenda(venda).subscribe(data => {
			if(data.n) {
				this.vendas.splice(this.vendas.indexOf(venda), 1);
				this.closeModalView();
			}
		});
	}

	///////////////////////// Modal /////////////////////////////
	////////////////////////////////////////////////////////////
	openModal() {
		this.modalActions.emit({action:"modal",params:['open']});
	}

	closeModal() {
		this.venda = {
			cliente: {},
			itens: [{
				produto: {},
				qntde: undefined,
				validade: undefined,
				total: 0
			}],
			valor_total: 0,
			observacao: undefined,
			tipo: false
		};
		
		this.modalActions.emit({action:"modal",params:['close']});
	}
	
	openModalView(venda: any) {
		this.vendaEdit = venda;
		this.vendaEdit.itens.push({
			produto: {}
		});
		this.modalViewActions.emit({action:"modal",params:['open']});
	}

	closeModalView() {
		this.vendaEdit = {};
		this.modalViewActions.emit({action:"modal",params:['close']});
	}
}