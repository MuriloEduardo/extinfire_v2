import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';

import { VendasService } from './../../_services/vendas.service';

declare var Materialize:any;

@Component({
  selector: 'app-editar-venda',
  templateUrl: './editar-venda.component.html',
  styleUrls: ['./editar-venda.component.css']
})
export class EditarVendaComponent implements OnInit {
  
  inscricao: Subscription;
	venda: any;

	constructor(
		private vendasService: VendasService,
		private route: ActivatedRoute,
		private router: Router
	) { }

	ngOnInit() {
		this.inscricao = this.route.data.subscribe(
			(data: {venda: any}) => this.venda = data.venda
		);
	}
	
	ngAfterViewChecked() {
		if(Materialize.updateTextFields)
			Materialize.updateTextFields();
	}
}