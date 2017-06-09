import { Component, OnInit } from '@angular/core';

import { VendasService } from '../_services/vendas.service';
import { ClientesService } from '../_services/clientes.service';
import { ItensService } from './../_services/itens.service';

import { environment } from './../../environments/environment';

@Component({
  selector: 'app-financeiro',
  templateUrl: './financeiro.component.html',
  styleUrls: ['./financeiro.component.css']
})
export class FinanceiroComponent implements OnInit {

  vendas: any[] = [];
  vendasLiquidas: any[] = [];

  loadStatus: boolean = false;
  baseUrl: string = environment.API_ENDPOINT;
  faturamentoLiquido:any;

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
    selectYears: 15,
    onSet: function (ele) {
      if(ele.select){
        this.close();
      }
    }
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

      let faturamentoLiquidoSomado = 0;

      for (var i = 0; i < this.vendas.length; ++i) {

        // SOMENTE SE FOR PEDIDOS
        // ORCAMENTOS NAO SAO CONTABILIZADOS
        if(this.vendas[i].tipo) {

          let dateFormated = new Date(this.vendas[i].updatedAt).toLocaleString('pt-BR');

          this.vendas[i].valor_total = this.formatDecimal(this.vendas[i].valor_total);

          this.vendas[i].itens.filter((item) => {

            // Calculo para valor liquido:
            // Valor Total do Item no Pedido - (Valor de custo * quantidade do item no pedido)

            // Se for servico, o preco de custo é 0

            // Valor de Todo Liquido
            // De todos os pedidos
            faturamentoLiquidoSomado += this.vendas[i].valor_liquido = parseFloat(this.formatDecimal(item.total)) - (parseFloat(this.formatDecimal(item.item.valor_custo ? item.item.valor_custo : 0)) * item.qntde);
          });
        }
      }

      this.faturamentoLiquido = faturamentoLiquidoSomado;

      this.loadStatus = true;
    });
	}

  serachByDate() {
    let splitDe = this.validadeDe.split('/');
    let novadataDe = new Date(splitDe[2], splitDe[1], splitDe[0]);
    

    let splitAte = this.validadeDe.split('/');
    let novadataAte = new Date(splitAte[2], splitAte[1], splitAte[0]);

    console.log(novadataDe)
    console.log(novadataAte)

    this.vendasService.getVendasByDate({'validadeDe': novadataDe, 'validadeAte': novadataAte}).subscribe(res => {
      console.log(res)
    });
  }

  formatDecimal(decimal: any) {

    if(typeof decimal === "number") decimal = decimal.toString();
    
    if(decimal.indexOf('R$')!==-1) decimal = decimal.replace('R$','');
    if(decimal.indexOf('.')!==-1) decimal = decimal.split('.').join('');
    if(decimal.indexOf(',')!==-1) decimal = decimal.replace(',','.');

    return decimal;
  }
}