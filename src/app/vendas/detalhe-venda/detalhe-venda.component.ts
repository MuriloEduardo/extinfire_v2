import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';

import { VendasService } from './../../_services/vendas.service';

@Component({
  selector: 'app-detalhe-venda',
  templateUrl: './detalhe-venda.component.html',
  styleUrls: ['./detalhe-venda.component.css']
})
export class DetalheVendaComponent implements OnInit {

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
    
    deleteVenda(venda: any) {
        this.vendasService.deleteVenda(venda).subscribe(data => {
            if(data.n) {
				this.router.navigate(['clientes']);
            }
        });
    }
}
