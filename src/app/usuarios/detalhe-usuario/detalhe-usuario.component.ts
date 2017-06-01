import { Component, OnInit, EventEmitter, AfterViewChecked } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { UsuariosService } from './../../_services/usuarios.service';

import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'app-detalhe-usuario',
  templateUrl: './detalhe-usuario.component.html',
  styleUrls: ['./detalhe-usuario.component.css']
})
export class DetalheUsuarioComponent implements OnInit {

	globalActions = new EventEmitter<string|MaterializeAction>();
	inscricao: Subscription;
	usuario: any = {};
	usuarioLocalStorage: any = JSON.parse(window.localStorage.getItem('user'));
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

	deleteUsuario(usuario: any) {
		if(this.usuario._id==this.usuarioLocalStorage._id) return false;
		this.usuariosService.deleteUser(usuario).subscribe(data => {
			if(data.n) {
				this.router.navigate(['usuarios']);
				this.triggerToast('Usuário excluido com sucesso!', 'green');
			}
		});
	}

	triggerToast(stringToast: string, bgColor: string) {
		this.globalActions.emit({action: 'toast', params: [stringToast, 4000, bgColor]});
	}
}
