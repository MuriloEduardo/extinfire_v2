import { Component, OnInit } from '@angular/core';

import { ServicosService } from '../services/servicos.service';
import { ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	servicos: any[] = [];
	produtos: any[] = [];

	constructor(
		private servicosService: ServicosService,
		private produtosService: ProdutosService
	) { }

	ngOnInit() {
		this.servicosService.getServicos().subscribe((data) => {
			this.servicos = data;
		});
		this.produtosService.getProdutos().subscribe((data) => {
			this.produtos = data;
		});
	}
}
