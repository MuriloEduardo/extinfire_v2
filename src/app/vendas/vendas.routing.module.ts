import { ModuleWithProviders, NgModule } from '@angular/core';;
import { Routes, RouterModule } from '@angular/router';

import { VendasResolver } from '../_guards/vendas.resolver';
import { VendaResolver } from '../_guards/venda.resolver';
import { ProdutosResolver } from '../_guards/produtos.resolver';
import { ServicosResolver } from '../_guards/servicos.resolver';
import { ClientesResolver } from '../_guards/clientes.resolver';

import { VendasComponent } from './vendas.component';
import { DetalheVendaComponent } from './detalhe-venda/detalhe-venda.component';
import { EditarVendaComponent } from './editar-venda/editar-venda.component';
import { NovaVendaComponent } from './nova-venda/nova-venda.component';

const vendasRoutes: Routes = [
	{
		path: '',
		component: VendasComponent,
		resolve: {
			vendas: VendasResolver,
			produtos: ProdutosResolver,
			clientes: ClientesResolver
		}
	},
	{
		path: 'novo',
		component: NovaVendaComponent,
		resolve: {
			produtos: ProdutosResolver,
			servicos: ServicosResolver,
			clientes: ClientesResolver
		}
	},
	{
		path: ':id',
		component: DetalheVendaComponent,
		resolve: {
			venda: VendaResolver
		}
	},
	{
		path: ':id/editar',
		component: EditarVendaComponent,
		resolve: {
			venda: VendaResolver,
			produtos: ProdutosResolver,
			servicos: ServicosResolver,
			clientes: ClientesResolver
		}
	}
];

@NgModule({
	imports: [RouterModule.forChild(vendasRoutes)],
	exports: [RouterModule]
})
export class VendasRoutingModule {}