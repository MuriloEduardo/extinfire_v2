import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProdutosService {

	private apiUrl: string = 'https://extinfire-backend-v2-muriloeduardo.c9users.io/api/';
	produtos: any;

  	constructor(private http: Http) {
		console.dir('Produtos Service Inicializado...');
  	}

  	getProdutos() {
  		return this.produtos = this.http.get(this.apiUrl + 'produtos').map(res => res.json());;
  	}

	getProduto(id: string) {
		return this.http.get(this.apiUrl + 'produto/' + id).map(res => res.json());
	}

	addProduto(newProduto: any) {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post(this.apiUrl + 'produto', JSON.stringify(newProduto), {headers: headers}).map(res => res.json());
	}

	deleteProduto(id: string) {
		return this.http.delete(this.apiUrl + 'produto/' + id).map(res => res.json());
	}

	updateProduto(produto: any) {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.put(this.apiUrl + 'produto/' + produto._id, JSON.stringify(produto), {headers: headers}).map(res => res.json());
	}
}
