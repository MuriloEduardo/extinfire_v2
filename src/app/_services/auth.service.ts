import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";

import { Usuario } from '../usuarios/usuario';;

import { AppSettings } from '../app.config';

@Injectable()
export class AuthService {

	private usuarioAutenticado: BehaviorSubject<any> = new BehaviorSubject<any>(null);

	getUsuarioAutenticado: Observable<any> = this.usuarioAutenticado.asObservable();
	
	constructor(private http: Http) { }

	fazerLogin(usuario: Usuario) {

		let headers = new Headers();
		let creds = 'email=' + usuario.email + '&senha=' + usuario.senha;

		headers.append('Content-Type', 'application/X-www-form-urlencoded');
		return this.http.post(AppSettings.API_ENDPOINT + 'authenticate', creds, {headers: headers}).map(res => res.json());
	}

	setUsuarioAutenticado(user: any) {
		this.usuarioAutenticado.next(user);
	}
}