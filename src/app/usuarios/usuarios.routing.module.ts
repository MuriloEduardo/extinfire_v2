import { ModuleWithProviders, NgModule } from '@angular/core';;
import { Routes, RouterModule } from '@angular/router';

import { UsuarioResolver } from '../_guards/usuario.resolver';
import { UsuariosGuard } from '../_guards/usuarios.guard';

import { UsuariosComponent } from './usuarios.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';
import { DetalheUsuarioComponent } from './detalhe-usuario/detalhe-usuario.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';

const clientesRoutes: Routes = [
	{
		path: '',
		component: UsuariosComponent,
		canActivateChild: [UsuariosGuard],
		children: [
			{
				path: 'novo',
				component: NovoUsuarioComponent
			},
			{
				path: ':id',
				component: DetalheUsuarioComponent,
				resolve: {
					usuario: UsuarioResolver
				}
			},
			{
				path: ':id/editar',
				component: EditarUsuarioComponent,
				resolve: {
					usuario: UsuarioResolver
				}
			},
			{
				path: '',
				component: ListaUsuariosComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(clientesRoutes)],
	exports: [RouterModule]
})
export class UsuariosRoutingModule {}