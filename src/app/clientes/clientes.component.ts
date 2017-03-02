import { Component, OnInit, EventEmitter, AfterViewChecked } from '@angular/core';

import { ClientesService } from '../services/clientes.service';

import { MaterializeAction } from 'angular2-materialize';

declare let Materialize:any;

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

	modalActions = new EventEmitter<string|MaterializeAction>();
	loadContent: boolean = false;

	clientes: any[] = [];
	selectEstadoOptions: any[] = [
		{
			name: 'Rio Grande do Sul',
			value: 'RS'
		},
		{
			name: 'Rio de Janeiro',
			value: 'RJ'
		}
	];

	nome: string;
	representante: string;
	cnpj: number;
	insc_estadual: string;
	comprador: string;
	fone: number;
	celular: number;
	email: string;
	logradouro: string;
	numero: string;
	complemento: string;
	bairro: string;
	cidade: string;
	estado: string;
	cep: number;

	constructor(private clientesService: ClientesService) { }

	ngOnInit() {
		this.clientesService.getClientes().subscribe((data) => {
			this.clientes = data;
			this.loadContent = true;
		});
	}

	ngAfterViewChecked() {
		if(Materialize.updateTextFields)
			Materialize.updateTextFields();
	}

	novoCliente(event) {
		event.preventDefault();
		
		if(!this.nome) return false;

		let newCliente = {
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
		
		this.clientesService.addCliente(newCliente).subscribe(cliente => {
			this.clientes.push(cliente);

			console.log(cliente)
			
			this.nome = undefined;
			this.representante = undefined;
			this.cnpj = undefined;
			this.insc_estadual = undefined;
			this.comprador = undefined;
			this.fone = undefined;
			this.celular = undefined;
			this.email = undefined;
			this.logradouro = undefined;
			this.numero = undefined;
			this.complemento = undefined;
			this.bairro = undefined;
			this.cidade = undefined;
			this.estado = undefined;
			this.cep = undefined;

			this.closeModal();
		});
	}

	deleteCliente(id: string) {
		this.clientesService.deleteCliente(id).subscribe(data => {
			if(data.n) {
				this.clientes.splice(this.clientes.indexOf(id), 1);
			}
		});
	}

	editCliente(cliente: any) {
		this.openModal();

		this.nome = cliente.nome;
		this.representante = cliente.representante;
		this.cnpj = cliente.cnpj;
		this.insc_estadual = cliente.insc_estadual;
		this.comprador = cliente.comprador;
		this.fone = cliente.fone;
		this.celular = cliente.celular;
		this.email = cliente.email;
		this.logradouro = cliente.logradouro;
		this.numero = cliente.numero;
		this.complemento = cliente.complemento;
		this.bairro = cliente.bairro;
		this.cidade = cliente.cidade;
		this.estado = cliente.cidade;
		this.cep = cliente.cep;
	}

	openModal() {
		this.modalActions.emit({action:"modal",params:['open']});
	}

	closeModal() {
		this.modalActions.emit({action:"modal",params:['close']});
	}
}
