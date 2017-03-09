import { Component, OnInit, EventEmitter, AfterViewChecked } from '@angular/core';

import { EstoqueService } from '../services/estoque.service';

import { MaterializeAction } from 'angular2-materialize';
import { FileUploader } from 'ng2-file-upload';

declare let Materialize:any;
const URL = 'https://extinfire-backend-v2-muriloeduardo.c9users.io/api/produto';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css']
})
export class EstoqueComponent implements OnInit {

	uploader:FileUploader = new FileUploader({url: URL});
	hasBaseDropZoneOver:boolean = false;
	hasAnotherDropZoneOver:boolean = false;
	modalActions = new EventEmitter<string|MaterializeAction>();
	produtos: any[] = [];
	produto: any = {};
	imageProduto: any;
	nome: string;
	valor_custo: number;
	valor_venda: number;
	qntde_atual: number;
	qntde_minima: number;

	constructor(private estoqueService: EstoqueService) { }

	ngOnInit() {
		this.estoqueService.getProdutos().subscribe((data) => {
			this.produtos = data;
		});
	}

	ngAfterViewChecked() {
		if(Materialize.updateTextFields)
			Materialize.updateTextFields();
	}
	
	fileOverBase(e:any):void {
		this.hasBaseDropZoneOver = e;
	}
	
	fileOverAnother(e:any):void {
		this.hasAnotherDropZoneOver = e;
	}

	novoProduto(event) {
		event.preventDefault();

		console.log(event.target)
		
		if(!this.nome) return false;

		let newProduto = {
			nome: this.nome,
			valor_venda: this.valor_venda,
			valor_custo: this.valor_venda,
			qntde_atual: this.qntde_atual,
			qntde_minima: this.qntde_minima
		};
		
		this.estoqueService.addProduto(newProduto).subscribe(produto => {
			this.produtos.push(produto);
			
			this.resetForm();
		});
	}

	resetForm() {
		this.nome = undefined;
		this.valor_venda = undefined;
		this.valor_custo = undefined;
		this.qntde_atual = undefined;
		this.qntde_minima = undefined;

		this.closeModal();
	}

	deleteProduto(id: string) {
		this.estoqueService.deleteProduto(id).subscribe(data => {
			if(data.n) {
				this.produtos.splice(this.produtos.indexOf(id), 1);
			}
		});
	}

	editProduto(produto: any) {
		this.nome = produto.nome;
		this.valor_venda = produto.valor_venda;
		this.valor_custo = produto.valor_custo;
		this.qntde_atual = produto.qntde_atual;
		this.qntde_minima = produto.qntde_minima;

		this.produto = produto;

		this.openModal();
	}

	updateProuto(produto: any) {
		let editProduto = {
			_id: this.produto._id,
			nome: this.nome,
			valor_venda: this.valor_venda,
			valor_custo: this.valor_custo,
			qntde_atual: this.qntde_atual,
			qntde_minima: this.qntde_minima
		}
		this.estoqueService.updateProduto(editProduto).subscribe(data => {
			for (var i = 0; i < this.produtos.length; ++i) {
				if(this.produtos[i]._id == data._id) {
					this.produtos[i] = data;
				}
			}
			this.resetForm();
		});
	}

	openModal() {
		this.modalActions.emit({action:"modal",params:['open']});
	}

	closeModal() {
		this.modalActions.emit({action:"modal",params:['close']});
	}
}
