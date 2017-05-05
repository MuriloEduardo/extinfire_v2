import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';

import { ClientesService } from './../_services/clientes.service';

import { AppSettings } from './../app.config';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

	clientes: any[] = [];
	inscricao: Subscription;
	loadStatus: boolean = false;
	order: string = 'criadoEm';
  	reverse: boolean = true;
  	baseUrl: string = AppSettings.API_ENDPOINT;

	constructor(
		private clientesService: ClientesService
	) { }

	ngOnInit() {
		this.inscricao = this.clientesService.getClientes().subscribe(clientes => {
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