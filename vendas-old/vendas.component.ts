import { Component, OnInit } from '@angular/core';

import { VendasService } from './../_services/vendas.service';

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
		private vendasService: VendasService
	) { }

	ngOnInit() {

		this.vendasService.getVendas().subscribe((vendas) => {
	      
	      this.vendas = vendas;

	      this.loadStatus = true;
	    });
	}

	setOrder(value: string) {
		if (this.order === value) {
			this.reverse = !this.reverse;
		}

		this.order = value;
	}
}