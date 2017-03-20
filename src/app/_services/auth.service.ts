import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";

import { Usuario } from '../usuarios/usuario';;

const apiUrl = 'https://extinfire-backend-v2-muriloeduardo.c9users.io/auth/' || 'http://127.0.0.1:8080/auth/';

@Injectable()
export class AuthService {

	private usuarioAutenticado: BehaviorSubject<any> = new BehaviorSubject<any>(null);

	getUsuarioAutenticado: Observable<any> = this.usuarioAutenticado.asObservable();
	
	constructor(private http: Http) { }

	fazerLogin(usuario: Usuario) {

		let headers = new Headers();
		let creds = 'email=' + usuario.email + '&senha=' + usuario.senha;

		headers.append('Content-Type', 'application/X-www-form-urlencoded');

		return new Promise((resolve) => {
			this.http.post(apiUrl + 'authenticate', creds, {headers: headers}).subscribe((data) => {
				let dataJson = data.json();
				if(dataJson.success) {
					window.localStorage.setItem('auth_key', dataJson.token);
					window.localStorage.setItem('user', JSON.stringify(dataJson.user));
				}
				resolve(this.getUsuarioAutenticado);
			});
		});
	}

	setUsuarioAutenticado(user: any) {
		this.usuarioAutenticado.next(user);
	}
}