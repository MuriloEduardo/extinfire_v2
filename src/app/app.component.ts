import { Component } from '@angular/core';

import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  user: {};

  constructor(private authService: AuthService) {}

  ngOnInit() {
  	this.authService.getUsuarioAutenticado.subscribe(
  		user => this.user = user
  	);
  }
}