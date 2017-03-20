import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

const apiUrl = 'https://extinfire-backend-v2-muriloeduardo.c9users.io/api/' || 'http://127.0.0.1:8080/api/';

import { LogsService } from './logs.service';

@Injectable()
export class VendasService {

	vendas: any;

  	constructor(
  		private http: Http,
  		private logsService: LogsService  		
  	) {
		console.dir('Clientes Service Inicializado...');
  	}

  	getVendas() {
  		return this.vendas = this.http.get(apiUrl + 'vendas').map(res => res.json());
  	}

	getVenda(id: string) {
		return this.http.get(apiUrl + 'venda/' + id).map(res => res.json());
	}

	addVenda(newVenda: any) {

		this.logsService.addLog({
			descricao: 'adicionou a venda',
			item: newVenda.nome
		}).subscribe(data => {});

		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post(apiUrl + 'venda', JSON.stringify(newVenda), {headers: headers}).map(res => res.json());
	}

	deleteVenda(venda: any) {

		this.logsService.addLog({
			descricao: 'deletou a venda',
			item: venda.nome
		}).subscribe(data => {});

		return this.http.delete(apiUrl + 'venda/' + venda._id).map(res => res.json());
	}

	updateVenda(venda: any) {

		this.logsService.addLog({
			descricao: 'editou o serviço',
			item: venda.nome
		}).subscribe(data => {});

		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post(apiUrl + 'venda' + venda._id, JSON.stringify(venda), {headers: headers}).map(res => res.json());
	}
}
