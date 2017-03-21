import { Component, OnInit, AfterViewChecked } from '@angular/core';

import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';

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

	nome: string;
	representante: string;
	cnpj: number;
	insc_estadual: string;
	comprador: string;
	fone: number;
	celular: number;
	email: string;
	logradouro: string;
	numero: string;
	complemento: string;
	bairro: string;
	cidade: string;
	estado: string;
	cep: number;

	constructor(
		private route: ActivatedRoute,
		private clientesService: ClientesService
	) { }

	ngOnInit() {
	}

	ngAfterViewChecked() {
		if(Materialize.updateTextFields)
			Materialize.updateTextFields();
	}

	resetFormNovoCliente() {
		this.nome = undefined;
		this.representante = undefined;
		this.cnpj = undefined;
		this.insc_estadual = undefined;
		this.comprador = undefined;
		this.fone = undefined;
		this.celular = undefined;
		this.email = undefined;
		this.logradouro = undefined;
		this.numero = undefined;
		this.complemento = undefined;
		this.bairro = undefined;
		this.cidade = undefined;
		this.estado = undefined;
		this.cep = undefined;

		this.resetUploader();
	}

	private resetUploader() {
		this.uploader = new FileUploader({
			url: AppSettings.API_ENDPOINT
		});
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

		this.clientesService.addCliente(newCliente).subscribe(cliente => {
			// Redirecionamento para listagem de clientes
		});
	}

	////////////////////////// Upload ///////////////////////////
	////////////////////////////////////////////////////////////
	fileOverBase(e:any):void {
		this.hasBaseDropZoneOver = e;
	}
}
