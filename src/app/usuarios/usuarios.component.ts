import { Component, OnInit, EventEmitter } from '@angular/core';

import { UsuariosService } from '../_services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

	usuarios: any[] = [];
	
	loadStatus: boolean = false;

	constructor(private usuariosService: UsuariosService) { }

	ngOnInit() {
		
		this.usuariosService.getUsers().subscribe((usuarios) => {
			this.usuarios = usuarios;
			this.loadStatus = true;
		});
	}
}