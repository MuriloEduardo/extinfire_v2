webpackJsonp([3,10],{"5RuD":function(t,e,r){e=t.exports=r("FZ+f")(!1),e.push([t.i,"",""]),t.exports=t.exports.toString()},"7Nky":function(t,e,r){"use strict";var i=r("3j3K");r.d(e,"a",function(){return s});var n=this&&this.__decorate||function(t,e,r,i){var n,a=arguments.length,s=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,i);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(s=(a<3?n(s):a>3?n(e,r,s):n(e,r))||s);return a>3&&s&&Object.defineProperty(e,r,s),s},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(){}return t.prototype.ngOnInit=function(){},t}();s=n([r.i(i.Component)({selector:"app-usuarios",template:r("kkf1"),styles:[r("sCsr")]}),a("design:paramtypes",[])],s)},"8oFq":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r("3j3K"),n=r("2Je8"),a=r("NVOs"),s=r("Fzro"),o=r("gwU6"),c=(r.n(o),r("xHUa")),l=(r.n(c),r("ur0Y")),d=(r.n(l),r("eSKb")),u=(r.n(d),r("iMSX")),v=r("7Nky"),p=r("MFMB"),f=r("vw5c"),h=r("bPLv"),m=r("iUhd");r.d(e,"UsuariosModule",function(){return b});var g=this&&this.__decorate||function(t,e,r,i){var n,a=arguments.length,s=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,i);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(s=(a<3?n(s):a>3?n(e,r,s):n(e,r))||s);return a>3&&s&&Object.defineProperty(e,r,s),s},b=function(){function t(){}return t}();b=g([r.i(i.NgModule)({declarations:[v.a,p.a,f.a,h.a,m.a],imports:[n.CommonModule,a.FormsModule,s.a,o.MaterializeModule,c.FileUploadModule,l.Ng2PaginationModule,d.Ng2OrderModule,u.a],providers:[]})],b)},JdnW:function(t,e){t.exports='<nav class="header-pages white">\r\n\t<div class="nav-wrapper">\r\n\t\t<div class="col s12">\r\n\t\t\t<a routerLink="/usuarios" class="breadcrumb">Lista de Usuários</a>\r\n\t\t\t<span class="breadcrumb">Detalhe do Usuário</span>\r\n\t\t</div>\r\n\t</div>\r\n</nav>\r\n\x3c!-- Botoes de ação --\x3e\r\n<div class="row" *ngIf="loadStatus">\r\n\t<div class="col s12 right-align">\r\n\t\t<a *ngIf="usuario._id!=usuarioLocalStorage._id" class="waves-effect waves-light btn red darken-1" [routerLink]="[\'/usuarios\', usuario._id, \'editar\']">Editar</a>\r\n\t\t<a *ngIf="usuario._id!=usuarioLocalStorage._id" class="waves-effect waves-light btn grey darken-4" (click)="deleteUsuario(usuario)">Excluir</a>\r\n\t\t<a class="waves-effect waves-light btn grey" routerLink="/usuarios">Cancelar</a>\r\n\t</div>\r\n</div>\r\n<div class="section"></div>\r\n\x3c!-- Carregando --\x3e\r\n<div class="row" *ngIf="!loadStatus">\r\n\t<div class="col s12">\r\n\t\t<div id="loader" class="preloader-wrapper big active">\r\n\t\t\t<div class="spinner-layer spinner-red-only">\r\n\t\t\t\t<div class="circle-clipper left">\r\n\t\t\t\t\t<div class="circle"></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="gap-patch">\r\n\t\t\t\t\t<div class="circle"></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="circle-clipper right">\r\n\t\t\t\t\t<div class="circle"></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\x3c!-- Sem nenhum serviço --\x3e\r\n<div class="row" *ngIf="usuario&&loadStatus">\r\n\t<div class="col s12 push-m3 m6 center-align">\r\n\t\t<div class="row">\r\n\t\t\t<div class="col s12">\r\n\t\t\t\t<div class="firs-letter-big-users z-depth-2 circle red darken-1">\r\n\t\t\t\t\t{{ usuario.nome.charAt(0) }}\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="row">\r\n\t\t\t\x3c!-- Nome do usuario --\x3e\r\n\t\t\t<div class="col s6">\r\n\t\t\t\t<label>Nome</label>\r\n\t\t\t\t<h5>{{ usuario.nome }}</h5>\r\n\t\t\t</div>\r\n\t\t\r\n\t\t\t\x3c!-- Tipo do usuario --\x3e\r\n\t\t\t<div class="col s6">\r\n\t\t\t\t<label>Tipo</label>\r\n\t\t\t\t<h5>{{ !usuario.tipo ? \'Comun\' : \'Administrador\' }}</h5>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t\x3c!-- Email do usuario --\x3e\r\n\t\t<div class="row">\r\n\t\t\t<div class="col s6">\r\n\t\t\t\t<label>Email</label>\r\n\t\t\t\t<h5>{{ usuario.email }}</h5>\r\n\t\t\t</div>\r\n\t\t\t<div class="col s6">\r\n\t\t\t\t<label>Criado Em</label>\r\n\t\t\t\t<h5>{{ usuario.updatedAt | date:\'dd/MM/yyyy HH:mm:ss\' }}</h5>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<a (click)="triggerToast()" materialize [materializeActions]="globalActions"></a>'},MFMB:function(t,e,r){"use strict";var i=r("3j3K"),n=r("5oXY"),a=r("M6ii");r.d(e,"a",function(){return c});var s=this&&this.__decorate||function(t,e,r,i){var n,a=arguments.length,s=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,i);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(s=(a<3?n(s):a>3?n(e,r,s):n(e,r))||s);return a>3&&s&&Object.defineProperty(e,r,s),s},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t,e,r){this.usuariosService=t,this.route=e,this.router=r,this.globalActions=new i.EventEmitter,this.usuario={},this.loadStatus=!1}return t.prototype.ngOnInit=function(){var t=this;this.inscricao=this.route.params.subscribe(function(e){t.usuariosService.getUser(e.id).subscribe(function(e){t.usuario=e,t.loadStatus=!0})})},t.prototype.ngAfterViewChecked=function(){Materialize.updateTextFields&&Materialize.updateTextFields()},t.prototype.updateUsuario=function(){var t=this,e={_id:this.usuario._id,nome:this.usuario.nome,tipo:this.usuario.tipo,email:this.usuario.email};this.usuariosService.updateUser(e).subscribe(function(e){t.router.navigate(["usuarios"]),t.triggerToast("Usuário editado com sucesso!","green")})},t.prototype.triggerToast=function(t,e){this.globalActions.emit({action:"toast",params:[t,4e3,e]})},t}();c=s([r.i(i.Component)({selector:"app-editar-usuario",template:r("RSn4"),styles:[r("5RuD")]}),o("design:paramtypes",["function"==typeof(l=void 0!==a.a&&a.a)&&l||Object,"function"==typeof(d=void 0!==n.b&&n.b)&&d||Object,"function"==typeof(u=void 0!==n.c&&n.c)&&u||Object])],c);var l,d,u},RSn4:function(t,e){t.exports='<nav class="header-pages white">\r\n\t<div class="nav-wrapper">\r\n\t\t<div class="col s12">\r\n\t\t\t<a routerLink="/usuarios" class="breadcrumb">Lista de Usuários</a>\r\n\t\t\t<a [routerLink]="[\'/usuarios\', usuario._id]" class="breadcrumb">Detalhe do Usuário</a>\r\n\t\t\t<span class="breadcrumb">Novo Usuário</span>\r\n\t\t</div>\r\n\t</div>\r\n</nav>\r\n\x3c!-- Carregando --\x3e\r\n<div class="row" *ngIf="!loadStatus">\r\n\t<div class="col s12">\r\n\t\t<div id="loader" class="preloader-wrapper big active">\r\n\t\t\t<div class="spinner-layer spinner-red-only">\r\n\t\t\t\t<div class="circle-clipper left">\r\n\t\t\t\t\t<div class="circle"></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="gap-patch">\r\n\t\t\t\t\t<div class="circle"></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="circle-clipper right">\r\n\t\t\t\t\t<div class="circle"></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<form (submit)="updateUsuario($event)" *ngIf="loadStatus">\r\n\t\x3c!-- Botoes de ação --\x3e\r\n\t<div class="row">\r\n\t\t<div class="col s12 right-align">\r\n\t\t\t<button type="submit" class="waves-effect waves-light btn red darken-1" name="action">Salvar e Cadastrar</button>\r\n\t\t\t<a class="waves-effect waves-light btn grey" [routerLink]="[\'/usuarios\', usuario._id]">Cancelar e Voltar</a>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class="section"></div>\r\n\t<div class="row">\r\n\t\t<div class="col s12 push-m3 m6 center-align">\r\n\t\t\t<div class="row">\r\n\t\t\t\t<div class="col s12">\r\n\t\t\t\t\t<div class="firs-letter-big-users z-depth-2 circle red darken-1">\r\n\t\t\t\t\t\t{{ usuario.nome.charAt(0) || \'\' }}\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class="row">\r\n\t\t\t\t<div class="col s12">\r\n\t\t\t\t\t<div class="input-field">\r\n\t\t\t\t\t\t\x3c!-- Switch --\x3e\r\n\t\t\t\t\t\t<div class="switch">\r\n\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\tUsuário\r\n\t\t\t\t\t\t\t\t<input type="checkbox" [(ngModel)]="usuario.tipo" name="tipo">\r\n\t\t\t\t\t\t\t\t<span class="lever"></span>\r\n\t\t\t\t\t\t\t\tAdmnistrador\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<br><br>\r\n\t\t\t<div class="row">\r\n\t\t\t\t<div class="col s12">\r\n\t\t\t\t\t<div class="input-field">\r\n\t\t\t\t\t\t<input id="nome" type="text" [(ngModel)]="usuario.nome" name="nome" required="" aria-required="true">\r\n\t\t\t\t\t\t<label for="nome">Nome</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class="input-field">\r\n\t\t\t\t\t\t<input id="email" type="email" [(ngModel)]="usuario.email" name="email"  required="" aria-required="true">\r\n\t\t\t\t\t\t<label for="email">Email</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</form>\r\n<a (click)="triggerToast()" materialize [materializeActions]="globalActions"></a>'},bPLv:function(t,e,r){"use strict";var i=r("3j3K"),n=r("5oXY"),a=r("M6ii");r.d(e,"a",function(){return c});var s=this&&this.__decorate||function(t,e,r,i){var n,a=arguments.length,s=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,i);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(s=(a<3?n(s):a>3?n(e,r,s):n(e,r))||s);return a>3&&s&&Object.defineProperty(e,r,s),s},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t,e,r){this.usuariosService=t,this.route=e,this.router=r,this.globalActions=new i.EventEmitter,this.usuario={},this.usuarioLocalStorage=JSON.parse(window.localStorage.getItem("user")),this.loadStatus=!1}return t.prototype.ngOnInit=function(){var t=this;this.inscricao=this.route.params.subscribe(function(e){t.usuariosService.getUser(e.id).subscribe(function(e){t.usuario=e,t.loadStatus=!0})})},t.prototype.deleteUsuario=function(t){var e=this;if(this.usuario._id==this.usuarioLocalStorage._id)return!1;this.usuariosService.deleteUser(t).subscribe(function(t){t.n&&(e.router.navigate(["usuarios"]),e.triggerToast("Usuário excluido com sucesso!","green"))})},t.prototype.triggerToast=function(t,e){this.globalActions.emit({action:"toast",params:[t,4e3,e]})},t}();c=s([r.i(i.Component)({selector:"app-detalhe-usuario",template:r("JdnW"),styles:[r("n5mr")]}),o("design:paramtypes",["function"==typeof(l=void 0!==a.a&&a.a)&&l||Object,"function"==typeof(d=void 0!==n.b&&n.b)&&d||Object,"function"==typeof(u=void 0!==n.c&&n.c)&&u||Object])],c);var l,d,u},fcJG:function(t,e,r){e=t.exports=r("FZ+f")(!1),e.push([t.i,"",""]),t.exports=t.exports.toString()},h68t:function(t,e){t.exports='<nav class="header-pages white">\n\t<div class="nav-wrapper">\n\t\t<div class="col s12">\n\t\t\t<span class="breadcrumb">Lista de Usuários</span>\n\t\t</div>\n\t</div>\n</nav>\n\x3c!-- Botoes de ação --\x3e\n<div class="row" *ngIf="loadStatus">\n\t<div class="col s12 right-align">\n\t\t<a routerLink="novo" class="waves-effect waves-light btn red darken-1">Novo Usuário</a>\n\t</div>\n</div>\n<div class="section"></div>\n\x3c!-- Carregando --\x3e\n<div class="row" *ngIf="!loadStatus">\n\t<div class="col s12">\n\t\t<div id="loader" class="preloader-wrapper big active">\n\t\t\t<div class="spinner-layer spinner-red-only">\n\t\t\t\t<div class="circle-clipper left">\n\t\t\t\t\t<div class="circle"></div>\n\t\t\t\t</div>\n\t\t\t\t<div class="gap-patch">\n\t\t\t\t\t<div class="circle"></div>\n\t\t\t\t</div>\n\t\t\t\t<div class="circle-clipper right">\n\t\t\t\t\t<div class="circle"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\x3c!-- Sem nenhum usuario --\x3e\n<div class="row" *ngIf="!usuarios.length&&loadStatus">\n\t<div class="col s12">\n\t\t<div class="section"></div>\n\t\t<div class="center-align">\n\t\t\t<div class="grey-text text-lighten-2">\n\t\t\t\t<h2>Sem nenhum usuário aqui <br><small>clique em Novo Usuário</small></h2>\n\t\t\t\t<i class="material-icons big">&#xE814;</i>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div class="row" *ngIf="usuarios.length">\n\t<div class="col s12">\n\t\t<table class="bordered highlight responsive-table">\n\t\t\t<thead>\n\t\t\t\t<tr class="orders">\n\t\t\t\t\t<th \n\t\t\t\t\tdata-field="nome" \n\t\t\t\t\t(click)="setOrder(\'nome\')"\n\t\t\t\t\t[class.active]="order === \'nome\'"\n\t\t\t\t\t>\n\t\t\t\t\t\tUsuário\n\t\t\t\t\t\t<span [hidden]="reverse">\n\t\t\t\t\t\t\t<i class="material-icons right">&#xE5C5;</i>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<span [hidden]="!reverse">\n\t\t\t\t\t\t\t<i class="material-icons right">&#xE5C7;</i>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</th>\n\t\t\t\t\t<th \n\t\t\t\t\tdata-field="tipo" \n\t\t\t\t\t(click)="setOrder(\'tipo\')"\n\t\t\t\t\t[class.active]="order === \'tipo\'"\n\t\t\t\t\t>\n\t\t\t\t\t\tTipo\n\t\t\t\t\t\t<span [hidden]="reverse">\n\t\t\t\t\t\t\t<i class="material-icons right">&#xE5C5;</i>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<span [hidden]="!reverse">\n\t\t\t\t\t\t\t<i class="material-icons right">&#xE5C7;</i>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</th>\n\t\t\t\t\t<th \n\t\t\t\t\tdata-field="obs" \n\t\t\t\t\t(click)="setOrder(\'email\')"\n\t\t\t\t\t[class.active]="order === \'email\'"\n\t\t\t\t\t>\n\t\t\t\t\t\tEmail\n\t\t\t\t\t\t<span [hidden]="reverse">\n\t\t\t\t\t\t\t<i class="material-icons right">&#xE5C5;</i>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<span [hidden]="!reverse">\n\t\t\t\t\t\t\t<i class="material-icons right">&#xE5C7;</i>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</th>\n\t\t\t\t\t<th \n\t\t\t\t\tdata-field="dataCriado" \n\t\t\t\t\t(click)="setOrder(\'updatedAt\')"\n\t\t\t\t\t[class.active]="order === \'updatedAt\'"\n\t\t\t\t\t>\n\t\t\t\t\t\tData Criado\n\t\t\t\t\t\t<span [hidden]="reverse">\n\t\t\t\t\t\t\t<i class="material-icons right">&#xE5C5;</i>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<span [hidden]="!reverse">\n\t\t\t\t\t\t\t<i class="material-icons right">&#xE5C7;</i>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</th>\n\t\t\t\t\t<th></th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t<tr *ngFor="let usuario of usuarios | orderBy: order:reverse | paginate: { itemsPerPage: 10, currentPage: p }" [routerLink]="[usuario._id]">\n\t\t\t\t\t<td class="valign-wrapper">\n\t\t\t\t\t\t<div class="firs-letter-users circle red darken-1 valign">\n\t\t\t\t\t\t\t{{ usuario.nome.charAt(0) }}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="valign">\n\t\t\t\t\t\t\t{{ usuario.nome }}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>{{ usuario.tipo ? \'Administrador\' : \'Comun\' }}</td>\n\t\t\t\t\t<td>{{ usuario.email }}</td>\n\t\t\t\t\t<td>{{ usuario.updatedAt | date:\'dd/MM/yyyy HH:mm:ss\' }}</td>\n\t\t\t\t\t<td><i class="material-icons">&#xE315;</i></td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t\t<pagination-controls \n\t\t(pageChange)="p = $event" \n\t\tpreviousLabel="Anterior"\n        nextLabel="Próximo"\n        *ngIf="usuarios.length>9"\n        ></pagination-controls>\n\t</div>\n</div>'},iMSX:function(t,e,r){"use strict";var i=r("3j3K"),n=r("5oXY"),a=r("bFNJ"),s=r("7Nky"),o=r("MFMB"),c=r("vw5c"),l=r("bPLv"),d=r("iUhd");r.d(e,"a",function(){return p});var u=this&&this.__decorate||function(t,e,r,i){var n,a=arguments.length,s=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,i);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(s=(a<3?n(s):a>3?n(e,r,s):n(e,r))||s);return a>3&&s&&Object.defineProperty(e,r,s),s},v=[{path:"",component:s.a,canActivateChild:[a.a],children:[{path:"novo",component:c.a},{path:":id",component:l.a},{path:":id/editar",component:o.a},{path:"",component:d.a}]}],p=function(){function t(){}return t}();p=u([r.i(i.NgModule)({imports:[n.a.forChild(v)],exports:[n.a]})],p)},iUhd:function(t,e,r){"use strict";var i=r("3j3K"),n=r("M6ii");r.d(e,"a",function(){return o});var a=this&&this.__decorate||function(t,e,r,i){var n,a=arguments.length,s=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,i);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(s=(a<3?n(s):a>3?n(e,r,s):n(e,r))||s);return a>3&&s&&Object.defineProperty(e,r,s),s},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},o=function(){function t(t){this.usuariosService=t,this.usuarios=[],this.order="updatedAt",this.reverse=!1,this.loadStatus=!1}return t.prototype.ngOnInit=function(){var t=this;this.inscricao=this.usuariosService.getUsers().subscribe(function(e){t.usuarios=e,t.loadStatus=!0})},t.prototype.setOrder=function(t){this.order===t&&(this.reverse=!this.reverse),this.order=t},t}();o=a([r.i(i.Component)({selector:"app-lista-usuarios",template:r("h68t"),styles:[r("fcJG")]}),s("design:paramtypes",["function"==typeof(c=void 0!==n.a&&n.a)&&c||Object])],o);var c},kkf1:function(t,e){t.exports="<router-outlet></router-outlet>"},lbSw:function(t,e,r){e=t.exports=r("FZ+f")(!1),e.push([t.i,"",""]),t.exports=t.exports.toString()},n5mr:function(t,e,r){e=t.exports=r("FZ+f")(!1),e.push([t.i,"",""]),t.exports=t.exports.toString()},oMGw:function(t,e){t.exports='<nav class="header-pages white">\r\n\t<div class="nav-wrapper">\r\n\t\t<div class="col s12">\r\n\t\t\t<a routerLink="/usuarios" class="breadcrumb">Lista de Usuários</a>\r\n\t\t\t<span class="breadcrumb">Novo Usuário</span>\r\n\t\t</div>\r\n\t</div>\r\n</nav>\r\n<form (submit)="novoUsuario($event)">\r\n\t\x3c!-- Botoes de ação --\x3e\r\n\t<div class="row">\r\n\t\t<div class="col s12 right-align">\r\n\t\t\t<button type="submit" class="waves-effect waves-light btn red darken-1" name="action">Salvar e Cadastrar</button>\r\n\t\t\t<a class="waves-effect waves-light btn grey" routerLink="/usuarios">Cancelar e Voltar</a>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class="section"></div>\r\n\t<div class="row">\r\n\t\t<div class="col s12 push-m3 m6 center-align">\r\n\t\t\t<div class="row">\r\n\t\t\t\t<div class="col s12">\r\n\t\t\t\t\t<div class="firs-letter-big-users z-depth-2 circle red darken-1">\r\n\t\t\t\t\t\t{{ nome?.charAt(0) || \'\' }}\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class="row">\r\n\t\t\t\t<div class="col s12">\r\n\t\t\t\t\t<div class="input-field">\r\n\t\t\t\t\t\t\x3c!-- Switch --\x3e\r\n\t\t\t\t\t\t<div class="switch">\r\n\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\tUsuário\r\n\t\t\t\t\t\t\t\t<input type="checkbox" [(ngModel)]="tipo" name="tipo">\r\n\t\t\t\t\t\t\t\t<span class="lever"></span>\r\n\t\t\t\t\t\t\t\tAdmnistrador\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<br><br>\r\n\t\t\t<div class="row">\r\n\t\t\t\t<div class="col s12">\r\n\t\t\t\t\t<div class="input-field">\r\n\t\t\t\t\t\t<input id="nome" type="text" [(ngModel)]="nome" name="nome" required="" aria-required="true">\r\n\t\t\t\t\t\t<label for="nome">Nome</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class="input-field">\r\n\t\t\t\t\t\t<input id="email" type="email" [(ngModel)]="email" name="email"  required="" aria-required="true">\r\n\t\t\t\t\t\t<label for="email">Email</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class="input-field">\r\n\t\t\t\t\t\t<input id="senha" type="password" [(ngModel)]="senha" name="senha"  required="" aria-required="true">\r\n\t\t\t\t\t\t<label for="senha">Senha</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</form>\r\n<a (click)="triggerToast()" materialize [materializeActions]="globalActions"></a>'},sCsr:function(t,e,r){e=t.exports=r("FZ+f")(!1),e.push([t.i,".collection .collection-item.avatar .secondary-content .switch{margin:7px}",""]),t.exports=t.exports.toString()},vw5c:function(t,e,r){"use strict";var i=r("3j3K"),n=r("5oXY"),a=r("M6ii");r.d(e,"a",function(){return c});var s=this&&this.__decorate||function(t,e,r,i){var n,a=arguments.length,s=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,i);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(s=(a<3?n(s):a>3?n(e,r,s):n(e,r))||s);return a>3&&s&&Object.defineProperty(e,r,s),s},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t,e){this.usuariosService=t,this.router=e,this.globalActions=new i.EventEmitter}return t.prototype.ngOnInit=function(){},t.prototype.ngAfterViewChecked=function(){Materialize.updateTextFields&&Materialize.updateTextFields()},t.prototype.novoUsuario=function(t){var e=this;if(t.preventDefault(),!this.email)return!1;var r={nome:this.nome,tipo:this.tipo,email:this.email,senha:this.senha};this.inscricao=this.usuariosService.addUser(r).subscribe(function(t){e.router.navigate(["usuarios"]),e.triggerToast("Usuário cadastrado com sucesso!","green")})},t.prototype.triggerToast=function(t,e){this.globalActions.emit({action:"toast",params:[t,4e3,e]})},t}();c=s([r.i(i.Component)({selector:"app-novo-usuario",template:r("oMGw"),styles:[r("lbSw")]}),o("design:paramtypes",["function"==typeof(l=void 0!==a.a&&a.a)&&l||Object,"function"==typeof(d=void 0!==n.c&&n.c)&&d||Object])],c);var l,d}});