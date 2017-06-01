import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';

import { LogsService } from '../_services/logs.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {

	logs: any[] = [];
	inscricao: Subscription;
	
	order: string = 'updatedAt';
  	reverse: boolean = true;
	loadStatus: boolean = false;

	constructor(
		private logsService: LogsService
	) { }

	ngOnInit() {
		
		this.inscricao = this.logsService.getLogs().subscribe((logs) => {

			this.logs = logs;
			
			this.loadStatus = true;
		});
	}

	setOrder(value: string) {
		if (this.order === value) {
			this.reverse = !this.reverse;
		}

		this.order = value;
	}
}
