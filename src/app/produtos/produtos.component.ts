<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component, OnInit, OnDestroy } from '@angular/core';
>>>>>>> fa1459ca6e8e07a963e29214fbfe77216d34a636
import { Subscription } from 'rxjs/Rx';

import { ItensService } from './../_services/itens.service';

import { AppSettings } from './../app.config';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit, OnDestroy {

	inscricao: Subscription;

	inscricao: Subscription;

	produtos: any[] = [];
	
	order: string = 'updatedAt';
  	reverse: boolean = false;
	loadStatus: boolean = false;
	baseUrl: string = AppSettings.API_ENDPOINT;

	constructor(
		private itensService: ItensService
	) { }

	ngOnInit() {

		this.inscricao = this.itensService.getItens().subscribe((produtos) => {

			for (var i = 0; i < produtos.length; ++i) {
				
				if(produtos[i].qntde_minima) {

					produtos[i].valor_custo = produtos[i].valor_custo.replace('.','').replace('.','').replace(',','.');
					produtos[i].valor_venda = produtos[i].valor_venda.replace('.','').replace('.','').replace(',','.');

					// Tem quantidade minima
					// Então é produto
					this.produtos.push(produtos[i]);
				}
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

	ngOnDestroy() {
		this.inscricao.unsubscribe();
	}
}