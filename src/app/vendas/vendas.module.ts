import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterializeModule } from 'angular2-materialize';
import { FileUploadModule } from "ng2-file-upload";
import { Ng2PaginationModule } from 'ng2-pagination';
import { TextMaskModule } from 'angular2-text-mask';
import { Ng2OrderModule } from 'ng2-order-pipe';

import { VendasRoutingModule  } from './vendas.routing.module';

import { VendasService } from '../_services/vendas.service';
import { VendaResolver } from '../_guards/venda.resolver';

import { VendasComponent } from './vendas.component';
import { DetalheVendaComponent } from './detalhe-venda/detalhe-venda.component';
import { EditarVendaComponent } from './editar-venda/editar-venda.component';
import { NovaVendaComponent } from './nova-venda/nova-venda.component';

@NgModule({
  declarations: [
    VendasComponent,
    DetalheVendaComponent,
    EditarVendaComponent,
    NovaVendaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    FileUploadModule,
    Ng2PaginationModule,
    TextMaskModule,
    Ng2OrderModule,
    VendasRoutingModule
  ],
  providers: [
    VendasService,
    VendaResolver
  ]
})
export class VendasModule { }