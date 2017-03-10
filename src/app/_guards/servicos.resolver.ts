import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';

import { ServicosService } from '../_services/servicos.service';

@Injectable()
export class ServicosResolver implements Resolve<any> {
    
    constructor(
        private servicosService: ServicosService
    ) { }
    
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any>|Promise<any>|any {
        return this.servicosService.getServicos();
    }
}