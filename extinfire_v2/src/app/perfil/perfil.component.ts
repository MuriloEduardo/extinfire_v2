import { Component, OnInit, AfterViewChecked, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { MaterializeAction } from 'angular2-materialize';

import { AuthService } from './../_services/auth.service';
import { UsuariosService } from './../_services/usuarios.service';

declare let Materialize:any;

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit, AfterViewChecked {

  globalActions = new EventEmitter<string|MaterializeAction>();

  user: any;
  senha: string;

  constructor(
    private authService: AuthService,
    private usuariosService: UsuariosService,
    private router:Router
  ) {}

  ngOnInit() {
    this.authService.getUsuarioAutenticado.subscribe(
      user => this.user = user
    );
  }

  ngAfterViewChecked() {
    if(Materialize.updateTextFields)
      Materialize.updateTextFields();
  }

  updateUser() {
    let updateUser = {
      _id: this.user._id,
      nome: this.user.nome,
      email: this.user.email,
      senha: this.senha
    }
    this.usuariosService.updateUser(updateUser).subscribe(usuario => {

      window.localStorage.removeItem('user');
      window.localStorage.setItem('user', JSON.stringify(usuario));

      this.triggerToast('Perfil atualizado!');
    });
  }

  triggerToast(stringToast) {
    this.globalActions.emit({action: 'toast', params: [stringToast, 4000]});
  }
}