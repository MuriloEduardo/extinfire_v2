import { ModuleWithProviders, NgModule } from '@angular/core';;
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './_guards/auth.guard';
import { ProdutosResolver } from './_guards/produtos.resolver';
import { ClientesResolver } from './_guards/clientes.resolver';
import { LogsResolver } from './_guards/logs.resolver';
import { VendasResolver } from './_guards/vendas.resolver';
import { UsuariosResolver } from './_guards/usuarios.resolver';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PerfilComponent } from './perfil/perfil.component';
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
		loadChildren: './clientes/clientes.module#ClientesModule',
		canActivate: [AuthGuard]
	},
	{
		path: 'produtos',
		loadChildren: './produtos/produtos.module#ProdutosModule',
		canActivate: [AuthGuard]
	},
	{
		path: 'vendas',
		loadChildren: './vendas/vendas.module#VendasModule',
		canActivate: [AuthGuard]
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
			servicos: VendasResolver
		}
	},
	{
		path: '',
		component: DashboardComponent,
		canActivate: [AuthGuard],
		resolve: {
			produtos: ProdutosResolver,
			servicos: VendasResolver
		}
	}
];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}