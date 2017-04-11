import { Component, OnInit } from '@angular/core';

import { VendasService } from '../_services/vendas.service';
import { ClientesService } from '../_services/clientes.service';
import { ProdutosService } from '../_services/produtos.service';
import { ServicosService } from '../_services/servicos.service';
import { UsuariosService } from '../_services/usuarios.service';
import { LogsService } from '../_services/logs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

	produtos: any[] = [];
	vendas: any[] = [];
	clientes: any[] = [];
	servicos: any[] = [];
	usuarios: any[] = [];
	logs: any[] = [];

	search: any = { nome: '' };

	constructor(
		private vendasService: VendasService,
		private clientesService: ClientesService,
    	private produtosService: ProdutosService,
    	private servicosService: ServicosService,
    	private usuariosService: UsuariosService,
    	private logsService: LogsService
	) { }

	ngOnInit() {
		this.load();
	}
	
	load() {
		console.log('load search')
		this.vendasService.getVendas().subscribe((vendas) => {
			this.vendas = vendas;
		});

		this.produtosService.getProdutos().subscribe((produtos) => {
			this.produtos = produtos;
		});

		this.clientesService.getClientes().subscribe((clientes) => {
			this.clientes = clientes;
		});

		this.servicosService.getServicos().subscribe((servicos) => {
			this.servicos = servicos;
		});

		this.usuariosService.getUsers().subscribe((usuarios) => {
			this.usuarios = usuarios;
		});

		this.logsService.getLogs().subscribe((logs) => {
			this.logs = logs;
		});
	}
}
