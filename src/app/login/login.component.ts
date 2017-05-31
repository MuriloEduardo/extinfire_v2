import { Component, OnInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { AuthService } from '../_services/auth.service';
import { Usuario } from '../usuarios/usuario';

declare let Materialize:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

	private usuario: Usuario = new Usuario();
	resposta: {};
	loadLogin: boolean = false;
	inscricao: Subscription;

	constructor(
		private authService: AuthService,
		private router: Router
	) {
		if(window.localStorage.getItem('auth_key')) {
			this.router.navigate(['']);
		}

		this.authService.setUsuarioAutenticado(false);
	}

	ngOnInit() {
	}

	ngAfterViewChecked() {
		if(Materialize.updateTextFields)
			Materialize.updateTextFields();
	}

	fazerLogin() {
		this.loadLogin = true;
<<<<<<< HEAD
		this.inscricao = this.authService.fazerLogin(this.usuario).subscribe((response) => {
			if(response.success) {
=======
		this.inscricao = this.authService.fazerLogin(this.usuario).subscribe((res) => {
			if(res.success) {
>>>>>>> fa1459ca6e8e07a963e29214fbfe77216d34a636
				this.resposta = {res: true, string: 'Sucesso!'};
				this.router.navigate(['']);

				window.localStorage.setItem('auth_key', response.token);
				window.localStorage.setItem('user', JSON.stringify(response.user));
			} else {
				this.resposta = {res: false, string: 'Login e/ou Senha Inválidos'};
			}
			;
			this.loadLogin = false
		});
	}

	ngOnDestroy() {
		this.inscricao.unsubscribe();
	}
}