import { Component, OnInit } from '@angular/core';

import { ProdutosService } from '../_services/produtos.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	produtos: any[] = [];
	loadStatus: boolean = false;

	constructor(
		private produtosService: ProdutosService
	) { }

	ngOnInit() {
		this.produtosService.getProdutos().subscribe((produtos) => {
			this.produtos = produtos;
			this.loadStatus = true;
		});
	}
}
