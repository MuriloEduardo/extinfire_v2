import { Component, OnInit } from '@angular/core';

import { ClientesService } from './../_services/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

	clientes: any[] = [];
	
	loadStatus: boolean = false;
	order: string = 'criadoEm';
  	reverse: boolean = true;

	constructor(
		private clientesService: ClientesService
	) { }

	ngOnInit() {
		this.clientesService.getClientes().subscribe(clientes => {
			this.clientes = clientes;
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