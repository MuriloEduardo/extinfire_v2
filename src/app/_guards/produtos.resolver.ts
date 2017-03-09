import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';

import { EstoqueService } from '../_services/estoque.service';

@Injectable()
export class ProdutosResolver implements Resolve<any> {
    
    constructor(
        private estoqueService: EstoqueService
    ) { }
    
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any>|Promise<any>|any {
        return this.estoqueService.getProdutos();
    }
}