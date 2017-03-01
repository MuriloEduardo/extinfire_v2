import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ClientesService {

	private apiUrl: string = 'http://127.0.0.1:8080/api/';
	clientes: any;

  	constructor(private http: Http) {
		console.dir('Clientes Service Inicializado...');
  	}

  	getClientes() {
  		return this.clientes = this.http.get(this.apiUrl + 'clientes').map(res => res.json());;
  	}

	getCliente(id: string) {
		return this.http.get(this.apiUrl + 'cliente/' + id).map(res => res.json());
	}

	addCliente(newCliente: any) {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post(this.apiUrl + 'cliente', JSON.stringify(newCliente), {headers: headers}).map(res => res.json());
	}

	deleteCliente(id: string) {
		return this.http.delete(this.apiUrl + 'cliente/' + id).map(res => res.json());
	}

	updateCliente(cliente: any) {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post(this.apiUrl + 'cliente' + cliente._id, JSON.stringify(cliente), {headers: headers}).map(res => res.json());
	}
}
