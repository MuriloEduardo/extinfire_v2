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

import { ProdutosComponent } from './produtos.component';
import { NovoProdutoComponent } from './novo-produto/novo-produto.component';
import { DetalheProdutoComponent } from './detalhe-produto/detalhe-produto.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';

import { ImagePreviewProduto } from './../_directives/image-preview-produto.directive';

import { CurrencyFormatProdutosPipe } from './../_pipes/currency-format-produtos.pipe';

@NgModule({
  declarations: [
    ProdutosComponent,
    NovoProdutoComponent,
    DetalheProdutoComponent,
    EditarProdutoComponent,
    ImagePreviewProduto,
    CurrencyFormatProdutosPipe
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
  providers: []
})
export class ProdutosModule { }