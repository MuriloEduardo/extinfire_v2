import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';

import { ClientesService } from '../_services/clientes.service';

@Injectable()
export class ClientesResolver implements Resolve<any> {
    
    constructor(
        private clientesService: ClientesService
    ) { }
    
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any>|Promise<any>|any {
        return this.clientesService.getClientes();
    }
}