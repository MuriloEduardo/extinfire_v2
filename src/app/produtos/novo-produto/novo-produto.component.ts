import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';

import { FileUploader } from 'ng2-file-upload';

import { ProdutosService } from '../../_services/produtos.service';

import { AppSettings } from '../../app.config';

declare let Materialize:any;

@Component({
  selector: 'app-novo-produto',
  templateUrl: './novo-produto.component.html',
  styleUrls: ['./novo-produto.component.css']
})
export class NovoProdutoComponent implements OnInit {

	uploader:FileUploader = new FileUploader({
		url: AppSettings.API_ENDPOINT
	});
	
	hasBaseDropZoneOver:boolean = false;
	
	nome: string;
	valor_custo: number;
	valor_venda: number;
	qntde_atual: number;
	qntde_minima: number;

	constructor(
		private produtosService: ProdutosService,
		private router: Router
	) { }

	ngOnInit() {
	}

	ngAfterViewChecked() {
		if(Materialize.updateTextFields)
			Materialize.updateTextFields();
	}

	novoProduto(event) {
		event.preventDefault();
		
		if(!this.nome) return false;

		let newProduto = {
			images: [],
			nome: this.nome,
			valor_venda: this.valor_venda,
			valor_custo: this.valor_venda,
			qntde_atual: this.qntde_atual,
			qntde_minima: this.qntde_minima
		};
		
		for (let i = 0; i < this.uploader.queue.length; ++i) {
			newProduto.images.push(this.uploader.queue[i].file.name);
		}
		
		this.produtosService.addProduto(newProduto).subscribe(produto => {
			this.uploader.uploadAll();
			this.router.navigate(['produtos']);
		});
	}

	resetFormNovoProduto() {
		this.nome = undefined;
		this.valor_venda = undefined;
		this.valor_custo = undefined;
		this.qntde_atual = undefined;
		this.qntde_minima = undefined;
		
		this.resetUploader();
	}
	
	private resetUploader() {
		this.uploader = new FileUploader({
			url: AppSettings.API_ENDPOINT
		});
	}

	////////////////////////// Upload ///////////////////////////
	////////////////////////////////////////////////////////////
	fileOverBase(e:any):void {
		this.hasBaseDropZoneOver = e;
	}
}
