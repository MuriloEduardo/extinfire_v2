import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsuariosService {

	private apiUrl: string = 'http://127.0.0.1:8080/api/';
	users: any;

  	constructor(private http: Http) {
		console.dir('Usuarios Service Inicializado...');
  	}

  	getUsers() {
  		return this.users = this.http.get(this.apiUrl + 'users').map(res => res.json());;
  	}

	getUser(id: string) {
		return this.http.get(this.apiUrl + 'user/' + id).map(res => res.json());
	}

	addUser(newUser: any) {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post(this.apiUrl + 'user', JSON.stringify(newUser), {headers: headers}).map(res => res.json());
	}

	deleteUser(id: string) {
		return this.http.delete(this.apiUrl + 'user/' + id).map(res => res.json());
	}

	updateUser(user: any) {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post(this.apiUrl + 'user' + user._id, JSON.stringify(user), {headers: headers}).map(res => res.json());
	}
}
