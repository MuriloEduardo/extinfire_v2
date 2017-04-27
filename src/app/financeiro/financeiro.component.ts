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

  vendas: any[] = [];
  vendasLiquidas: any[] = [];

  loadStatus: boolean = false;

  faturamentoBruto:any;
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

      let faturamentoBrutoSomado = 0;
      let faturamentoLiquidoSomado = 0;

      for (var i = 0; i < this.vendas.length; ++i) {

        // SOMENTE SE FOR PEDIDOS
        // ORCAMENTOS NAO SAO CONTABILIZADOS
        if(this.vendas[i].tipo) {

          let dateFormated = new Date(this.vendas[i].updatedAt).toLocaleString('pt-BR');
          this.lineChartLabels.push(dateFormated);

          faturamentoBrutoSomado += parseFloat(this.formatDecimal(this.vendas[i].valor_total));
          this.vendas[i].valor_total = this.formatDecimal(this.vendas[i].valor_total);

          this.vendas[i].itens.filter((item) => {

            // Calculo para valor liquido:
            // Valor Total do Item no Pedido - (Valor de custo * quantidade do item no pedido)

            // Se for servico, o preco de custo é 0

            // Valor de Todo Liquido
            // De todos os pedidos
            faturamentoLiquidoSomado += this.vendas[i].valor_liquido = parseFloat(this.formatDecimal(item.total)) - (parseFloat(this.formatDecimal(item.item.valor_custo ? item.item.valor_custo : 0)) * item.qntde);
            this.valoresLiquidos.push(this.vendas[i].valor_liquido);
          });

          this.valoresBrutos.push(this.vendas[i].valor_total);
        }
      }

      this.faturamentoBruto = faturamentoBrutoSomado;
      this.faturamentoLiquido = faturamentoLiquidoSomado;

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

  valoresBrutos: any[] = [];
  valoresLiquidos: any[] = [];

  // lineChart
  public lineChartData:Array<any> = [
    {data: this.valoresBrutos, label: 'Valor Bruto'},
    {data: this.valoresLiquidos, label: 'Valor Liquido'}
  ];
  public lineChartLabels:Array<any> = [];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(229, 57, 53,0.2)',
      borderColor: 'rgba(229, 57, 53,1)',
      pointBackgroundColor: 'rgba(229, 57, 53,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(229, 57, 53,1)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
 
  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}