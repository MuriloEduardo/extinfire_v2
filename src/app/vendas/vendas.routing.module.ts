import { ModuleWithProviders, NgModule } from '@angular/core';;
import { Routes, RouterModule } from '@angular/router';

import { VendasComponent } from './vendas.component';
import { DetalheVendaComponent } from './detalhe-venda/detalhe-venda.component';
import { EditarVendaComponent } from './editar-venda/editar-venda.component';
import { NovaVendaComponent } from './nova-venda/nova-venda.component';

const vendasRoutes: Routes = [
	{
		path: '',
		component: VendasComponent
	},
	{
		path: 'novo',
		component: NovaVendaComponent
	},
	{
		path: ':id',
		component: DetalheVendaComponent
	},
	{
		path: ':id/editar',
		component: EditarVendaComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(vendasRoutes)],
	exports: [RouterModule]
})
export class VendasRoutingModule {}