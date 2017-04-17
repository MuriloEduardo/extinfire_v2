import { Component, OnInit, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';

import { MaterializeAction } from 'angular2-materialize';

import { ItensService } from './../../_services/itens.service';

@Component({
  selector: 'app-detalhe-servico',
  templateUrl: './detalhe-servico.component.html',
  styleUrls: ['./detalhe-servico.component.css']
})
export class DetalheServicoComponent implements OnInit {

	globalActions = new EventEmitter<string|MaterializeAction>();
	inscricao: Subscription;
	servico: any;

	constructor(
		private itensService: ItensService,
		private route: ActivatedRoute,
		private router: Router
	) { }

	ngOnInit() {
		/*this.inscricao = this.route.data.subscribe(
			(data: {servico: any}) => {
				this.servico = data.servico;

				this.servico.valor_venda = this.servico.valor_venda.replace('.','').replace('.','').replace(',','.');
			}
		);*/
		this.itensService.getItem(this.route.params['id']).subscribe((servico) => {
			this.servico = servico;
		});
	}

	deleteServico(servico: any) {
		this.itensService.deleteItem(servico).subscribe(data => {
			if(data.n) {
				this.router.navigate(['servicos']);
				this.triggerToast('Serviço excluido!');
			}
		});
	}

	triggerToast(stringToast) {
		this.globalActions.emit({action: 'toast', params: [stringToast, 4000]});
	}
}
