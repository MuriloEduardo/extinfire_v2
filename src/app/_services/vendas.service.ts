import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { environment } from './../../environments/environment';

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
  		return this.vendas = this.http.get(environment.API_ENDPOINT + 'api/vendas').map(res => res.json());
  	}

  	getVendasByDate(datas: any) {
  		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post(environment.API_ENDPOINT + 'api/vendas', JSON.stringify(datas), {headers: headers}).map(res => res.json());
  	}

	getVenda(id: string) {
		return this.http.get(environment.API_ENDPOINT + 'api/venda/' + id).map(res => res.json());
	}

	addVenda(newVenda: any) {

		this.logsService.addLog({
			descricao: 'Adicionou uma venda',
			item: newVenda.cliente
		}).subscribe(data => {});

		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post(environment.API_ENDPOINT + 'api/venda', JSON.stringify(newVenda), {headers: headers}).map(res => res.json());
	}

	deleteVenda(venda: any) {

		this.logsService.addLog({
			descricao: 'Deletou uma venda',
			item: venda.cliente
		}).subscribe(data => {});

		return this.http.delete(environment.API_ENDPOINT + 'api/venda/' + venda._id).map(res => res.json());
	}

	updateVenda(venda: any) {

		this.logsService.addLog({
			descricao: 'Editou uma venda',
			item: venda.cliente
		}).subscribe(data => {});

		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.put(environment.API_ENDPOINT + 'api/venda/' + venda._id, JSON.stringify(venda), {headers: headers}).map(res => res.json());
	}
}
