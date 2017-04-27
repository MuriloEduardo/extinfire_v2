import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';

import { ItensService } from './../_services/itens.service';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements OnInit, OnDestroy {

	inscricao: Subscription;
	
	servicos: any[] = [];
	
	order: string = 'updatedAt';
  	reverse: boolean = false;
	loadStatus: boolean = false;

	constructor(
		private itensService: ItensService
	) { }

	ngOnInit() {

		this.inscricao = this.itensService.getItens().subscribe((servicos) => {

			for (var i = 0; i < servicos.length; ++i) {

				// Não tem quantidade minima
				// Então é produto
				if(!servicos[i].qntde_minima) {

					servicos[i].valor_venda = servicos[i].valor_venda.replace('.','').replace('.','').replace(',','.');
										
					this.servicos.push(servicos[i]);
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
