import { Component, OnInit, AfterViewChecked, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import createNumberMask from 'text-mask-addons/dist/createNumberMask'

import { FileUploader } from 'ng2-file-upload';

import { ServicosService } from './../../_services/servicos.service';

import { AppSettings } from './../../app.config';

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

	globalActions = new EventEmitter<string|MaterializeAction>();

	uploader:FileUploader = new FileUploader({
		url: AppSettings.API_ENDPOINT + 'upload'
	});
	
	hasBaseDropZoneOver:boolean = false;
	
	nome: string;
	valor_venda: any;

	constructor(
		private servicosService: ServicosService,
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

		this.servicosService.addServico(newServico).subscribe(servico => {
			this.uploader.uploadAll();
			this.router.navigate(['servicos']);
			this.triggerToast('Serviço cadastrado com sucesso!');
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
