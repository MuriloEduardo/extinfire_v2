import { Component, OnInit, EventEmitter } from '@angular/core';

import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.css']
})

export class VendasComponent implements OnInit {

	inscricao: Subscription;

	vendas: any[] = [];
	clientes: any[] = [];
	produtos: any[] = [];

	constructor(
		private route: ActivatedRoute
	) { }

	ngOnInit() {
		this.inscricao = this.route.data.subscribe(
			(data: {produtos: any, vendas: any, clientes: any}) => {
				this.produtos = data.produtos;
				this.vendas = data.vendas;
				this.clientes = data.clientes;
			}
		);
	}
}