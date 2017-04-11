import { Component, OnInit, AfterViewChecked, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';

import { MaterializeAction } from 'angular2-materialize';
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

import { VendasService } from './../../_services/vendas.service';
import { ClientesService } from './../../_services/clientes.service';

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
export class NovaVendaComponent implements OnInit {

	maskMoney = numberMask;

	inscricao: Subscription;
	globalActions = new EventEmitter<string|MaterializeAction>();

	itens: any[];
	clientes: any[];
	produtos: any[] = [];
	servicos: any[];
	
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
		cliente: {},
		itens: [],
		valor_total: 0,
		observacao: undefined,
		tipo: undefined
	};

	novoItem: any = {
		item: {
			valor_venda: undefined
		},
		qntde: undefined,
		validade: undefined,
		total: undefined,
		tipo: undefined
	};
  
  	constructor(
		private vendasService: VendasService,
		private clientesService: ClientesService,
		private route: ActivatedRoute,
		private router: Router
	) { }
  
  	ngOnInit() {
	  	this.inscricao = this.route.data.subscribe(
			(data: {produtos: any, clientes: any, servicos: any}) => {
				this.clientes = data.clientes;
				this.servicos = data.servicos;

				this.itens = data.produtos.concat(data.servicos);

				for (var i = 0; i < data.produtos.length; ++i) {
					if(data.produtos[i].qntde_atual>0) {
						this.produtos.push(data.produtos[i]);
					}
				}
			}
		);
  	}
  
  	ngAfterViewChecked() {
		if(Materialize.updateTextFields)
			Materialize.updateTextFields();
	}

	addItem() {

		if(!this.novoItem.item._id) return false;
		
		this.venda.itens.push(this.novoItem);

		console.log(this.novoItem)

		// Reseta novoItem
		this.novoItem = {
				item: {
				valor_venda: undefined
			},
			qntde: undefined,
			validade: undefined,
			total: undefined,
			tipo: undefined
		};
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
	}

	setItem(index: number, itens?: any) {

		/*if(!itens[index].item._id) return false;

		// Se tem valor de custo é um produto
		// Caso não: é um serviço
		itens[index].tipo = !itens[index].item.valor_custo ? false : true;
		
		if(!itens[index].item.valor_venda)
			itens[index].item.valor_venda = 0;

		itens[index].qntde = 1;
		
		// Validade do produto
		// APENAS produto
		if(itens[index].tipo) {
			let date = new Date();
			date.setMonth(date.getMonth() + 12);
			itens[index].validade = date.toLocaleDateString('pt-BR');
		}*/
		
		this.sum(index, itens);
	}
	
	deleteRow(index: number) {
		this.venda.itens.splice(index, 1);
	}

	sumNovo() {

		let priceFloat = parseFloat(this.novoItem.item.valor_venda.replace('R$','').replace('.','').replace('.','').replace(',','.'));
		let priceCalculed = priceFloat * this.novoItem.qntde;

		this.novoItem.total = priceCalculed.toString().replace('.',',');
	}
	
	sum(index: number, itens: any) {

		// Quantidade máxima em estoque permitida
		if(itens[index].qntde >= itens[index].item.qntde_atual) {
			this.triggerToast('Apenas ' + itens[index].item.qntde_atual + ' unidades existentes em estoque', 'red darken-4');
			return false;
		}

		/*// Baixa provisoria em estoque
	    let produtoAtual = this.produtos.filter((produto) => produto._id === itens[index].item._id)[0];
	    produtoAtual.qntde_atual --;*/

		let priceFloat = parseFloat(itens[index].item.valor_venda.replace('R$','').replace('.','').replace('.','').replace(',','.'));
		let priceCalculed = priceFloat * itens[index].qntde;

		itens[index].total = priceCalculed.toString().replace('.',',');
		
		let valorTotalNew = 0;
		for (let j=0;j<itens.length;++j) {
			if(itens[j].total) {
				valorTotalNew += parseFloat(itens[j].total.replace('.','').replace('.','').replace(',','.'));
			}
		}

		this.venda.valor_total = valorTotalNew;
	}

	novaVenda(event) {
		event.preventDefault();
		
		if(!this.venda.cliente.length&&!this.venda.itens.length) {
			this.triggerToast('Adicione ao menos 1 produto', 'red darken-4');
			return false;
		};

		// Elimina oultimo produto que fica em vazio
		for (var i = 0; i < this.venda.itens.length; ++i) {
			if(!this.venda.itens[i].item.nome) {
				this.venda.itens.splice(this.venda.itens.indexOf(this.venda.itens[i]), 1);
			}
		}
		
		this.vendasService.addVenda(this.venda).subscribe(venda => {
	  		this.router.navigate(['vendas']);
	  		this.triggerToast('Venda efetuada com sucesso!', 'green darken-4');
		});
	}

	triggerToast(stringToast: string, bgColor: string) {
		this.globalActions.emit({action: 'toast', params: [stringToast, 4000, bgColor]});
	}
}