import { Component, OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { MaterializeAction } from 'angular2-materialize';

import { ClientesService } from './../../_services/clientes.service';

@Component({
  selector: 'app-detalhe-cliente',
  templateUrl: './detalhe-cliente.component.html',
  styleUrls: ['./detalhe-cliente.component.css']
})
export class DetalheClienteComponent implements OnInit, OnDestroy {
	
	globalActions = new EventEmitter<string|MaterializeAction>();
	inscricao: Subscription;
	cliente: any = {};
	loadStatus: boolean = false;

	constructor(
		private clientesService: ClientesService,
		private route: ActivatedRoute,
		private router: Router
	) { }

	ngOnInit() {

		this.inscricao = this.route.params.subscribe((params: Params) => {

			this.clientesService.getCliente(params['id']).subscribe(cliente => {

				this.cliente = cliente;

				this.loadStatus = true;
			});
		});
	}

	deleteCliente(cliente: any) {
		this.clientesService.deleteCliente(cliente).subscribe(data => {
			if(data.n) {
				this.router.navigate(['clientes']);
				this.triggerToast('Usuário excluido com sucesso!', 'green');
			}
		});
	}

	triggerToast(stringToast: string, bgColor: string) {
		this.globalActions.emit({action: 'toast', params: [stringToast, 4000, bgColor]});
	}

	ngOnDestroy() {
		this.inscricao.unsubscribe();
	}
}