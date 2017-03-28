import { Component, OnInit } from '@angular/core';

import { ServicosService } from './../_services/servicos.service';

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
		private servicosService: ServicosService
	) { }

	ngOnInit() {

		this.servicosService.getServicos().subscribe((servicos) => {
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
