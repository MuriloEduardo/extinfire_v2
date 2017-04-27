import { ModuleWithProviders, NgModule } from '@angular/core';;
import { Routes, RouterModule } from '@angular/router';

import { ClientesComponent } from './clientes.component';
import { NovoClienteComponent } from './novo-cliente/novo-cliente.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import { DetalheClienteComponent } from './detalhe-cliente/detalhe-cliente.component';

const clientesRoutes: Routes = [
	{
		path: '',
		component: ClientesComponent
	},
	{
		path: 'novo',
		component: NovoClienteComponent
	},
	{
		path: ':id',
		component: DetalheClienteComponent
	},
	{
		path: ':id/editar',
		component: EditarClienteComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(clientesRoutes)],
	exports: [RouterModule]
})
export class ClientesRoutingModule {}