import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterializeModule } from 'angular2-materialize';
import { FileUploadModule } from "ng2-file-upload";
import { TextMaskModule } from 'angular2-text-mask';
import { Ng2PaginationModule } from 'ng2-pagination';
import { Ng2OrderModule } from 'ng2-order-pipe';

import { ServicoResolver } from '../_guards/servico.resolver';

import { ServicosRoutingModule } from './servicos.routing.module';

import { ServicosComponent } from './servicos.component';
import { DetalheServicoComponent } from './detalhe-servico/detalhe-servico.component';
import { EditarServicoComponent } from './editar-servico/editar-servico.component';
import { NovoServicoComponent } from './novo-servico/novo-servico.component';

import { ImagePreviewServico } from './../_directives/image-preview-servico.directive';

import { CurrencyFormatServicosPipe } from './../_pipes/currency-format-servicos.pipe';

@NgModule({
  declarations: [
    ServicosComponent,
    DetalheServicoComponent,
    EditarServicoComponent,
    NovoServicoComponent,
    ImagePreviewServico,
    CurrencyFormatServicosPipe
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
    ServicosRoutingModule
  ],
  providers: [
    ServicoResolver
  ]
})
export class ServicosModule { }