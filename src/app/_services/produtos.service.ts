import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { LogsService } from '../_services/logs.service';

//const apiUrl = 'https://extinfire-backend-v2-muriloeduardo.c9users.io/api/';
const apiUrl = 'http://127.0.0.1:8080/api/';

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
  		return this.produtos = this.http.get(apiUrl + 'produtos').map(res => res.json());
  	}

	getProduto(id: string) {
		return this.http.get(apiUrl + 'produto/' + id).map(res => res.json());
	}

	addProduto(newProduto: any) {

		this.logsService.addLog({
			descricao: 'adicionou o produto',
			item: newProduto.nome
		}).subscribe(data => {});
		
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post(apiUrl + 'produto', JSON.stringify(newProduto), {headers: headers}).map(res => res.json());
	}

	deleteProduto(produto: any) {

		this.logsService.addLog({
			descricao: 'deletou o produto',
			item: produto.nome
		}).subscribe(data => {});
		
		return this.http.delete(apiUrl + 'produto/' + produto._id).map(res => res.json());
	}

	updateProduto(produto: any) {

		this.logsService.addLog({
			descricao: 'editou o produto',
			item: produto.nome
		}).subscribe(data => {});
		
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.put(apiUrl + 'produto/' + produto._id, JSON.stringify(produto), {headers: headers}).map(res => res.json());
	}
}