import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { LogsService } from './logs.service';

//const apiUrl = 'https://extinfire-backend-v2-muriloeduardo.c9users.io/api/';
const apiUrl = 'http://127.0.0.1:8080/api/';

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
  		return this.clientes = this.http.get(apiUrl + 'clientes').map(res => res.json());
  	}

	getCliente(id: string) {
		return this.http.get(apiUrl + 'cliente/' + id).map(res => res.json());
	}

	addCliente(newCliente: any) {

		this.logsService.addLog({
			descricao: 'adicionaou o cliente',
			item: newCliente.nome
		}).subscribe(data => {});

		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post(apiUrl + 'cliente', JSON.stringify(newCliente), {headers: headers}).map(res => res.json());
	}

	deleteCliente(cliente: any) {

		this.logsService.addLog({
			descricao: 'deletou o cliente',
			item: cliente.nome
		}).subscribe(data => {});

		return this.http.delete(apiUrl + 'cliente/' + cliente._id).map(res => res.json());
	}

	updateCliente(cliente: any) {
		
		this.logsService.addLog({
			descricao: 'editou o cliente',
			item: cliente.nome
		}).subscribe(data => {});

		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.put(apiUrl + 'cliente/' + cliente._id, JSON.stringify(cliente), {headers: headers}).map(res => res.json());
	}
}
