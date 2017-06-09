import { Component, OnInit, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { MaterializeAction } from 'angular2-materialize';

import { ItensService } from './../../_services/itens.service';

import { environment } from './../../../environments/environment';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html',
  styleUrls: ['./detalhe-produto.component.css']
})
export class DetalheProdutoComponent implements OnInit {

	globalActions = new EventEmitter<string|MaterializeAction>();
	inscricao: Subscription;
	produto: any = {};
	loadStatus: boolean = false;
	baseUrl: string = environment.API_ENDPOINT;

	constructor(
		private itensService: ItensService,
		private route: ActivatedRoute,
		private router: Router
	) { }

	ngOnInit() {
		
		this.inscricao = this.route.params.subscribe((params: Params) => {

			this.itensService.getItem(params['id']).subscribe(produto => {

				this.produto = produto;

				this.produto.valor_custo = this.produto.valor_custo.replace('.','').replace('.','').replace(',','.');
				this.produto.valor_venda = this.produto.valor_venda.replace('.','').replace('.','').replace(',','.');

				this.loadStatus = true;
			});
		});
	}

	deleteProduto(produto: any) {
		this.itensService.deleteItem(produto).subscribe(data => {
			if(data.n) {
				this.router.navigate(['produtos']);
				this.triggerToast('Produto excluido com sucesso!', 'green');
			}
		});
	}

	triggerToast(stringToast: string, bgColor: string) {
		this.globalActions.emit({action: 'toast', params: [stringToast, 4000, bgColor]});
	}
}