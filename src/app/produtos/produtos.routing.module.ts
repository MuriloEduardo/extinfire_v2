import { ModuleWithProviders, NgModule } from '@angular/core';;
import { Routes, RouterModule } from '@angular/router';

import { ProdutosResolver } from '../_guards/produtos.resolver';
import { ProdutoResolver } from '../_guards/produto.resolver';

import { ProdutosComponent } from './produtos.component';
import { NovoProdutoComponent } from './novo-produto/novo-produto.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { DetalheProdutoComponent } from './detalhe-produto/detalhe-produto.component';
import { ProdutoNaoEncontradoComponent } from './produto-nao-encontrado/produto-nao-encontrado.component';

const produtosRoutes: Routes = [
	{
		path: '',
		component: ProdutosComponent,
		resolve: {
			produtos: ProdutosResolver
		}
	},
	{ path: 'novo', component: NovoProdutoComponent },
	{ path: 'nao-encontrado', component: DetalheProdutoComponent },
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