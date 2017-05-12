import { Component, OnInit, AfterViewChecked, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { ClientesService } from './../../_services/clientes.service';

import { MaterializeAction } from 'angular2-materialize';
import { FileUploader } from 'ng2-file-upload';

import { AppSettings } from './../../app.config';

declare let Materialize:any;

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {
	
	globalActions = new EventEmitter<string|MaterializeAction>();
	inscricao: Subscription;
	loadStatus: boolean = false;
	baseUrl: string = AppSettings.API_ENDPOINT;

	uploader:FileUploader = new FileUploader({
		url: this.baseUrl + 'api/upload'
	});
	
	hasBaseDropZoneOver:boolean = false;

	cliente: any = {};

	constructor(
		private route: ActivatedRoute,
		private clientesService: ClientesService,
		private router: Router
	) { }

	ngOnInit() {

		this.inscricao = this.route.params.subscribe((params: Params) => {

			this.clientesService.getCliente(params['id']).subscribe(cliente => {

				this.cliente = cliente;

				this.loadStatus = true;
			});
		});

		console.log(this.baseUrl + 'api/upload')
	}

	ngAfterViewChecked() {
		if(Materialize.updateTextFields)
			Materialize.updateTextFields();
	}

	updateCliente() {
		
		for (let j = 0; j < this.uploader.queue.length; ++j) {
			this.cliente.images.push(this.uploader.queue[j].file.name);
		}
		
		this.uploader.clearQueue();
		
		this.clientesService.updateCliente(this.cliente).subscribe(data => {
			this.uploader.uploadAll();
			this.router.navigate(['clientes']);
			this.triggerToast('Cliente editado com sucesso!', 'green');
		});
	}

	removeItemFotos(item: any) {
		this.cliente.images.splice(this.cliente.images.indexOf(item), 1);
	}

	fileOverBase(e:any):void {
		this.hasBaseDropZoneOver = e;
	}

	triggerToast(stringToast: string, bgColor: string) {
		this.globalActions.emit({action: 'toast', params: [stringToast, 4000, bgColor]});
	}
}
