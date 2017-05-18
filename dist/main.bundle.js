webpackJsonp([6,10],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
        console.dir('AuthGuard Inicializado...');
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        this.urlAtualy = state.url;
        if (window.localStorage.getItem('auth_key')) {
            this.authService.setUsuarioAutenticado(JSON.parse(window.localStorage.getItem('user')));
            // Se for false, não é administrador
            if (!JSON.parse(window.localStorage.getItem('user')).tipo && (state.url.includes('usuarios') || state.url.includes('financeiro'))) {
                alert('Usuário sem permissão');
                this.router.navigate(['']);
                return false;
            }
            return true;
        }
        this.router.navigate(['login']);
        return false;
    };
    AuthGuard.prototype.verificarAcesso = function (url) {
        if (window.localStorage.getItem('auth_key')) {
            return true;
        }
        this.router.navigate(['login']);
        return false;
    };
    AuthGuard.prototype.canLoad = function (route) {
        return this.verificarAcesso();
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=C:/Users/desenvolvedor/extinfire_v2/src/auth.guard.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_itens_service__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(itensService) {
        this.itensService = itensService;
        this.produtos = [];
        this.loadStatus = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.itensService.getItens().subscribe(function (produtos) {
            for (var i = 0; i < produtos.length; ++i) {
                if (produtos[i].qntde_atual <= produtos[i].qntde_minima) {
                    _this.produtos.push(produtos[i]);
                }
            }
            _this.loadStatus = true;
        });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(390),
        styles: [__webpack_require__(368)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_itens_service__["a" /* ItensService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_itens_service__["a" /* ItensService */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=C:/Users/desenvolvedor/extinfire_v2/src/dashboard.component.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_vendas_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_clientes_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_itens_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_config__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinanceiroComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FinanceiroComponent = (function () {
    function FinanceiroComponent(vendasService, clientesService, itensService) {
        this.vendasService = vendasService;
        this.clientesService = clientesService;
        this.itensService = itensService;
        this.vendas = [];
        this.vendasLiquidas = [];
        this.loadStatus = false;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* AppSettings */].API_ENDPOINT;
        this.validadeDe = new Date().toLocaleDateString('pt-BR');
        this.validadeAte = new Date().toLocaleDateString('pt-BR');
        this.paramsPickdate = {
            monthsFull: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            weekdaysFull: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabádo'],
            weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
            today: 'Hoje',
            clear: 'Limpar',
            close: 'Pronto',
            labelMonthNext: 'Próximo mês',
            labelMonthPrev: 'Mês anterior',
            labelMonthSelect: 'Selecione um mês',
            labelYearSelect: 'Selecione um ano',
            format: 'dd/mm/yyyy',
            closeOnSelect: true,
            selectMonths: true,
            selectYears: 15,
            onSet: function (ele) {
                if (ele.select) {
                    this.close();
                }
            }
        };
        this.valoresBrutos = [];
        this.valoresLiquidos = [];
        // lineChart
        this.lineChartData = [
            { data: this.valoresBrutos, label: 'Valor Bruto' },
            { data: this.valoresLiquidos, label: 'Valor Liquido' }
        ];
        this.lineChartLabels = [];
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                backgroundColor: 'rgba(229, 57, 53,0.2)',
                borderColor: 'rgba(229, 57, 53,1)',
                pointBackgroundColor: 'rgba(229, 57, 53,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(229, 57, 53,1)'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
    }
    FinanceiroComponent.prototype.ngOnInit = function () {
        var _this = this;
        var date = new Date();
        date.setMonth(date.getMonth() + 12);
        this.validadeAte = date.toLocaleDateString('pt-BR');
        this.vendasService.getVendas().subscribe(function (vendas) {
            _this.vendas = vendas;
            var faturamentoBrutoSomado = 0;
            var faturamentoLiquidoSomado = 0;
            for (var i = 0; i < _this.vendas.length; ++i) {
                // SOMENTE SE FOR PEDIDOS
                // ORCAMENTOS NAO SAO CONTABILIZADOS
                if (_this.vendas[i].tipo) {
                    var dateFormated = new Date(_this.vendas[i].updatedAt).toLocaleString('pt-BR');
                    _this.lineChartLabels.push(dateFormated);
                    faturamentoBrutoSomado += parseFloat(_this.formatDecimal(_this.vendas[i].valor_total));
                    _this.vendas[i].valor_total = _this.formatDecimal(_this.vendas[i].valor_total);
                    _this.vendas[i].itens.filter(function (item) {
                        // Calculo para valor liquido:
                        // Valor Total do Item no Pedido - (Valor de custo * quantidade do item no pedido)
                        // Se for servico, o preco de custo é 0
                        // Valor de Todo Liquido
                        // De todos os pedidos
                        faturamentoLiquidoSomado += _this.vendas[i].valor_liquido = parseFloat(_this.formatDecimal(item.total)) - (parseFloat(_this.formatDecimal(item.item.valor_custo ? item.item.valor_custo : 0)) * item.qntde);
                        _this.valoresLiquidos.push(_this.vendas[i].valor_liquido);
                    });
                    _this.valoresBrutos.push(_this.vendas[i].valor_total);
                }
            }
            _this.faturamentoBruto = faturamentoBrutoSomado;
            _this.faturamentoLiquido = faturamentoLiquidoSomado;
            _this.loadStatus = true;
        });
        /*this.itensService.getItens().subscribe((produtos) => {
        
          this.produtos = produtos;
    
          for (var i = 0; i < this.produtos.length; ++i) {
            if(this.produtos[i].qntde_atual) {
    
              let priceVendaFloat = parseFloat(this.formatDecimal(this.produtos[i].valor_venda));
              let priceCustoFloat = parseFloat(this.formatDecimal(this.produtos[i].valor_custo));
              let priceCalculed = priceVendaFloat - priceCustoFloat;
    
              console.log(priceCalculed)
              //console.log(priceCustoFloat)
    
              this.lucroTotalEstoque += priceCalculed;
            }
          }
        });*/
        /*this.clientesService.getClientes().subscribe((clientes) => {
        
          this.clientes = clientes;
    
          
        });*/
    };
    FinanceiroComponent.prototype.formatDecimal = function (decimal) {
        if (typeof decimal === "number")
            decimal = decimal.toString();
        if (decimal.indexOf('R$') !== -1)
            decimal = decimal.replace('R$', '');
        if (decimal.indexOf('.') !== -1)
            decimal = decimal.split('.').join('');
        if (decimal.indexOf(',') !== -1)
            decimal = decimal.replace(',', '.');
        return decimal;
    };
    FinanceiroComponent.prototype.randomize = function () {
        var _lineChartData = new Array(this.lineChartData.length);
        for (var i = 0; i < this.lineChartData.length; i++) {
            _lineChartData[i] = { data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label };
            for (var j = 0; j < this.lineChartData[i].data.length; j++) {
                _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
            }
        }
        this.lineChartData = _lineChartData;
    };
    // events
    FinanceiroComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    FinanceiroComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    return FinanceiroComponent;
}());
FinanceiroComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-financeiro',
        template: __webpack_require__(391),
        styles: [__webpack_require__(369)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_vendas_service__["a" /* VendasService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_vendas_service__["a" /* VendasService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_clientes_service__["a" /* ClientesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_clientes_service__["a" /* ClientesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_itens_service__["a" /* ItensService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_itens_service__["a" /* ItensService */]) === "function" && _c || Object])
], FinanceiroComponent);

var _a, _b, _c;
//# sourceMappingURL=C:/Users/desenvolvedor/extinfire_v2/src/financeiro.component.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__usuarios_usuario__ = __webpack_require__(199);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.usuario = new __WEBPACK_IMPORTED_MODULE_3__usuarios_usuario__["a" /* Usuario */]();
        this.loadLogin = false;
        if (window.localStorage.getItem('auth_key')) {
            this.router.navigate(['']);
        }
        this.authService.setUsuarioAutenticado(false);
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.ngAfterViewChecked = function () {
        if (Materialize.updateTextFields)
            Materialize.updateTextFields();
    };
    LoginComponent.prototype.fazerLogin = function () {
        var _this = this;
        this.loadLogin = true;
        this.inscricao = this.authService.fazerLogin(this.usuario).subscribe(function (res) {
            if (res.success) {
                _this.resposta = { res: true, string: 'Sucesso!' };
                _this.router.navigate(['']);
                window.localStorage.setItem('auth_key', res.token);
                window.localStorage.setItem('user', JSON.stringify(res.user));
            }
            else {
                _this.resposta = { res: false, string: 'Login e/ou Senha Inválidos' };
            }
            ;
            _this.loadLogin = false;
        });
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.inscricao.unsubscribe();
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(392),
        styles: [__webpack_require__(370)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=C:/Users/desenvolvedor/extinfire_v2/src/login.component.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_logs_service__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogsComponent = (function () {
    function LogsComponent(logsService) {
        this.logsService = logsService;
        this.logs = [];
        this.order = 'updatedAt';
        this.reverse = true;
        this.loadStatus = false;
    }
    LogsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.inscricao = this.logsService.getLogs().subscribe(function (logs) {
            _this.logs = logs;
            _this.loadStatus = true;
        });
    };
    LogsComponent.prototype.setOrder = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
    };
    LogsComponent.prototype.ngOnDestroy = function () {
        this.inscricao.unsubscribe();
    };
    return LogsComponent;
}());
LogsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-logs',
        template: __webpack_require__(393),
        styles: [__webpack_require__(371)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_logs_service__["a" /* LogsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_logs_service__["a" /* LogsService */]) === "function" && _a || Object])
], LogsComponent);

var _a;
//# sourceMappingURL=C:/Users/desenvolvedor/extinfire_v2/src/logs.component.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page404Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Page404Component = (function () {
    function Page404Component() {
    }
    Page404Component.prototype.ngOnInit = function () {
    };
    return Page404Component;
}());
Page404Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-page404',
        template: __webpack_require__(394),
        styles: [__webpack_require__(372)]
    }),
    __metadata("design:paramtypes", [])
], Page404Component);

//# sourceMappingURL=C:/Users/desenvolvedor/extinfire_v2/src/page404.component.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_usuarios_service__ = __webpack_require__(70);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PerfilComponent = (function () {
    function PerfilComponent(authService, usuariosService, router) {
        this.authService = authService;
        this.usuariosService = usuariosService;
        this.router = router;
        this.globalActions = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    PerfilComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getUsuarioAutenticado.subscribe(function (user) { return _this.user = user; });
    };
    PerfilComponent.prototype.ngAfterViewChecked = function () {
        if (Materialize.updateTextFields)
            Materialize.updateTextFields();
    };
    PerfilComponent.prototype.updateUser = function () {
        var _this = this;
        var updateUser = {
            _id: this.user._id,
            nome: this.user.nome,
            email: this.user.email,
            senha: this.senha
        };
        this.usuariosService.updateUser(updateUser).subscribe(function (usuario) {
            window.localStorage.removeItem('user');
            window.localStorage.setItem('user', JSON.stringify(usuario));
            _this.triggerToast('Perfil atualizado!');
        });
    };
    PerfilComponent.prototype.triggerToast = function (stringToast) {
        this.globalActions.emit({ action: 'toast', params: [stringToast, 4000] });
    };
    return PerfilComponent;
}());
PerfilComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-perfil',
        template: __webpack_require__(395),
        styles: [__webpack_require__(373)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_usuarios_service__["a" /* UsuariosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_usuarios_service__["a" /* UsuariosService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object])
], PerfilComponent);

var _a, _b, _c;
//# sourceMappingURL=C:/Users/desenvolvedor/extinfire_v2/src/perfil.component.js.map

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./clientes/clientes.module": [
		445,
		4
	],
	"./produtos/produtos.module": [
		446,
		1
	],
	"./servicos/servicos.module": [
		447,
		0
	],
	"./usuarios/usuarios.module": [
		448,
		3
	],
	"./vendas/vendas.module": [
		449,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 177;


/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(196);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/desenvolvedor/extinfire_v2/src/main.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuariosGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsuariosGuard = (function () {
    function UsuariosGuard(router) {
        this.router = router;
        this.usuarioLocalStorage = JSON.parse(window.localStorage.getItem('user'));
    }
    UsuariosGuard.prototype.canActivateChild = function (next, state) {
        if ((this.usuarioLocalStorage._id == state.url.split('/')[2] && state.url.includes('editar'))) {
            alert('Usuário sem permissão');
            this.router.navigate(['usuarios']);
            return false;
        }
        return true;
    };
    return UsuariosGuard;
}());
UsuariosGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], UsuariosGuard);

var _a;
//# sourceMappingURL=C:/Users/desenvolvedor/extinfire_v2/src/usuarios.guard.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyFormatFinanceiroPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CurrencyFormatFinanceiroPipe = (function () {
    function CurrencyFormatFinanceiroPipe() {
    }
    CurrencyFormatFinanceiroPipe.prototype.transform = function (value, currencyCode, symbolDisplay, digits) {
        if (currencyCode === void 0) { currencyCode = 'BRL'; }
        if (symbolDisplay === void 0) { symbolDisplay = true; }
        if (!value) {
            return '';
        }
        var currencyPipe = new __WEBPACK_IMPORTED_MODULE_1__angular_common__["CurrencyPipe"]('pt-BR');
        var newValue = currencyPipe.transform(value, currencyCode, symbolDisplay, digits);
        return newValue;
    };
    return CurrencyFormatFinanceiroPipe;
}());
CurrencyFormatFinanceiroPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'currencyformat'
    })
], CurrencyFormatFinanceiroPipe);

//# sourceMappingURL=C:/Users/desenvolvedor/extinfire_v2/src/currency-format-financeiro.pipe.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angulartics2__ = __webpack_require__(115);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(angulartics2GoogleTagManager, authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getUsuarioAutenticado.subscribe(function (user) {
            _this.user = user;
            // Criar dataLayer do TagManager
            // console.log(window)
        });
    };
    AppComponent.prototype.logout = function () {
        window.localStorage.removeItem('auth_key');
        window.localStorage.removeItem('user');
        this.router.navigate(['login']);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(389),
        styles: [__webpack_require__(367)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angulartics2__["b" /* Angulartics2GoogleTagManager */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angulartics2__["b" /* Angulartics2GoogleTagManager */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=C:/Users/desenvolvedor/extinfire_v2/src/app.component.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__perfil_perfil_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__logs_logs_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__financeiro_financeiro_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_materialize__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_materialize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular2_materialize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_file_upload__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_pagination__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_ng2_pagination__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_order_pipe__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_order_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ng2_order_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_filter_pipe__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_filter_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_ng2_filter_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng2_charts__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angulartics2__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_usuarios_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_clientes_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_vendas_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_auth_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_logs_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_itens_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__guards_auth_guard__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__guards_usuarios_guard__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__search_search_component__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__page404_page404_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pipes_currency_format_financeiro_pipe__ = __webpack_require__(194);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__perfil_perfil_component__["a" /* PerfilComponent */],
            __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_8__logs_logs_component__["a" /* LogsComponent */],
            __WEBPACK_IMPORTED_MODULE_9__financeiro_financeiro_component__["a" /* FinanceiroComponent */],
            __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_26__search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_27__page404_page404_component__["a" /* Page404Component */],
            __WEBPACK_IMPORTED_MODULE_28__pipes_currency_format_financeiro_pipe__["a" /* CurrencyFormatFinanceiroPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_11_angular2_materialize__["MaterializeModule"],
            __WEBPACK_IMPORTED_MODULE_12_ng2_file_upload__["FileUploadModule"],
            __WEBPACK_IMPORTED_MODULE_13_ng2_pagination__["Ng2PaginationModule"],
            __WEBPACK_IMPORTED_MODULE_14_ng2_order_pipe__["Ng2OrderModule"],
            __WEBPACK_IMPORTED_MODULE_15_ng2_filter_pipe__["Ng2FilterPipeModule"],
            __WEBPACK_IMPORTED_MODULE_16_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_17_angulartics2__["a" /* Angulartics2Module */].forRoot([__WEBPACK_IMPORTED_MODULE_17_angulartics2__["b" /* Angulartics2GoogleTagManager */]])
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_24__guards_auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_25__guards_usuarios_guard__["a" /* UsuariosGuard */],
            __WEBPACK_IMPORTED_MODULE_18__services_usuarios_service__["a" /* UsuariosService */],
            __WEBPACK_IMPORTED_MODULE_19__services_clientes_service__["a" /* ClientesService */],
            __WEBPACK_IMPORTED_MODULE_20__services_vendas_service__["a" /* VendasService */],
            __WEBPACK_IMPORTED_MODULE_21__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_23__services_itens_service__["a" /* ItensService */],
            __WEBPACK_IMPORTED_MODULE_22__services_logs_service__["a" /* LogsService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=C:/Users/desenvolvedor/extinfire_v2/src/app.module.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__perfil_perfil_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__logs_logs_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__financeiro_financeiro_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__page404_page404_component__ = __webpack_require__(111);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

;








var appRoutes = [
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'perfil',
        component: __WEBPACK_IMPORTED_MODULE_4__perfil_perfil_component__["a" /* PerfilComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'clientes',
        loadChildren: './clientes/clientes.module#ClientesModule',
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]],
        canLoad: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'produtos',
        loadChildren: './produtos/produtos.module#ProdutosModule',
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]],
        canLoad: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'servicos',
        loadChildren: './servicos/servicos.module#ServicosModule',
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]],
        canLoad: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'vendas',
        loadChildren: './vendas/vendas.module#VendasModule',
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]],
        canLoad: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'usuarios',
        loadChildren: './usuarios/usuarios.module#UsuariosModule',
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]],
        canLoad: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'logs',
        component: __WEBPACK_IMPORTED_MODULE_5__logs_logs_component__["a" /* LogsComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'financeiro',
        component: __WEBPACK_IMPORTED_MODULE_6__financeiro_financeiro_component__["a" /* FinanceiroComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_8__page404_page404_component__["a" /* Page404Component */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=C:/Users/desenvolvedor/extinfire_v2/src/app.routing.module.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_vendas_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_clientes_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_itens_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_usuarios_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_logs_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_config__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SearchComponent = (function () {
    function SearchComponent(vendasService, clientesService, itensService, usuariosService, logsService) {
        this.vendasService = vendasService;
        this.clientesService = clientesService;
        this.itensService = itensService;
        this.usuariosService = usuariosService;
        this.logsService = logsService;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_6__app_config__["a" /* AppSettings */].API_ENDPOINT;
        this.produtos = [];
        this.vendas = [];
        this.clientes = [];
        this.servicos = [];
        this.usuarios = [];
        this.logs = [];
        this.search = { nome: '' };
        this.searchLog = { descricao: '' };
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.load();
    };
    SearchComponent.prototype.load = function () {
        var _this = this;
        this.vendasService.getVendas().subscribe(function (vendas) {
            _this.vendas = vendas;
        });
        this.itensService.getItens().subscribe(function (itens) {
            _this.produtos = [];
            _this.servicos = [];
            for (var i = 0; i < itens.length; ++i) {
                if (itens[i].qntde_minima) {
                    // Tem quantidade minima
                    // ENtão é produto
                    _this.produtos.push(itens[i]);
                }
                else {
                    _this.servicos.push(itens[i]);
                }
            }
        });
        this.clientesService.getClientes().subscribe(function (clientes) {
            _this.clientes = clientes;
        });
        this.usuariosService.getUsers().subscribe(function (usuarios) {
            _this.usuarios = usuarios;
        });
        this.logsService.getLogs().subscribe(function (logs) {
            _this.logs = logs;
        });
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-search',
        template: __webpack_require__(396),
        styles: [__webpack_require__(374)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_vendas_service__["a" /* VendasService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_vendas_service__["a" /* VendasService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_clientes_service__["a" /* ClientesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_clientes_service__["a" /* ClientesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_itens_service__["a" /* ItensService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_itens_service__["a" /* ItensService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_usuarios_service__["a" /* UsuariosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_usuarios_service__["a" /* UsuariosService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_logs_service__["a" /* LogsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_logs_service__["a" /* LogsService */]) === "function" && _e || Object])
], SearchComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=C:/Users/desenvolvedor/extinfire_v2/src/search.component.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Usuario; });
var Usuario = (function () {
    function Usuario() {
    }
    return Usuario;
}());

//# sourceMappingURL=C:/Users/desenvolvedor/extinfire_v2/src/usuario.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/desenvolvedor/extinfire_v2/src/environment.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });
var AppSettings = (function () {
    function AppSettings() {
    }
    return AppSettings;
}());

AppSettings.API_ENDPOINT = 'http://127.0.0.1:3000/';
//# sourceMappingURL=C:/Users/desenvolvedor/extinfire_v2/src/app.config.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_config__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LogsService = (function () {
    function LogsService(http) {
        this.http = http;
        console.dir('Logs Service Inicializado...');
    }
    LogsService.prototype.getLogs = function () {
        return this.logs = this.http.get(__WEBPACK_IMPORTED_MODULE_3__app_config__["a" /* AppSettings */].API_ENDPOINT + 'api/logs').map(function (res) { return res.json(); });
    };
    LogsService.prototype.addLog = function (newLog) {
        newLog = {
            usuario: JSON.parse(window.localStorage.getItem('user'))._id,
            descricao: newLog.descricao,
            item: newLog.item.nome
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__app_config__["a" /* AppSettings */].API_ENDPOINT + 'api/log', JSON.stringify(newLog), { headers: headers }).map(function (res) { return res.json(); });
    };
    return LogsService;
}());
LogsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], LogsService);

var _a;
//# sourceMappingURL=C:/Users/desenvolvedor/extinfire_v2/src/logs.service.js.map

/***/ }),

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "nav .logotipo {\r\n\theight: 64px;\r\n\tpadding: 0 15px;\r\n}\r\nnav .logotipo h5 {\r\n\tmargin: 0;\r\n\tline-height: 64px;\r\n}\r\n.side-nav li * {\r\n\tcolor: #fff;\r\n}\r\n.side-nav a:hover {\r\n    background-color: rgba(255, 255, 255, 0.1);\r\n}\r\n.collapsible-body {\r\n\tpadding: 0;\r\n}\r\n.side-nav .collapsible-body li a,\r\n.side-nav.fixed .collapsible-body li a {\r\n\tpadding: 0 52px;\r\n}\r\nheader .container {\r\n\twidth: 100%;\r\n\tmax-width: 100%;\r\n}\r\n#dropdownMais {\r\n\tmin-width: 200px;\r\n}\r\nheader .dropdown-content li > a,\r\nheader .dropdown-content li > span {\r\n\tcolor: #e53935;\r\n}\r\n.side-nav li > a > i.material-icons.right {\r\n\tmargin-right: 0;\r\n\topacity: .3;\r\n}\r\nul.collapsible.collapsible-accordion li.active a > i.material-icons.right {\r\n\t-webkit-transform: rotate(180deg);\r\n\t        transform: rotate(180deg);\r\n}\r\n.name-label::after {\r\n\tcontent: attr(data-first-letter);\r\n\ttext-align: center;\r\n\tfont-size: 20px;\r\n\tline-height: 42px;\r\n\ttext-transform: uppercase;\r\n\theight: 42px;\r\n\twidth: 42px;\r\n\tmargin: 11px 0 11px 15px;\r\n\tdisplay: block;\r\n\tborder-radius: 50%;\r\n\tfloat: right !important;\r\n\tbox-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\r\n\tbackground-color: #FFFFFF !important;\r\n\tcolor: #F44336 !important;\r\n}\r\na[data-activates='dropdownMais']::after {\r\n\tcontent: \"\\E145\";\r\n\tfont-family: 'Material Icons';\r\n\tdisplay: block;\r\n\tfont-size: 24px;\r\n\theight: 64px;\r\n\tline-height: 64px;\r\n}\r\n@media (min-width:769px) { \r\n\t.nav-wrapper {\r\n\t\tpadding-left: 240px;\r\n\t}\r\n\t.side-nav .collapsible-header,\r\n\t.side-nav.fixed .collapsible-header {\r\n\t\tpadding: 0 32px;\r\n\t}\r\n}\r\n/*MOBILE*/\r\n@media (max-width: 767px) {\r\n\t.name-label {\r\n\t\tmax-width: 100px;\r\n\t}\r\n\tnav .logotipo {\r\n\t\theight: 56px;\r\n\t}\r\n\tnav .logotipo h5 {\r\n\t\tline-height: 56px;\r\n\t}\r\n\t.name-label:after {\r\n\t\tdisplay: none;\r\n\t}\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, ".body-login {\r\n\tpadding: 32px 32px 0px 32px;\r\n\tborder: 1px solid #EEE;\r\n}\r\n#loadLogin {\r\n\tmargin: 8px 0;\r\n}\r\n.spinner-white-only {\r\n\tborder-color: #fff;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "input[type=\"search\"]#search {\r\n\theight: 64px !important;\r\n\tborder: none!important;\r\n\tmargin: 0!important;\r\n}\r\n.search-box ul.collection {\r\n\tmargin: 0!important;\r\n}\r\n.second-title {\r\n\tfont-size: 10px;\r\n\tcolor: gray;\r\n}\r\n#search-content-data {\r\n\toverflow-y: auto;\r\n\tmax-height: 300px;\r\n}\r\n.input-field input[type=search]:hover {\r\n\tbackground-color: rgba(255,255,255,.3);\r\n}\r\n.focus,\r\n.input-field input[type=search]:focus {\r\n\tbackground-color: #fff;\r\n\tcolor: #444;\r\n}\r\n.input-field input[type=search].focus + label i, \r\n.input-field input[type=search].focus ~ .mdi-navigation-close, \r\n.input-field input[type=search].focus ~ .material-icons {\r\n    color: #444;\r\n}\r\n\r\n/* Chrome, Safari, Opera */\r\n.input-field input[type=search]::-webkit-input-placeholder {\r\n\tcolor: rgba(255, 255, 255, .8);\r\n}\r\n.input-field input[type=search]:focus::-webkit-input-placeholder,\r\n.input-field input[type=search].focus::-webkit-input-placeholder {\r\n\tcolor: rgba(68, 68, 68, .3);\r\n}\r\n \r\n/* Firefox 18- */\r\n.input-field input[type=search]:-moz-placeholder {\r\n\tcolor: rgba(255, 255, 255, .8);\r\n}\r\n.input-field input[type=search]:focus::-moz-placeholder,\r\n.input-field input[type=search].focus::-moz-placeholder {\r\n\tcolor: rgba(68, 68, 68, .3);\r\n}\r\n\r\n \r\n/* IE10+ */\r\n.input-field input[type=search]:-ms-input-placeholder {\r\n\tcolor: rgba(255, 255, 255, .8);\r\n}\r\n.input-field input[type=search]:focus::-ms-input-placeholder,\r\n.input-field input[type=search].focus::-ms-input-placeholder {\r\n\tcolor: rgba(68, 68, 68, .3);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 389:
/***/ (function(module, exports) {

module.exports = "<div class=\"page-flexbox-wrapper\">\r\n\t<header *ngIf=\"user\">\r\n\t\t<div class=\"navbar-fixed\">\r\n\t\t\t<nav class=\"red darken-1\">\r\n\t\t\t\t<div class=\"nav-wrapper container\">\r\n\t                <ul>\r\n\t                \t<li>\r\n\t                \t\t<a materialize=\"sideNav\" href=\"#\" data-activates=\"slide-out\" class=\"button-collapse\">\r\n\t\t\t                \t<i class=\"material-icons\">&#xE5D2;</i>\r\n\t\t\t                </a>\r\n\t                \t</li>\r\n\t                \t<li class=\"hide-on-small-only\">\r\n\t                \t\t<app-search></app-search>\r\n\t                \t</li>\r\n\t                </ul>\r\n\t\t\t\t\t<ul id=\"slide-out\" class=\"side-nav fixed grey darken-4\">\r\n\t\t\t\t\t\t<li class=\"red darken-1 logotipo\" routerLink=\"\">\r\n\t\t\t\t\t\t\t<h5>ExtinFire</h5>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li><a routerLink=\"\"><i class=\"material-icons\">&#xE88A;</i>Painel</a></li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<ul materialize=\"collapsible\" class=\"collapsible collapsible-accordion\">\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<a class=\"collapsible-header\"><i class=\"material-icons\">&#xE41D;</i>Catálogo<i class=\"material-icons right\">&#xE5C5;</i></a>\r\n\t\t\t\t\t\t\t\t\t<div class=\"collapsible-body grey darken-4\">\r\n\t\t\t\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a routerLink=\"produtos\"><i class=\"material-icons\">&#xE1BD;</i>Produtos</a></li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><a routerLink=\"servicos\"><i class=\"material-icons\">&#xEB49;</i>Serviços</a></li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li><a routerLink=\"clientes\"><i class=\"material-icons\">&#xE63D;</i>Clientes</a></li>\r\n\t\t\t\t\t\t<li><a routerLink=\"vendas\"><i class=\"material-icons\">&#xE227;</i>Vendas</a></li>\r\n\t\t\t\t\t\t<li *ngIf=\"user.tipo\"><a routerLink=\"financeiro\"><i class=\"material-icons\">&#xE926;</i>Financeiro</a></li>\r\n\t\t\t\t\t\t<li *ngIf=\"user.tipo\"><a routerLink=\"usuarios\"><i class=\"material-icons\">&#xE8D3;</i>Usuarios</a></li>\r\n\t\t\t\t\t\t<li><a routerLink=\"logs\"><i class=\"material-icons\">&#xE164;</i>Logs</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t\t<ul class=\"right\">\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<!-- Dropdown Perfil Trigger -->\r\n\t\t\t\t\t\t\t<a materialize=\"dropdown\" class='dropdown-button truncate name-label' href='#' data-activates='dropdownPerfil' [attr.data-first-letter]=\"user.nome.charAt(0)\">\r\n\t\t\t\t\t\t\t\t{{ user.nome }}\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<!-- Dropdown Mais Trigger -->\r\n\t\t\t\t\t\t\t<a materialize=\"dropdown\" class='dropdown-button' href='#' data-activates='dropdownMais'></a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</nav>\r\n\t\t\t<!-- Dropdown Mais -->\r\n\t\t\t<ul id='dropdownMais' class='dropdown-content'>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a routerLink=\"/produtos/novo\">\r\n\t\t\t\t\t\t<i class=\"material-icons left\">&#xE1BD;</i>\r\n\t\t\t\t\t\tNovo Produto\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a routerLink=\"/servicos/novo\">\r\n\t\t\t\t\t\t<i class=\"material-icons left\">&#xEB49;</i>\r\n\t\t\t\t\t\tNovo Serviço\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a routerLink=\"/clientes/novo\">\r\n\t\t\t\t\t\t<i class=\"material-icons left\">&#xE63D;</i>\r\n\t\t\t\t\t\tNovo Cliente\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li *ngIf=\"user.tipo\">\r\n\t\t\t\t\t<a routerLink=\"/usuarios/novo\">\r\n\t\t\t\t\t\t<i class=\"material-icons left\">&#xE8D3;</i>\r\n\t\t\t\t\t\tNovo Usuário\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"divider\"></li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a routerLink=\"/vendas/novo\">\r\n\t\t\t\t\t\t<i class=\"material-icons left\">&#xE227;</i>\r\n\t\t\t\t\t\tNova Venda\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t\t<!-- Dropdown Perfil -->\r\n\t\t\t<ul class=\"dropdown-content\" id=\"dropdownPerfil\">\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a routerLink=\"perfil\" disable>\r\n\t\t\t\t\t\t{{ user?.nome }}\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"divider\"></li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a routerLink=\"perfil\">\r\n\t\t\t\t\t\t<i class=\"material-icons left\">&#xE7FD;</i>\r\n\t\t\t\t\t\tEditar Perfil\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a routerLink=\"login\" (click)=\"logout()\">\r\n\t\t\t\t\t\t<i class=\"material-icons left\">&#xE879;</i>\r\n\t\t\t\t\t\tSair\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</header>\r\n\t<main [class.wrapper]=\"user\">\r\n\t\t<router-outlet></router-outlet>\r\n\t</main>\r\n</div>"

/***/ }),

/***/ 390:
/***/ (function(module, exports) {

module.exports = "<nav class=\"header-pages white\">\r\n\t<div class=\"nav-wrapper\">\r\n\t\t<div class=\"col s12\">\r\n\t\t\t<span class=\"breadcrumb\">Painel de Controle</span>\r\n\t\t</div>\r\n\t</div>\r\n</nav>\r\n<!-- Carregando -->\r\n<div class=\"row\" *ngIf=\"!loadStatus\">\r\n\t<div class=\"col s12\">\r\n\t\t<div id=\"loader\" class=\"preloader-wrapper big active\">\r\n\t\t\t<div class=\"spinner-layer spinner-red-only\">\r\n\t\t\t\t<div class=\"circle-clipper left\">\r\n\t\t\t\t\t<div class=\"circle\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"gap-patch\">\r\n\t\t\t\t\t<div class=\"circle\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"circle-clipper right\">\r\n\t\t\t\t\t<div class=\"circle\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<div *ngIf=\"loadStatus\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col s6\">\r\n\t\t\t<h5>Produtos com estoque abaixo do mínimo</h5>\r\n\t\t\t<div class=\"divider\"></div>\r\n\t\t\t<div class=\"section\"></div>\r\n\t\t\t<div *ngFor=\"let produto of produtos\">\r\n\t\t\t\t<div class=\"col s4\" *ngIf=\"produto.qntde_atual <= produto.qntde_minima\">\r\n\t\t\t\t\t<a [routerLink]=\"['/produtos', produto._id, 'editar']\">\r\n\t\t\t\t\t\t<div *ngIf=\"(produto.qntde_atual <= 0) || (produto.qntde_atual > 0&&produto.qntde_atual < produto.qntde_minima)\" class=\"card-panel white-text hoverable\" [ngClass]=\"{'red': produto.qntde_atual <= 0, 'orange': produto.qntde_atual > 0&&produto.qntde_atual < produto.qntde_minima}\">\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col s8\">\r\n\t\t\t\t\t\t\t\t\t<p>{{ produto.nome }}</p>\r\n\t\t\t\t\t\t\t\t\t<h5 *ngIf=\"produto.qntde_atual <= 0\">Acabou!</h5>\r\n\t\t\t\t\t\t\t\t\t<h5 *ngIf=\"produto.qntde_atual > 0\">Está acabando! Ainda restam {{ produto.qntde_atual }}</h5>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col s4 right-align\">\r\n\t\t\t\t\t\t\t\t\t<h3>{{ produto.qntde_atual }}<small> un</small></h3>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col s6\">\r\n\t\t\t<h5>Produtos que irão vencer</h5>\r\n\t\t\t<div class=\"divider\"></div>\r\n\t\t\t<div class=\"section\"></div>\r\n\t\t</div>\r\n\t\t<!-- Sem nenhum aviso de produtos -->\r\n\t\t<div class=\"row\" *ngIf=\"!produtos.length&&loadStatus\">\r\n\t\t\t<div class=\"col s12\">\r\n\t\t\t\t<div class=\"section\"></div>\r\n\t\t\t\t<div class=\"center-align\">\r\n\t\t\t\t\t<div class=\"grey-text text-lighten-2\">\r\n\t\t\t\t\t\t<h2>Sem nenhum aviso de produtos <br><small>Parabéns!</small></h2>\r\n\t\t\t\t\t\t<i class=\"material-icons big\">&#xE7F2;</i>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ 391:
/***/ (function(module, exports) {

module.exports = "<nav class=\"header-pages white\">\r\n\t<div class=\"nav-wrapper\">\r\n\t\t<div class=\"col s12 m12\">\r\n\t\t\t<span class=\"breadcrumb\">Faturamento</span>\r\n\t\t</div>\r\n\t</div>\r\n</nav>\r\n<!-- Carregando -->\r\n<div class=\"row\" *ngIf=\"!loadStatus\">\r\n\t<div class=\"col s12\">\r\n\t\t<div id=\"loader\" class=\"preloader-wrapper big active\">\r\n\t\t\t<div class=\"spinner-layer spinner-red-only\">\r\n\t\t\t\t<div class=\"circle-clipper left\">\r\n\t\t\t\t\t<div class=\"circle\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"gap-patch\">\r\n\t\t\t\t\t<div class=\"circle\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"circle-clipper right\">\r\n\t\t\t\t\t<div class=\"circle\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<!-- Sem nenhuma finança -->\r\n<div class=\"row\" *ngIf=\"!vendas.length&&loadStatus\">\r\n\t<div class=\"col s12\">\r\n\t\t<div class=\"section\"></div>\r\n\t\t<div class=\"center-align\">\r\n\t\t\t<div class=\"grey-text text-lighten-2\">\r\n\t\t\t\t<h2>Sem nenhum faturamento <br><small>clique em Novo Venda</small></h2>\r\n\t\t\t\t<i class=\"material-icons big\">&#xE814;</i>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<!-- Botoes de ação -->\r\n<div class=\"row\" *ngIf=\"vendas.length&&loadStatus\">\r\n\t<div class=\"col s12\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col s12 m2 right\">\r\n\t\t\t\t<label for=\"validadeDe\">Até:</label>\r\n\t\t\t\t<input \r\n\t\t\t\tid=\"validadeAte\" \r\n\t\t\t\tmaterialize=\"pickadate\" \r\n\t\t\t\t[materializeParams]=\"[paramsPickdate]\"\r\n\t\t\t\ttype=\"date\" \r\n\t\t\t\t[(ngModel)]=\"validadeAte\" \r\n\t\t\t\tname=\"validadeAte\"\r\n\t\t\t\t>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col s12 m2 right\">\r\n\t\t\t\t<label for=\"validadeDe\">De:</label>\r\n\t\t\t\t<input \r\n\t\t\t\tid=\"validadeDe\" \r\n\t\t\t\tmaterialize=\"pickadate\" \r\n\t\t\t\t[materializeParams]=\"[paramsPickdate]\"\r\n\t\t\t\ttype=\"date\" \r\n\t\t\t\t[(ngModel)]=\"validadeDe\" \r\n\t\t\t\tname=\"validadeDe\"\r\n\t\t\t\t>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"section\"></div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col s12\">\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<canvas baseChart\r\n\t\t\t\t\t[datasets]=\"lineChartData\"\r\n\t\t\t\t\t[labels]=\"lineChartLabels\"\r\n\t\t\t\t\t[options]=\"lineChartOptions\"\r\n\t\t\t\t\t[colors]=\"lineChartColors\"\r\n\t\t\t\t\t[legend]=\"lineChartLegend\"\r\n\t\t\t\t\t[chartType]=\"lineChartType\"\r\n\t\t\t\t\t(chartHover)=\"chartHovered($event)\"\r\n\t\t\t\t\t(chartClick)=\"chartClicked($event)\"\r\n\t\t\t\t\t></canvas>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col s12\" style=\"margin-bottom: 10px\">\r\n\t\t\t\t<table class=\"table table-responsive table-condensed\">\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<th *ngFor=\"let label of lineChartLabels\">{{label}}</th>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr *ngFor=\"let d of lineChartData\">\r\n\t\t\t\t\t\t<td *ngFor=\"let label of lineChartLabels; let j=index\">{{d && d.data[j]}}</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</table>\r\n\t\t\t\t<button (click)=\"randomize()\">CLICK</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<br><br>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col s12\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col s12\">\r\n\t\t\t\t\t\t<table class=\"striped bordered responsive-table\">\r\n\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t<th data-field=\"nome\">Venda</th>\r\n\t\t\t\t\t\t\t\t<th data-field=\"valor_total\">Valor Bruto Total</th>\r\n\t\t\t\t\t\t\t\t<th data-field=\"valor_liquido\">Valor Liquido Total</th>\r\n\t\t\t\t\t\t\t\t<th data-field=\"tipo\">Tipo</th>\r\n\t\t\t\t\t\t\t\t<th data-field=\"data\">Data</th>\r\n\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t<tr class=\"bordered highlight responsive-table\" *ngFor=\"let venda of vendas\" [class.hide]=\"!venda.tipo\">\r\n\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t<img src=\"{{ '/uploads/' + (!venda.cliente.images[0] ? 'sem-foto.jpg' : venda.cliente.images[0]) }}\" class=\"circle img-table\">\r\n\t\t\t\t\t\t\t\t\t\t{{ 'Venda para ' + venda.cliente.nome }}\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td> {{ venda.valor_total }} </td>\r\n\t\t\t\t\t\t\t\t\t<td> {{ venda.valor_liquido }} </td>\r\n\t\t\t\t\t\t\t\t\t<td> {{ venda.tipo ? 'Pedido' : 'Orçamento' }} </td>\r\n\t\t\t\t\t\t\t\t\t<td> {{ venda.updatedAt | date:'dd/MM/yyyy HH:mm:ss' }} </td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"section\"></div>\r\n\t\t\t\t<div class=\"row right-align\">\r\n\t\t\t\t\t<div class=\"col s12 m4 right\">\r\n\t\t\t\t\t\t<h6>Faturamento Liquido Total</h6>\r\n\t\t\t\t\t\t<div class=\"divider\"></div>\r\n\t\t\t\t\t\t<h5>{{ faturamentoLiquido }}</h5>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col s12 m4 right\">\r\n\t\t\t\t\t\t<h6>Faturamento Bruto Total</h6>\r\n\t\t\t\t\t\t<div class=\"divider\"></div>\r\n\t\t\t\t\t\t<h5>{{ faturamentoBruto }}</h5>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"section\"></div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ 392:
/***/ (function(module, exports) {

module.exports = "<div class=\"center-align\" *ngIf=\"!resposta?.res\">\r\n  <div class=\"section\"></div>\r\n  <div class=\"container\">\r\n    <h3 class=\"red-text\">Bem vindo</h3>\r\n    <h5 class=\"red-text\">Faça login para entrar</h5>\r\n    <div class=\"section\"></div>\r\n    <div class=\"row\">\r\n      <div class=\"body-login z-depth-1 white col s12 push-m4 m4\">\r\n        <div *ngIf=\"resposta\" class=\"card\" [ngClass]=\"{green: resposta?.res, red: !resposta?.res}\">\r\n          <div class=\"card-content white-text\">\r\n            <span>{{ resposta?.string }}</span>\r\n          </div>\r\n        </div>\r\n        <form (submit)=\"fazerLogin()\">\r\n          <div class=\"row\">\r\n            <div class=\"input-field col s12\">\r\n              <input [(ngModel)]=\"usuario.email\" type=\"email\" name=\"email\" id=\"email\" />\r\n              <label for=\"email\">Entre com seu email</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"input-field col s12\">\r\n              <input [(ngModel)]=\"usuario.senha\" type=\"password\" name=\"password\" id=\"password\" />\r\n              <label for=\"password\">Entre com sua senha</label>\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <div class=\"row\">\r\n              <button type=\"submit\" name=\"btn_login\" class=\"col s12 btn btn-large waves-effect red darken-1\">\r\n                Login\r\n                <div id=\"loadLogin\" class=\"preloader-wrapper small active right\" *ngIf=\"loadLogin\">\r\n                  <div class=\"spinner-layer spinner-white-only\">\r\n                    <div class=\"circle-clipper left\">\r\n                      <div class=\"circle\"></div>\r\n                    </div>\r\n                    <div class=\"gap-patch\">\r\n                      <div class=\"circle\"></div>\r\n                    </div>\r\n                    <div class=\"circle-clipper right\">\r\n                      <div class=\"circle\"></div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 393:
/***/ (function(module, exports) {

module.exports = "<nav class=\"header-pages white\">\r\n\t<div class=\"nav-wrapper\">\r\n\t\t<div class=\"col s12\">\r\n\t\t\t<span class=\"breadcrumb\">Lista de Logs</span>\r\n\t\t</div>\r\n\t</div>\r\n</nav>\r\n<!-- Carregando -->\r\n<div class=\"row\" *ngIf=\"!loadStatus\">\r\n\t<div class=\"col s12\">\r\n\t\t<div id=\"loader\" class=\"preloader-wrapper big active\">\r\n\t\t\t<div class=\"spinner-layer spinner-red-only\">\r\n\t\t\t\t<div class=\"circle-clipper left\">\r\n\t\t\t\t\t<div class=\"circle\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"gap-patch\">\r\n\t\t\t\t\t<div class=\"circle\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"circle-clipper right\">\r\n\t\t\t\t\t<div class=\"circle\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<!-- Sem nenhum log -->\r\n<div class=\"row\" *ngIf=\"!logs.length&&loadStatus\">\r\n\t<div class=\"col s12\">\r\n\t\t<div class=\"section\"></div>\r\n\t\t<div class=\"center-align\">\r\n\t\t\t<div class=\"grey-text text-lighten-2\">\r\n\t\t\t\t<h2>Sem nenhum log aqui</h2>\r\n\t\t\t\t<i class=\"material-icons big\">&#xE814;</i>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<div class=\"row\" *ngIf=\"logs.length\">\r\n\t<div class=\"col s12\">\r\n\t\t<form action=\"#\">\r\n\t\t\t<table class=\"bordered responsive-table\">\r\n\t\t\t\t<thead>\r\n\t\t\t\t\t<tr class=\"orders\">\r\n\t\t\t\t\t\t<th \r\n\t\t\t\t\t\tdata-field=\"usuario.nome\" \r\n\t\t\t\t\t\t(click)=\"setOrder('usuario.nome')\"\r\n\t\t\t\t\t\t[class.active]=\"order === 'usuario.nome'\"\r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\tUsuário\r\n\t\t\t\t\t\t\t<span [hidden]=\"reverse\">\r\n\t\t\t\t\t\t\t\t<i class=\"material-icons right\">&#xE5C5;</i>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<span [hidden]=\"!reverse\">\r\n\t\t\t\t\t\t\t\t<i class=\"material-icons right\">&#xE5C7;</i>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t<th \r\n\t\t\t\t\t\tdata-field=\"descricao\" \r\n\t\t\t\t\t\t(click)=\"setOrder('descricao')\"\r\n\t\t\t\t\t\t[class.active]=\"order === 'descricao'\"\r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\tDescrição\r\n\t\t\t\t\t\t\t<span [hidden]=\"reverse\">\r\n\t\t\t\t\t\t\t\t<i class=\"material-icons right\">&#xE5C5;</i>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<span [hidden]=\"!reverse\">\r\n\t\t\t\t\t\t\t\t<i class=\"material-icons right\">&#xE5C7;</i>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t<th \r\n\t\t\t\t\t\tdata-field=\"item\" \r\n\t\t\t\t\t\t(click)=\"setOrder('item')\"\r\n\t\t\t\t\t\t[class.active]=\"order === 'item'\"\r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\tItem\r\n\t\t\t\t\t\t\t<span [hidden]=\"reverse\">\r\n\t\t\t\t\t\t\t\t<i class=\"material-icons right\">&#xE5C5;</i>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<span [hidden]=\"!reverse\">\r\n\t\t\t\t\t\t\t\t<i class=\"material-icons right\">&#xE5C7;</i>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t<th \r\n\t\t\t\t\t\tdata-field=\"updatedAt\" \r\n\t\t\t\t\t\t(click)=\"setOrder('updatedAt')\"\r\n\t\t\t\t\t\t[class.active]=\"order === 'updatedAt'\"\r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\tData Criado\r\n\t\t\t\t\t\t\t<span [hidden]=\"reverse\">\r\n\t\t\t\t\t\t\t\t<i class=\"material-icons right\">&#xE5C5;</i>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<span [hidden]=\"!reverse\">\r\n\t\t\t\t\t\t\t\t<i class=\"material-icons right\">&#xE5C7;</i>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</th>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</thead>\r\n\t\t\t\t<tbody>\r\n\t\t\t\t\t<tr *ngFor=\"let log of logs | orderBy: order:reverse | paginate: { itemsPerPage: 10, currentPage: p }\">\r\n\t\t\t\t\t\t<td>{{ log.usuario.nome }}</td>\r\n\t\t\t\t\t\t<td>{{ log.descricao }}</td>\r\n\t\t\t\t\t\t<td>{{ log.item }}</td>\r\n\t\t\t\t\t\t<td>{{ log.updatedAt  | date:'dd/MM/yyyy HH:mm:ss' }}</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</tbody>\r\n\t\t\t</table>\r\n\t\t\t<pagination-controls \r\n\t\t\t(pageChange)=\"p = $event\" \r\n\t\t\tpreviousLabel=\"Anterior\"\r\n            nextLabel=\"Próximo\"\r\n            *ngIf=\"logs.length>9\"\r\n            ></pagination-controls>\r\n\t\t</form>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ 394:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col s12\">\r\n\t\t\t<div class=\"section\"></div>\r\n\t\t\t<div class=\"center-align\">\r\n\t\t\t\t<div class=\"grey-text text-lighten-2\">\r\n\t\t\t\t\t<h2>Perdido por aqui? <br><small>404 - Página Não Encontrado</small></h2>\r\n\t\t\t\t\t<i class=\"material-icons big\">&#xE814;</i>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ 395:
/***/ (function(module, exports) {

module.exports = "<nav class=\"header-pages white\">\r\n\t<div class=\"nav-wrapper\">\r\n\t\t<div class=\"col s12\">\r\n\t\t\t<span class=\"breadcrumb\">Seu Perfil</span>\r\n\t\t</div>\r\n\t</div>\r\n</nav>\r\n<!-- Botoes de ação -->\r\n<div class=\"row\">\r\n\t<div class=\"col s12 right-align\">\r\n\t\t<a class=\"waves-effect waves-light btn red darken-1\" (click)=\"updateUser()\">Editar e Salvar</a>\r\n\t\t<a class=\"waves-effect waves-light btn grey\" routerLink=\"/\">Cancelar e Voltar</a>\r\n\t</div>\r\n</div>\r\n<div class=\"section\"></div>\r\n<div class=\"row\">\r\n\t<div class=\"col s12 push-m3 m6\">\r\n\t\t<div class=\"input-field center-align\">\r\n\t\t\t<div class=\"firs-letter-big-users z-depth-2 circle red darken-1\">\r\n\t\t\t\t{{ user.nome.charAt(0) }}\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"input-field\">\r\n\t\t\t<input id=\"nome\" type=\"text\" [(ngModel)]=\"user.nome\" name=\"nome\" required=\"\" aria-required=\"true\">\r\n\t\t\t<label for=\"nome\">Seu Nome</label>\r\n\t\t</div>\r\n\t\t<div class=\"input-field\">\r\n\t\t\t<input id=\"email\" type=\"email\" [(ngModel)]=\"user.email\" name=\"email\" required=\"\" aria-required=\"true\">\r\n\t\t\t<label for=\"email\">Seu Email</label>\r\n\t\t</div>\r\n\t\t<div class=\"input-field\">\r\n\t\t\t<input id=\"senha\" type=\"password\" [(ngModel)]=\"senha\" name=\"senha\" required=\"\" aria-required=\"true\">\r\n\t\t\t<label for=\"senha\">Sua Senha</label>\r\n\t\t</div>\r\n\t\t<label>Deixe em branco para não alterar</label>\r\n\t</div>\r\n</div>\r\n<a (click)=\"triggerToast()\" materialize [materializeActions]=\"globalActions\"></a>"

/***/ }),

/***/ 396:
/***/ (function(module, exports) {

module.exports = "<div class=\"search-box\">\r\n\t<div class=\"input-field\">\r\n\t\t<input id=\"search\" type=\"search\" (focus)=\"load()\" required [(ngModel)]=\"search.nome\" placeholder=\"Procurar por...\" [ngClass]=\"{ 'focus': search.nome }\">\r\n\t\t<label class=\"label-icon\" for=\"search\">\r\n\t\t\t<i class=\"material-icons\">&#xE8B6;</i>\r\n\t\t</label>\r\n\t\t<i class=\"material-icons\" (click)=\"search.nome=undefined\">&#xE5CD;</i>\r\n\t</div>\r\n    <div id=\"search-content-data\" class=\"z-depth-3\" *ngIf=\"search.nome\" (blur)=\"focusSearch = !focusSearch\">\r\n\t    <!-- Serviços -->\r\n\t    <ul class=\"collection with-header\" *ngIf=\"(servicos | filterBy: search).length !== 0\">\r\n\t\t\t<a routerLink=\"servicos\" class=\"collection-header red-text text-darken-1\"><h5>Serviços</h5></a>\r\n\t\t\t<a class=\"collection-item avatar black-text text-darken-4\" *ngFor=\"let servico of servicos | filterBy: search\" [routerLink]=\"['servicos', servico._id]\">\r\n\t\t\t\t<img src=\"{{ baseUrl + 'uploads/' + (!servico?.images[0] ? 'sem-foto.jpg' : servico?.images[0]) }}\" alt=\"\" class=\"circle\">\r\n\t\t\t\t<div class=\"left\">\r\n\t\t\t\t\t<span class=\"title\">{{ servico.nome }}</span>\r\n\t\t\t\t\t<p class=\"second-title\">{{ servico.updatedAt | date:'dd/MM/yyyy hh:mm:ss' }}</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<span class=\"secondary-content red-text text-darken-4\">\r\n\t\t\t\t\t<i class=\"material-icons\">&#xE315;</i>\r\n\t\t\t\t</span>\r\n\t\t\t</a>\r\n\t\t</ul>\r\n\t\t<!-- Produtos -->\r\n\t\t<ul class=\"collection with-header\" *ngIf=\"(produtos | filterBy: search).length !== 0\">\r\n\t\t\t<a routerLink=\"produtos\" class=\"collection-header red-text text-darken-1\"><h5>Produtos</h5></a>\r\n\t\t\t<a class=\"collection-item avatar black-text text-darken-4\" *ngFor=\"let produto of produtos | filterBy: search\" [routerLink]=\"['produtos', produto._id]\">\r\n\t\t\t\t<img src=\"{{ baseUrl + 'uploads/' + (!produto?.images[0] ? 'sem-foto.jpg' : produto?.images[0]) }}\" alt=\"\" class=\"circle\">\r\n\t\t\t\t<div class=\"left\">\r\n\t\t\t\t\t<span class=\"title\">{{ produto.nome }}</span>\r\n\t\t\t\t\t<p class=\"second-title\">{{ produto.updatedAt | date:'dd/MM/yyyy hh:mm:ss' }}</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<span class=\"secondary-content red-text text-darken-4\">\r\n\t\t\t\t\t<i class=\"material-icons\">&#xE315;</i>\r\n\t\t\t\t</span>\r\n\t\t\t\t<div \r\n\t\t\t\t*ngIf=\"(produto.qntde_atual <= 0) || (produto.qntde_atual > 0&&produto.qntde_atual < produto.qntde_minima)\" \r\n\t\t\t\tclass=\"chip white-text secondary-content\" \r\n\t\t\t\t[ngClass]=\"{'red text-white': produto.qntde_atual <= 0, 'orange text-white': produto.qntde_atual > 0&&produto.qntde_atual < produto.qntde_minima}\"\r\n\t\t\t\t>\r\n\t\t\t\t\t<h6 *ngIf=\"produto.qntde_atual <= 0\">Acabou!</h6>\r\n\t\t\t\t\t<h6 *ngIf=\"produto.qntde_atual > 0&&produto.qntde_atual < produto.qntde_minima\">Está Acabando</h6>\r\n\t\t\t\t</div>\r\n\t\t\t</a>\r\n\t\t</ul>\r\n\t\t<!-- Clientes -->\r\n\t\t<ul class=\"collection with-header\" *ngIf=\"(clientes | filterBy: search).length !== 0\">\r\n\t\t\t<a routerLink=\"clientes\" class=\"collection-header red-text text-darken-1\"><h5>Clientes</h5></a>\r\n\t\t\t<a class=\"collection-item avatar black-text text-darken-4\" *ngFor=\"let cliente of clientes | filterBy: search\" [routerLink]=\"['clientes', cliente._id]\">\r\n\t\t\t\t<img src=\"{{ baseUrl + 'uploads/' + (!cliente?.images[0] ? 'sem-foto.jpg' : cliente?.images[0]) }}\" alt=\"\" class=\"circle\">\r\n\t\t\t\t<div class=\"left\">\r\n\t\t\t\t\t<span class=\"title\">{{ cliente.nome }}</span>\r\n\t\t\t\t\t<p class=\"second-title\">{{ cliente.updatedAt | date:'dd/MM/yyyy hh:mm:ss' }}</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<span class=\"secondary-content red-text text-darken-4\">\r\n\t\t\t\t\t<i class=\"material-icons\">&#xE315;</i>\r\n\t\t\t\t</span>\r\n\t\t\t</a>\r\n\t\t</ul>\r\n\t\t<!-- Vendas -->\r\n\t\t<ul class=\"collection with-header\" *ngIf=\"(vendas | filterBy: search).length !== 0\">\r\n\t\t\t<a routerLink=\"vendas\" class=\"collection-header red-text text-darken-1\"><h5>Vendas</h5></a>\r\n\t\t\t<a class=\"collection-item avatar black-text text-darken-4\" *ngFor=\"let venda of vendas | filterBy: search\" [routerLink]=\"['vendas', venda._id]\">\r\n\t\t\t\t<img src=\"{{ baseUrl + 'uploads/' + (!venda.cliente.images[0] ? 'sem-foto.jpg' : venda.cliente.images[0]) }}\" alt=\"\" class=\"circle\">\r\n\t\t\t\t<div class=\"left\">\r\n\t\t\t\t\t<span class=\"title\">Venda para {{ venda.nome }}</span>\r\n\t\t\t\t\t<p class=\"second-title\">{{ venda.updatedAt | date:'dd/MM/yyyy hh:mm:ss' }}</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<span class=\"secondary-content red-text text-darken-4\">\r\n\t\t\t\t\t<i class=\"material-icons\">&#xE315;</i>\r\n\t\t\t\t</span>\r\n\t\t\t</a>\r\n\t\t</ul>\r\n\t\t<!-- Usuarios -->\r\n\t\t<ul class=\"collection with-header\" *ngIf=\"(usuarios | filterBy: search).length !== 0\">\r\n\t\t\t<a routerLink=\"usuarios\" class=\"collection-header red-text text-darken-1\"><h5>Usuários</h5></a>\r\n\t\t\t<a class=\"collection-item avatar black-text text-darken-4\" *ngFor=\"let usuario of usuarios | filterBy: search\" routerLink=\"usuarios\">\r\n\t\t\t\t<div class=\"firs-letter-users circle red darken-1 valign\">\r\n\t\t\t\t\t{{ usuario.nome.charAt(0) }}\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"left\">\r\n\t\t\t\t\t<span class=\"title\">{{ usuario.nome }}</span>\r\n\t\t\t\t\t<p class=\"second-title\">{{ usuario.updatedAt | date:'dd/MM/yyyy hh:mm:ss' }}</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<span class=\"secondary-content red-text text-darken-4\">\r\n\t\t\t\t\t<i class=\"material-icons\">&#xE315;</i>\r\n\t\t\t\t</span>\r\n\t\t\t</a>\r\n\t\t</ul>\r\n\t\t<!-- Logs -->\r\n\t\t<ul class=\"collection with-header\" *ngIf=\"(logs | filterBy: searchLog).length !== 0\">\r\n\t\t\t<a routerLink=\"logs\" class=\"collection-header red-text text-darken-1\"><h5>Logs</h5></a>\r\n\t\t\t<a class=\"collection-item avatar black-text text-darken-4\" *ngFor=\"let log of logs | filterBy: searchLog\" routerLink=\"logs\">\r\n\t\t\t\t<div class=\"firs-letter-users circle black darken-4 valign\">\r\n\t\t\t\t\t{{ log.descricao.charAt(0) }}\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"left\">\r\n\t\t\t\t\t<span class=\"title\">{{ log.usuario.nome + ' ' + log.descricao + ' ' + log.item }}</span>\r\n\t\t\t\t\t<p class=\"second-title\">{{ log.updatedAt | date:'dd/MM/yyyy hh:mm:ss' }}</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<span class=\"secondary-content red-text text-darken-4\">\r\n\t\t\t\t\t<i class=\"material-icons\">&#xE315;</i>\r\n\t\t\t\t</span>\r\n\t\t\t</a>\r\n\t\t</ul>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ 441:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(178);


/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_config__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



;

var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.usuarioAutenticado = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.getUsuarioAutenticado = this.usuarioAutenticado.asObservable();
    }
    AuthService.prototype.fazerLogin = function (usuario) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        var creds = 'email=' + usuario.email + '&senha=' + usuario.senha;
        headers.append('Content-Type', 'application/X-www-form-urlencoded');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__app_config__["a" /* AppSettings */].API_ENDPOINT + 'api/authenticate', creds, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.setUsuarioAutenticado = function (user) {
        this.usuarioAutenticado.next(user);
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=C:/Users/desenvolvedor/extinfire_v2/src/auth.service.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_logs_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_config__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItensService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ItensService = (function () {
    function ItensService(http, logsService) {
        this.http = http;
        this.logsService = logsService;
        console.dir('Itens Service Inicializado...');
    }
    ItensService.prototype.getItens = function () {
        return this.itens = this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* AppSettings */].API_ENDPOINT + 'api/itens').map(function (res) { return res.json(); });
    };
    ItensService.prototype.getItem = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* AppSettings */].API_ENDPOINT + 'api/item/' + id).map(function (res) { return res.json(); });
    };
    ItensService.prototype.addItem = function (newItem) {
        this.logsService.addLog({
            descricao: 'Adicionou um item',
            item: newItem
        }).subscribe(function (data) { });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* AppSettings */].API_ENDPOINT + 'api/item', JSON.stringify(newItem), { headers: headers }).map(function (res) { return res.json(); });
    };
    ItensService.prototype.deleteItem = function (item) {
        this.logsService.addLog({
            descricao: 'Deletou um item',
            item: item
        }).subscribe(function (data) { });
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* AppSettings */].API_ENDPOINT + 'api/item/' + item._id).map(function (res) { return res.json(); });
    };
    ItensService.prototype.updateItem = function (item) {
        this.logsService.addLog({
            descricao: 'Editou um item',
            item: item
        }).subscribe(function (data) { });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put(__WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* AppSettings */].API_ENDPOINT + 'api/item/' + item._id, JSON.stringify(item), { headers: headers }).map(function (res) { return res.json(); });
    };
    return ItensService;
}());
ItensService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_logs_service__["a" /* LogsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_logs_service__["a" /* LogsService */]) === "function" && _b || Object])
], ItensService);

var _a, _b;
//# sourceMappingURL=C:/Users/desenvolvedor/extinfire_v2/src/itens.service.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logs_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_config__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ClientesService = (function () {
    function ClientesService(http, logsService) {
        this.http = http;
        this.logsService = logsService;
        console.dir('Clientes Service Inicializado...');
    }
    ClientesService.prototype.getClientes = function () {
        return this.clientes = this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* AppSettings */].API_ENDPOINT + 'api/clientes').map(function (res) { return res.json(); });
    };
    ClientesService.prototype.getCliente = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* AppSettings */].API_ENDPOINT + 'api/cliente/' + id).map(function (res) { return res.json(); });
    };
    ClientesService.prototype.addCliente = function (newCliente) {
        this.logsService.addLog({
            descricao: 'Adicionaou um cliente',
            item: newCliente
        }).subscribe(function (data) { });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* AppSettings */].API_ENDPOINT + 'api/cliente', JSON.stringify(newCliente), { headers: headers }).map(function (res) { return res.json(); });
    };
    ClientesService.prototype.deleteCliente = function (cliente) {
        this.logsService.addLog({
            descricao: 'Deletou um cliente',
            item: cliente
        }).subscribe(function (data) { });
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* AppSettings */].API_ENDPOINT + 'api/cliente/' + cliente._id).map(function (res) { return res.json(); });
    };
    ClientesService.prototype.updateCliente = function (cliente) {
        this.logsService.addLog({
            descricao: 'Editou um cliente',
            item: cliente
        }).subscribe(function (data) { });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put(__WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* AppSettings */].API_ENDPOINT + 'api/cliente/' + cliente._id, JSON.stringify(cliente), { headers: headers }).map(function (res) { return res.json(); });
    };
    ClientesService.prototype.getCep = function (cep) {
        return this.http.get('https://viacep.com.br/ws/' + cep + '/json/').map(function (res) { return res.json(); });
    };
    return ClientesService;
}());
ClientesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__logs_service__["a" /* LogsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__logs_service__["a" /* LogsService */]) === "function" && _b || Object])
], ClientesService);

var _a, _b;
//# sourceMappingURL=C:/Users/desenvolvedor/extinfire_v2/src/clientes.service.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logs_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_config__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuariosService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UsuariosService = (function () {
    function UsuariosService(http, logsService) {
        this.http = http;
        this.logsService = logsService;
        console.dir('Usuarios Service Inicializado...');
    }
    UsuariosService.prototype.getUsers = function () {
        return this.users = this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* AppSettings */].API_ENDPOINT + 'api/usuarios').map(function (res) { return res.json(); });
    };
    UsuariosService.prototype.getUser = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* AppSettings */].API_ENDPOINT + 'api/usuario/' + id).map(function (res) { return res.json(); });
    };
    UsuariosService.prototype.addUser = function (newUser) {
        this.logsService.addLog({
            descricao: 'Adicionou um usuário',
            item: newUser
        }).subscribe(function (data) { });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* AppSettings */].API_ENDPOINT + 'api/usuario', JSON.stringify(newUser), { headers: headers }).map(function (res) { return res.json(); });
    };
    UsuariosService.prototype.deleteUser = function (user) {
        this.logsService.addLog({
            descricao: 'Deletou um usuário',
            item: user
        }).subscribe(function (data) { });
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* AppSettings */].API_ENDPOINT + 'api/usuario/' + user._id).map(function (res) { return res.json(); });
    };
    UsuariosService.prototype.updateUser = function (user) {
        this.logsService.addLog({
            descricao: 'Editou um usuário',
            item: user
        }).subscribe(function (data) { });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put(__WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* AppSettings */].API_ENDPOINT + 'api/usuario/' + user._id, JSON.stringify(user), { headers: headers }).map(function (res) { return res.json(); });
    };
    return UsuariosService;
}());
UsuariosService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__logs_service__["a" /* LogsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__logs_service__["a" /* LogsService */]) === "function" && _b || Object])
], UsuariosService);

var _a, _b;
//# sourceMappingURL=C:/Users/desenvolvedor/extinfire_v2/src/usuarios.service.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_config__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__logs_service__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VendasService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VendasService = (function () {
    function VendasService(http, logsService) {
        this.http = http;
        this.logsService = logsService;
        console.dir('Vendas Service Inicializado...');
    }
    VendasService.prototype.getVendas = function () {
        return this.vendas = this.http.get(__WEBPACK_IMPORTED_MODULE_3__app_config__["a" /* AppSettings */].API_ENDPOINT + 'api/vendas').map(function (res) { return res.json(); });
    };
    VendasService.prototype.getVenda = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__app_config__["a" /* AppSettings */].API_ENDPOINT + 'api/venda/' + id).map(function (res) { return res.json(); });
    };
    VendasService.prototype.addVenda = function (newVenda) {
        this.logsService.addLog({
            descricao: 'Adicionou uma venda',
            item: newVenda.cliente
        }).subscribe(function (data) { });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__app_config__["a" /* AppSettings */].API_ENDPOINT + 'api/venda', JSON.stringify(newVenda), { headers: headers }).map(function (res) { return res.json(); });
    };
    VendasService.prototype.deleteVenda = function (venda) {
        this.logsService.addLog({
            descricao: 'Deletou uma venda',
            item: venda.cliente
        }).subscribe(function (data) { });
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_3__app_config__["a" /* AppSettings */].API_ENDPOINT + 'api/venda/' + venda._id).map(function (res) { return res.json(); });
    };
    VendasService.prototype.updateVenda = function (venda) {
        this.logsService.addLog({
            descricao: 'Editou uma venda',
            item: venda.cliente
        }).subscribe(function (data) { });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put(__WEBPACK_IMPORTED_MODULE_3__app_config__["a" /* AppSettings */].API_ENDPOINT + 'api/venda/' + venda._id, JSON.stringify(venda), { headers: headers }).map(function (res) { return res.json(); });
    };
    return VendasService;
}());
VendasService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__logs_service__["a" /* LogsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__logs_service__["a" /* LogsService */]) === "function" && _b || Object])
], VendasService);

var _a, _b;
//# sourceMappingURL=C:/Users/desenvolvedor/extinfire_v2/src/vendas.service.js.map

/***/ })

},[441]);
//# sourceMappingURL=main.bundle.js.map