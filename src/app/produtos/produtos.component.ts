import { Component, OnInit, EventEmitter, AfterViewChecked } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

	inscricao: Subscription;
	produtos: any[] = [];

	constructor(
		private route: ActivatedRoute
	) { }

	ngOnInit() {
		this.inscricao = this.route.data.subscribe(
			(data: {produtos: any}) => this.produtos = data.produtos
		);
	}

	ngOnDestroy() {
		this.inscricao.unsubscribe();
	}
}