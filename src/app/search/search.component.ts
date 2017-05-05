import { Component, OnInit } from '@angular/core';

import { VendasService } from '../_services/vendas.service';
import { ClientesService } from '../_services/clientes.service';
import { ItensService } from './../_services/itens.service';
import { UsuariosService } from '../_services/usuarios.service';
import { LogsService } from '../_services/logs.service';

import { AppSettings } from './../app.config';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

	baseUrl: string = AppSettings.API_ENDPOINT;
	produtos: any[] = [];
	vendas: any[]   = [];
	clientes: any[] = [];
	servicos: any[] = [];
	usuarios: any[] = [];
	logs: any[]     = [];

	search: any = { nome: '' };
	searchLog: any = { descricao: '' };

	constructor(
		private vendasService: VendasService,
		private clientesService: ClientesService,
    	private itensService: ItensService,
    	private usuariosService: UsuariosService,
    	private logsService: LogsService
	) { }

	ngOnInit() {
		this.load();
	}
	
	load() {
		this.vendasService.getVendas().subscribe((vendas) => {
			this.vendas = vendas;
		});

		this.itensService.getItens().subscribe((itens) => {
			this.produtos = [];
			this.servicos = [];
			for (var i = 0; i < itens.length; ++i) {
				if(itens[i].qntde_minima) {
					// Tem quantidade minima
					// ENtão é produto
					this.produtos.push(itens[i]);
				} else {
					this.servicos.push(itens[i]);
				}
			}
		});

		this.clientesService.getClientes().subscribe((clientes) => {
			this.clientes = clientes;
		});

		this.usuariosService.getUsers().subscribe((usuarios) => {
			this.usuarios = usuarios;
		});

		this.logsService.getLogs().subscribe((logs) => {
			this.logs = logs;
		});
	}
}
