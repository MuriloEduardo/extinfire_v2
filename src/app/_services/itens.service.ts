import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { LogsService } from '../_services/logs.service';

import { AppSettings } from '../app.config';

@Injectable()
export class ItensService {

	itens: any;

  	constructor(
  		private http: Http,
  		private logsService: LogsService
  	) {
		console.dir('Itens Service Inicializado...');
  	}

  	getItens() {
  		return this.itens = this.http.get(AppSettings.API_ENDPOINT + 'itens').map(res => res.json());
  	}

	getItem(id: string) {
		return this.http.get(AppSettings.API_ENDPOINT + 'item/' + id).map(res => res.json());
	}

	addItem(newItem: any) {

		this.logsService.addLog({
			descricao: 'Adicionou um item',
			item: newItem
		}).subscribe(data => {});
		
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post(AppSettings.API_ENDPOINT + 'item', JSON.stringify(newItem), {headers: headers}).map(res => res.json());
	}

	deleteItem(item: any) {

		this.logsService.addLog({
			descricao: 'Deletou um item',
			item: item
		}).subscribe(data => {});
		
		return this.http.delete(AppSettings.API_ENDPOINT + 'item/' + item._id).map(res => res.json());
	}

	updateItem(item: any) {

		this.logsService.addLog({
			descricao: 'Editou um item',
			item: item
		}).subscribe(data => {});
		
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.put(AppSettings.API_ENDPOINT + 'item/' + item._id, JSON.stringify(item), {headers: headers}).map(res => res.json());
	}
}