import { Component, OnInit } from '@angular/core';

import { ItensService } from './../_services/itens.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

	produtos: any[] = [];
	
	order: string = 'updatedAt';
  	reverse: boolean = false;
	loadStatus: boolean = false;

	constructor(
		private itensService: ItensService
	) { }

	ngOnInit() {

		this.itensService.getItens().subscribe((produtos) => {
			this.produtos = produtos;

			for (var i = 0; i < this.produtos.length; ++i) {
				this.produtos[i].valor_custo = this.produtos[i].valor_custo.replace('.','').replace('.','').replace(',','.');
				this.produtos[i].valor_venda = this.produtos[i].valor_venda.replace('.','').replace('.','').replace(',','.');
			}
			
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