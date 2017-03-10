import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';

import { FileUploader } from 'ng2-file-upload';

import { LogsService } from '../_services/logs.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {

	inscricao: Subscription;
	logs: any = [];

	constructor(
		private logsService: LogsService,
		private route: ActivatedRoute
	) { }

	ngOnInit() {
		this.inscricao = this.route.data.subscribe(
			(data: {logs: any}) => {this.logs = data.logs; console.log(data)}
		);
	}
}
