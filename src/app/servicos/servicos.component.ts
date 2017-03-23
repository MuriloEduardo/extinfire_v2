import { Component, OnInit } from '@angular/core';

import { ServicosService } from './../_services/servicos.service';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements OnInit {
	
	servicos: any[] = [];
	loadStatus: boolean = false;

	constructor(
		private servicosService: ServicosService
	) { }

	ngOnInit() {

		this.servicosService.getServicos().subscribe((servicos) => {
			this.servicos = servicos;
			this.loadStatus = true;
		});
	}
}
