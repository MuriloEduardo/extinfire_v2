import { Component, OnInit, AfterViewChecked, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';

import { MaterializeAction } from 'angular2-materialize';

import { VendasService } from './../../_services/vendas.service';

declare var Materialize:any;

@Component({
  selector: 'app-editar-venda',
  templateUrl: './editar-venda.component.html',
  styleUrls: ['./editar-venda.component.css']
})
export class EditarVendaComponent implements OnInit {

	globalActions = new EventEmitter<string|MaterializeAction>();
	inscricao: Subscription;
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

	setCliente(cliente: any) {
		this.venda.cliente = cliente;
	}
	
	setProduto(index: number, last?: boolean, produto?: any) {

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

	updateVenda(event) {
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
		
		this.vendasService.updateVenda(this.venda).subscribe(venda => {
	  		this.router.navigate(['vendas']);
	  		this.triggerToast('Venda editada!');
		});
	}

	constructor(
		private vendasService: VendasService,
		private route: ActivatedRoute,
		private router: Router
	) { }

	ngOnInit() {
		this.inscricao = this.route.data.subscribe(
			(data: {venda: any, produtos: any, clientes: any}) => {
				this.venda = data.venda;
				this.produtos = data.produtos;
				this.clientes = data.clientes;

				// Adiciona uma linha de itens ao carregar
				let lastItem = this.venda.itens.length-1;
				this.setProduto(lastItem, true, this.venda.itens[lastItem]);
			}
		);
	}
	
	ngAfterViewChecked() {
		if(Materialize.updateTextFields)
			Materialize.updateTextFields();
	}

	triggerToast(stringToast) {
		this.globalActions.emit({action: 'toast', params: [stringToast, 4000]});
	}
}