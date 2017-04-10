import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './_services/auth.service';

import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  user: any;

  constructor(
    private authService: AuthService,
    private router:Router
  ) {}

  ngOnInit() {
  	this.authService.getUsuarioAutenticado.subscribe(
  		user => this.user = user
  	);
  }

  logout() {
    window.localStorage.removeItem('auth_key');
    window.localStorage.removeItem('user');
    this.router.navigate(['login']);
  }
}