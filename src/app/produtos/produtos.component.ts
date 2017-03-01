import { Component, OnInit, EventEmitter, AfterViewChecked } from '@angular/core';

import { ProdutosService } from '../services/produtos.service';

import { MaterializeAction } from 'angular2-materialize';

declare let Materialize:any;

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

	modalActions = new EventEmitter<string|MaterializeAction>();
	produtos: any[] = [];
	nome: string;
	valor_custo: number;
	valor_venda: number;
	qntde_atual: number;
	qntde_minima: number;

	constructor(private produtosService: ProdutosService) { }

	ngOnInit() {
		this.produtosService.getProdutos().subscribe((data) => {
			this.produtos = data;
		});
	}

	ngAfterViewChecked() {
		if(Materialize.updateTextFields)
			Materialize.updateTextFields();
	}

	novoProduto(event) {
		event.preventDefault();
		
		if(!this.nome) return false;

		let newProduto = {
			nome: this.nome,
			valor_venda: this.valor_venda,
			valor_custo: this.valor_venda,
			qntde_atual: this.qntde_atual,
			qntde_minima: this.qntde_minima
		};
		
		this.produtosService.addProduto(newProduto).subscribe(produto => {
			this.produtos.push(produto);
			
			this.nome = undefined;
			this.valor_venda = undefined;
			this.valor_custo = undefined;
			this.qntde_atual = undefined;
			this.qntde_minima = undefined;

			this.closeModal();
		});
	}

	deleteProduto(id: string) {
		this.produtosService.deleteProduto(id).subscribe(data => {
			if(data.n) {
				this.produtos.splice(this.produtos.indexOf(id), 1);
			}
		});
	}

	editProduto(produto: any) {
		this.openModal();

		this.nome = produto.nome;
		this.valor_venda = produto.valor_venda;
		this.valor_custo = produto.valor_custo;
		this.qntde_atual = produto.qntde_atual;
		this.qntde_minima = produto.qntde_minima;
	}

	openModal() {
		this.modalActions.emit({action:"modal",params:['open']});
	}

	closeModal() {
		this.modalActions.emit({action:"modal",params:['close']});
	}
}
