import { Component, OnInit, AfterViewChecked, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';

import { ProdutosService } from '../../_services/produtos.service';

import { FileUploader } from 'ng2-file-upload';
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

import { MaterializeAction } from 'angular2-materialize';

declare let Materialize:any;

import { AppSettings } from '../../app.config';

const numberMask = createNumberMask({
	prefix: 'R$ ',
	allowDecimal:true,
	integerLimit: 7,
	decimalLimit: 2,
	thousandsSeparatorSymbol: '.',
	decimalSymbol: ',',
})

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent implements OnInit, AfterViewChecked {

	maskMoney = numberMask;

	globalActions = new EventEmitter<string|MaterializeAction>();
	inscricao: Subscription;
	produto: any = {};

	uploader:FileUploader = new FileUploader({
		url: AppSettings.API_ENDPOINT
	});

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

	ngAfterViewChecked() {
		if(Materialize.updateTextFields)
			Materialize.updateTextFields();
	}

	updateProuto() {
		
		this.uploader.uploadAll();
		
		for (let j = 0; j < this.uploader.queue.length; ++j) {
			this.produto.images.push(this.uploader.queue[j].file.name);
		}
		
		this.uploader.clearQueue();
		
		this.produtosService.updateProduto(this.produto).subscribe(data => {
			if(data._id) {
				this.router.navigate(['produtos']);
				this.triggerToast('Produto editado!');
			}
		});
	}

	removeItemFotos(item: any) {
		this.produto.images.splice(this.produto.images.indexOf(item), 1);
	}

	triggerToast(stringToast) {
		this.globalActions.emit({action: 'toast', params: [stringToast, 4000]});
	}
}