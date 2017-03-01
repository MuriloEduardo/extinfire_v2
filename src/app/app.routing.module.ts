import { ModuleWithProviders, NgModule } from '@angular/core';;
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ServicosComponent } from './servicos/servicos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { LogsComponent } from './logs/logs.component';
import { FinanceiroComponent } from './financeiro/financeiro.component';

const appRoutes: Routes = [
	{ path: '', component: DashboardComponent },
	{ path: 'perfil', component: PerfilComponent },
	{ path: 'clientes', component: ClientesComponent },
	{ path: 'produtos', component: ProdutosComponent },
	{ path: 'servicos', component: ServicosComponent },
	{ path: 'usuarios', component: UsuariosComponent },
	{ path: 'logs', component: LogsComponent },
	{ path: 'financeiro', component: FinanceiroComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}