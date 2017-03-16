import { Component, OnInit } from '@angular/core';

import { ServicosService } from '../_services/servicos.service';
import { ClientesService } from '../_services/clientes.service';
import { EstoqueService } from '../_services/estoque.service';

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
  servicos: Array<any> = [];
  clientes: Array<any> = [];

  valorTotalServico: Array<any> = [];
  datasServico: Array<any> = [];

	constructor(
		private servicosService: ServicosService,
		private clientesService: ClientesService,
		private estoqueService: EstoqueService,
    private route: ActivatedRoute
	) { }

	ngOnInit() {
    this.inscricao = this.route.data.subscribe(
      (data: {produtos: any, servicos: any}) => {
        this.produtos = data.produtos;
        this.servicos = data.servicos;

        for (let i = 0; i < this.servicos.length; ++i) {
          this.valorTotalServico.push(this.servicos[i].valor_total);

          this.datasServico.push(this.servicos[i].updatedAt.toUTCString());
        }
      }
    );
	}

	// lineChart
  public lineChartFaturamentoTotalData:Array<any> = [
    {data: this.valorTotalServico, label: 'Faturamento Total'}
  ];
  public lineChartLabels:Array<any> = this.datasServico;
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
