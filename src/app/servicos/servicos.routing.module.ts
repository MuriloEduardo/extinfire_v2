import { ModuleWithProviders, NgModule } from '@angular/core';;
import { Routes, RouterModule } from '@angular/router';

import { ServicoResolver } from '../_guards/servico.resolver';

import { ServicosComponent } from './servicos.component';
import { DetalheServicoComponent } from './detalhe-servico/detalhe-servico.component';
import { EditarServicoComponent } from './editar-servico/editar-servico.component';
import { NovoServicoComponent } from './novo-servico/novo-servico.component';

const servicosRoutes: Routes = [
  {
    path: '',
    component: ServicosComponent
  },
  {
    path: 'novo',
    component: NovoServicoComponent
  },
  {
    path: ':id',
    component: DetalheServicoComponent,
    resolve: {
      servico: ServicoResolver
    }
  },
  {
    path: ':id/editar',
    component: EditarServicoComponent,
    resolve: {
      servico: ServicoResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(servicosRoutes)],
  exports: [RouterModule]
})
export class ServicosRoutingModule {}