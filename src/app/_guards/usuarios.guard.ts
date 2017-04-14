import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class UsuariosGuard implements CanActivateChild {

	usuarioLocalStorage: any = JSON.parse(window.localStorage.getItem('user'));

	constructor(
		private router: Router
	) {}
	
	canActivateChild(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean> | Promise<boolean> | boolean {
		
		if((this.usuarioLocalStorage._id == state.url.split('/')[2] && state.url.includes('editar'))) {
			alert('Usuário sem permissão');
			this.router.navigate(['usuarios']);
			return false;
		}
		return true;
	}
}