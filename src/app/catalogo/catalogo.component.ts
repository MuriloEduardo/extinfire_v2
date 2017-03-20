import { Component, OnInit, EventEmitter, AfterViewChecked } from '@angular/core';

import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

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
}
