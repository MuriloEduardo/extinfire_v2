import { Component, OnInit } from '@angular/core';

import { ItensService } from './../_services/itens.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	produtos: any[] = [];
	loadStatus: boolean = false;

	constructor(
		private itensService: ItensService
	) { }

	ngOnInit() {
		this.itensService.getItens().subscribe((produtos) => {

			for (var i = 0; i < produtos.length; ++i) {
				if(produtos[i].qntde_atual <= produtos[i].qntde_minima) {
					this.produtos.push(produtos[i]);
				}
			}
			this.loadStatus = true;
		});
	}
}
