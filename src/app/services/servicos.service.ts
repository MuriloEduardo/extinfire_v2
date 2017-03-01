import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ServicosService {

	private apiUrl: string = 'http://127.0.0.1:8080/api/';
	servicos: any;

  	constructor(private http: Http) {
		console.dir('Clientes Service Inicializado...');
  	}

  	getServicos() {
  		return this.servicos = this.http.get(this.apiUrl + 'servicos').map(res => res.json());;
  	}

	getServico(id: string) {
		return this.http.get(this.apiUrl + 'servico/' + id).map(res => res.json());
	}

	addServico(newServico: any) {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post(this.apiUrl + 'servico', JSON.stringify(newServico), {headers: headers}).map(res => res.json());
	}

	deleteServico(id: string) {
		return this.http.delete(this.apiUrl + 'servico/' + id).map(res => res.json());
	}

	updateServico(servico: any) {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post(this.apiUrl + 'servico' + servico._id, JSON.stringify(servico), {headers: headers}).map(res => res.json());
	}
}
