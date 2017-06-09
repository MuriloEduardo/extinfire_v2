import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { LogsService } from './logs.service';

import { environment } from './../../environments/environment';

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
  		return this.clientes = this.http.get(environment.API_ENDPOINT + 'api/clientes').map(res => res.json());
  	}

	getCliente(id: string) {
		return this.http.get(environment.API_ENDPOINT + 'api/cliente/' + id).map(res => res.json());
	}

	addCliente(newCliente: any) {

		this.logsService.addLog({
			descricao: 'Adicionaou um cliente',
			item: newCliente
		}).subscribe(data => {});

		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post(environment.API_ENDPOINT + 'api/cliente', JSON.stringify(newCliente), {headers: headers}).map(res => res.json());
	}

	deleteCliente(cliente: any) {

		this.logsService.addLog({
			descricao: 'Deletou um cliente',
			item: cliente
		}).subscribe(data => {});

		return this.http.delete(environment.API_ENDPOINT + 'api/cliente/' + cliente._id).map(res => res.json());
	}

	updateCliente(cliente: any) {
		
		this.logsService.addLog({
			descricao: 'Editou um cliente',
			item: cliente
		}).subscribe(data => {});

		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.put(environment.API_ENDPOINT + 'api/cliente/' + cliente._id, JSON.stringify(cliente), {headers: headers}).map(res => res.json());
	}

	getCep(cep: string) {
		return this.http.get('https://viacep.com.br/ws/' + cep + '/json/').map(res => res.json());
	}
}
