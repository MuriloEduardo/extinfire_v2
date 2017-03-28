import { Component, OnInit, AfterViewChecked, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';

import { MaterializeAction } from 'angular2-materialize';
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

import { VendasService } from './../../_services/vendas.service';
import { ClientesService } from './../../_services/clientes.service';

declare var Materialize:any;

const numberMask = createNumberMask({
	prefix: 'R$ ',
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
	produtos: any[];
	servicos: any[];

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
  
  	constructor(
		private vendasService: VendasService,
		private clientesService: ClientesService,
		private route: ActivatedRoute,
		private router: Router
	) { }
  
  	ngOnInit() {
	  	this.inscricao = this.route.data.subscribe(
			(data: {produtos: any, clientes: any, servicos: any}) => {
				this.produtos = data.produtos;
				this.clientes = data.clientes;
				this.servicos = data.servicos;

				this.itens = data.produtos.concat(data.servicos);
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
	
	setItem(index: number, last?: number, id?: any) {

		if(!id) return false;

		// Se tem valor de custo é um produto
		// Caso não: é um serviço
		this.venda.itens[index].tipo = !this.venda.itens[index].item.valor_custo ? false : true;
		
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

	deleteRow(index: number) {
		this.venda.itens.splice(index, 1);
	}
	
	sum(index: number) {
		
		//this.venda.itens[index].total = this.venda.itens[index].qntde * this.venda.itens[index].item.valor_venda;

		console.log(this.venda.itens[index].item.valor_venda)
		console.log(parseFloat(this.venda.itens[index].item.valor_venda.replace('R$ ','').replace(',','.').replace(' ','')))
		
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