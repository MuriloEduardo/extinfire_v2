import { Component, OnInit, AfterViewChecked, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { FileUploader } from 'ng2-file-upload';
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

import { ItensService } from './../../_services/itens.service';

import { AppSettings } from '../../app.config';

import { MaterializeAction } from 'angular2-materialize';

declare let Materialize:any;

const numberMask = createNumberMask({
	prefix: 'R$',
	allowDecimal:true,
	integerLimit: 7,
	decimalLimit: 2,
	thousandsSeparatorSymbol: '.',
	decimalSymbol: ',',
})

@Component({
  selector: 'app-novo-produto',
  templateUrl: './novo-produto.component.html',
  styleUrls: ['./novo-produto.component.css']
})
export class NovoProdutoComponent implements OnInit, AfterViewChecked {

	maskMoney = numberMask;
	
	globalActions = new EventEmitter<string|MaterializeAction>();

	uploader:FileUploader = new FileUploader({
		url: AppSettings.API_ENDPOINT + 'upload'
	});
	
	hasBaseDropZoneOver:boolean = false;
	
	nome: string;
	valor_custo: string;
	valor_venda: string;
	qntde_atual: number;
	qntde_minima: number;

	constructor(
		private itensService: ItensService,
		private router: Router
	) { }

	ngOnInit() {
	}

	ngAfterViewChecked() {
		if(Materialize.updateTextFields)
			Materialize.updateTextFields();
	}

	novoProduto(event) {
		event.preventDefault();
		
		if(!this.nome) return false;

		let newProduto = {
			images: [],
			nome: this.nome,
			valor_venda: this.valor_venda.replace('R$',''),
			valor_custo: this.valor_custo.replace('R$',''),
			qntde_atual: this.qntde_atual,
			qntde_minima: this.qntde_minima
		};
		
		for (let i = 0; i < this.uploader.queue.length; ++i) {
			newProduto.images.push(this.uploader.queue[i].file.name);
		}
		
		this.itensService.addItem(newProduto).subscribe(produto => {
			this.uploader.uploadAll();
			this.router.navigate(['produtos']);
			this.triggerToast('Produto cadastrado com sucesso!');
		});
	}

	////////////////////////// Upload ///////////////////////////
	////////////////////////////////////////////////////////////
	fileOverBase(e:any):void {
		this.hasBaseDropZoneOver = e;
	}

	triggerToast(stringToast) {
		this.globalActions.emit({action: 'toast', params: [stringToast, 4000]});
	}
}
