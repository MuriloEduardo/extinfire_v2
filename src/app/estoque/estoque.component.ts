import { Component, OnInit, EventEmitter, AfterViewChecked } from '@angular/core';

import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';

import { EstoqueService } from '../_services/estoque.service';

import { MaterializeAction } from 'angular2-materialize';
import { FileUploader } from 'ng2-file-upload';

declare let Materialize:any;
//const URL = 'https://extinfire-backend-v2-muriloeduardo.c9users.io/api/upload';
const URL = 'http://127.0.0.1:8080/api/upload';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css']
})
export class EstoqueComponent implements OnInit {
	
	inscricao: Subscription;

	uploader:FileUploader = new FileUploader({
		url: URL
	});
	
	hasBaseDropZoneOver:boolean = false;
	
	modalActions = new EventEmitter<string|MaterializeAction>();
	modalViewActions = new EventEmitter<string|MaterializeAction>();
	
	produtos: any[] = [];
	produto: any = {};
	
	nome: string;
	valor_custo: number;
	valor_venda: number;
	qntde_atual: number;
	qntde_minima: number;

	constructor(
		private estoqueService: EstoqueService,
		private route: ActivatedRoute
	) { }

	ngOnInit() {
		this.inscricao = this.route.data.subscribe(
			(data: {produtos: any}) => this.produtos = data.produtos
		);
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
		
		this.estoqueService.addProduto(newProduto).subscribe(produto => {
			this.produtos.push(produto);
			this.uploader.uploadAll();
			this.closeModal();
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
			url: URL
		});
	}

	deleteProduto(produto: any) {
		this.estoqueService.deleteProduto(produto).subscribe(data => {
			if(data.n) {
				this.produtos.splice(this.produtos.indexOf(produto), 1);
				this.closeModalView();
			}
		});
	}

	updateProuto() {
		
		this.uploader.uploadAll();
		
		for (let j = 0; j < this.uploader.queue.length; ++j) {
			this.produto.images.push(this.uploader.queue[j].file.name);
		}
		
		this.uploader.clearQueue();
		
		this.estoqueService.updateProduto(this.produto).subscribe(data => {
			for (let i = 0; i < this.produtos.length; ++i) {
				if(this.produtos[i]._id == data._id) {
					this.produtos[i] = data;
				}
			}
			this.closeModalView();
		});
	}
	
	removeItemFotos(item: any) {
		this.produto.images.splice(this.produto.images.indexOf(item), 1);
	}

	///////////////////////// Modal /////////////////////////////
	////////////////////////////////////////////////////////////
	openModal() {
		this.modalActions.emit({action:"modal",params:['open']});
	}

	closeModal() {
		this.modalActions.emit({action:"modal",params:['close']});
		this.resetFormNovoProduto();
	}
	
	openModalView(produto: any) {
		this.produto = produto;
		this.modalViewActions.emit({action:"modal",params:['open']});
	}

	closeModalView() {
		this.produto = {};
		this.resetUploader();
		this.modalViewActions.emit({action:"modal",params:['close']});
	}

	////////////////////////// Upload ///////////////////////////
	////////////////////////////////////////////////////////////
	fileOverBase(e:any):void {
		this.hasBaseDropZoneOver = e;
	}
}
