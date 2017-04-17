import { Component, OnInit } from '@angular/core';

import { VendasService } from '../_services/vendas.service';
import { ClientesService } from '../_services/clientes.service';
import { ItensService } from './../_services/itens.service';

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

  faturamentoTotal:any = '0';
  /*lucroTotalEstoque:number = 0;*/

  validadeDe: any = new Date().toLocaleDateString('pt-BR');
  validadeAte: any = new Date().toLocaleDateString('pt-BR');

  paramsPickdate: any = {
    monthsFull: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    weekdaysFull: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabádo'],
    weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
    today: 'Hoje',
    clear: 'Limpar',
    close: 'Pronto',
    labelMonthNext: 'Próximo mês',
    labelMonthPrev: 'Mês anterior',
    labelMonthSelect: 'Selecione um mês',
    labelYearSelect: 'Selecione um ano',
    format:'dd/mm/yyyy',
    closeOnSelect: true,
    selectMonths: true, 
    selectYears: 15 
  };

	constructor(
		private vendasService: VendasService,
		private clientesService: ClientesService,
    private itensService: ItensService
	) { }

	ngOnInit() {

    let date = new Date();
    date.setMonth(date.getMonth() + 12);
    this.validadeAte = date.toLocaleDateString('pt-BR');
    
    this.vendasService.getVendas().subscribe((vendas) => {
      
      this.vendas = vendas;

      let valorSomadoTotal = 0;

      for (var i = 0; i < this.vendas.length; ++i) {
        console.log(parseFloat(this.formatDecimal(this.vendas[i].valor_total)))
        
        valorSomadoTotal += parseFloat(this.formatDecimal(this.vendas[i].valor_total));
      }

      this.faturamentoTotal = valorSomadoTotal;

      this.loadStatus = true;
    });

    /*this.itensService.getItens().subscribe((produtos) => {
    
      this.produtos = produtos;

      for (var i = 0; i < this.produtos.length; ++i) {
        if(this.produtos[i].qntde_atual) {

          let priceVendaFloat = parseFloat(this.formatDecimal(this.produtos[i].valor_venda));
          let priceCustoFloat = parseFloat(this.formatDecimal(this.produtos[i].valor_custo));
          let priceCalculed = priceVendaFloat - priceCustoFloat;

          console.log(priceCalculed)
          //console.log(priceCustoFloat)

          this.lucroTotalEstoque += priceCalculed;
        }
      }    
    });*/

    /*this.clientesService.getClientes().subscribe((clientes) => {
    
      this.clientes = clientes;

      
    });*/
	}

  formatDecimal(decimal: any) {

    if(typeof decimal === "number") decimal = decimal.toString();
    
    if(decimal.indexOf('R$')!==-1) decimal = decimal.replace('R$','');
    if(decimal.indexOf('.')!==-1) decimal = decimal.split('.').join('');
    if(decimal.indexOf(',')!==-1) decimal = decimal.replace(',','.');

    return decimal;
  }
}