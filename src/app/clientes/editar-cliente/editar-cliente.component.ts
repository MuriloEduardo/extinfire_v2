import { Component, OnInit, AfterViewChecked, EventEmitter } from '@angular/core';

import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';

import { ClientesService } from './../../_services/clientes.service';

import { MaterializeAction } from 'angular2-materialize';
import { FileUploader } from 'ng2-file-upload';

import { AppSettings } from '../../app.config';

declare let Materialize:any;

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {
	
	globalActions = new EventEmitter<string|MaterializeAction>();
	inscricao: Subscription;

	uploader:FileUploader = new FileUploader({
		url: AppSettings.API_ENDPOINT
	});
	
	hasBaseDropZoneOver:boolean = false;

	cliente: any = {
	  _id: null,
	  comprador: null,
	  insc_estadual: null,
	  cnpj: null,
	  representante: null,
	  nome: null,
	  updatedAt: null,
	  endereco: {
	    logradouro: null,
	    numero: null,
	    complemento: null,
	    bairro: null,
	    cidade: null,
	    estado: null,
	    cep: null
	  },
	  contato: {
	    fone: null,
	    celular: null,
	    email: null
	  },
	  images: []
	};

	constructor(
		private route: ActivatedRoute,
		private clientesService: ClientesService,
		private router: Router
	) { }

	ngOnInit() {
		this.inscricao = this.route.data.subscribe(
			(data: {cliente: any}) => this.cliente = data.cliente
		);

		console.log(this.cliente)
	}

	ngAfterViewChecked() {
		if(Materialize.updateTextFields)
			Materialize.updateTextFields();
	}

	updateCliente() {
		
		this.uploader.uploadAll();
		
		for (let j = 0; j < this.uploader.queue.length; ++j) {
			this.cliente.images.push(this.uploader.queue[j].file.name);
		}
		
		this.uploader.clearQueue();
		
		this.clientesService.updateCliente(this.cliente).subscribe(data => {
			this.router.navigate(['clientes']);
			this.triggerToast('Cliente editado!');
		});
	}

	triggerToast(stringToast) {
		this.globalActions.emit({action: 'toast', params: [stringToast, 4000]});
	}
}
