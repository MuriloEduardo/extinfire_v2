import { Component, OnInit, EventEmitter } from '@angular/core';

import { UsuariosService } from '../_services/usuarios.service';

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
	user: any = {};
	edit: boolean = false;
	userLocalStorage: any;
	emailNovoUsuario: string;
	nomeNovoUsuario: string;
	senhaNovoUsuario: string;

	constructor(private usuariosService: UsuariosService) { }

	ngOnInit() {
		this.usuariosService.getUsers().subscribe((data) => {
			this.users = data;
		});

		this.usuariosService.getUser(JSON.parse(window.localStorage.getItem('user'))._id).subscribe((data) => {
			this.userLocalStorage = data;
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
				email: this.emailNovoUsuario,
				senha: this.senhaNovoUsuario
			}
		};
		
		this.usuariosService.addUser(newUser).subscribe(user => {
			this.users.push(user);
			
			this.closeModal();
		});
	}

	deleteUser(user: any) {
		this.usuariosService.deleteUser(user._id).subscribe(data => {
			if(data.n) {
				this.users.splice(this.users.indexOf(user._id), 1);
			}
		});
	}

	resetForm() {
		this.emailNovoUsuario = undefined;
		this.nomeNovoUsuario = undefined;
		this.senhaNovoUsuario = undefined;
	}

	editUser(user: any) {

		this.emailNovoUsuario = user.local.email;
		this.nomeNovoUsuario = user.nome;

		this.user = user;

		this.edit = true;
		
		this.openModal();
	}

	changeType(user: any) {
		this.usuariosService.updateUser(user).subscribe(data => {});
	}

	updateUser() {
		let editUser = {
			_id: this.user._id,
			nome: this.nomeNovoUsuario,
			local: {
				email: this.emailNovoUsuario
			}
		}
		this.usuariosService.updateUser(editUser).subscribe(data => {
			for (var i = 0; i < this.users.length; ++i) {
				if(this.users[i]._id == data._id) {
					this.users[i] = data;
				}
			}
			this.edit = false;
			this.closeModal();
		});
	}

	openModal() {
		this.modalActions.emit({action:"modal",params:['open']});
	}

	closeModal() {
		this.modalActions.emit({action:"modal",params:['close']});

		this.resetForm();
	}
}