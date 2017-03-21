import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

//const apiUrl = 'https://extinfire-backend-v2-muriloeduardo.c9users.io/api/';
const apiUrl = 'http://127.0.0.1:8080/api/';

@Injectable()
export class LogsService {

	logs: any;
	user: {};

  	constructor(private http: Http) {
		console.dir('Logs Service Inicializado...');
  	}

  	getLogs() {
  		return this.logs = this.http.get(apiUrl + 'logs').map(res => res.json());
  	}

	addLog(newLog: any) {
		newLog = {
			usuario: JSON.parse(window.localStorage.getItem('user')).nome,
			descricao: newLog.descricao,
			item: newLog.item
		};

		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post(apiUrl + 'log', JSON.stringify(newLog), {headers: headers}).map(res => res.json());
	}
}
