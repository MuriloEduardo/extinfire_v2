import { Component, OnInit } from '@angular/core';

import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

	users: any[] = [];
	emailNovoUsuario: string;
	nomeNovoUsuario: string;

	constructor(private usuariosService: UsuariosService) { }

	ngOnInit() {
		this.usuariosService.getUsers().subscribe((data) => {
			this.users = data;
		});
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
		});
	}

	deleteUser(id: string) {
		this.usuariosService.deleteUser(id).subscribe(data => {
			if(data.n) {
				this.users.splice(this.users.indexOf(id), 1);
			}
		});
	}

	editUser(id: string) {
		
	}
}