import { Component, OnInit, EventEmitter, AfterViewChecked, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { UsuariosService } from './../../_services/usuarios.service';

import { MaterializeAction } from 'angular2-materialize';

declare let Materialize:any;

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit, AfterViewChecked, OnDestroy {

	globalActions = new EventEmitter<string|MaterializeAction>();
	inscricao: Subscription;
	usuario: any = {};
	loadStatus: boolean = false;

	constructor(
		private usuariosService: UsuariosService,
		private route: ActivatedRoute,
		private router: Router
	) { }

	ngOnInit() {

		this.inscricao = this.route.params.subscribe((params: Params) => {
		
			this.usuariosService.getUser(params['id']).subscribe((usuario) => {

				this.usuario = usuario;

				this.loadStatus = true;
			});
		});
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
			email: this.usuario.email
		}
		this.usuariosService.updateUser(editUser).subscribe(data => {
			this.router.navigate(['usuarios']);
			this.triggerToast('Usuário editado com sucesso!', 'green');
		});
	}

	triggerToast(stringToast: string, bgColor: string) {
		this.globalActions.emit({action: 'toast', params: [stringToast, 4000, bgColor]});
	}

	ngOnDestroy() {
		this.inscricao.unsubscribe();
	}
}
