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
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';

import { UsuariosService } from './_services/usuarios.service';
import { ClientesService } from './_services/clientes.service';
import { VendasService } from './_services/vendas.service';
import { AuthService } from './_services/auth.service';
import { LogsService } from './_services/logs.service';
import { ItensService } from './_services/itens.service';

import { AuthGuard } from './_guards/auth.guard';
import { UsuariosGuard } from './_guards/usuarios.guard';

import { SearchComponent } from './search/search.component';
import { Page404Component } from './page404/page404.component';

import { CurrencyFormatFinanceiroPipe } from './_pipes/currency-format-financeiro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    DashboardComponent,
    LogsComponent,
    FinanceiroComponent,
    LoginComponent,
    SearchComponent,
    Page404Component,
    CurrencyFormatFinanceiroPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    FileUploadModule,
    Ng2PaginationModule,
    Ng2OrderModule,
    Ng2FilterPipeModule,
    AppRoutingModule
  ],
  providers: [
    
    AuthGuard,
    UsuariosGuard,

    UsuariosService,
    ClientesService,

    VendasService,
    AuthService,
    ItensService,
    LogsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }