import { Component, OnInit, AfterViewChecked, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';

import { MaterializeAction } from 'angular2-materialize';

import { VendasService } from './../../_services/vendas.service';
import { ClientesService } from './../../_services/clientes.service';

declare var Materialize:any;

@Component({
  selector: 'app-nova-venda',
  templateUrl: './nova-venda.component.html',
  styleUrls: ['./nova-venda.component.css']
})
export class NovaVendaComponent implements OnInit {

	inscricao: Subscription;
	globalActions = new EventEmitter<string|MaterializeAction>();

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
  
  	constructor(
		private vendasService: VendasService,
		private clientesService: ClientesService,
		private route: ActivatedRoute,
		private router: Router
	) { }
  
  	ngOnInit() {
	  	this.inscricao = this.route.data.subscribe(
			(data: {produtos: any, clientes: any}) => {
				this.produtos = data.produtos;
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
		
		if(!this.venda.cliente.length&&this.venda.itens.length<=1) {
			this.triggerToast('Adicione ao menos 1 produto na sua venda.');
			return false;
		};

		// Elimina oultimo produto que fica em vazio
		for (var i = 0; i < this.venda.itens.length; ++i) {
			if(!this.venda.itens[i].produto.nome) {
				this.venda.itens.splice(this.venda.itens.indexOf(this.venda.itens[i]), 1);
			}
		}
		
		this.vendasService.addVenda(this.venda).subscribe(venda => {
	  		this.router.navigate(['vendas']);
	  		this.triggerToast('Venda efetuada com sucesso!');
		});
	}

	triggerToast(stringToast) {
		this.globalActions.emit({action: 'toast', params: [stringToast, 4000]});
	}
}