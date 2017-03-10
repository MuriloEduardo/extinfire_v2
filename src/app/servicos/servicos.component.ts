import { Component, OnInit, EventEmitter } from '@angular/core';

import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';

import { ServicosService } from '../_services/servicos.service';
import { ClientesService } from '../_services/clientes.service';
import { EstoqueService } from '../_services/estoque.service';

import { MaterializeAction } from 'angular2-materialize';

declare var Materialize:any;

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})

export class ServicosComponent implements OnInit {

	inscricao: Subscription;
	
	modalActions = new EventEmitter<string|MaterializeAction>();
	modalViewActions = new EventEmitter<string|MaterializeAction>();

	servicos: any[] = [];
	clientes: any[] = [];
	produtos: any[] = [];

	servico: any = {
		cliente: {},
		itens: [{
			produto: {},
			qntde: undefined,
			validade: undefined,
			total: 0
		}],
		valorTotal: 0,
		observacao: undefined,
		tipo: false
	};

	constructor(
		private servicosService: ServicosService,
		private clientesService: ClientesService,
		private estoqueService: EstoqueService,
		private route: ActivatedRoute
	) { }

	ngOnInit() {
		this.inscricao = this.route.data.subscribe(
			(data: {produtos: any, servicos: any, clientes: any}) => {
				this.produtos = data.produtos;
				this.servicos = data.servicos;
				this.clientes = data.clientes;
			}
		);
	}

	ngAfterViewChecked() {
		if(Materialize.updateTextFields)
			Materialize.updateTextFields();
	}

	setCliente(cliente: any) {
		this.servico.cliente = cliente;
	}

	setProduto(index: number, last?: number, produto?: any) {

		if(!produto) return false;

		if(!this.servico.itens[index].qntde)
			this.servico.itens[index].qntde = 1;

		this.servico.itens[index].total = this.servico.itens[index].qntde * this.servico.itens[index].produto.valor_venda;
		this.servico.itens[index].validade = new Date();

		for (let j=0;j<this.servico.itens.length;++j) {
			if(this.servico.itens[j].total) {
				this.servico.valorTotal += this.servico.itens[j].total;
			}
		}

		if(last) {
			this.servico.itens.push({
				produto: {}
			});
		}
	}

	novoServico(event) {
		event.preventDefault();
		
		if(!this.servico.cliente.length&&!this.servico.itens.length) return false;
		
		this.servicosService.addServico(this.servico).subscribe(servico => {
			this.servicos.push(servico);
			
			this.servico = {
				cliente: {},
				itens: [{
					produto: {},
					qntde: undefined,
					validade: undefined,
					total: 0
				}],
				valorTotal: 0,
				observacao: undefined,
				tipo: false
			};

			this.closeModal();
		});
	}

	deleteServico(servico: any) {
		this.servicosService.deleteServico(servico).subscribe(data => {
			if(data.n) {
				this.servicos.splice(this.servicos.indexOf(servico), 1);
			}
		});
	}

	///////////////////////// Modal /////////////////////////////
	////////////////////////////////////////////////////////////
	openModal() {
		this.modalActions.emit({action:"modal",params:['open']});
	}

	closeModal() {
		this.modalActions.emit({action:"modal",params:['close']});
	}
	
	openModalView(servico: any) {
		console.log(servico)
		this.servico = servico;
		this.modalViewActions.emit({action:"modal",params:['open']});
	}

	closeModalView() {
		this.servico = {};
		this.modalViewActions.emit({action:"modal",params:['close']});
	}
}