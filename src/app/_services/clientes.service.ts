import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { LogsService } from './logs.service';

import { AppSettings } from '../app.config';

@Injectable()
export class ClientesService {

	clientes: any;

  	constructor(
  		private http: Http,
  		private logsService: LogsService
  	) {
  		console.dir('Clientes Service Inicializado...');
  	}

  	getClientes() {
  		return this.clientes = this.http.get(AppSettings.API_ENDPOINT + 'clientes').map(res => res.json());
  	}

	getCliente(id: string) {
		return this.http.get(AppSettings.API_ENDPOINT + 'cliente/' + id).map(res => res.json());
	}

	addCliente(newCliente: any) {

		this.logsService.addLog({
			nome: 'Adicionaou um cliente',
			item: newCliente.nome
		}).subscribe(data => {});

		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post(AppSettings.API_ENDPOINT + 'cliente', JSON.stringify(newCliente), {headers: headers}).map(res => res.json());
	}

	deleteCliente(cliente: any) {

		this.logsService.addLog({
			nome: 'Deletou um cliente',
			item: cliente.nome
		}).subscribe(data => {});

		return this.http.delete(AppSettings.API_ENDPOINT + 'cliente/' + cliente._id).map(res => res.json());
	}

	updateCliente(cliente: any) {
		
		this.logsService.addLog({
			nome: 'Editou um cliente',
			item: cliente.nome
		}).subscribe(data => {});

		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.put(AppSettings.API_ENDPOINT + 'cliente/' + cliente._id, JSON.stringify(cliente), {headers: headers}).map(res => res.json());
	}

	getCep(cep: string) {
		return this.http.get('https://viacep.com.br/ws/' + cep + '/json/').map(res => res.json());
	}
}
