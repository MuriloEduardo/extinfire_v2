import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';

import { UsuariosService } from '../_services/usuarios.service';

@Injectable()
export class UsuarioResolver implements Resolve<any> {
    
    constructor(
        private usuariosService: UsuariosService
    ) { }
    
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any>|Promise<any>|any {
        return this.usuariosService.getUser(route.params['id']);
    }
}