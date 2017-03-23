import { Component, OnInit } from '@angular/core';

import { VendasService } from '../_services/vendas.service';
import { ClientesService } from '../_services/clientes.service';
import { ProdutosService } from '../_services/produtos.service';

@Component({
  selector: 'app-financeiro',
  templateUrl: './financeiro.component.html',
  styleUrls: ['./financeiro.component.css']
})
export class FinanceiroComponent implements OnInit {

  produtos: any[] = [];
  vendas: any[] = [];
  clientes: any[] = [];

  loadStatus: boolean = false;

  faturamentoTotal: number = 0;
  lucroTotalEstoque: number = 0;

	constructor(
		private vendasService: VendasService,
		private clientesService: ClientesService,
    private produtosService: ProdutosService
	) { }

	ngOnInit() {
    this.vendasService.getVendas().subscribe((vendas) => {
      this.vendas = vendas;

      for (var i = 0; i < this.vendas.length; ++i) {
        this.faturamentoTotal += this.vendas[i].valor_total;
      }

      this.produtosService.getProdutos().subscribe((produtos) => {
        this.produtos = produtos;

        for (var i = 0; i < this.produtos.length; ++i) {
          if(this.produtos[i].qntde_atual) {
            this.lucroTotalEstoque += this.produtos[i].valor_venda - this.produtos[i].valor_custo;
          }
        }

        this.clientesService.getClientes().subscribe((clientes) => {
          this.clientes = clientes;

          this.loadStatus = true;
        });
      });
    });
	}
}