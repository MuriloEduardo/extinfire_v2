import { Component, OnInit, EventEmitter, AfterViewChecked } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { Router, ActivatedRoute } from '@angular/router';

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

	deleteUsuario(usuario: any) {
		this.usuariosService.deleteUser(usuario).subscribe(data => {
			if(data.n) {
				this.router.navigate(['usuarios']);
				this.triggerToast('Usuário excluido!');
			}
		});
	}

	triggerToast(stringToast) {
		this.globalActions.emit({action: 'toast', params: [stringToast, 4000]});
	}
}
