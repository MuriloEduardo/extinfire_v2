import { ModuleWithProviders, NgModule } from '@angular/core';;
import { Routes, RouterModule } from '@angular/router';

import { UsuariosService } from '../_services/usuarios.service';
import { UsuariosResolver } from '../_guards/usuarios.resolver';
import { UsuarioResolver } from '../_guards/usuario.resolver';

import { UsuariosComponent } from './usuarios.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';
import { DetalheUsuarioComponent } from './detalhe-usuario/detalhe-usuario.component';

const clientesRoutes: Routes = [
	{
		path: '',
		component: UsuariosComponent,
		resolve: {
			usuarios: UsuariosResolver
		}
	},
	{ path: 'novo', component: NovoUsuarioComponent },
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
	}
];

@NgModule({
	imports: [RouterModule.forChild(clientesRoutes)],
	exports: [RouterModule]
})
export class UsuariosRoutingModule {}