import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterializeModule } from 'angular2-materialize';

import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { PerfilComponent } from './perfil/perfil.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServicosComponent } from './servicos/servicos.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { LogsComponent } from './logs/logs.component';
import { FinanceiroComponent } from './financeiro/financeiro.component';

import { UsuariosService } from './services/usuarios.service';
import { ProdutosService } from './services/produtos.service';
import { ClientesService } from './services/clientes.service';
import { ServicosService } from './services/servicos.service';

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    DashboardComponent,
    ServicosComponent,
    ProdutosComponent,
    ClientesComponent,
    UsuariosComponent,
    LogsComponent,
    FinanceiroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterializeModule
  ],
  providers: [
    UsuariosService,
    ProdutosService,
    ClientesService,
    ServicosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }