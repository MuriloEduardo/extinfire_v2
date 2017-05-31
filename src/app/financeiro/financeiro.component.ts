import { Component, OnInit } from '@angular/core';

import { VendasService } from '../_services/vendas.service';
import { ClientesService } from '../_services/clientes.service';
import { ItensService } from './../_services/itens.service';

import { AppSettings } from './../app.config';

@Component({
  selector: 'app-financeiro',
  templateUrl: './financeiro.component.html',
  styleUrls: ['./financeiro.component.css']
})
export class FinanceiroComponent implements OnInit {

  vendas: any[] = [];
  vendasLiquidas: any[] = [];

  loadStatus: boolean = false;
<<<<<<< HEAD
  baseUrl: string = AppSettings.API_ENDPOINT;
=======

  faturamentoBruto:any;
>>>>>>> fa1459ca6e8e07a963e29214fbfe77216d34a636
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

<<<<<<< HEAD
      let faturamentoLiquidoSomado = 0;

      for (var i = 0; i < this.vendas.length; ++i) {

        // SOMENTE SE FOR PEDIDOS
        // ORCAMENTOS NAO SAO CONTABILIZADOS
        if(this.vendas[i].tipo) {
=======
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
>>>>>>> fa1459ca6e8e07a963e29214fbfe77216d34a636

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