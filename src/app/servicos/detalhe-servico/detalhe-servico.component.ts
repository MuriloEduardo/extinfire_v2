import { Component, OnInit, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';

import { MaterializeAction } from 'angular2-materialize';

import { ServicosService } from '../../_services/servicos.service';

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
		private servicosService: ServicosService,
		private route: ActivatedRoute,
		private router: Router
	) { }

	ngOnInit() {
		this.inscricao = this.route.data.subscribe(
			(data: {servico: any}) => {
				this.servico = data.servico;

				this.servico.valor_venda = this.servico.valor_venda.replace('.','').replace('.','').replace(',','.');
			}
		);
	}

	deleteServico(servico: any) {
		this.servicosService.deleteServico(servico).subscribe(data => {
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
