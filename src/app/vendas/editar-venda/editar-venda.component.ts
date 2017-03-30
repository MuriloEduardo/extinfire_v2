import { Component, OnInit, AfterViewChecked, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';

import { MaterializeAction } from 'angular2-materialize';
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

import { VendasService } from './../../_services/vendas.service';

declare var Materialize:any;

const numberMask = createNumberMask({
	prefix: 'R$',
	allowDecimal:true,
	integerLimit: 7,
	decimalLimit: 2,
	thousandsSeparatorSymbol: '.',
	decimalSymbol: ','
})

@Component({
  selector: 'app-editar-venda',
  templateUrl: './editar-venda.component.html',
  styleUrls: ['./editar-venda.component.css']
})
export class EditarVendaComponent implements OnInit {

	maskMoney = numberMask;

	globalActions = new EventEmitter<string|MaterializeAction>();
	inscricao: Subscription;
	
	itens: any[];
	clientes: any[];
	servicos: any[];
	produtos: any[];

	private tipoVenda: boolean;

	venda: any = {
		cliente: {},
		itens: [{
			item: {},
			qntde: undefined,
			validade: undefined,
			total: undefined,
			tipo: undefined
		}],
		valor_total: undefined,
		observacao: undefined,
		tipo: undefined
	};

	ngOnInit() {
		this.inscricao = this.route.data.subscribe(
			(data: {venda: any, produtos: any, servicos: any, clientes: any}) => {
				this.venda = data.venda;
				this.produtos = data.produtos;
				this.servicos = data.servicos;
				this.clientes = data.clientes;

				this.itens = data.produtos.concat(data.servicos);

				// Adiciona uma linha de itens ao carregar
				let lastItem = this.venda.itens.length-1;
				this.setItem(lastItem, true, this.venda.itens[lastItem]._id);

				//this.venda.valor_total = this.venda.valor_total.replace('.','').replace('.','').replace(',','.');

				// Mesmo mudando de tipo, não poderá aterar o cliente
				this.tipoVenda = this.venda.tipo;
			}
		);
	}

	setCliente() {
		for (var i = 0; i < this.clientes.length; ++i) {
			if(this.venda.cliente._id === this.clientes[i]._id) {
				this.venda.cliente = this.clientes[i];
			}
		}
	}

	deleteRow(index: number) {
		this.venda.itens.splice(index, 1);
	}
	
	setItem(index: number, last?: boolean, id?: string) {

		if(!id) return false;

		// Se tem valor de custo é um produto
		// Caso não: é um serviço
		this.venda.itens[index].tipo = !this.venda.itens[index].item.valor_custo ? false : true;

		for (var i = 0; i < this.produtos.length; ++i) {
			if(id === this.produtos[i]._id) {
				this.venda.itens[index].item.images = this.produtos[i].images;
				this.venda.itens[index].item.nome = this.produtos[i].nome;
				this.venda.itens[index].item.qntde_atual = this.produtos[i].qntde_atual;
				this.venda.itens[index].item.qntde_minima = this.produtos[i].qntde_minima;
				this.venda.itens[index].item.updatedAt = this.produtos[i].updatedAt;
				this.venda.itens[index].item.valor_custo = this.produtos[i].valor_custo;
				this.venda.itens[index].item.valor_venda = this.produtos[i].valor_venda;
			}
		}
		
		if(!this.venda.itens[index].item.valor_venda)
			this.venda.itens[index].item.valor_venda = 0;

		if(!this.venda.itens[index].qntde)
			this.venda.itens[index].qntde = 1;
			
		this.venda.itens[index].validade = new Date();
		
		this.sum(index);
		
		if(last) {
			this.venda.itens.push({
				item: {}
			});
		}
	}

	sum(index: number) {

		let priceFloat = parseFloat(this.venda.itens[index].item.valor_venda.replace('R$','').replace('.','').replace('.','').replace(',','.'));
		let priceCalculed = priceFloat * this.venda.itens[index].qntde;

		this.venda.itens[index].total = priceCalculed.toString().replace('.',',');
		
		let valorTotalNew = 0;
		for (let j=0;j<this.venda.itens.length;++j) {
			if(this.venda.itens[j].total) {
				valorTotalNew += parseFloat(this.venda.itens[j].total.replace('.','').replace('.','').replace(',','.'));
			}
		}

		this.venda.valor_total = valorTotalNew;
	}

	updateVenda(event) {
		event.preventDefault();
		
		if(!this.venda.cliente.length&&this.venda.itens.length<=1) {
			alert('Adicione ao menos 1 produto');
			return false;
		};

		// Elimina oultimo produto que fica em vazio
		for (var i = 0; i < this.venda.itens.length; ++i) {
			if(!this.venda.itens[i].item.nome) {
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
	
	ngAfterViewChecked() {
		if(Materialize.updateTextFields)
			Materialize.updateTextFields();
	}

	triggerToast(stringToast) {
		this.globalActions.emit({action: 'toast', params: [stringToast, 4000]});
	}
}