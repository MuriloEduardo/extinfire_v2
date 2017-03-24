import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { LogsService } from './logs.service';

import { AppSettings } from '../app.config';

@Injectable()
export class UsuariosService {

	users: any;

  	constructor(
  		private http: Http,
  		private logsService: LogsService  		
  	) {
		console.dir('Usuarios Service Inicializado...');
  	}

  	getUsers() {
  		return this.users = this.http.get(AppSettings.API_ENDPOINT + 'users').map(res => res.json());
  	}

	getUser(id: string) {
		return this.http.get(AppSettings.API_ENDPOINT + 'user/' + id).map(res => res.json());
	}

	addUser(newUser: any) {

		this.logsService.addLog({
			descricao: 'Adicionou o usuário',
			item: newUser.nome
		}).subscribe(data => {});

		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post(AppSettings.API_ENDPOINT + 'user', JSON.stringify(newUser), {headers: headers}).map(res => res.json());
	}

	deleteUser(user: any) {

		this.logsService.addLog({
			descricao: 'Deletou o usuário',
			item: user.nome
		}).subscribe(data => {});

		return this.http.delete(AppSettings.API_ENDPOINT + 'user/' + user._id).map(res => res.json());
	}

	updateUser(user: any) {

		this.logsService.addLog({
			descricao: 'Editou o usuário',
			item: user.nome
		}).subscribe(data => {});

		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.put(AppSettings.API_ENDPOINT + 'user/' + user._id, JSON.stringify(user), {headers: headers}).map(res => res.json());
	}
}
