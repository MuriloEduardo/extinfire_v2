import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';

import { ProdutosService } from '../../_services/produtos.service';

import { FileUploader } from 'ng2-file-upload';

declare let Materialize:any;

//const apiUrl = 'https://extinfire-backend-v2-muriloeduardo.c9users.io/api/';
const apiUrl = 'http://127.0.0.1:8080/api/';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent implements OnInit {

	inscricao: Subscription;
	produto: any = {};

	uploader:FileUploader = new FileUploader({
		url: apiUrl
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
			/*for (let i = 0; i < this.produtos.length; ++i) {
				if(this.produtos[i]._id == data._id) {
					this.produtos[i] = data;
				}
			}*/
			//this.closeModalView();
		});
	}

	removeItemFotos(item: any) {
		this.produto.images.splice(this.produto.images.indexOf(item), 1);
	}
}
