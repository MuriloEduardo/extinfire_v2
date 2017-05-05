import { Component, OnInit, AfterViewChecked, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { ItensService } from './../../_services/itens.service';

import { FileUploader } from 'ng2-file-upload';
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

import { MaterializeAction } from 'angular2-materialize';

declare let Materialize:any;

import { AppSettings } from './../../app.config';

const numberMask = createNumberMask({
	prefix: 'R$',
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
export class EditarProdutoComponent implements OnInit, AfterViewChecked, OnDestroy {

	maskMoney = numberMask;

	globalActions = new EventEmitter<string|MaterializeAction>();
	inscricao: Subscription;
	produto: any = {};
	loadStatus: boolean = false;
	baseUrl: string = AppSettings.API_ENDPOINT;

	uploader:FileUploader = new FileUploader({
		url: this.baseUrl + 'upload'
	});

	hasBaseDropZoneOver:boolean = false;
	
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

	ngAfterViewChecked() {
		if(Materialize.updateTextFields)
			Materialize.updateTextFields();
	}

	updateProuto() {
		
		for (let j = 0; j < this.uploader.queue.length; ++j) {
			this.produto.images.push(this.uploader.queue[j].file.name);
		}
		
		this.uploader.clearQueue();

		this.produto.valor_venda = this.produto.valor_venda.replace('R$','');
		this.produto.valor_custo = this.produto.valor_custo.replace('R$','');
		
		this.itensService.updateItem(this.produto).subscribe(data => {
			if(data._id) {
				this.uploader.uploadAll();
				this.router.navigate(['produtos']);
				this.triggerToast('Produto editado com sucesso!', 'green');
			}
		});
	}

	removeItemFotos(item: any) {
		this.produto.images.splice(this.produto.images.indexOf(item), 1);
	}

	fileOverBase(e:any):void {
		this.hasBaseDropZoneOver = e;
	}

	triggerToast(stringToast: string, bgColor: string) {
		this.globalActions.emit({action: 'toast', params: [stringToast, 4000, bgColor]});
	}

	ngOnDestroy() {
		this.inscricao.unsubscribe();
	}
}