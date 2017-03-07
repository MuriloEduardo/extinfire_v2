import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

	constructor(private router:Router) { }

	ngOnInit() {
	}

	logout() {
        window.localStorage.removeItem('auth_key');
        window.localStorage.removeItem('user');
        this.router.navigate(['login']);
    }
}