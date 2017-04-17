import { Component, OnInit, AfterViewChecked, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';

import createNumberMask from 'text-mask-addons/dist/createNumberMask'

import { ItensService } from './../../_services/itens.service';

import { FileUploader } from 'ng2-file-upload';

import { MaterializeAction } from 'angular2-materialize';

declare let Materialize:any;

import { AppSettings } from '../../app.config';

const numberMask = createNumberMask({
	prefix: 'R$ ',
	allowDecimal:true,
	integerLimit: 7,
	decimalLimit: 2,
	thousandsSeparatorSymbol: '.',
	decimalSymbol: ','
})

@Component({
  selector: 'app-editar-servico',
  templateUrl: './editar-servico.component.html',
  styleUrls: ['./editar-servico.component.css']
})
export class EditarServicoComponent implements OnInit {

	maskMoney = numberMask;

	globalActions = new EventEmitter<string|MaterializeAction>();
	inscricao: Subscription;
	servico: any = {};

	uploader:FileUploader = new FileUploader({
		url: AppSettings.API_ENDPOINT + 'upload'
	});

	hasBaseDropZoneOver:boolean = false;

	constructor(
		private itensService: ItensService,
		private route: ActivatedRoute,
		private router: Router
	) { }

	ngOnInit() {
		/*this.inscricao = this.route.data.subscribe(
			(data: {servico: any}) => this.servico = data.servico
		);*/
		this.itensService.getItem(this.route.params['id']).subscribe((servico) => {
			this.servico = servico;
		});
	}

	ngAfterViewChecked() {
		if(Materialize.updateTextFields)
			Materialize.updateTextFields();
	}

	updateServico() {
		
		for (let j = 0; j < this.uploader.queue.length; ++j) {
			this.servico.images.push(this.uploader.queue[j].file.name);
		}
		
		this.uploader.clearQueue();

		// Retira o Prefixo R$
		this.servico.valor_venda = this.servico.valor_venda.replace('R$ ','');
		
		this.itensService.updateItem(this.servico).subscribe(data => {
			if(data._id) {
				this.uploader.uploadAll();
				this.router.navigate(['servicos']);
				this.triggerToast('Servico editado!');
			}
		});
	}

	removeItemFotos(item: any) {
		this.servico.images.splice(this.servico.images.indexOf(item), 1);
	}

	fileOverBase(e:any):void {
		this.hasBaseDropZoneOver = e;
	}

	triggerToast(stringToast) {
		this.globalActions.emit({action: 'toast', params: [stringToast, 4000]});
	}
}