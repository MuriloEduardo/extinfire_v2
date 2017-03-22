import { Component, OnInit, AfterViewChecked, EventEmitter } from '@angular/core';

import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';

import { ClientesService } from './../../_services/clientes.service';

import { MaterializeAction } from 'angular2-materialize';
import { FileUploader } from 'ng2-file-upload';

import { AppSettings } from '../../app.config';

declare let Materialize:any;

@Component({
  selector: 'app-novo-cliente',
  templateUrl: './novo-cliente.component.html',
  styleUrls: ['./novo-cliente.component.css']
})
export class NovoClienteComponent implements OnInit {

	inscricao: Subscription;
	globalActions = new EventEmitter<string|MaterializeAction>();
	uploader:FileUploader = new FileUploader({
		url: AppSettings.API_ENDPOINT
	});
	
	hasBaseDropZoneOver:boolean = false;

	selectEstadoOptions: any[] = [
		{
			name: 'Rio Grande do Sul',
			value: 'RS'
		},
		{
			name: 'Rio de Janeiro',
			value: 'RJ'
		}
	];

	nome: any;
	representante: any;
	cnpj: any;
	insc_estadual: any;
	comprador: any;
	fone: any;
	celular: any;
	email: any;
	logradouro: any;
	numero: any;
	complemento: any;
	bairro: any;
	cidade: any;
	estado: any;
	cep: any;

	constructor(
		private route: ActivatedRoute,
		private clientesService: ClientesService,
		private router: Router
	) { }

	ngOnInit() {
	}

	ngAfterViewChecked() {
		if(Materialize.updateTextFields)
			Materialize.updateTextFields();
	}

	trustAsResourceUrl(uri: string) {
		return encodeURIComponent(uri);
	}

	novoCliente(event) {
		event.preventDefault();
		
		if(!this.nome) return false;

		let newCliente = {
			images: [],
			nome: this.nome,
			representante: this.representante,
			cnpj: this.cnpj,
			insc_estadual: this.insc_estadual,
			comprador: this.comprador,
			contato: {
				fone: this.fone,
				celular: this.celular,
				email: this.email
			},
			endereco: {
				logradouro: this.logradouro,
				numero: this.numero,
				complemento: this.complemento,
				bairro: this.bairro,
				cidade: this.cidade,
				estado: this.estado,
				cep: this.cep
			}
		};

		for (let i = 0; i < this.uploader.queue.length; ++i) {
			newCliente.images.push(this.uploader.queue[i].file.name);
		}

		console.log(newCliente)

		this.clientesService.addCliente(newCliente).subscribe(cliente => {
			this.router.navigate(['clientes']);
	  		this.triggerToast('Cliente cadastrado com sucesso!');
		});
	}

	triggerToast(stringToast) {
		this.globalActions.emit({action: 'toast', params: [stringToast, 4000]});
	}

	////////////////////////// Upload ///////////////////////////
	////////////////////////////////////////////////////////////
	fileOverBase(e:any):void {
		this.hasBaseDropZoneOver = e;
	}
}
