import { Component, OnInit, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { MaterializeAction } from 'angular2-materialize';

import { ItensService } from './../../_services/itens.service';

import { environment } from './../../../environments/environment';

@Component({
  selector: 'app-detalhe-servico',
  templateUrl: './detalhe-servico.component.html',
  styleUrls: ['./detalhe-servico.component.css']
})
export class DetalheServicoComponent implements OnInit {

	globalActions = new EventEmitter<string|MaterializeAction>();
	inscricao: Subscription;
	servico: any = {};
	loadStatus: boolean = false;
	baseUrl: string = environment.API_ENDPOINT;

	constructor(
		private itensService: ItensService,
		private route: ActivatedRoute,
		private router: Router
	) { }

	ngOnInit() {

		this.inscricao = this.route.params.subscribe((params: Params) => {

			this.itensService.getItem(params['id']).subscribe(servico => {

				this.servico = servico;

				this.servico.valor_venda = this.servico.valor_venda.replace('.','').replace('.','').replace(',','.');

				this.loadStatus = true;
			});
		});
	}

	deleteServico(servico: any) {
		this.itensService.deleteItem(servico).subscribe(data => {
			if(data.n) {
				this.router.navigate(['servicos']);
				this.triggerToast('Serviço excluido com sucesso!', 'green');
			}
		});
	}

	triggerToast(stringToast: string, bgColor: string) {
		this.globalActions.emit({action: 'toast', params: [stringToast, 4000, bgColor]});
	}
}
