import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { LogsService } from '../_services/logs.service';

import { AppSettings } from '../app.config';

@Injectable()
export class ProdutosService {

	produtos: any;

  	constructor(
  		private http: Http,
  		private logsService: LogsService
  	) {
		console.dir('Produtos Service Inicializado...');
  	}

  	getProdutos() {
  		return this.produtos = this.http.get(AppSettings.API_ENDPOINT + 'produtos').map(res => res.json());
  	}

	getProduto(id: string) {
		return this.http.get(AppSettings.API_ENDPOINT + 'produto/' + id).map(res => res.json());
	}

	addProduto(newProduto: any) {

		this.logsService.addLog({
			descricao: 'Adicionou o produto',
			item: newProduto.nome
		}).subscribe(data => {});
		
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post(AppSettings.API_ENDPOINT + 'produto', JSON.stringify(newProduto), {headers: headers}).map(res => res.json());
	}

	deleteProduto(produto: any) {

		this.logsService.addLog({
			descricao: 'Deletou o produto',
			item: produto.nome
		}).subscribe(data => {});
		
		return this.http.delete(AppSettings.API_ENDPOINT + 'produto/' + produto._id).map(res => res.json());
	}

	updateProduto(produto: any) {

		this.logsService.addLog({
			descricao: 'Editou o produto',
			item: produto.nome
		}).subscribe(data => {});
		
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.put(AppSettings.API_ENDPOINT + 'produto/' + produto._id, JSON.stringify(produto), {headers: headers}).map(res => res.json());
	}
}