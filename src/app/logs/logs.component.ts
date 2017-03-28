import { Component, OnInit } from '@angular/core';

import { LogsService } from '../_services/logs.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {

	logs: any[] = [];
	
	order: string = 'criadoEm';
  	reverse: boolean = true;
	loadStatus: boolean = false;

	constructor(
		private logsService: LogsService
	) { }

	ngOnInit() {
		this.logsService.getLogs().subscribe((logs) => {
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
