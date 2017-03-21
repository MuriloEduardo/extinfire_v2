import { Component, OnInit, AfterViewChecked } from '@angular/core';

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

	inscricao: Subscription;

	uploader:FileUploader = new FileUploader({
		url: AppSettings.API_ENDPOINT
	});
	
	hasBaseDropZoneOver:boolean = false;

	cliente: any;

	constructor(
		private route: ActivatedRoute,
		private clientesService: ClientesService,
		private router: Router
	) { }

	ngOnInit() {
		this.inscricao = this.route.data.subscribe(
			(data: {cliente: any}) => this.cliente = data.cliente
		);
	}

	ngAfterViewChecked() {
		if(Materialize.updateTextFields)
			Materialize.updateTextFields();
	}

	deleteCliente(cliente: any) {
		this.clientesService.deleteCliente(cliente).subscribe(data => {
			if(data.n) {
				this.router.navigate(['produtos']);
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
			this.router.navigate(['produtos']);
		});
	}
}
