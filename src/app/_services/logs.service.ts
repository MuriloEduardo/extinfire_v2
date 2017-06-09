import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { environment } from './../../environments/environment';

@Injectable()
export class LogsService {

	logs: any;

  	constructor(private http: Http) {
		console.dir('Logs Service Inicializado...');
  	}

  	getLogs() {
  		return this.logs = this.http.get(environment.API_ENDPOINT + 'api/logs').map(res => res.json());
  	}

	addLog(newLog: any) {

		newLog = {
			usuario: JSON.parse(window.localStorage.getItem('user'))._id,
			descricao: newLog.descricao,
			item: newLog.item.nome
		};

		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post(environment.API_ENDPOINT + 'api/log', JSON.stringify(newLog), {headers: headers}).map(res => res.json());
	}
}
