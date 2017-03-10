import { Component, OnInit, EventEmitter, AfterViewChecked } from '@angular/core';

import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';

import { ClientesService } from '../_services/clientes.service';

import { MaterializeAction } from 'angular2-materialize';
import { FileUploader } from 'ng2-file-upload';

declare let Materialize:any;
//const URL = 'https://extinfire-backend-v2-muriloeduardo.c9users.io/api/upload';
const URL = 'http://127.0.0.1:8080/api/upload';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

	inscricao: Subscription;

	uploader:FileUploader = new FileUploader({
		url: URL
	});
	
	hasBaseDropZoneOver:boolean = false;
	
	modalActions = new EventEmitter<string|MaterializeAction>();
	modalViewActions = new EventEmitter<string|MaterializeAction>();

	clientes: any[] = [];
	cliente: any = {};
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
		private clientesService: ClientesService,
		private route: ActivatedRoute
	) { }

	ngOnInit() {
		this.inscricao = this.route.data.subscribe(
			(data: {clientes: any}) => {
				this.clientes = data.clientes;
			}
		);
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
			this.clientes.push(cliente);
			this.uploader.uploadAll();
			this.closeModal();
		});
	}

	deleteCliente(cliente: any) {
		this.clientesService.deleteCliente(cliente).subscribe(data => {
			if(data.n) {
				this.clientes.splice(this.clientes.indexOf(cliente), 1);
				this.closeModalView();
			}
		});
	}

	updateCliente() {
		
		this.uploader.uploadAll();
		
		for (let j = 0; j < this.uploader.queue.length; ++j) {
			this.cliente.images.push(this.uploader.queue[j].file.name);
		}
		
		this.uploader.clearQueue();
		
		this.clientesService.updateCliente(this.cliente).subscribe(data => {
			for (let i = 0; i < this.clientes.length; ++i) {
				if(this.clientes[i]._id == data._id) {
					this.clientes[i] = data;
				}
			}
			this.closeModalView();
		});
	}

	private resetUploader() {
		this.uploader = new FileUploader({
			url: URL
		});
	}

	///////////////////////// Modal /////////////////////////////
	////////////////////////////////////////////////////////////
	openModal() {
		this.modalActions.emit({action:"modal",params:['open']});
	}

	closeModal() {
		this.modalActions.emit({action:"modal",params:['close']});
		this.resetFormNovoCliente();
	}
	
	openModalView(cliente: any) {
		this.cliente = cliente;
		this.modalViewActions.emit({action:"modal",params:['open']});
	}

	closeModalView() {
		this.cliente = {};
		this.resetUploader();
		this.modalViewActions.emit({action:"modal",params:['close']});
	}

	////////////////////////// Upload ///////////////////////////
	////////////////////////////////////////////////////////////
	fileOverBase(e:any):void {
		this.hasBaseDropZoneOver = e;
	}
}
