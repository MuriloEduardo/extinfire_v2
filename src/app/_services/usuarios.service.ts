import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { LogsService } from './logs.service';

import { environment } from './../../environments/environment';

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
  		return this.users = this.http.get(environment.API_ENDPOINT + 'api/usuarios').map(res => res.json());
  	}

	getUser(id: string) {
		return this.http.get(environment.API_ENDPOINT + 'api/usuario/' + id).map(res => res.json());
	}

	addUser(newUser: any) {

		this.logsService.addLog({
			descricao: 'Adicionou um usuário',
			item: newUser
		}).subscribe(data => {});

		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post(environment.API_ENDPOINT + 'api/usuario', JSON.stringify(newUser), {headers: headers}).map(res => res.json());
	}

	deleteUser(user: any) {

		this.logsService.addLog({
			descricao: 'Deletou um usuário',
			item: user
		}).subscribe(data => {});

		return this.http.delete(environment.API_ENDPOINT + 'api/usuario/' + user._id).map(res => res.json());
	}

	updateUser(user: any) {

		this.logsService.addLog({
			descricao: 'Editou um usuário',
			item: user
		}).subscribe(data => {});

		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.put(environment.API_ENDPOINT + 'api/usuario/' + user._id, JSON.stringify(user), {headers: headers}).map(res => res.json());
	}
}
