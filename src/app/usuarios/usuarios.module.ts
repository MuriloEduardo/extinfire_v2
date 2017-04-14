import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterializeModule } from 'angular2-materialize';
import { FileUploadModule } from "ng2-file-upload";
import { Ng2PaginationModule } from 'ng2-pagination';
import { Ng2OrderModule } from 'ng2-order-pipe';

import { UsuarioResolver } from '../_guards/usuario.resolver';

import { UsuariosRoutingModule } from './usuarios.routing.module';

import { UsuariosComponent } from './usuarios.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';
import { DetalheUsuarioComponent } from './detalhe-usuario/detalhe-usuario.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';

@NgModule({
  declarations: [
    UsuariosComponent,    
    EditarUsuarioComponent,
    NovoUsuarioComponent,
    DetalheUsuarioComponent,
    ListaUsuariosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    FileUploadModule,
    Ng2PaginationModule,
    Ng2OrderModule,
    UsuariosRoutingModule
  ],
  providers: [
    UsuarioResolver
  ]
})
export class UsuariosModule { }