import { Component, OnInit, AfterViewChecked, EventEmitter } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { MaterializeAction } from 'angular2-materialize';
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

import { VendasService } from './../../_services/vendas.service';
import { ClientesService } from './../../_services/clientes.service';
import { ItensService } from './../../_services/itens.service';

import { environment } from './../../../environments/environment';

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

	clientes: any[] = [];
	servicos: any[] = [];
	produtos: any[] = [];
	baseUrl: string = environment.API_ENDPOINT;

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

				if(itens[i].qntde_minima) {
					// Tem quantidade minima
					// Então é produto
					this.produtos.push(itens[i]);
				} else {
					this.servicos.push(itens[i]);
				}
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
				_id: undefined,
				nome: undefined
			},
			qntde: undefined,
			validade: undefined,
			total: undefined,
			tipo: undefined
		};
	}

	verificaQntdeMax(item: any) {

		console.log('verificaQntdeMax', item)
		
		// Quantidade máxima em estoque permitida
		/*if(item.qntde >= item.item.qntde_atual) {
			//this.triggerToast('Apenas ' + item.item.qntde_atual + ' unidades existentes em estoque', '');
			return false;
		}*/
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

	setNovoItem(_item: any, edit?: boolean, row?: any) {

		this.novoItem.item = _item;

		// Se tem valor de custo é um produto
		// Caso não: é um serviço
		this.novoItem.tipo = !this.novoItem.item.valor_custo ? false : true;

		this.novoItem.qntde = edit ? row.qntde : 1;

		// Validade do produto
		// APENAS produto
		if(this.novoItem.tipo) {
			
			let date = new Date();
			date.setMonth(date.getMonth() + 12);
			this.novoItem.validade = date.toLocaleDateString('pt-BR');
		} else {
			
			this.novoItem.validade = undefined;
		}

		if(edit) {
			this.novoItem.item.qntde_atual = this.novoItem.item.qntde_atual + this.novoItem.qntde;
		}

		this.sumNovo(true);

		this.venda.itens.filter((filterItem) => {
			if(_item._id === filterItem.item._id) {
				
				this.resetNovoItem();
				this.triggerToast('Item já está sendo usado!', '');
				return false;
			}
		});

		if(this.novoItem.tipo) {
			
			this.produtos.filter((produto) => {

				if(this.novoItem.item._id === produto._id) {
					
					if(produto.qntde_atual<=0) {

						this.resetNovoItem();
						this.triggerToast('Produto esgotado! Adicione mais quantidades em estoque.', '');
						return false;
					}
				}
			});
		}
	}
	
	deleteRow(row: any, estoque?: boolean) {

		this.venda.itens = this.venda.itens.filter((filterItem) => {
		
			if(filterItem.item._id !== row.item._id) return filterItem;
		});

		if(row.item.qntde_minima&&!estoque) {
			
			this.produtos.filter((produto) => {
				
				if(row.item._id === produto._id) {
					// Quando um produto for excluido, seu estoque atual devera ser corrigido
					produto.qntde_atual = produto.qntde_atual + row.qntde;
				}
			});
		}
	}

	editarRow(item: any) {

		if(this.novoItem.item._id) {
			this.triggerToast('Salve o item atual, para editar outros!', 'blue');
			return false;
		}

		this.deleteRow(item, true);

		this.novoItem.item = item.item;

		this.setNovoItem(item.item, true, item);
	}

	sumNovo(_editando: boolean) {

		let priceFloat = parseFloat(this.formatDecimal(this.novoItem.item.valor_venda));
		let priceCalculed = priceFloat * this.novoItem.qntde;

		this.novoItem.total = priceCalculed.toFixed(2).toString().replace('.',',');

		//if(!_editando)
			//this.verificaQntdeMax(this.novoItem);
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