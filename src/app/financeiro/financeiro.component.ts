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

  produtos: any[];
  vendas: any[];
  clientes: any[];
  servicos: any[];

  lineChartLabels: any[] = [];
  lineChartData: any[] = [
    {
      data: []
    }
  ];
  faturamentoTotal: number = 0;
  lucroTotalEstoque: number = 0;

	constructor(
		private vendasService: VendasService,
		private clientesService: ClientesService,
    private route: ActivatedRoute
	) { }

	ngOnInit() {
    this.inscricao = this.route.data.subscribe(
      (data: {produtos: any, vendas: any, servicos: any, clientes: any}) => {
        this.produtos = data.produtos;
        this.vendas = data.vendas;
        this.clientes = data.produtos;
        this.servicos = data.vendas;

        for (var i = 0; i < this.vendas.length; ++i) {
          let displayDate = new Date(this.vendas[i].updatedAt).toLocaleString();
          this.lineChartLabels.push(displayDate);

          this.lineChartData[0].data.push(this.vendas[i].valor_total);

          this.faturamentoTotal += this.vendas[i].valor_total;
        }

        for (var i = 0; i < this.produtos.length; ++i) {
          console.log(this.produtos[i])
          if(this.produtos[i].qntde_atual) {
            this.lucroTotalEstoque += this.produtos[i].valor_venda - this.produtos[i].valor_custo;
          }
        }
      }
    );
	}

  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(229, 57, 53,0.2)',
      borderColor: 'rgba(229, 57, 53,1)',
      pointBackgroundColor: 'rgba(229, 57, 53,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(229, 57, 53,0.8)'
    }
  ];
  public lineChartLegend:boolean = false;
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
