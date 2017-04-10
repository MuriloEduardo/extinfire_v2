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
		itens: [{
			item: {},
			qntde: undefined,
			validade: undefined,
			total: undefined,
			tipo: undefined
		}],
		valor_total: 0,
		observacao: undefined,
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

	setItem(index: number, last?: number, itens?: any) {

		if(!itens[index].item._id) return false;

		if(last) {
			itens.push({
				item: {}
			});
		}

		//itens[index].item = itens[index].item;

		/*

		//

		// Se tem valor de custo é um produto
		// Caso não: é um serviço
		itens[index].tipo = !itens[index].item.valor_custo ? false : true;
		
		if(!itens[index].item.valor_venda)
			itens[index].item.valor_venda = 0;

		if(!itens[index].qntde)
			itens[index].qntde = 1;
		
		// Validade do produto
		// APENAS produto
		if(itens[index].tipo) {
			let date = new Date();
			date.setMonth(date.getMonth() + 12);
			itens[index].validade = date.toLocaleDateString('pt-BR');
		}
		
		this.sum(index, itens);*/

		console.log(itens[index])
	}
	
	deleteRow(index: number) {
		this.venda.itens.splice(index, 1);
	}
	
	itensSelecionados(itens: any) {
		return itens.some(function(item) {
			return item.selecionado;
		});
	}
	
	sum(index: number, itens: any) {

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
		
		this.vendasService.addVenda(this.venda).subscribe(venda => {
	  		this.router.navigate(['vendas']);
	  		this.triggerToast('Venda efetuada com sucesso!');
		});
	}

	triggerToast(stringToast) {
		this.globalActions.emit({action: 'toast', params: [stringToast, 4000]});
	}
}