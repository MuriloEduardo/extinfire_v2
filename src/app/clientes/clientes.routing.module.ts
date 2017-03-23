import { ModuleWithProviders, NgModule } from '@angular/core';;
import { Routes, RouterModule } from '@angular/router';

import { ClienteResolver } from '../_guards/cliente.resolver';

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
		component: DetalheClienteComponent,
		resolve: {
			cliente: ClienteResolver
		}
	},
	{
		path: ':id/editar',
		component: EditarClienteComponent,
		resolve: {
			cliente: ClienteResolver
		}
	}
];

@NgModule({
	imports: [RouterModule.forChild(clientesRoutes)],
	exports: [RouterModule]
})
export class ClientesRoutingModule {}