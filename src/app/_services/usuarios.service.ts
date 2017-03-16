import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { LogsService } from './logs.service';

@Injectable()
export class UsuariosService {

	//apiUrl: string = 'https://extinfire-backend-v2-muriloeduardo.c9users.io/api/';
	apiUrl: string = 'http://127.0.0.1:8080/api/';
	users: any;

  	constructor(
  		private http: Http,
  		private logsService: LogsService  		
  	) {
		console.dir('Usuarios Service Inicializado...');
  	}

  	getUsers() {
  		return this.users = this.http.get(this.apiUrl + 'users').map(res => res.json());
  	}

	getUser(id: string) {
		return this.http.get(this.apiUrl + 'user/' + id).map(res => res.json());
	}

	addUser(newUser: any) {

		this.logsService.addLog({
			descricao: 'adicionou o usuário',
			item: newUser.nome
		}).subscribe(data => {});

		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post(this.apiUrl + 'user', JSON.stringify(newUser), {headers: headers}).map(res => res.json());
	}

	deleteUser(user: any) {

		this.logsService.addLog({
			descricao: 'deletou o usuário',
			item: user.nome
		}).subscribe(data => {});

		return this.http.delete(this.apiUrl + 'user/' + user._id).map(res => res.json());
	}

	updateUser(user: any) {

		this.logsService.addLog({
			descricao: 'editou o usuário',
			item: user.nome
		}).subscribe(data => {});

		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.put(this.apiUrl + 'user/' + user._id, JSON.stringify(user), {headers: headers}).map(res => res.json());
	}
}
