import { ModuleWithProviders, NgModule } from '@angular/core';;
import { Routes, RouterModule } from '@angular/router';

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
    component: DetalheServicoComponent
  },
  {
    path: ':id/editar',
    component: EditarServicoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(servicosRoutes)],
  exports: [RouterModule]
})
export class ServicosRoutingModule {}