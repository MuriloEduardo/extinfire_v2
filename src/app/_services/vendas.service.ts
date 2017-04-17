import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { AppSettings } from '../app.config';

import { LogsService } from './logs.service';

@Injectable()
export class VendasService {

	vendas: any;

  	constructor(
  		private http: Http,
  		private logsService: LogsService  		
  	) {
		console.dir('Vendas Service Inicializado...');
  	}

  	getVendas() {
  		return this.vendas = this.http.get(AppSettings.API_ENDPOINT + 'vendas').map(res => res.json());
  	}

	getVenda(id: string) {
		return this.http.get(AppSettings.API_ENDPOINT + 'venda/' + id).map(res => res.json());
	}

	addVenda(newVenda: any) {

		this.logsService.addLog({
			descricao: 'Adicionou uma venda',
			item: newVenda.cliente
		}).subscribe(data => {});

		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post(AppSettings.API_ENDPOINT + 'venda', JSON.stringify(newVenda), {headers: headers}).map(res => res.json());
	}

	deleteVenda(venda: any) {

		this.logsService.addLog({
			descricao: 'Deletou uma venda',
			item: venda.cliente
		}).subscribe(data => {});

		return this.http.delete(AppSettings.API_ENDPOINT + 'venda/' + venda._id).map(res => res.json());
	}

	updateVenda(venda: any) {

		this.logsService.addLog({
			descricao: 'Editou uma venda',
			item: venda.cliente
		}).subscribe(data => {});

		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.put(AppSettings.API_ENDPOINT + 'venda/' + venda._id, JSON.stringify(venda), {headers: headers}).map(res => res.json());
	}
}
