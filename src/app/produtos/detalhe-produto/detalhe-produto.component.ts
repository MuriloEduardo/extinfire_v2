import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';

import { ProdutosService } from '../../_services/produtos.service';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html',
  styleUrls: ['./detalhe-produto.component.css']
})
export class DetalheProdutoComponent implements OnInit {

	inscricao: Subscription;
	produto: any;

	constructor(
		private produtosService: ProdutosService,
		private route: ActivatedRoute,
		private router: Router
	) { }

	ngOnInit() {
		this.inscricao = this.route.data.subscribe(
			(data: {produto: any}) => this.produto = data.produto
		);
	}

	deleteProduto(produto: any) {
		this.produtosService.deleteProduto(produto).subscribe(data => {
			if(data.n) {
				this.router.navigate(['produtos']);
			}
		});
	}
}