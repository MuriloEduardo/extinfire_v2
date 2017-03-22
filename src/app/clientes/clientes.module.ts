import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterializeModule } from 'angular2-materialize';
import { FileUploadModule } from "ng2-file-upload";

import { ClientesRoutingModule } from './clientes.routing.module';

import { ClientesService } from '../_services/clientes.service';
import { ClientesResolver } from '../_guards/clientes.resolver';
import { ClienteResolver } from '../_guards/cliente.resolver';

import { ClientesComponent } from './clientes.component';
import { NovoClienteComponent } from './novo-cliente/novo-cliente.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import { DetalheClienteComponent } from './detalhe-cliente/detalhe-cliente.component';

@NgModule({
  declarations: [
    ClientesComponent,
    NovoClienteComponent,
    EditarClienteComponent,
    DetalheClienteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    FileUploadModule,
    ClientesRoutingModule
  ],
  providers: [
    ClientesService,
    ClientesResolver,
    ClienteResolver
  ]
})
export class ClientesModule { }