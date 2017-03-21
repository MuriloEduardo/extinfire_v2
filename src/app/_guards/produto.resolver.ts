import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';

import { ProdutosService } from '../_services/produtos.service';

@Injectable()
export class ProdutoResolver implements Resolve<any> {
    
    constructor(
        private produtosService: ProdutosService
    ) { }
    
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any>|Promise<any>|any {
        return this.produtosService.getProduto(route.params['id']);
    }
}