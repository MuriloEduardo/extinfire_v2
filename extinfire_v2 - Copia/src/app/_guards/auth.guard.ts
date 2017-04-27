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
    console.dir('AuthGuard Inicializado...');
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    this.urlAtualy = state.url;

    if (window.localStorage.getItem('auth_key')){

      this.authService.setUsuarioAutenticado(JSON.parse(window.localStorage.getItem('user')));

      // Se for false, não é administrador
      if(!JSON.parse(window.localStorage.getItem('user')).tipo&&(state.url.includes('usuarios')||state.url.includes('financeiro'))) {
        alert('Usuário sem permissão');
        this.router.navigate(['']);
        return false;
      }
      return true;
    }

    this.router.navigate(['login']);
    return false;
  }

  private verificarAcesso(url?: string) {
    if (window.localStorage.getItem('auth_key')){
      return true;
    }

    this.router.navigate(['login']);
    return false;
  }

  canLoad(
    route: Route
  ): Observable<boolean>|Promise<boolean>|boolean {
    return this.verificarAcesso();
  }
}