import { Component, OnInit, AfterViewChecked, EventEmitter } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { MaterializeAction } from 'angular2-materialize';
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

import { VendasService } from './../../_services/vendas.service';
import { ClientesService } from './../../_services/clientes.service';
import { ItensService } from './../../_services/itens.service';

import { AppSettings } from './../../app.config';

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
export class EditarVendaComponent implements OnInit, AfterViewChecked {

	maskMoney = numberMask;

	globalActions = new EventEmitter<string|MaterializeAction>();
	inscricao: Subscription;
	
	itens: any[] = [];
	clientes: any[] = [];
	servicos: any[] = [];
	produtos: any[] = [];
	baseUrl: string = AppSettings.API_ENDPOINT;

	private tipoVenda: boolean;

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
		private route: ActivatedRoute,
		private router: Router
	) { }

	ngOnInit() {

		this.inscricao = this.route.params.subscribe((params: Params) => {

			this.vendasService.getVenda(params['id']).subscribe(venda => {

				this.venda = venda;

				// Mesmo mudando de tipo, não poderá aterar o cliente
				this.tipoVenda = this.venda.tipo;

				this.venda.valor_total = this.formatDecimal(this.venda.valor_total);
			});
		});

		this.itensService.getItens().subscribe((itens) => {

			for (var i = 0; i < itens.length; ++i) {
				if(itens[i].valor_custo) {
					// Tem quantidade minima
					// ENtão é produto
					this.produtos.push(itens[i]);
				} else {
					this.servicos.push(itens[i]);
				}

				this.itens.push(itens[i]);

				// Marcar itens que estao sendo usados
				this.venda.itens.filter(item => {
					if(item.item._id === itens[i]._id) {
						itens[i].selected = true;
					}
				});
			}
		});

		this.clientesService.getClientes().subscribe((clientes) => {
			this.clientes = clientes;
		});
	}

	formatDecimal(decimal: any) {

		if(typeof decimal === "number") decimal = decimal.toString();
		
		if(decimal.indexOf('R$')!==-1) decimal = decimal.replace('R$','');
		if(decimal.indexOf('.')!==-1) decimal = decimal.split('.').join('');
		if(decimal.indexOf(',')!==-1) decimal = decimal.replace(',','.');

		return decimal;
	}

	setCliente() {
		for (var i = 0; i < this.clientes.length; ++i) {
			if(this.venda.cliente._id === this.clientes[i]._id) {
				this.venda.cliente = this.clientes[i];
			}
		}
	}

	addItem() {

		if(!this.novoItem.item._id) return false;

		this.venda.itens.push(this.novoItem);

		this.resetNovoItem();
	}

	resetNovoItem() {

		// Reseta novoItem
		this.novoItem = {
			item: {
				images: [],
				_id: '',
				nome: ''
			},
			qntde: undefined,
			validade: undefined,
			total: undefined,
			tipo: undefined
		};
	}

	verificaQntdeMax(item: any) {
		
		// Quantidade máxima em estoque permitida
		if(item.qntde >= item.item.qntde_atual) {
			this.triggerToast('Apenas ' + item.item.qntde_atual + ' unidades existentes em estoque', 'blue');
			item.qntde = item.item.qntde_atual;
			return false;
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
		
		if(!this.venda.cliente.length&&this.venda.itens.length<=1) {
			this.triggerToast('Adicione ao menos 1 produto', 'red');
			return false;
		};
		
		this.vendasService.updateVenda(this.venda).subscribe(venda => {
	  		this.router.navigate(['vendas']);
	  		this.triggerToast('Venda editada com sucesso!', 'green');
		});
	}
	
	ngAfterViewChecked() {
		if(Materialize.updateTextFields)
			Materialize.updateTextFields();
	}

	triggerToast(stringToast: string, bgColor: string) {
		this.globalActions.emit({action: 'toast', params: [stringToast, 4000, bgColor]});
	}

	currencyPipe(value: number, currencyCode: string = 'BRL', symbolDisplay: boolean = true, digits?: string): string {
		if (!value) {
	      return '';
	    }

		let currencyPipe: CurrencyPipe = new CurrencyPipe('pt-BR');
    	let newValue: string = currencyPipe.transform(value, currencyCode, symbolDisplay, digits);

    	return newValue.replace('R$', '');
	}

	setNovoItem(_item: any) {
		
		if(!this.novoItem.item._id) return false;


		this.itens.filter(item => {
			
			if(item._id === this.novoItem.item._id) {
				
				if(!item.selected) {

					item.selected = true;
					this.novoItem.item = item;

					// Se tem valor de custo é um produto
					// Caso não: é um serviço
					this.novoItem.tipo = !this.novoItem.item.valor_custo ? false : true;

					this.novoItem.qntde = !_item ? 1 : _item.qntde;

					// Validade do produto
					// APENAS produto
					if(this.novoItem.tipo) {
						
						let date = new Date();
						date.setMonth(date.getMonth() + 12);
						this.novoItem.validade = !_item ? date.toLocaleDateString('pt-BR') : _item.validade;
					} else {
						
						this.novoItem.validade = undefined;
					}

					this.sumNovo(true);
				} else {

					this.resetNovoItem();

					this.triggerToast('Item sendo usado!', '');
				}
			}
		});
	}
	
	deleteRow(_item: any) {

		this.venda.itens = this.venda.itens.filter((filterItem) => {
		
			if(filterItem.item._id !== _item._id) return filterItem;
		});

		this.itens.filter(item => {
			if(item._id === _item._id) {
				item.selected = false;
			}
		});
	}

	editarRow(item: any) {

		this.novoItem.item = item.item;

		this.deleteRow(item.item);

		this.setNovoItem(item);
	}

	sumNovo(_editando: boolean) {

		let priceFloat = parseFloat(this.formatDecimal(this.novoItem.item.valor_venda));
		let priceCalculed = priceFloat * this.novoItem.qntde;

		this.novoItem.total = priceCalculed.toFixed(2).toString().replace('.',',');

		if(!_editando)
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
}