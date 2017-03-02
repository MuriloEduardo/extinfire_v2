import { Component, OnInit, EventEmitter } from '@angular/core';

import { ServicosService } from '../services/servicos.service';
import { ClientesService } from '../services/clientes.service';
import { ProdutosService } from '../services/produtos.service';

import { MaterializeAction } from 'angular2-materialize';

declare var Materialize:any;

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})

export class ServicosComponent implements OnInit {

	modalActions = new EventEmitter<string|MaterializeAction>();
	servicos: any[] = [];
	clientes: any[] = [];
	produtos: any[] = [];

	cliente: any;

	emailNovoUsuario: string;
	nomeNovoUsuario: string;

	constructor(
		private servicosService: ServicosService,
		private clientesService: ClientesService,
		private produtosService: ProdutosService
	) { }

	ngOnInit() {
		this.servicosService.getServicos().subscribe((data) => {
			this.servicos = data;
		});
		this.clientesService.getClientes().subscribe((data) => {
			this.clientes = data;
		});
		this.produtosService.getProdutos().subscribe((data) => {
			this.produtos = data;
		});
	}

	ngAfterViewChecked() {
		if(Materialize.updateTextFields)
			Materialize.updateTextFields();
	}

	setCliente(cliente: any) {
		this.cliente = cliente;
	}

	setProduto(produto: any) {
	}

	novoServico(event) {
		event.preventDefault();
		
		if(!this.emailNovoUsuario) return false;

		let newUser = {
			nome: this.nomeNovoUsuario,
			local: {
				email: this.emailNovoUsuario
			}
		};
		
		this.servicosService.addServico(newUser).subscribe(user => {
			this.servicos.push(user);
			this.emailNovoUsuario = undefined;
			this.nomeNovoUsuario = undefined;

			this.closeModal();
		});
	}

	deleteServico(id: string) {
		this.servicosService.deleteServico(id).subscribe(data => {
			if(data.n) {
				this.servicos.splice(this.servicos.indexOf(id), 1);
			}
		});
	}

	editUser(user: any) {
		this.openModal();

		console.log(user)
		
		this.emailNovoUsuario = user.local.email;
		this.nomeNovoUsuario = user.nome;
	}

	openModal() {
		this.modalActions.emit({action:"modal",params:['open']});
	}

	closeModal() {
		this.modalActions.emit({action:"modal",params:['close']});
	}
}