import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { LogsService } from './logs.service';

@Injectable()
export class EstoqueService {

	//apiUrl: string = 'https://extinfire-backend-v2-muriloeduardo.c9users.io/api/';
	apiUrl: string = 'http://127.0.0.1:8080/api/';
	produtos: any;

  	constructor(
  		private http: Http,
  		private logsService: LogsService
  	) {
		console.dir('Produtos Service Inicializado...');
  	}

  	getProdutos() {
  		return this.produtos = this.http.get(this.apiUrl + 'produtos').map(res => res.json());
  	}

	getProduto(id: string) {
		return this.http.get(this.apiUrl + 'produto/' + id).map(res => res.json());
	}

	addProduto(newProduto: any) {

		this.logsService.addLog({
			descricao: 'criou o produto',
			item: newProduto.nome
		});
		
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post(this.apiUrl + 'produto', JSON.stringify(newProduto), {headers: headers}).map(res => res.json());
	}

	deleteProduto(produto: any) {

		this.logsService.addLog({
			descricao: 'deletou o produto',
			item: produto.nome
		});
		
		return this.http.delete(this.apiUrl + 'produto/' + produto._id).map(res => res.json());
	}

	updateProduto(produto: any) {

		this.logsService.addLog({
			descricao: 'editou o produto',
			item: produto.nome
		});
		
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.put(this.apiUrl + 'produto/' + produto._id, JSON.stringify(produto), {headers: headers}).map(res => res.json());
	}
}
