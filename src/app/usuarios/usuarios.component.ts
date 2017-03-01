import { Component, OnInit, EventEmitter } from '@angular/core';

import { UsuariosService } from '../services/usuarios.service';

import { MaterializeAction } from 'angular2-materialize';

declare var Materialize:any;

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

	modalActions = new EventEmitter<string|MaterializeAction>();
	users: any[] = [];
	emailNovoUsuario: string;
	nomeNovoUsuario: string;

	constructor(private usuariosService: UsuariosService) { }

	ngOnInit() {
		this.usuariosService.getUsers().subscribe((data) => {
			this.users = data;
		});
	}

	ngAfterViewChecked() {
		if(Materialize.updateTextFields)
			Materialize.updateTextFields();
	}

	novoUsuario(event) {
		event.preventDefault();
		
		if(!this.emailNovoUsuario) return false;

		let newUser = {
			nome: this.nomeNovoUsuario,
			local: {
				email: this.emailNovoUsuario
			}
		};
		
		this.usuariosService.addUser(newUser).subscribe(user => {
			this.users.push(user);
			this.emailNovoUsuario = undefined;
			this.nomeNovoUsuario = undefined;

			this.closeModal();
		});
	}

	deleteUser(id: string) {
		this.usuariosService.deleteUser(id).subscribe(data => {
			if(data.n) {
				this.users.splice(this.users.indexOf(id), 1);
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