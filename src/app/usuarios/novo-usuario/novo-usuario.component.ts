import { Component, OnInit, EventEmitter, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';

import { UsuariosService } from './../../_services/usuarios.service';

import { MaterializeAction } from 'angular2-materialize';

declare let Materialize:any;

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit, AfterViewChecked {

	globalActions = new EventEmitter<string|MaterializeAction>();

	email: string;
	nome: string;
	senha: string;
	tipo: boolean;

	constructor(
		private usuariosService: UsuariosService,
		private router: Router
	) { }

	ngOnInit() {
	}

	ngAfterViewChecked() {
		if(Materialize.updateTextFields)
			Materialize.updateTextFields();
	}

	triggerToast(stringToast) {
		this.globalActions.emit({action: 'toast', params: [stringToast, 4000]});
	}

	novoUsuario(event) {
		event.preventDefault();
		
		if(!this.email) return false;

		let newUser = {
			nome: this.nome,
			tipo: this.tipo,
			local: {
				email: this.email,
				senha: this.senha
			}
		};
		
		this.usuariosService.addUser(newUser).subscribe(user => {
			this.router.navigate(['usuarios']);
	  		this.triggerToast('Usuário cadastrado com sucesso!');
		});
	}
}
