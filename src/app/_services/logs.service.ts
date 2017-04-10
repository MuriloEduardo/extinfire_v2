import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { AppSettings } from '../app.config';

@Injectable()
export class LogsService {

	logs: any;
	user: {};

  	constructor(private http: Http) {
		console.dir('Logs Service Inicializado...');
  	}

  	getLogs() {
  		return this.logs = this.http.get(AppSettings.API_ENDPOINT + 'logs').map(res => res.json());
  	}

	addLog(newLog: any) {
		newLog = {
			usuario: JSON.parse(window.localStorage.getItem('user')).nome,
			nome: newLog.nome,
			item: newLog.item
		};

		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post(AppSettings.API_ENDPOINT + 'log', JSON.stringify(newLog), {headers: headers}).map(res => res.json());
	}
}
