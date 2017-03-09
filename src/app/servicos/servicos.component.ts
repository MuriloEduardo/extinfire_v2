import { Component, OnInit, EventEmitter } from '@angular/core';

import { ServicosService } from '../services/servicos.service';
import { ClientesService } from '../services/clientes.service';
import { EstoqueService } from '../services/estoque.service';

import { MaterializeAction } from 'angular2-materialize';

declare var Materialize:any;

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})

export class ServicosComponent implements OnInit {

	modalActions = new EventEmitter<string|MaterializeAction>();
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
		private estoqueService: EstoqueService
	) { }

	ngOnInit() {
		this.servicosService.getServicos().subscribe((data) => {
			this.servicos = data;
		});
		this.clientesService.getClientes().subscribe((data) => {
			this.clientes = data;
		});
		this.estoqueService.getProdutos().subscribe((data) => {
			this.produtos = data;
		});
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

	deleteServico(id: string) {
		this.servicosService.deleteServico(id).subscribe(data => {
			if(data.n) {
				this.servicos.splice(this.servicos.indexOf(id), 1);
			}
		});
	}

	editUser(user: any) {
		this.openModal();

		console.log(user)
	}

	openModal() {
		this.modalActions.emit({action:"modal",params:['open']});
	}

	closeModal() {
		this.modalActions.emit({action:"modal",params:['close']});
	}
}