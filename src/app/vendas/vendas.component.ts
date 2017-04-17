import { Component, OnInit } from '@angular/core';

import { VendasService } from './../_services/vendas.service';
import { ClientesService } from './../_services/clientes.service';
import { ItensService } from './../_services/itens.service';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.css']
})

export class VendasComponent implements OnInit {

	vendas: any[] = [];
	clientes: any[] = [];
	produtos: any[] = [];

	order: string = 'updatedAt';
  	reverse: boolean = true;
	loadStatus: boolean = false;

	constructor(
		private vendasService: VendasService,
		private clientesService: ClientesService,
    	private itensService: ItensService
	) { }

	ngOnInit() {

		this.vendasService.getVendas().subscribe((vendas) => {
	      this.vendas = vendas;

	      this.loadStatus = true;
	      
	      this.itensService.getItens().subscribe((produtos) => {
	        this.produtos = produtos;

	        this.clientesService.getClientes().subscribe((clientes) => {
	          this.clientes = clientes;
	        });
	      });
	    });
	}

	setOrder(value: string) {
		if (this.order === value) {
			this.reverse = !this.reverse;
		}

		this.order = value;
	}
}