import { Component, OnInit, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';

import { MaterializeAction } from 'angular2-materialize';

import { ProdutosService } from '../../_services/produtos.service';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html',
  styleUrls: ['./detalhe-produto.component.css']
})
export class DetalheProdutoComponent implements OnInit {

	globalActions = new EventEmitter<string|MaterializeAction>();
	inscricao: Subscription;
	produto: any;

	constructor(
		private produtosService: ProdutosService,
		private route: ActivatedRoute,
		private router: Router
	) { }

	ngOnInit() {
		this.inscricao = this.route.data.subscribe(
			(data: {produto: any}) => {
				this.produto = data.produto;

				this.produto.valor_custo = this.produto.valor_custo.replace('.','').replace('.','').replace(',','.');
				this.produto.valor_venda = this.produto.valor_venda.replace('.','').replace('.','').replace(',','.');
			}
		);
	}

	deleteProduto(produto: any) {
		this.produtosService.deleteProduto(produto).subscribe(data => {
			if(data.n) {
				this.router.navigate(['produtos']);
				this.triggerToast('Produto excluido!');
			}
		});
	}

	triggerToast(stringToast) {
		this.globalActions.emit({action: 'toast', params: [stringToast, 4000]});
	}
}