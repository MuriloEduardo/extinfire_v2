import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { Usuario } from '../usuarios/usuario';

declare let Materialize:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	private usuario: Usuario = new Usuario();
	resposta: {};

	constructor(
		private authService: AuthService,
		private router: Router
	) {
		if(window.localStorage.getItem('auth_key')) {
			this.router.navigate(['']);
		}

		this.authService.showNav(false);
	}

	ngOnInit() {
	}

	ngAfterViewChecked() {
		if(Materialize.updateTextFields)
			Materialize.updateTextFields();
	}

	fazerLogin() {
		this.authService.fazerLogin(this.usuario).then((res) => {
			if(res) {
				this.resposta = {res: true, string: 'Sucesso!'};
				this.router.navigate(['']);
			} else {
				this.resposta = {res: false, string: 'Login e/ou Senha Inválidos'};
			}
		});
	}
}