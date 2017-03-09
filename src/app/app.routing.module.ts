import { ModuleWithProviders, NgModule } from '@angular/core';;
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

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
	{ path: 'login', component: LoginComponent },
	{ path: 'perfil', component: PerfilComponent, canActivate: [AuthGuard] },
	{ path: 'clientes', component: ClientesComponent, canActivate: [AuthGuard] },
	{ path: 'estoque', component: EstoqueComponent, canActivate: [AuthGuard] },
	{ path: 'servicos', component: ServicosComponent, canActivate: [AuthGuard] },
	{ path: 'usuarios', component: UsuariosComponent, canActivate: [AuthGuard] },
	{ path: 'logs', component: LogsComponent, canActivate: [AuthGuard] },
	{ path: 'financeiro', component: FinanceiroComponent, canActivate: [AuthGuard] },
	{ path: '', component: DashboardComponent, canActivate: [AuthGuard] }
];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}