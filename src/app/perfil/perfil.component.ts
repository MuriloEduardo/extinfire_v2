import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../_services/auth.service';

declare let Materialize:any;

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit, AfterViewChecked {

  user: any;
  local: any = {
    senha: undefined
  }

  constructor(
    private authService: AuthService,
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
}