import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { PerfilComponent } from './perfil/perfil.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogsComponent } from './logs/logs.component';
import { FinanceiroComponent } from './financeiro/financeiro.component';
import { LoginComponent } from './login/login.component';

import { MaterializeModule } from 'angular2-materialize';
import { FileUploadModule } from "ng2-file-upload";
import { TextMaskModule } from 'angular2-text-mask';
import { Ng2PaginationModule } from 'ng2-pagination';
import { Ng2OrderModule } from 'ng2-order-pipe';

import { UsuariosService } from './_services/usuarios.service';
import { ClientesService } from './_services/clientes.service';
import { VendasService } from './_services/vendas.service';
import { AuthService } from './_services/auth.service';
import { LogsService } from './_services/logs.service';
import { ProdutosService } from './_services/produtos.service';
import { ServicosService } from './_services/servicos.service';

import { AuthGuard } from './_guards/auth.guard';

import { VendasResolver } from './_guards/vendas.resolver';
import { ClientesResolver } from './_guards/clientes.resolver';
import { LogsResolver } from './_guards/logs.resolver';
import { UsuariosResolver } from './_guards/usuarios.resolver';
import { ProdutosResolver } from './_guards/produtos.resolver';
import { ServicosResolver } from './_guards/servicos.resolver';

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    DashboardComponent,
    LogsComponent,
    FinanceiroComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    FileUploadModule,
    Ng2PaginationModule,
    Ng2OrderModule,
    AppRoutingModule
  ],
  providers: [
    
    AuthGuard,

    UsuariosService,
    ClientesService,

    VendasService,
    AuthService,
    ProdutosService,
    LogsService,
    ServicosService,

    VendasResolver,
    ClientesResolver,
    LogsResolver,
    UsuariosResolver,
    ProdutosResolver,
    ServicosResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }