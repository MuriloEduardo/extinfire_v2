import { Subscription } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//import { ServicosService } from '../_services/servicos.service';
//import { EstoqueService } from '../_services/estoque.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	inscricao: Subscription;

	servicos: any[] = [];
	produtos: any[] = [];

	constructor(
		//private servicosService: ServicosService,
		//private estoqueService: EstoqueService,
		private route: ActivatedRoute
	) { }

	ngOnInit() {
		/*this.servicosService.getServicos().subscribe((data) => {
			this.servicos = data;
		});
		this.estoqueService.getProdutos().subscribe((data) => {
			this.produtos = data;
		});*/

		this.inscricao = this.route.data.subscribe(
			(data: {produtos: any, servicos: any}) => {
				this.produtos = data.produtos;
				this.servicos = data.servicos;
			}
		);
	}
}
