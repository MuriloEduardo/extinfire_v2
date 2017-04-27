import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterializeModule } from 'angular2-materialize';
import { FileUploadModule } from "ng2-file-upload";
import { TextMaskModule } from 'angular2-text-mask';
import { Ng2PaginationModule } from 'ng2-pagination';
import { Ng2OrderModule } from 'ng2-order-pipe';

import { ClientesRoutingModule } from './clientes.routing.module';

import { ClientesComponent } from './clientes.component';
import { NovoClienteComponent } from './novo-cliente/novo-cliente.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import { DetalheClienteComponent } from './detalhe-cliente/detalhe-cliente.component';

import { ImagePreviewCliente } from './../_directives/image-preview-cliente.directive';

@NgModule({
  declarations: [
    ClientesComponent,
    NovoClienteComponent,
    EditarClienteComponent,
    DetalheClienteComponent,
    ImagePreviewCliente
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    FileUploadModule,
    ClientesRoutingModule,
    Ng2PaginationModule,
    TextMaskModule,
    Ng2OrderModule
  ],
  providers: []
})
export class ClientesModule { }