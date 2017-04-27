import { Component, OnInit, AfterViewChecked, EventEmitter, Output } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Subscription } from 'rxjs/Rx';
import { Router } from '@angular/router';

import { MaterializeAction } from 'angular2-materialize';
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

import { VendasService } from './../../_services/vendas.service';
import { ClientesService } from './../../_services/clientes.service';
import { ItensService } from './../../_services/itens.service';

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
  selector: 'app-nova-venda',
  templateUrl: './nova-venda.component.html',
  styleUrls: ['./nova-venda.component.css']
})
export class NovaVendaComponent implements OnInit, AfterViewChecked {

	maskMoney = numberMask;
	loadStatus: boolean = false;
	globalActions = new EventEmitter<string|MaterializeAction>();

	itens: any[] = [];
	clientes: any[] = [];
	
	produtos: any[] = [];

	servicos: any[] = [];
	
	paramsPickdate: any = {
	    monthsFull: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
	    monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
	    weekdaysFull: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabádo'],
	    weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
	    today: 'Hoje',
	    clear: 'Limpar',
	    close: 'Pronto',
	    labelMonthNext: 'Próximo mês',
	    labelMonthPrev: 'Mês anterior',
	    labelMonthSelect: 'Selecione um mês',
	    labelYearSelect: 'Selecione um ano',
	    format:'dd/mm/yyyy',
	    closeOnSelect: true,
	    selectMonths: true, 
	    selectYears: 15 
    };

  	venda: any = {
		cliente: {
			images: []
		},
		itens: [],
		valor_total: 0,
		observacao: undefined,
		tipo: undefined
	};

	novoItem: any = {
		item: {
			valor_venda: undefined,
			images: []
		},
		qntde: undefined,
		validade: undefined,
		total: undefined,
		tipo: undefined
	};
  
  	constructor(
		private vendasService: VendasService,
		private clientesService: ClientesService,
		private itensService: ItensService,
		private router: Router
	) { }
  
  	ngOnInit() {

		this.itensService.getItens().subscribe((itens) => {

			for (var i = 0; i < itens.length; ++i) {
				if(itens[i].qntde_minima&&itens[i].qntde_atual>0) {
					// Tem quantidade minima
					// ENtão é produto
					this.produtos.push(itens[i]);
				} else {
					this.servicos.push(itens[i]);
				}

				this.itens.push(itens[i]);
			}
		});

		this.clientesService.getClientes().subscribe((clientes) => {
			
			this.clientes = clientes;

			this.loadStatus = true;
		});
  	}
  
  	ngAfterViewChecked() {
		if(Materialize.updateTextFields)
			Materialize.updateTextFields();
	}

	addItem() {

		if(!this.novoItem.item._id) return false;
		
		this.venda.itens.push(this.novoItem);

		// Reseta novoItem
		this.novoItem = {
			item: {
				valor_venda: undefined,
				images: []
			},
			qntde: undefined,
			validade: undefined,
			total: undefined,
			tipo: undefined
		};
	}

	currencyPipe(value: number, currencyCode: string = 'BRL', symbolDisplay: boolean = true, digits?: string): string {
		if (!value) {
	      return '';
	    }

		let currencyPipe: CurrencyPipe = new CurrencyPipe('pt-BR');
    	let newValue: string = currencyPipe.transform(value, currencyCode, symbolDisplay, digits);

    	return newValue.replace('R$', '');
	}

	setNovoItem() {
		
		if(!this.novoItem.item._id) return false;

		// Se tem valor de custo é um produto
		// Caso não: é um serviço
		this.novoItem.tipo = !this.novoItem.item.valor_custo ? false : true;

		this.novoItem.qntde = 1;

		// Validade do produto
		// APENAS produto
		if(this.novoItem.tipo) {
			let date = new Date();
			date.setMonth(date.getMonth() + 12);
			this.novoItem.validade = date.toLocaleDateString('pt-BR');
		}

		this.sumNovo();

		/*this.produtos.filter((produto) => {
			if(produto._id === this.novoItem.item._id) produto.selected = true;
		});*/

		this.addItem();

		//this.itemSendoUsado(this.novoItem);
	}

	/*itemSendoUsado(item: any) {
		
		// Marcar produto ja sendo usado
		this.venda.itens.filter((filterItem) => {
			console.log(filterItem)
			if(item._id === filterItem._id)
				return true;
		});

		return false;

		for (var x = 0; x < this.venda.itens.length; ++x) {
			if(this.venda.itens[x].tipo) {
				// Produto
				this.produtos.filter((produto) => {
					produto.selected = false;
					produto.selected = produto._id === this.venda.itens[x].item._id ? true : false;
				});
			} else {

				this.servicos.filter((servico) => {
					servico.selected = false;
					servico.selected = servico._id === this.venda.itens[x].item._id ? true : false;
				});				
			}
		}

		//this.servicos = this.servicos.slice();
		//this.produtos = this.produtos.slice();
	}*/

	getProdutos() {
		return this.produtos;
	}

	setItem(item: any) {

		if(!item.item._id) return false;

		// Se tem valor de custo é um produto
		// Caso não: é um serviço
		item.tipo = !item.item.valor_custo ? false : true;
		
		// Validade do produto
		// APENAS produto
		let date = new Date();
		date.setMonth(date.getMonth() + 12);
		item.validade = item.tipo ? date.toLocaleDateString('pt-BR') : undefined;
		
		this.sumRow(item);

		//this.itemSendoUsado(item);
	}

	formatDecimal(decimal: any) {

		if(typeof decimal === "number") decimal = decimal.toString();
		
		if(decimal.indexOf('R$')!==-1) decimal = decimal.replace('R$','');
		if(decimal.indexOf('.')!==-1) decimal = decimal.split('.').join('');
		if(decimal.indexOf(',')!==-1) decimal = decimal.replace(',','.');

		return decimal;
	}
	
	deleteRow(index: number) {

		this.venda.itens[index] = undefined;

		this.venda.itens.splice(index, 1);
	}

	sumNovo() {

		let priceFloat = parseFloat(this.formatDecimal(this.novoItem.item.valor_venda));
		let priceCalculed = priceFloat * this.novoItem.qntde;

		this.novoItem.total = priceCalculed.toFixed(2).toString().replace('.',',');

		this.verificaQntdeMax(this.novoItem);
	}

	valorTotal() {
		
		let valorTotal = 0;
		
		for (var i = 0; i < this.venda.itens.length; ++i) {
			let priceFloat = parseFloat(this.formatDecimal(this.venda.itens[i].total));
			valorTotal += priceFloat;
		}

		this.venda.valor_total = this.currencyPipe(valorTotal);

		return valorTotal;
	}

	sumRow(item: any) {
		let priceFloat = parseFloat(this.formatDecimal(item.item.valor_venda));
		let priceCalculed = priceFloat * item.qntde;

		item.total = priceCalculed.toFixed(2).toString().replace('.',',');

		this.verificaQntdeMax(item);
	}

	verificaQntdeMax(item: any) {
		
		// Quantidade máxima em estoque permitida
		if(item.qntde >= item.item.qntde_atual) {
			this.triggerToast('Apenas ' + item.item.qntde_atual + ' unidades existentes em estoque', 'blue');
			item.qntde = item.item.qntde_atual;
			return false;
		}
	}

	novaVenda(event) {
		event.preventDefault();
		
		if(!this.venda.cliente.length&&!this.venda.itens.length) {
			this.triggerToast('Adicione ao menos 1 produto', 'red');
			return false;
		};

		for (var i = 0; i < this.venda.itens.length; ++i) {
			//this.venda.itens[i].total = this.currencyPipe(this.venda.itens[i].total);
		}
		
		this.vendasService.addVenda(this.venda).subscribe(venda => {
	  		this.router.navigate(['vendas']);
	  		this.triggerToast('Venda efetuada com sucesso!', 'green');
		});
	}

	triggerToast(stringToast: string, bgColor: string) {
		this.globalActions.emit({action: 'toast', params: [stringToast, 4000, bgColor]});
	}
}