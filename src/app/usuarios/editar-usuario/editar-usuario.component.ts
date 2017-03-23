import { Component, OnInit, EventEmitter, AfterViewChecked } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { UsuariosService } from './../../_services/usuarios.service';

import { MaterializeAction } from 'angular2-materialize';

declare let Materialize:any;

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit, AfterViewChecked {

	globalActions = new EventEmitter<string|MaterializeAction>();
	inscricao: Subscription;
	usuario: any;

	constructor(
		private usuariosService: UsuariosService,
		private route: ActivatedRoute,
		private router: Router
	) { }

	ngOnInit() {
		this.inscricao = this.route.data.subscribe(
			(data: {usuario: any}) => this.usuario = data.usuario
		);
	}

	ngAfterViewChecked() {
		if(Materialize.updateTextFields)
			Materialize.updateTextFields();
	}

	updateUsuario() {
		let editUser = {
			_id: this.usuario._id,
			nome: this.usuario.nome,
			tipo: this.usuario.tipo,
			local: {
				email: this.usuario.local.email
			}
		}
		this.usuariosService.updateUser(editUser).subscribe(data => {
			this.router.navigate(['usuarios']);
			this.triggerToast('Usuário editado!');
		});
	}

	triggerToast(stringToast) {
		this.globalActions.emit({action: 'toast', params: [stringToast, 4000]});
	}
}
