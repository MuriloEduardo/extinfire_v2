import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';

import { ProdutosService } from '../../_services/produtos.service';

import { FileUploader } from 'ng2-file-upload';

declare let Materialize:any;

import { AppSettings } from '../../app.config';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent implements OnInit {

	inscricao: Subscription;
	produto: any = {};

	uploader:FileUploader = new FileUploader({
		url: AppSettings.API_ENDPOINT
	});

	constructor(
		private produtosService: ProdutosService,
		private route: ActivatedRoute,
		private router: Router
	) { }

	ngOnInit() {
		this.inscricao = this.route.data.subscribe(
			(data: {produto: any}) => this.produto = data.produto
		);
	}

	ngAfterViewChecked() {
		if(Materialize.updateTextFields)
			Materialize.updateTextFields();
	}

	updateProuto() {
		
		this.uploader.uploadAll();
		
		for (let j = 0; j < this.uploader.queue.length; ++j) {
			this.produto.images.push(this.uploader.queue[j].file.name);
		}
		
		this.uploader.clearQueue();
		
		this.produtosService.updateProduto(this.produto).subscribe(data => {
			if(data._id)
				this.router.navigate(['produtos']);
		});
	}

	removeItemFotos(item: any) {
		this.produto.images.splice(this.produto.images.indexOf(item), 1);
	}
}
