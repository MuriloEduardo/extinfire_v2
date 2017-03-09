import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterializeModule } from 'angular2-materialize';
import { FileUploadModule } from "ng2-file-upload";
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { PerfilComponent } from './perfil/perfil.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServicosComponent } from './servicos/servicos.component';
import { EstoqueComponent } from './estoque/estoque.component';
import { ClientesComponent } from './clientes/clientes.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { LogsComponent } from './logs/logs.component';
import { FinanceiroComponent } from './financeiro/financeiro.component';
import { LoginComponent } from './login/login.component';

import { UsuariosService } from './services/usuarios.service';
import { EstoqueService } from './services/estoque.service';
import { ClientesService } from './services/clientes.service';
import { ServicosService } from './services/servicos.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    DashboardComponent,
    ServicosComponent,
    EstoqueComponent,
    ClientesComponent,
    UsuariosComponent,
    LogsComponent,
    FinanceiroComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterializeModule,
    FileUploadModule,
    ChartsModule
  ],
  providers: [
    UsuariosService,
    EstoqueService,
    ClientesService,
    ServicosService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }