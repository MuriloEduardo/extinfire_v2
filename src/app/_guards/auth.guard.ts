import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';

import { AuthService } from '../_services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  private urlAtualy: string;

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
    
    this.urlAtualy = state.url;

    return this.verificarAcesso();
  }

  private verificarAcesso() {
    if (window.localStorage.getItem('auth_key')){

      this.authService.setUsuarioAutenticado(JSON.parse(window.localStorage.getItem('user')));

      // Se for false, não é administrador
      if(JSON.parse(window.localStorage.getItem('user')).tipo=='Comun'&&(this.urlAtualy.includes('usuarios')||this.urlAtualy.includes('financeiro'))) {
        alert('Usuário sem permissão');
        return false;
      }
      return true;
    }

    this.router.navigate(['login']);
    return false;
  }

  canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean {
    return this.verificarAcesso();
  }
}