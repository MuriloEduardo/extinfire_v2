import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';

import { ItensService } from './../_services/itens.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit, OnDestroy {

	inscricao: Subscription;

	produtos: any[] = [];
	
	order: string = 'updatedAt';
  	reverse: boolean = false;
	loadStatus: boolean = false;

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