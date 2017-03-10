import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';

import { LogsService } from '../_services/logs.service';

@Injectable()
export class LogsResolver implements Resolve<any> {
    
    constructor(
        private logsService: LogsService
    ) { }
    
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any>|Promise<any>|any {
        return this.logsService.getLogs();
    }
}