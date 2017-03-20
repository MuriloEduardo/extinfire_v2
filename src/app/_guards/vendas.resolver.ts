import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';

import { VendasService } from '../_services/vendas.service';

@Injectable()
export class VendasResolver implements Resolve<any> {
    
    constructor(
        private vendasService: VendasService
    ) { }
    
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any>|Promise<any>|any {
        return this.vendasService.getVendas();
    }
}