import { Component, OnInit, AfterViewChecked } from '@angular/core';

import { VendasService } from './../../_services/vendas.service';
import { ClientesService } from './../../_services/clientes.service';

declare var Materialize:any;

@Component({
  selector: 'app-nova-venda',
  templateUrl: './nova-venda.component.html',
  styleUrls: ['./nova-venda.component.css']
})
export class NovaVendaComponent implements OnInit {
  
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
		private clientesService: ClientesService
	) { }
  
  ngOnInit() {
  }
  
  ngAfterViewChecked() {
		if(Materialize.updateTextFields)
			Materialize.updateTextFields();
	}

	setCliente(cliente: any) {
		this.venda.cliente = cliente;
	}
	
	setProduto(index: number, last?: number, produto?: any) {
		
		console.log(produto)

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
		
		if(!this.venda.cliente.length&&!this.venda.itens.length) return false;
		
		this.vendasService.addVenda(this.venda).subscribe(venda => {
		  // Redirecionar a listagem
		});
	}
}
