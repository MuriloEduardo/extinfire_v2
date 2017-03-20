import { Component, OnInit } from '@angular/core';

import { VendasService } from '../_services/vendas.service';
import { ClientesService } from '../_services/clientes.service';

import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-financeiro',
  templateUrl: './financeiro.component.html',
  styleUrls: ['./financeiro.component.css']
})
export class FinanceiroComponent implements OnInit {

  inscricao: Subscription;

  produtos: Array<any> = [];
  vendas: Array<any> = [];
  clientes: Array<any> = [];

  valorTotalVenda: Array<any> = [];
  datasVenda: Array<any> = [];

	constructor(
		private vendasService: VendasService,
		private clientesService: ClientesService,
    private route: ActivatedRoute
	) { }

	ngOnInit() {
    this.inscricao = this.route.data.subscribe(
      (data: {produtos: any, vendas: any}) => {
        this.produtos = data.produtos;
        this.vendas = data.vendas;

        for (let i = 0; i < this.vendas.length; ++i) {
          this.valorTotalVenda.push(this.vendas[i].valor_total);

          this.datasVenda.push(this.vendas[i].updatedAt.toUTCString());
        }
      }
    );
	}

	// lineChart
  public lineChartFaturamentoTotalData:Array<any> = [
    {data: this.valorTotalVenda, label: 'Faturamento Total'}
  ];
  public lineChartLabels:Array<any> = this.datasVenda;
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartFaturamentoTotalColors:Array<any> = [
    { // red
      backgroundColor: 'rgba(255,0,0,0.2)',
      borderColor: 'rgba(255,0,0,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartFaturamentoTotalLegend:boolean = false;
  public lineChartType:string = 'line';

  toggleDaysChart: boolean = false;
  monthsChart: Array<string> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartFaturamentoTotalData.length);
    for (let i = 0; i < this.lineChartFaturamentoTotalData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartFaturamentoTotalData[i].data.length), label: this.lineChartFaturamentoTotalData[i].label};
      for (let j = 0; j < this.lineChartFaturamentoTotalData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartFaturamentoTotalData = _lineChartData;

    //this.lineChartLabels = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'];
    this.lineChartLabels.splice(0).push('');
    this.toggleDaysChart = !this.toggleDaysChart;

    if(this.toggleDaysChart) {
      for (var i = 0; i < 31; ++i) {
        this.lineChartLabels.push(i);
      } 
    } else {
      for (var i = 0; i < this.monthsChart.length; ++i) {
        this.lineChartLabels.push(this.monthsChart[i]);
      } 
    }

  }
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}
