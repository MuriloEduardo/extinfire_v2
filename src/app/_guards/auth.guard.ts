import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { AuthService } from '../_services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    console.log('AuthGuard Initialized...');
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    if (window.localStorage.getItem('auth_key')){

      this.authService.setUsuarioAutenticado(JSON.parse(window.localStorage.getItem('user')));

      // Se for false, não é administrador
      if(JSON.parse(window.localStorage.getItem('user')).tipo=='Comun'&&(state.url.includes('usuarios')||state.url.includes('financeiro'))) {
        alert('Usuário sem permissão');
        return false;
      }
      return true;
    }

    this.router.navigate(['login']);
    return false;
  }
}