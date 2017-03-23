import { ModuleWithProviders, NgModule } from '@angular/core';;
import { Routes, RouterModule } from '@angular/router';

import { ProdutoResolver } from '../_guards/produto.resolver';

import { ProdutosComponent } from './produtos.component';
import { NovoProdutoComponent } from './novo-produto/novo-produto.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { DetalheProdutoComponent } from './detalhe-produto/detalhe-produto.component';

const produtosRoutes: Routes = [
	{
		path: '',
		component: ProdutosComponent
	},
	{
		path: 'novo',
		component: NovoProdutoComponent
	},
	{
		path: ':id',
		component: DetalheProdutoComponent,
		resolve: {
			produto: ProdutoResolver
		}
	},
	{
		path: ':id/editar',
		component: EditarProdutoComponent,
		resolve: {
			produto: ProdutoResolver
		}
	}
];

@NgModule({
	imports: [RouterModule.forChild(produtosRoutes)],
	exports: [RouterModule]
})
export class ProdutosRoutingModule {}