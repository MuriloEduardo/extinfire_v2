import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterializeModule } from 'angular2-materialize';
import { FileUploadModule } from "ng2-file-upload";

import { ServicosRoutingModule } from './servicos.routing.module';

import { ServicosService } from '../_services/servicos.service';
import { ServicosResolver } from '../_guards/servicos.resolver';
import { ServicoResolver } from '../_guards/servico.resolver';

import { ServicosComponent } from './servicos.component';
import { DetalheServicoComponent } from './detalhe-servico/detalhe-servico.component';
import { EditarServicoComponent } from './editar-servico/editar-servico.component';
import { NovoServicoComponent } from './novo-servico/novo-servico.component';

import { ImagePreviewServico } from './../_directives/image-preview-servico.directive';

@NgModule({
  declarations: [
    ServicosComponent,
    DetalheServicoComponent,
    EditarServicoComponent,
    NovoServicoComponent,
    ImagePreviewServico
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    FileUploadModule,
    ServicosRoutingModule
  ],
  providers: [
    ServicosService,
    ServicoResolver
  ]
})
export class ServicosModule { }