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
		console.dir('Clientes Service Inicializado...');
  	}

  	getVendas() {
  		return this.vendas = this.http.get(AppSettings.API_ENDPOINT + 'vendas').map(res => res.json());
  	}

	getVenda(id: string) {
		return this.http.get(AppSettings.API_ENDPOINT + 'venda/' + id).map(res => res.json());
	}

	addVenda(newVenda: any) {

		this.logsService.addLog({
			descricao: 'Adicionou a venda',
			item: newVenda.nome
		}).subscribe(data => {});

		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post(AppSettings.API_ENDPOINT + 'venda', JSON.stringify(newVenda), {headers: headers}).map(res => res.json());
	}

	deleteVenda(venda: any) {

		this.logsService.addLog({
			descricao: 'Deletou a venda',
			item: venda.nome
		}).subscribe(data => {});

		return this.http.delete(AppSettings.API_ENDPOINT + 'venda/' + venda._id).map(res => res.json());
	}

	updateVenda(venda: any) {

		this.logsService.addLog({
			descricao: 'Editou o serviço',
			item: venda.nome
		}).subscribe(data => {});

		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.put(AppSettings.API_ENDPOINT + 'venda/' + venda._id, JSON.stringify(venda), {headers: headers}).map(res => res.json());
	}
}
