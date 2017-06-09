import { Component, OnInit, AfterViewChecked, EventEmitter } from '@angular/core';

import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';

import { ClientesService } from './../../_services/clientes.service';

import { MaterializeAction } from 'angular2-materialize';
import { FileUploader } from 'ng2-file-upload';

import { environment } from './../../../environments/environment';

declare let Materialize:any;

@Component({
  selector: 'app-novo-cliente',
  templateUrl: './novo-cliente.component.html',
  styleUrls: ['./novo-cliente.component.css']
})
export class NovoClienteComponent implements OnInit {

	loadCep: boolean = false;
	baseUrl: string = environment.API_ENDPOINT;

	inscricao: Subscription;
	globalActions = new EventEmitter<string|MaterializeAction>();
	uploader:FileUploader = new FileUploader({
		url: this.baseUrl + 'api/upload'
	});

	maskCel = ['(', /\d/, /\d/, ')', ' ', /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
	maskFone = ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
	maskCep = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
	maskCnpj = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];
	maskCpf = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
	
	hasBaseDropZoneOver:boolean = false;

	selectEstadoOptions: any[] = [
		{
			"nome": "Acre",
			"uf": "AC"
		},
		{
			"nome": "Alagoas",
			"uf": "AL"
		},
		{
			"nome": "Amazonas",
			"uf": "AM"
		},
		{
			"nome": "Amapá",
			"uf": "AP"
		},
		{
			"nome": "Bahia",
			"uf": "BA"
		},
		{
			"nome": "Ceará",
			"uf": "CE"
		},
		{
			"nome": "Distrito Federal",
			"uf": "DF"
		},
		{
			"nome": "Espírito Santo",
			"uf": "ES"
		},
		{
			"nome": "Goiás",
			"uf": "GO"
		},
		{
			"nome": "Maranhão",
			"uf": "MA"
		},
		{
			"nome": "Minas Gerais",
			"uf": "MG"
		},
		{
			"nome": "Mato Grosso do Sul",
			"uf": "MS"
		},
		{
			"nome": "Mato Grosso",
			"uf": "MT"
		},
		{
			"nome": "Pará",
			"uf": "PA"
		},
		{
			"nome": "Paraíba",
			"uf": "PB"
		},
		{
			"nome": "Pernambuco",
			"uf": "PE"
		},
		{
			"nome": "Piauí",
			"uf": "PI"
		},
		{
			"nome": "Paraná",
			"uf": "PR"
		},
		{
			"nome": "Rio de Janeiro",
			"uf": "RJ"
		},
		{
			"nome": "Rio Grande do Norte",
			"uf": "RN"
		},
		{
			"nome": "Rondônia",
			"uf": "RO"
		},
		{
			"nome": "Roraima",
			"uf": "RR"
		},
		{
			"nome": "Rio Grande do Sul",
			"uf": "RS"
		},
		{
			"nome": "Santa Catarina",
			"uf": "SC"
		},
		{
			"nome": "Sergipe",
			"uf": "SE"
		},
		{
			"nome": "São Paulo",
			"uf": "SP"
		},
		{
			"nome": "Tocantins",
			"uf": "TO"
		}
	];

	nome: any;
	representante: any;
	cnpj: any;
	insc_estadual: any;
	comprador: any;
	fone: any;
	celular: any;
	email: any;
	logradouro: any;
	numero: any;
	complemento: any;
	bairro: any;
	cidade: any;
	estado: any;
	cep: any;

	constructor(
		private route: ActivatedRoute,
		private clientesService: ClientesService,
		private router: Router
	) { }

	ngOnInit() {
	}

	ngAfterViewChecked() {
		if(Materialize.updateTextFields)
			Materialize.updateTextFields();
	}

	buscaCep() {

		if(!this.cep||this.cep.trim().length<9) return false;

		this.loadCep = true;
		this.clientesService.getCep(this.cep).subscribe(data => {

			if(!data.erro) {
				this.bairro = data.bairro;
				this.complemento = data.complemento;
				this.logradouro = data.logradouro;
				this.cidade = data.localidade;
				this.estado = data.uf;
			} else {
				this.bairro = undefined;
				this.complemento = undefined;
				this.logradouro = undefined;
				this.cidade = undefined;
				this.estado = undefined;
			}
			this.loadCep = false;
		});
	}

	trustAsResourceUrl(uri: string) {
		return encodeURIComponent(uri);
	}

	novoCliente(event) {
		event.preventDefault();
		
		if(!this.nome) return false;

		let newCliente = {
			images: [],
			nome: this.nome,
			representante: this.representante,
			cnpj: this.cnpj,
			insc_estadual: this.insc_estadual,
			comprador: this.comprador,
			contato: {
				fone: this.fone,
				celular: this.celular,
				email: this.email
			},
			endereco: {
				logradouro: this.logradouro,
				numero: this.numero,
				complemento: this.complemento,
				bairro: this.bairro,
				cidade: this.cidade,
				estado: this.estado,
				cep: this.cep
			}
		};

		for (let i = 0; i < this.uploader.queue.length; ++i) {
			newCliente.images.push(this.uploader.queue[i].file.name);
		}

		this.clientesService.addCliente(newCliente).subscribe(cliente => {

			this.router.navigate(['clientes']);
	  		this.triggerToast('Cliente cadastrado com sucesso!', 'green');
		});
	}

	triggerToast(stringToast: string, bgColor: string) {
		this.globalActions.emit({action: 'toast', params: [stringToast, 4000, bgColor]});
	}

	////////////////////////// Upload ///////////////////////////
	////////////////////////////////////////////////////////////
	fileOverBase(e:any):void {
		this.hasBaseDropZoneOver = e;
	}
}
