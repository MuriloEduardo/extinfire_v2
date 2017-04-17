import { Component, OnInit } from '@angular/core';

import { ItensService } from './../_services/itens.service';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements OnInit {
	
	servicos: any[] = [];
	
	order: string = 'updatedAt';
  	reverse: boolean = false;
	loadStatus: boolean = false;

	constructor(
		private itensService: ItensService
	) { }

	ngOnInit() {

		this.itensService.getItens().subscribe((servicos) => {
			this.servicos = servicos;

			for (var i = 0; i < this.servicos.length; ++i) {
				this.servicos[i].valor_venda = this.servicos[i].valor_venda.replace('.','').replace('.','').replace(',','.');
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
