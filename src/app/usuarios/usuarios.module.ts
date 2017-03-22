import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterializeModule } from 'angular2-materialize';
import { FileUploadModule } from "ng2-file-upload";

import { UsuariosService } from '../_services/usuarios.service';
import { UsuarioResolver } from '../_guards/usuario.resolver';

import { UsuariosRoutingModule } from './usuarios.routing.module';

import { UsuariosComponent } from './usuarios.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';
import { DetalheUsuarioComponent } from './detalhe-usuario/detalhe-usuario.component';

@NgModule({
  declarations: [
    UsuariosComponent,    
    EditarUsuarioComponent,
    NovoUsuarioComponent,
    DetalheUsuarioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    FileUploadModule,
    UsuariosRoutingModule
  ],
  providers: [
    UsuariosService,
    UsuarioResolver
  ]
})
export class UsuariosModule { }