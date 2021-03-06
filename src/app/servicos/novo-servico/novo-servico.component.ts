import { Component, OnInit, AfterViewChecked, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import createNumberMask from 'text-mask-addons/dist/createNumberMask'

import { FileUploader } from 'ng2-file-upload';

import { ItensService } from './../../_services/itens.service';

import { environment } from './../../../environments/environment';

import { MaterializeAction } from 'angular2-materialize';

declare let Materialize:any;

const numberMask = createNumberMask({
	prefix: 'R$ ',
	allowDecimal:true,
	integerLimit: 7,
	decimalLimit: 2,
	thousandsSeparatorSymbol: '.',
	decimalSymbol: ','
})

@Component({
  selector: 'app-novo-servico',
  templateUrl: './novo-servico.component.html',
  styleUrls: ['./novo-servico.component.css']
})
export class NovoServicoComponent implements OnInit, AfterViewChecked {

	maskMoney = numberMask;
	baseUrl: string = environment.API_ENDPOINT;
	globalActions = new EventEmitter<string|MaterializeAction>();

	uploader:FileUploader = new FileUploader({
		url: this.baseUrl + 'api/upload'
	});
	
	hasBaseDropZoneOver:boolean = false;
	
	nome: string;
	valor_venda: any;

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

	novoServico(event) {
		event.preventDefault();
		
		if(!this.nome) return false;

		let newServico = {
			images: [],
			nome: this.nome,
			valor_venda: this.valor_venda
		};
		
		for (let i = 0; i < this.uploader.queue.length; ++i) {
			newServico.images.push(this.uploader.queue[i].file.name);
		}

		// Retira o Prefixo R$
		newServico.valor_venda = newServico.valor_venda.replace('R$ ','');

		this.itensService.addItem(newServico).subscribe(servico => {
			
			this.router.navigate(['servicos']);
			this.triggerToast('Serviço cadastrado com sucesso!', 'green');
		});
	}

	////////////////////////// Upload ///////////////////////////
	////////////////////////////////////////////////////////////
	fileOverBase(e:any):void {
		this.hasBaseDropZoneOver = e;
	}

	triggerToast(stringToast: string, bgColor: string) {
		this.globalActions.emit({action: 'toast', params: [stringToast, 4000, bgColor]});
	}
}
