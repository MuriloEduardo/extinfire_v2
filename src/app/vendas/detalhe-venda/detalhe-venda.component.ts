import { Component, OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { MaterializeAction } from 'angular2-materialize';

import { VendasService } from './../../_services/vendas.service';

import { AppSettings } from './../../app.config';

@Component({
  selector: 'app-detalhe-venda',
  templateUrl: './detalhe-venda.component.html',
  styleUrls: ['./detalhe-venda.component.css']
})
export class DetalheVendaComponent implements OnInit, OnDestroy {
	
	urlPdf: string;

	globalActions = new EventEmitter<string|MaterializeAction>();
    inscricao: Subscription;
	venda: any = {};
	loadStatus: boolean = false;
	baseUrl: string = AppSettings.API_ENDPOINT;

	constructor(
		private vendasService: VendasService,
		private route: ActivatedRoute,
		private router: Router
	) { }

	ngOnInit() {

		this.inscricao = this.route.params.subscribe((params: Params) => {

			this.vendasService.getVenda(params['id']).subscribe(venda => {

				this.venda = venda;

				this.urlPdf = this.baseUrl + 'api/pdf/' + this.venda._id;

				for (var i = 0; i < this.venda.itens.length; ++i) {

					this.venda.itens[i].item.valor_venda = this.venda.itens[i].item.valor_venda.replace('.','').replace('.','').replace(',','.');
					
					this.venda.itens[i].total = this.venda.itens[i].total.replace('.','').replace('.','').replace(',','.');
				}

				this.loadStatus = true;
			});
		});
	}
    
    deleteVenda(venda: any) {
        this.vendasService.deleteVenda(venda).subscribe(data => {
            this.router.navigate(['vendas']);
			this.triggerToast('Venda excluida com sucesso!', 'green');
        });
    }

    triggerToast(stringToast: string, bgColor: string) {
		this.globalActions.emit({action: 'toast', params: [stringToast, 4000, bgColor]});
	}

	ngOnDestroy() {
		this.inscricao.unsubscribe();
	}
}
