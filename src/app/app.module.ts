import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterializeModule } from 'angular2-materialize';
import { FileUploadModule } from "ng2-file-upload";
import { ChartsModule } from 'ng2-charts';

import { ProdutosModule } from './produtos/produtos.module';
import { ClientesModule } from './clientes/clientes.module';

import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { PerfilComponent } from './perfil/perfil.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VendasComponent } from './vendas/vendas.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { LogsComponent } from './logs/logs.component';
import { FinanceiroComponent } from './financeiro/financeiro.component';
import { LoginComponent } from './login/login.component';

import { UsuariosService } from './_services/usuarios.service';
import { ClientesService } from './_services/clientes.service';
import { VendasService } from './_services/vendas.service';
import { AuthService } from './_services/auth.service';
import { LogsService } from './_services/logs.service';
import { ProdutosService } from './_services/produtos.service';

import { AuthGuard } from './_guards/auth.guard';
import { VendasResolver } from './_guards/vendas.resolver';
import { ClientesResolver } from './_guards/clientes.resolver';
import { LogsResolver } from './_guards/logs.resolver';
import { UsuariosResolver } from './_guards/usuarios.resolver';
import { ProdutosResolver } from './_guards/produtos.resolver';

import { ImagePreview } from './_directives/image-preview.directive';


@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    DashboardComponent,
    VendasComponent,
    UsuariosComponent,
    LogsComponent,
    FinanceiroComponent,
    LoginComponent,
    ImagePreview
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    FileUploadModule,
    ChartsModule,
    AppRoutingModule
  ],
  providers: [
    UsuariosService,
    ClientesService,
    VendasService,
    AuthService,
    ProdutosService,
    AuthGuard,
    LogsService,
    VendasResolver,
    ClientesResolver,
    LogsResolver,
    UsuariosResolver,
    ProdutosResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }