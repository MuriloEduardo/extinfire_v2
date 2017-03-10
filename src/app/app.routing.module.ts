import { ModuleWithProviders, NgModule } from '@angular/core';;
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './_guards/auth.guard';
import { ProdutosResolver } from './_guards/produtos.resolver';
import { ClientesResolver } from './_guards/clientes.resolver';
import { LogsResolver } from './_guards/logs.resolver';
import { ServicosResolver } from './_guards/servicos.resolver';
import { UsuariosResolver } from './_guards/usuarios.resolver';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ClientesComponent } from './clientes/clientes.component';
import { EstoqueComponent } from './estoque/estoque.component';
import { ServicosComponent } from './servicos/servicos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { LogsComponent } from './logs/logs.component';
import { FinanceiroComponent } from './financeiro/financeiro.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'perfil',
		component: PerfilComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'clientes',
		component: ClientesComponent,
		canActivate: [AuthGuard],
		resolve: {
			clientes: ClientesResolver
		}
	},
	{
		path: 'estoque',
		component: EstoqueComponent,
		canActivate: [AuthGuard],
		resolve: {
			produtos: ProdutosResolver
		}
	},
	{
		path: 'servicos',
		component: ServicosComponent,
		canActivate: [AuthGuard],
		resolve: {
			servicos: ServicosResolver,
			produtos: ProdutosResolver,
			clientes: ClientesResolver
		}
	},
	{
		path: 'usuarios',
		component: UsuariosComponent,
		canActivate: [AuthGuard],
		resolve: {
			usuarios: UsuariosResolver
		}
	},
	{
		path: 'logs',
		component: LogsComponent,
		canActivate: [AuthGuard],
		resolve: {
			logs: LogsResolver
		}
	},
	{
		path: 'financeiro',
		component: FinanceiroComponent,
		canActivate: [AuthGuard],
		resolve: {
			produtos: ProdutosResolver,
			clientes: ClientesResolver,
			servicos: ServicosResolver
		}
	},
	{
		path: '',
		component: DashboardComponent,
		canActivate: [AuthGuard],
		resolve: {
			produtos: ProdutosResolver,
			servicos: ServicosResolver
		}
	}
];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}