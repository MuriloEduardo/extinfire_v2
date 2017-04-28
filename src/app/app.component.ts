import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './_services/auth.service';

import { SearchComponent } from './search/search.component';

import { Angulartics2GoogleTagManager } from 'angulartics2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  user: any;

  constructor(
    angulartics2GoogleTagManager: Angulartics2GoogleTagManager,
    private authService: AuthService,
    private router:Router
  ) {}

  ngOnInit() {
  	this.authService.getUsuarioAutenticado.subscribe(
  		user => {
        this.user = user;
        console.log(window)
      }
  	);
  }

  logout() {
    window.localStorage.removeItem('auth_key');
    window.localStorage.removeItem('user');
    this.router.navigate(['login']);
  }
}