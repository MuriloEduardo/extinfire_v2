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

	constructor(
		private clientesService: ClientesService
	) { }

	ngOnInit() {
		this.clientesService.getClientes().subscribe(clientes => {
			this.clientes = clientes;
			this.loadStatus = true;
		});
	}
}