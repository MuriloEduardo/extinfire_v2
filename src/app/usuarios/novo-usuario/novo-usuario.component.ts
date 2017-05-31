import { Component, OnInit, EventEmitter, AfterViewChecked, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { UsuariosService } from './../../_services/usuarios.service';

import { MaterializeAction } from 'angular2-materialize';

declare let Materialize:any;

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit, AfterViewChecked, OnDestroy {

	globalActions = new EventEmitter<string|MaterializeAction>();
	inscricao: Subscription;
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

	novoUsuario(event) {
		event.preventDefault();
		
		if(!this.email) return false;

		let newUser = {
			nome: this.nome,
			tipo: this.tipo,
			email: this.email,
			senha: this.senha
		};
		
		this.inscricao = this.usuariosService.addUser(newUser).subscribe(user => {
			this.router.navigate(['usuarios']);
	  		this.triggerToast('Usuário cadastrado com sucesso!', 'green');
		});
	}

	triggerToast(stringToast: string, bgColor: string) {
		this.globalActions.emit({action: 'toast', params: [stringToast, 4000, bgColor]});
	}

	ngOnDestroy() {
		this.inscricao.unsubscribe();
	}
}