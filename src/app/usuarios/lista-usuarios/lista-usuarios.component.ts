import { Component, OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { UsuariosService } from './../../_services/usuarios.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit, OnDestroy {

	inscricao: Subscription;

	usuarios: any[] = [];
	order: string = 'updatedAt';
  	reverse: boolean = false;
	loadStatus: boolean = false;

	constructor(private usuariosService: UsuariosService) { }

	ngOnInit() {
		
		this.inscricao = this.usuariosService.getUsers().subscribe((usuarios) => {
			this.usuarios = usuarios;
			this.loadStatus = true;
		});
	}

	setOrder(value: string) {
		if (this.order === value) {
			this.reverse = !this.reverse;
		}

		this.order = value;
	}

	ngOnDestroy() {
		this.inscricao.unsubscribe();
	}
}