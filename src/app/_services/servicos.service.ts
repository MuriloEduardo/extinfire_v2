import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { LogsService } from '../_services/logs.service';

import { AppSettings } from '../app.config';

@Injectable()
export class ServicosService {

	servicos: any;

  	constructor(
  		private http: Http,
  		private logsService: LogsService
  	) {
		console.dir('Servicos Service Inicializado...');
  	}

  	getServicos() {
  		return this.servicos = this.http.get(AppSettings.API_ENDPOINT + 'servicos').map(res => res.json());
  	}

	getServico(id: string) {
		return this.http.get(AppSettings.API_ENDPOINT + 'servico/' + id).map(res => res.json());
	}

	addServico(newServico: any) {

		this.logsService.addLog({
			descricao: 'Adicionou o serviço',
			item: newServico.nome
		}).subscribe(data => {});
		
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post(AppSettings.API_ENDPOINT + 'servico', JSON.stringify(newServico), {headers: headers}).map(res => res.json());
	}

	deleteServico(servico: any) {

		this.logsService.addLog({
			descricao: 'Deletou o serviço',
			item: servico.nome
		}).subscribe(data => {});
		
		return this.http.delete(AppSettings.API_ENDPOINT + 'servico/' + servico._id).map(res => res.json());
	}

	updateServico(servico: any) {

		this.logsService.addLog({
			descricao: 'Editou o serviço',
			item: servico.nome
		}).subscribe(data => {});
		
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.put(AppSettings.API_ENDPOINT + 'servico/' + servico._id, JSON.stringify(servico), {headers: headers}).map(res => res.json());
	}
}