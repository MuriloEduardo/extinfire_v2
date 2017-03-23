import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../_services/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

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
}