import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterializeModule } from 'angular2-materialize';
import { FileUploadModule } from "ng2-file-upload";
import { TextMaskModule } from 'angular2-text-mask';
import { Ng2PaginationModule } from 'ng2-pagination';
import { Ng2OrderModule } from 'ng2-order-pipe';

import { ProdutosRoutingModule } from './produtos.routing.module';

import { ProdutosService } from '../_services/produtos.service';

import { ProdutoResolver } from '../_guards/produto.resolver';

import { ProdutosComponent } from './produtos.component';
import { NovoProdutoComponent } from './novo-produto/novo-produto.component';
import { DetalheProdutoComponent } from './detalhe-produto/detalhe-produto.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';

import { ImagePreviewProduto } from './../_directives/image-preview-produto.directive';

@NgModule({
  declarations: [
    ProdutosComponent,
    NovoProdutoComponent,
    DetalheProdutoComponent,
    EditarProdutoComponent,
    ImagePreviewProduto
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    FileUploadModule,
    TextMaskModule,
    Ng2PaginationModule,
    Ng2OrderModule,
    ProdutosRoutingModule
  ],
  providers: [
    ProdutosService,
    ProdutoResolver
  ]
})
export class ProdutosModule { }