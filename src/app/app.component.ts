import { Component } from '@angular/core';

import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  mostrarMenu: boolean = false;
  user: any;

  constructor(private authService: AuthService) {}

  ngOnInit() {
  	this.authService.mostrarMenuEmitter.subscribe(
  		mostrar => this.mostrarMenu = mostrar
  	);
    this.user = JSON.parse(window.localStorage.getItem('user'));
  }
}