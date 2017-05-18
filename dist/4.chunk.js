webpackJsonp([4,10],{

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_materialize__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_materialize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_materialize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_text_mask__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_text_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_pagination__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_pagination__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_order_pipe__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_order_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_order_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__clientes_routing_module__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__clientes_component__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__novo_cliente_novo_cliente_component__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__editar_cliente_editar_cliente_component__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__detalhe_cliente_detalhe_cliente_component__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__directives_image_preview_cliente_directive__ = __webpack_require__(474);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientesModule", function() { return ClientesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var ClientesModule = (function () {
    function ClientesModule() {
    }
    return ClientesModule;
}());
ClientesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__clientes_component__["a" /* ClientesComponent */],
            __WEBPACK_IMPORTED_MODULE_11__novo_cliente_novo_cliente_component__["a" /* NovoClienteComponent */],
            __WEBPACK_IMPORTED_MODULE_12__editar_cliente_editar_cliente_component__["a" /* EditarClienteComponent */],
            __WEBPACK_IMPORTED_MODULE_13__detalhe_cliente_detalhe_cliente_component__["a" /* DetalheClienteComponent */],
            __WEBPACK_IMPORTED_MODULE_14__directives_image_preview_cliente_directive__["a" /* ImagePreviewCliente */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_materialize__["MaterializeModule"],
            __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__["FileUploadModule"],
            __WEBPACK_IMPORTED_MODULE_9__clientes_routing_module__["a" /* ClientesRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_7_ng2_pagination__["Ng2PaginationModule"],
            __WEBPACK_IMPORTED_MODULE_6_angular2_text_mask__["TextMaskModule"],
            __WEBPACK_IMPORTED_MODULE_8_ng2_order_pipe__["Ng2OrderModule"]
        ],
        providers: []
    })
], ClientesModule);

//# sourceMappingURL=C:/Users/desenvolvedor/extinfire_v2/src/clientes.module.js.map

/***/ }),

/***/ 450:
/***/ (function(module, exports, __webpack_require__) {

!function(e,r){ true?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.textMaskCore=r():e.textMaskCore=r()}(this,function(){return function(e){function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}var t={};return r.m=e,r.c=t,r.p="",r(0)}([function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(r,"__esModule",{value:!0});var o=t(3);Object.defineProperty(r,"conformToMask",{enumerable:!0,get:function(){return n(o).default}});var i=t(2);Object.defineProperty(r,"adjustCaretPosition",{enumerable:!0,get:function(){return n(i).default}});var a=t(5);Object.defineProperty(r,"createTextMaskInputElement",{enumerable:!0,get:function(){return n(a).default}})},function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.placeholderChar="_"},function(e,r){"use strict";function t(e){var r=e.previousConformedValue,t=void 0===r?o:r,i=e.currentCaretPosition,a=void 0===i?0:i,u=e.conformedValue,l=e.rawValue,f=e.placeholderChar,s=e.placeholder,d=e.indexesOfPipedChars,c=void 0===d?n:d,p=e.caretTrapIndexes,v=void 0===p?n:p;if(0===a)return 0;var h=l.length,m=t.length,g=s.length,y=u.length,b=h-m,C=b>0,P=0===m,x=b>1&&!C&&!P;if(x)return a;var k=C&&(t===u||u===s),O=0;if(k)O=a-b;else for(var j=u.toLowerCase(),M=l.toLowerCase(),T=M.substr(0,a).split(o),_=T.filter(function(e){return j.indexOf(e)!==-1}),w=_[_.length-1],S=c.map(function(e){return j[e]}),V=S.filter(function(e){return e===w}).length,N=_.filter(function(e){return e===w}).length,E=s.substr(0,s.indexOf(f)).split(o).filter(function(e,r){return e===w&&l[r]!==e}).length,A=E+N+V,R=0,I=0;I<y;I++){var J=j[I];if(O=I+1,J===w&&R++,R>=A)break}if(C){for(var q=O,F=O;F<=g;F++)if(s[F]===f&&(q=F),s[F]===f||v.indexOf(F)!==-1||F===g)return q}else for(var L=O;L>=0;L--)if(s[L-1]===f||v.indexOf(L)!==-1||0===L)return L}Object.defineProperty(r,"__esModule",{value:!0}),r.default=t;var n=[],o=""},function(e,r,t){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=t.guide,u=void 0===n||n,l=t.previousConformedValue,f=void 0===l?a:l,s=t.placeholderChar,d=void 0===s?i.placeholderChar:s,c=t.placeholder,p=void 0===c?(0,o.convertMaskToPlaceholder)(r,d):c,v=t.currentCaretPosition,h=t.keepCharPositions,m=u===!1&&void 0!==f,g=e.length,y=f.length,b=p.length,C=r.length,P=g-y,x=P>0,k=v+(x?-P:0),O=k+Math.abs(P);if(h===!0&&!x){for(var j=a,M=k;M<O;M++)p[M]===d&&(j+=d);e=e.slice(0,k)+j+e.slice(k,g)}for(var T=e.split(a).map(function(e,r){return{char:e,isNew:r>=k&&r<O}}),_=g-1;_>=0;_--){var w=T[_].char;if(w!==d){var S=_>=k&&y===C;w===p[S?_-P:_]&&T.splice(_,1)}}var V=a,N=!1;e:for(var E=0;E<b;E++){var A=p[E];if(A===d){if(T.length>0)for(;T.length>0;){var R=T.shift(),I=R.char,J=R.isNew;if(I===d&&m!==!0){V+=d;continue e}if(r[E].test(I)){if(h===!0&&J!==!1&&f!==a&&u!==!1&&x){for(var q=T.length,F=null,L=0;L<q;L++){var W=T[L];if(W.char!==d&&W.isNew===!1)break;if(W.char===d){F=L;break}}null!==F?(V+=I,T.splice(F,1)):E--}else V+=I;continue e}N=!0}m===!1&&(V+=p.substr(E,b));break}V+=A}if(m&&x===!1){for(var z=null,B=0;B<V.length;B++)p[B]===d&&(z=B);V=null!==z?V.substr(0,z+1):a}return{conformedValue:V,meta:{someCharsRejected:N}}}Object.defineProperty(r,"__esModule",{value:!0}),r.default=n;var o=t(4),i=t(1),a=""},function(e,r,t){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u.placeholderChar;if(e.indexOf(r)!==-1)throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\n"+("The placeholder character that was received is: "+JSON.stringify(r)+"\n\n")+("The mask that was received is: "+JSON.stringify(e)));return e.map(function(e){return e instanceof RegExp?r:e}).join("")}function o(e){return"string"==typeof e||e instanceof String}function i(e){return"number"==typeof e&&void 0===e.length&&!isNaN(e)}function a(e){for(var r=[],t=void 0;t=e.indexOf(f),t!==-1;)r.push(t),e.splice(t,1);return{maskWithoutCaretTraps:e,indexes:r}}Object.defineProperty(r,"__esModule",{value:!0}),r.convertMaskToPlaceholder=n,r.isString=o,r.isNumber=i,r.processCaretTraps=a;var u=t(1),l=[],f="[]"},function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var r={previousConformedValue:void 0};return{state:r,update:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,o=n.inputElement,f=n.mask,d=n.guide,g=n.pipe,b=n.placeholderChar,C=void 0===b?v.placeholderChar:b,P=n.keepCharPositions,x=void 0!==P&&P;if("undefined"==typeof t&&(t=o.value),t!==r.previousConformedValue){("undefined"==typeof f?"undefined":l(f))===y&&void 0!==f.pipe&&void 0!==f.mask&&(g=f.pipe,f=f.mask);var k=void 0,O=void 0;if(f instanceof Array&&(k=(0,p.convertMaskToPlaceholder)(f,C)),f!==!1){var j=a(t),M=o.selectionStart,T=r.previousConformedValue,_=void 0;if(("undefined"==typeof f?"undefined":l(f))===h){if(O=f(j,{currentCaretPosition:M,previousConformedValue:T,placeholderChar:C}),O===!1)return;var w=(0,p.processCaretTraps)(O),S=w.maskWithoutCaretTraps,V=w.indexes;O=S,_=V,k=(0,p.convertMaskToPlaceholder)(O,C)}else O=f;var N={previousConformedValue:T,guide:d,placeholderChar:C,pipe:g,placeholder:k,currentCaretPosition:M,keepCharPositions:x},E=(0,c.default)(j,O,N),A=E.conformedValue,R=("undefined"==typeof g?"undefined":l(g))===h,I={};R&&(I=g(A,u({rawValue:j},N)),I===!1?I={value:T,rejected:!0}:(0,p.isString)(I)&&(I={value:I}));var J=R?I.value:A,q=(0,s.default)({previousConformedValue:T,conformedValue:J,placeholder:k,rawValue:j,currentCaretPosition:M,placeholderChar:C,indexesOfPipedChars:I.indexesOfPipedChars,caretTrapIndexes:_}),F=J===k&&0===q,L=F?m:J;r.previousConformedValue=L,o.value!==L&&(o.value=L,i(o,q))}}}}}function i(e,r){document.activeElement===e&&(b?C(function(){return e.setSelectionRange(r,r,g)},0):e.setSelectionRange(r,r,g))}function a(e){if((0,p.isString)(e))return e;if((0,p.isNumber)(e))return String(e);if(void 0===e||null===e)return m;throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n "+JSON.stringify(e))}Object.defineProperty(r,"__esModule",{value:!0});var u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};r.default=o;var f=t(2),s=n(f),d=t(3),c=n(d),p=t(4),v=t(1),h="function",m="",g="none",y="object",b="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),C="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:setTimeout}])});

/***/ }),

/***/ 452:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var forms_1 = __webpack_require__(187);
var textMaskCore_1 = __webpack_require__(450);
exports.MASKEDINPUT_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return MaskedInputDirective; }),
    multi: true
};
var MaskedInputDirective = (function () {
    function MaskedInputDirective(renderer, element) {
        this.renderer = renderer;
        this.element = element;
        this.textMaskConfig = {
            mask: [],
            guide: true,
            placeholderChar: '_',
            pipe: undefined,
            keepCharPositions: false,
        };
        this._onTouched = function () { };
        this._onChange = function (_) { };
    }
    MaskedInputDirective.prototype.ngOnChanges = function (changes) {
        this.setupMask();
        if (this.textMaskInputElement !== undefined) {
            this.textMaskInputElement.update(this.inputElement.value);
        }
    };
    MaskedInputDirective.prototype.writeValue = function (value) {
        if (!this.inputElement) {
            this.setupMask();
        }
        // set the initial value for cases where the mask is disabled
        var normalizedValue = value == null ? '' : value;
        this.renderer.setElementProperty(this.inputElement, 'value', normalizedValue);
        if (this.textMaskInputElement !== undefined) {
            this.textMaskInputElement.update(value);
        }
    };
    MaskedInputDirective.prototype.registerOnChange = function (fn) { this._onChange = fn; };
    MaskedInputDirective.prototype.registerOnTouched = function (fn) { this._onTouched = fn; };
    MaskedInputDirective.prototype.setDisabledState = function (isDisabled) {
        this.renderer.setElementProperty(this.element.nativeElement, 'disabled', isDisabled);
    };
    MaskedInputDirective.prototype.onInput = function (value) {
        if (!this.inputElement) {
            this.setupMask();
        }
        if (this.textMaskInputElement !== undefined) {
            this.textMaskInputElement.update(value);
            // get the updated value
            value = this.inputElement.value;
            // check against the last value to prevent firing ngModelChange despite no changes
            if (this.lastValue !== value) {
                this.lastValue = value;
                this._onChange(value);
            }
        }
    };
    MaskedInputDirective.prototype.setupMask = function () {
        if (this.element.nativeElement.tagName === 'INPUT') {
            // `textMask` directive is used directly on an input element
            this.inputElement = this.element.nativeElement;
        }
        else {
            // `textMask` directive is used on an abstracted input element, `ion-input`, `md-input`, etc
            this.inputElement = this.element.nativeElement.getElementsByTagName('INPUT')[0];
        }
        if (this.inputElement) {
            this.textMaskInputElement = textMaskCore_1.createTextMaskInputElement(Object.assign({ inputElement: this.inputElement }, this.textMaskConfig));
        }
    };
    return MaskedInputDirective;
}());
__decorate([
    core_1.Input('textMask'),
    __metadata("design:type", Object)
], MaskedInputDirective.prototype, "textMaskConfig", void 0);
MaskedInputDirective = __decorate([
    core_1.Directive({
        host: {
            '(input)': 'onInput($event.target.value)',
            '(blur)': '_onTouched()'
        },
        selector: '[textMask]',
        providers: [exports.MASKEDINPUT_VALUE_ACCESSOR]
    }),
    __metadata("design:paramtypes", [core_1.Renderer, core_1.ElementRef])
], MaskedInputDirective);
exports.MaskedInputDirective = MaskedInputDirective;
var TextMaskModule = (function () {
    function TextMaskModule() {
    }
    return TextMaskModule;
}());
TextMaskModule = __decorate([
    core_1.NgModule({
        declarations: [MaskedInputDirective],
        exports: [MaskedInputDirective]
    })
], TextMaskModule);
exports.TextMaskModule = TextMaskModule;
var textMaskCore_2 = __webpack_require__(450);
exports.conformToMask = textMaskCore_2.conformToMask;
//# sourceMappingURL=angular2TextMask.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_clientes_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientesComponent = (function () {
    function ClientesComponent(clientesService) {
        this.clientesService = clientesService;
        this.clientes = [];
        this.loadStatus = false;
        this.order = 'criadoEm';
        this.reverse = true;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* AppSettings */].API_ENDPOINT;
    }
    ClientesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.inscricao = this.clientesService.getClientes().subscribe(function (clientes) {
            _this.clientes = clientes;
            _this.loadStatus = true;
        });
    };
    ClientesComponent.prototype.setOrder = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
    };
    return ClientesComponent;
}());
ClientesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-clientes',
        template: __webpack_require__(506),
        styles: [__webpack_require__(485)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_clientes_service__["a" /* ClientesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_clientes_service__["a" /* ClientesService */]) === "function" && _a || Object])
], ClientesComponent);

var _a;
//# sourceMappingURL=C:/Users/desenvolvedor/extinfire_v2/src/clientes.component.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_clientes_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_config__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalheClienteComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetalheClienteComponent = (function () {
    function DetalheClienteComponent(clientesService, route, router) {
        this.clientesService = clientesService;
        this.route = route;
        this.router = router;
        this.globalActions = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.cliente = {};
        this.loadStatus = false;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__app_config__["a" /* AppSettings */].API_ENDPOINT;
    }
    DetalheClienteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.inscricao = this.route.params.subscribe(function (params) {
            _this.clientesService.getCliente(params['id']).subscribe(function (cliente) {
                _this.cliente = cliente;
                _this.loadStatus = true;
            });
        });
    };
    DetalheClienteComponent.prototype.deleteCliente = function (cliente) {
        var _this = this;
        this.clientesService.deleteCliente(cliente).subscribe(function (data) {
            if (data.n) {
                _this.router.navigate(['clientes']);
                _this.triggerToast('Usuário excluido com sucesso!', 'green');
            }
        });
    };
    DetalheClienteComponent.prototype.triggerToast = function (stringToast, bgColor) {
        this.globalActions.emit({ action: 'toast', params: [stringToast, 4000, bgColor] });
    };
    return DetalheClienteComponent;
}());
DetalheClienteComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-detalhe-cliente',
        template: __webpack_require__(507),
        styles: [__webpack_require__(486)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_clientes_service__["a" /* ClientesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_clientes_service__["a" /* ClientesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object])
], DetalheClienteComponent);

var _a, _b, _c;
//# sourceMappingURL=C:/Users/desenvolvedor/extinfire_v2/src/detalhe-cliente.component.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_clientes_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_config__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditarClienteComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditarClienteComponent = (function () {
    function EditarClienteComponent(route, clientesService, router) {
        this.route = route;
        this.clientesService = clientesService;
        this.router = router;
        this.globalActions = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.loadStatus = false;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* AppSettings */].API_ENDPOINT;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__["FileUploader"]({
            url: this.baseUrl + 'api/upload'
        });
        this.hasBaseDropZoneOver = false;
        this.cliente = {};
    }
    EditarClienteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.inscricao = this.route.params.subscribe(function (params) {
            _this.clientesService.getCliente(params['id']).subscribe(function (cliente) {
                _this.cliente = cliente;
                _this.loadStatus = true;
            });
        });
        console.log(this.baseUrl + 'api/upload');
    };
    EditarClienteComponent.prototype.ngAfterViewChecked = function () {
        if (Materialize.updateTextFields)
            Materialize.updateTextFields();
    };
    EditarClienteComponent.prototype.updateCliente = function () {
        var _this = this;
        for (var j = 0; j < this.uploader.queue.length; ++j) {
            this.cliente.images.push(this.uploader.queue[j].file.name);
        }
        this.uploader.clearQueue();
        this.clientesService.updateCliente(this.cliente).subscribe(function (data) {
            _this.uploader.uploadAll();
            _this.router.navigate(['clientes']);
            _this.triggerToast('Cliente editado com sucesso!', 'green');
        });
    };
    EditarClienteComponent.prototype.removeItemFotos = function (item) {
        this.cliente.images.splice(this.cliente.images.indexOf(item), 1);
    };
    EditarClienteComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    EditarClienteComponent.prototype.triggerToast = function (stringToast, bgColor) {
        this.globalActions.emit({ action: 'toast', params: [stringToast, 4000, bgColor] });
    };
    return EditarClienteComponent;
}());
EditarClienteComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-editar-cliente',
        template: __webpack_require__(508),
        styles: [__webpack_require__(487)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_clientes_service__["a" /* ClientesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_clientes_service__["a" /* ClientesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object])
], EditarClienteComponent);

var _a, _b, _c;
//# sourceMappingURL=C:/Users/desenvolvedor/extinfire_v2/src/editar-cliente.component.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_clientes_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_config__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NovoClienteComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NovoClienteComponent = (function () {
    function NovoClienteComponent(route, clientesService, router) {
        this.route = route;
        this.clientesService = clientesService;
        this.router = router;
        this.loadCep = false;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* AppSettings */].API_ENDPOINT;
        this.globalActions = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.uploader = new __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__["FileUploader"]({
            url: this.baseUrl + 'api/upload'
        });
        this.maskCel = ['(', /\d/, /\d/, ')', ' ', /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        this.maskFone = ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        this.maskCep = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
        this.maskCnpj = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];
        this.maskCpf = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
        this.hasBaseDropZoneOver = false;
        this.selectEstadoOptions = [
            {
                "nome": "Acre",
                "uf": "AC"
            },
            {
                "nome": "Alagoas",
                "uf": "AL"
            },
            {
                "nome": "Amazonas",
                "uf": "AM"
            },
            {
                "nome": "Amapá",
                "uf": "AP"
            },
            {
                "nome": "Bahia",
                "uf": "BA"
            },
            {
                "nome": "Ceará",
                "uf": "CE"
            },
            {
                "nome": "Distrito Federal",
                "uf": "DF"
            },
            {
                "nome": "Espírito Santo",
                "uf": "ES"
            },
            {
                "nome": "Goiás",
                "uf": "GO"
            },
            {
                "nome": "Maranhão",
                "uf": "MA"
            },
            {
                "nome": "Minas Gerais",
                "uf": "MG"
            },
            {
                "nome": "Mato Grosso do Sul",
                "uf": "MS"
            },
            {
                "nome": "Mato Grosso",
                "uf": "MT"
            },
            {
                "nome": "Pará",
                "uf": "PA"
            },
            {
                "nome": "Paraíba",
                "uf": "PB"
            },
            {
                "nome": "Pernambuco",
                "uf": "PE"
            },
            {
                "nome": "Piauí",
                "uf": "PI"
            },
            {
                "nome": "Paraná",
                "uf": "PR"
            },
            {
                "nome": "Rio de Janeiro",
                "uf": "RJ"
            },
            {
                "nome": "Rio Grande do Norte",
                "uf": "RN"
            },
            {
                "nome": "Rondônia",
                "uf": "RO"
            },
            {
                "nome": "Roraima",
                "uf": "RR"
            },
            {
                "nome": "Rio Grande do Sul",
                "uf": "RS"
            },
            {
                "nome": "Santa Catarina",
                "uf": "SC"
            },
            {
                "nome": "Sergipe",
                "uf": "SE"
            },
            {
                "nome": "São Paulo",
                "uf": "SP"
            },
            {
                "nome": "Tocantins",
                "uf": "TO"
            }
        ];
    }
    NovoClienteComponent.prototype.ngOnInit = function () {
    };
    NovoClienteComponent.prototype.ngAfterViewChecked = function () {
        if (Materialize.updateTextFields)
            Materialize.updateTextFields();
    };
    NovoClienteComponent.prototype.buscaCep = function () {
        var _this = this;
        if (!this.cep || this.cep.trim().length < 9)
            return false;
        this.loadCep = true;
        this.clientesService.getCep(this.cep).subscribe(function (data) {
            if (!data.erro) {
                _this.bairro = data.bairro;
                _this.complemento = data.complemento;
                _this.logradouro = data.logradouro;
                _this.cidade = data.localidade;
                _this.estado = data.uf;
            }
            else {
                _this.bairro = undefined;
                _this.complemento = undefined;
                _this.logradouro = undefined;
                _this.cidade = undefined;
                _this.estado = undefined;
            }
            _this.loadCep = false;
        });
    };
    NovoClienteComponent.prototype.trustAsResourceUrl = function (uri) {
        return encodeURIComponent(uri);
    };
    NovoClienteComponent.prototype.novoCliente = function (event) {
        var _this = this;
        event.preventDefault();
        if (!this.nome)
            return false;
        var newCliente = {
            images: [],
            nome: this.nome,
            representante: this.representante,
            cnpj: this.cnpj,
            insc_estadual: this.insc_estadual,
            comprador: this.comprador,
            contato: {
                fone: this.fone,
                celular: this.celular,
                email: this.email
            },
            endereco: {
                logradouro: this.logradouro,
                numero: this.numero,
                complemento: this.complemento,
                bairro: this.bairro,
                cidade: this.cidade,
                estado: this.estado,
                cep: this.cep
            }
        };
        for (var i = 0; i < this.uploader.queue.length; ++i) {
            newCliente.images.push(this.uploader.queue[i].file.name);
        }
        this.clientesService.addCliente(newCliente).subscribe(function (cliente) {
            _this.uploader.uploadAll();
            _this.router.navigate(['clientes']);
            _this.triggerToast('Cliente cadastrado com sucesso!', 'green');
        });
    };
    NovoClienteComponent.prototype.triggerToast = function (stringToast, bgColor) {
        this.globalActions.emit({ action: 'toast', params: [stringToast, 4000, bgColor] });
    };
    ////////////////////////// Upload ///////////////////////////
    ////////////////////////////////////////////////////////////
    NovoClienteComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    return NovoClienteComponent;
}());
NovoClienteComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-novo-cliente',
        template: __webpack_require__(509),
        styles: [__webpack_require__(488)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_clientes_service__["a" /* ClientesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_clientes_service__["a" /* ClientesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object])
], NovoClienteComponent);

var _a, _b, _c;
//# sourceMappingURL=C:/Users/desenvolvedor/extinfire_v2/src/novo-cliente.component.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagePreviewCliente; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImagePreviewCliente = (function () {
    function ImagePreviewCliente(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        console.log('ImagePreviewClienteDirective Initialize...');
    }
    ImagePreviewCliente.prototype.ngOnInit = function () {
    };
    ImagePreviewCliente.prototype.ngOnChanges = function (changes) {
        var reader = new FileReader();
        var el = this.el;
        reader.onloadend = function (e) {
            el.nativeElement.src = reader.result;
        };
        if (this.image) {
            return reader.readAsDataURL(this.image);
        }
    };
    return ImagePreviewCliente;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ImagePreviewCliente.prototype, "image", void 0);
ImagePreviewCliente = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: 'img[imgPreviewCliente]' }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _b || Object])
], ImagePreviewCliente);

var _a, _b;
//# sourceMappingURL=C:/Users/desenvolvedor/extinfire_v2/src/image-preview-cliente.directive.js.map

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clientes_component__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__novo_cliente_novo_cliente_component__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editar_cliente_editar_cliente_component__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__detalhe_cliente_detalhe_cliente_component__ = __webpack_require__(454);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientesRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

;





var clientesRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__clientes_component__["a" /* ClientesComponent */]
    },
    {
        path: 'novo',
        component: __WEBPACK_IMPORTED_MODULE_3__novo_cliente_novo_cliente_component__["a" /* NovoClienteComponent */]
    },
    {
        path: ':id',
        component: __WEBPACK_IMPORTED_MODULE_5__detalhe_cliente_detalhe_cliente_component__["a" /* DetalheClienteComponent */]
    },
    {
        path: ':id/editar',
        component: __WEBPACK_IMPORTED_MODULE_4__editar_cliente_editar_cliente_component__["a" /* EditarClienteComponent */]
    }
];
var ClientesRoutingModule = (function () {
    function ClientesRoutingModule() {
    }
    return ClientesRoutingModule;
}());
ClientesRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(clientesRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], ClientesRoutingModule);

//# sourceMappingURL=C:/Users/desenvolvedor/extinfire_v2/src/clientes.routing.module.js.map

/***/ }),

/***/ 485:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 486:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 487:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 488:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "#loadCep {\r\n\tposition: absolute;\r\n\tright: 0;\r\n\twidth: 20px;\r\n\theight: 20px;\r\n\tmargin: 8px 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 506:
/***/ (function(module, exports) {

module.exports = "<nav class=\"header-pages white\">\r\n\t<div class=\"nav-wrapper\">\r\n\t\t<div class=\"col s12\">\r\n\t\t\t<span class=\"breadcrumb\">Lista de Clientes</span>\r\n\t\t</div>\r\n\t</div>\r\n</nav>\r\n<!-- Botoes de ação -->\r\n<div class=\"row\" *ngIf=\"loadStatus\">\r\n\t<div class=\"col s12 right-align\">\r\n\t\t<a routerLink=\"novo\" class=\"waves-effect waves-light btn red darken-1\">Novo Cliente</a>\r\n\t</div>\r\n</div>\r\n<div class=\"section\"></div>\r\n<!-- Carregando clientes -->\r\n<div class=\"row\" *ngIf=\"!loadStatus\">\r\n\t<div class=\"col s12\">\r\n\t\t<div id=\"loader\" class=\"preloader-wrapper big active\">\r\n\t\t\t<div class=\"spinner-layer spinner-red-only\">\r\n\t\t\t\t<div class=\"circle-clipper left\">\r\n\t\t\t\t\t<div class=\"circle\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"gap-patch\">\r\n\t\t\t\t\t<div class=\"circle\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"circle-clipper right\">\r\n\t\t\t\t\t<div class=\"circle\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<!-- Sem nenhum cliente -->\r\n<div class=\"row\" *ngIf=\"!clientes.length&&loadStatus\">\r\n\t<div class=\"col s12\">\r\n\t\t<div class=\"section\"></div>\r\n\t\t<div class=\"center-align\">\r\n\t\t\t<div class=\"grey-text text-lighten-2\">\r\n\t\t\t\t<h2>Sem nenhum cliente aqui <br><small>clique em Novo Cliente</small></h2>\r\n\t\t\t\t<i class=\"material-icons big\">&#xE814;</i>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<div class=\"row\" *ngIf=\"clientes.length\">\r\n\t<div class=\"col s12\">\r\n\t\t<form action=\"#\">\r\n\t\t\t<table class=\"bordered highlight responsive-table\">\r\n\t\t\t\t<thead>\r\n\t\t\t\t\t<tr class=\"orders\">\r\n\t\t\t\t\t\t<th \r\n\t\t\t\t\t\tdata-field=\"nome\" \r\n\t\t\t\t\t\t(click)=\"setOrder('nome')\"\r\n\t\t\t\t\t\t[class.active]=\"order === 'nome'\"\r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\tCliente\r\n\t\t\t\t\t\t\t<span [hidden]=\"reverse\">\r\n\t\t\t\t\t\t\t\t<i class=\"material-icons right\">&#xE5C5;</i>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<span [hidden]=\"!reverse\">\r\n\t\t\t\t\t\t\t\t<i class=\"material-icons right\">&#xE5C7;</i>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t<th \r\n\t\t\t\t\t\tdata-field=\"cidade\" \r\n\t\t\t\t\t\t(click)=\"setOrder('endereco.cidade')\"\r\n\t\t\t\t\t\t[class.active]=\"order === 'endereco.cidade'\"\r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\tCidade\r\n\t\t\t\t\t\t\t<span [hidden]=\"reverse\">\r\n\t\t\t\t\t\t\t\t<i class=\"material-icons right\">&#xE5C5;</i>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<span [hidden]=\"!reverse\">\r\n\t\t\t\t\t\t\t\t<i class=\"material-icons right\">&#xE5C7;</i>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t<th \r\n\t\t\t\t\t\tdata-field=\"celular\" \r\n\t\t\t\t\t\t(click)=\"setOrder('contato.celular')\"\r\n\t\t\t\t\t\t[class.active]=\"order === 'contato.celular'\"\r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\tContato\r\n\t\t\t\t\t\t\t<span [hidden]=\"reverse\">\r\n\t\t\t\t\t\t\t\t<i class=\"material-icons right\">&#xE5C5;</i>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<span [hidden]=\"!reverse\">\r\n\t\t\t\t\t\t\t\t<i class=\"material-icons right\">&#xE5C7;</i>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t<th \r\n\t\t\t\t\t\tdata-field=\"updatedAt\" \r\n\t\t\t\t\t\t(click)=\"setOrder('updatedAt')\"\r\n\t\t\t\t\t\t[class.active]=\"order === 'updatedAt'\"\r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\tData Criado\r\n\t\t\t\t\t\t\t<span [hidden]=\"reverse\">\r\n\t\t\t\t\t\t\t\t<i class=\"material-icons right\">&#xE5C5;</i>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<span [hidden]=\"!reverse\">\r\n\t\t\t\t\t\t\t\t<i class=\"material-icons right\">&#xE5C7;</i>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t<th></th>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</thead>\r\n\t\t\t\t<tbody>\r\n\t\t\t\t\t<tr *ngFor=\"let cliente of clientes | orderBy: order:reverse | paginate: { itemsPerPage: 10, currentPage: p }\" [routerLink]=\"[cliente._id]\">\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<img src=\"{{ baseUrl + 'uploads/' + (!cliente.images[0] ? 'sem-foto.jpg' : cliente.images[0]) }}\" class=\"circle img-table\">\r\n\t\t\t\t\t\t\t{{ cliente.nome }}\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>{{ cliente.endereco?.cidade || '---' }}</td>\r\n\t\t\t\t\t\t<td>{{ cliente.contato?.celular || '---' }}</td>\r\n\t\t\t\t\t\t<td>{{ cliente.updatedAt  | date:'dd/MM/yyyy HH:mm:ss' }}</td>\r\n\t\t\t\t\t\t<td><i class=\"material-icons\">&#xE315;</i></td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</tbody>\r\n\t\t\t</table>\r\n\t\t\t<pagination-controls \r\n\t\t\t(pageChange)=\"p = $event\" \r\n\t\t\tpreviousLabel=\"Anterior\"\r\n            nextLabel=\"Próximo\"\r\n            *ngIf=\"clientes.length>9\"\r\n            ></pagination-controls>\r\n\t\t</form>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ 507:
/***/ (function(module, exports) {

module.exports = "<nav class=\"header-pages white\">\r\n\t<div class=\"nav-wrapper\">\r\n\t\t<div class=\"col s12\">\r\n\t\t\t<a routerLink=\"/clientes\" class=\"breadcrumb\">Lista de Clientes</a>\r\n\t\t\t<span class=\"breadcrumb\">Detalhe do Cliente</span>\r\n\t\t</div>\r\n\t</div>\r\n</nav>\r\n<!-- Carregando -->\r\n<div class=\"row\" *ngIf=\"!loadStatus\">\r\n\t<div class=\"col s12\">\r\n\t\t<div id=\"loader\" class=\"preloader-wrapper big active\">\r\n\t\t\t<div class=\"spinner-layer spinner-red-only\">\r\n\t\t\t\t<div class=\"circle-clipper left\">\r\n\t\t\t\t\t<div class=\"circle\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"gap-patch\">\r\n\t\t\t\t\t<div class=\"circle\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"circle-clipper right\">\r\n\t\t\t\t\t<div class=\"circle\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<!-- Botoes de ação -->\r\n<div class=\"row\" *ngIf=\"cliente&&loadStatus\">\r\n\t<div class=\"col s12 right-align\">\r\n\t\t<a class=\"waves-effect waves-light btn red darken-1\" [routerLink]=\"['/clientes', cliente._id, 'editar']\">Editar</a>\r\n\t\t<a class=\"waves-effect waves-light btn grey darken-4\" (click)=\"deleteCliente(cliente)\">Excluir</a>\r\n\t\t<a class=\"waves-effect waves-light btn grey\" routerLink=\"/clientes\">Cancelar</a>\r\n\t</div>\r\n</div>\r\n<div class=\"section\"></div>\r\n<div class=\"row\" *ngIf=\"cliente&&loadStatus\">\r\n\t<div class=\"col s12 push-m3 m6 center-align\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col s6\">\r\n\t\t\t\t<img src=\"{{ baseUrl + 'uploads/' + (!image ? 'sem-foto.jpg' : image) }}\" class=\"circle img-table\" *ngFor=\"let image of cliente.images\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col s12\">\r\n\t\t\t\t<div class=\"section\">\r\n\t\t\t\t\t<h4>Geral</h4>\r\n\t\t\t\t\t<div class=\"divider\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- Nome -->\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col s12\">\r\n\t\t\t\t\t\t<label>Nome</label>\r\n\t\t\t\t\t\t<h5>{{ cliente.nome }}</h5>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<!-- Comprador -->\r\n\t\t\t\t\t<div class=\"col s6\">\r\n\t\t\t\t\t\t<label>Comprador</label>\r\n\t\t\t\t\t\t<h5>{{ cliente.comprador }}</h5>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- Representante -->\r\n\t\t\t\t\t<div class=\"col s6\">\r\n\t\t\t\t\t\t<label>Representante</label>\r\n\t\t\t\t\t\t<h5>{{ cliente.representante }}</h5>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<!-- Inscrição estadual -->\r\n\t\t\t\t\t<div class=\"col s6\">\r\n\t\t\t\t\t\t<label>Inscrição Estadual</label>\r\n\t\t\t\t\t\t<h5>{{ cliente.insc_estadual }}</h5>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- CNPJ -->\r\n\t\t\t\t\t<div class=\"col s6\">\r\n\t\t\t\t\t\t<label>CNPJ</label>\r\n\t\t\t\t\t\t<h5>{{ cliente.cnpj }}</h5>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- Data -->\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col s12\">\r\n\t\t\t\t\t\t<label>Data</label>\r\n\t\t\t\t\t\t<h5>{{ cliente.updatedAt | date:'dd/MM/yyyy HH:mm:ss' }}</h5>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col s12\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col s12\">\r\n\t\t\t\t\t\t<div class=\"section\">\r\n\t\t\t\t\t\t\t<h4>Contato</h4>\r\n\t\t\t\t\t\t\t<div class=\"divider\"></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<!-- Fone -->\r\n\t\t\t\t\t\t\t<div class=\"col s4\">\r\n\t\t\t\t\t\t\t\t<label>Fone</label>\r\n\t\t\t\t\t\t\t\t<h5>{{ cliente.contato?.fone }}</h5>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!-- Celular -->\r\n\t\t\t\t\t\t\t<div class=\"col s4\">\r\n\t\t\t\t\t\t\t\t<label>Celular</label>\r\n\t\t\t\t\t\t\t\t<h5>{{ cliente.contato?.celular }}</h5>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!-- Email -->\r\n\t\t\t\t\t\t\t<div class=\"col s4\">\r\n\t\t\t\t\t\t\t\t<label>Email</label>\r\n\t\t\t\t\t\t\t\t<h5>{{ cliente.contato?.email }}</h5>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<a (click)=\"triggerToast()\" materialize [materializeActions]=\"globalActions\"></a>"

/***/ }),

/***/ 508:
/***/ (function(module, exports) {

module.exports = "<nav class=\"header-pages white\">\r\n\t<div class=\"nav-wrapper\">\r\n\t\t<div class=\"col s12\">\r\n\t\t\t<a routerLink=\"/clientes\" class=\"breadcrumb\">Lista de Clientes</a>\r\n\t\t\t <a [routerLink]=\"['/clientes', cliente._id]\" class=\"breadcrumb\">Detalhe do Cliente</a>\r\n\t\t\t<span class=\"breadcrumb\">Editar Cliente</span>\r\n\t\t</div>\r\n\t</div>\r\n</nav>\r\n<!-- Carregando -->\r\n<div class=\"row\" *ngIf=\"!loadStatus\">\r\n\t<div class=\"col s12\">\r\n\t\t<div id=\"loader\" class=\"preloader-wrapper big active\">\r\n\t\t\t<div class=\"spinner-layer spinner-red-only\">\r\n\t\t\t\t<div class=\"circle-clipper left\">\r\n\t\t\t\t\t<div class=\"circle\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"gap-patch\">\r\n\t\t\t\t\t<div class=\"circle\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"circle-clipper right\">\r\n\t\t\t\t\t<div class=\"circle\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<form (submit)=\"updateCliente()\" *ngIf=\"loadStatus\">\r\n\t<!-- Botoes de ação -->\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col s12 right-align\">\r\n\t\t\t<button type=\"submit\" class=\"waves-effect waves-light btn red darken-1\" name=\"action\">Editar e Salvar</button>\r\n\t\t\t<a class=\"modal-action modal-close waves-effect waves-light btn grey\" [routerLink]=\"['/clientes', cliente._id]\">Cancelar e Voltar</a>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"section\"></div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col 12\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col s7\">\r\n\t\t\t\t\t<div class=\"section\"></div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-s12\">\r\n\t\t\t\t\t\t\t<div class=\"input-field\">\r\n\t\t\t\t\t\t\t\t<input id=\"nome\" type=\"text\" (ngModelChange)=\"cliente.nome=$event\" [ngModel]=\"cliente?.nome\" name=\"nome\" required=\"\" aria-required=\"true\">\r\n\t\t\t\t\t\t\t\t<label for=\"nome\">Nome do cliente</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-s6\">\r\n\t\t\t\t\t\t\t<div class=\"input-field\">\r\n\t\t\t\t\t\t\t\t<input id=\"representante\" type=\"text\" (ngModelChange)=\"cliente.representante=$event\" [ngModel]=\"cliente?.representante\" name=\"representante\">\r\n\t\t\t\t\t\t\t\t<label for=\"representante\">Representante</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-s6\">\r\n\t\t\t\t\t\t\t<div class=\"input-field\">\r\n\t\t\t\t\t\t\t\t<input id=\"comprador\" type=\"text\" (ngModelChange)=\"cliente.comprador=$event\" [ngModel]=\"cliente?.comprador\" name=\"comprador\">\r\n\t\t\t\t\t\t\t\t<label for=\"comprador\">Comprador</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col s6\">\r\n\t\t\t\t\t\t\t<div class=\"input-field\">\r\n\t\t\t\t\t\t\t\t<input id=\"cnpj\" type=\"text\" (ngModelChange)=\"cliente.cnpj=$event\" [ngModel]=\"cliente?.cnpj\" name=\"cnpj\" >\r\n\t\t\t\t\t\t\t\t<label for=\"cnpj\">CNPJ</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col s6\">\r\n\t\t\t\t\t\t\t<div class=\"input-field\">\r\n\t\t\t\t\t\t\t\t<input id=\"insc_estadual\" type=\"text\" (ngModelChange)=\"cliente.insc_estadual=$event\" [ngModel]=\"cliente?.insc_estadual\" name=\"insc_estadual\" >\r\n\t\t\t\t\t\t\t\t<label for=\"insc_estadual\">Inscrição Estadual</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col s4\">\r\n\t\t\t\t\t\t\t<div class=\"input-field\">\r\n\t\t\t\t\t\t\t\t<input id=\"fone\" type=\"text\" (ngModelChange)=\"cliente.contato.fone=$event\" [ngModel]=\"cliente?.contato?.fone\" name=\"fone\" >\r\n\t\t\t\t\t\t\t\t<label for=\"fone\">Fone</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col s4\">\r\n\t\t\t\t\t\t\t<div class=\"input-field\">\r\n\t\t\t\t\t\t\t\t<input id=\"celular\" type=\"text\" (ngModelChange)=\"cliente.contato.celular=$event\" [ngModel]=\"cliente?.contato?.celular\" name=\"celular\" >\r\n\t\t\t\t\t\t\t\t<label for=\"celular\">Celular</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col s4\">\r\n\t\t\t\t\t\t\t<div class=\"input-field\">\r\n\t\t\t\t\t\t\t\t<input id=\"email\" type=\"email\" (ngModelChange)=\"cliente.contato.email=$event\" [ngModel]=\"cliente?.contato?.email\" name=\"email\" >\r\n\t\t\t\t\t\t\t\t<label for=\"email\">Email</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col s12\">\r\n\t\t\t\t\t\t\t<div class=\"input-field\">\r\n\t\t\t\t\t\t\t\t<input id=\"logradouro\" type=\"text\" (ngModelChange)=\"cliente.endereco.logradouro=$event\" [ngModel]=\"cliente?.endereco?.logradouro\" name=\"logradouro\" >\r\n\t\t\t\t\t\t\t\t<label for=\"logradouro\">Logradouro</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col s4\">\r\n\t\t\t\t\t\t\t<div class=\"input-field\">\r\n\t\t\t\t\t\t\t\t<input id=\"numero\" type=\"text\" (ngModelChange)=\"cliente.endereco.numero=$event\" [ngModel]=\"cliente?.endereco?.numero\" name=\"numero\" >\r\n\t\t\t\t\t\t\t\t<label for=\"numero\">Número</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col s4\">\r\n\t\t\t\t\t\t\t<div class=\"input-field\">\r\n\t\t\t\t\t\t\t\t<input id=\"complemento\" type=\"text\" (ngModelChange)=\"cliente.endereco.complemento=$event\" [ngModel]=\"cliente?.endereco?.complemento\" name=\"complemento\" >\r\n\t\t\t\t\t\t\t\t<label for=\"complemento\">Complemento</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col s4\">\r\n\t\t\t\t\t\t\t<div class=\"input-field\">\r\n\t\t\t\t\t\t\t\t<input id=\"bairro\" type=\"text\" (ngModelChange)=\"cliente.endereco.bairro=$event\" [ngModel]=\"cliente?.endereco?.bairro\" name=\"bairro\" >\r\n\t\t\t\t\t\t\t\t<label for=\"bairro\">Bairro</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col s4\">\r\n\t\t\t\t\t\t\t<div class=\"input-field\">\r\n\t\t\t\t\t\t\t\t<input id=\"cidade\" type=\"text\" (ngModelChange)=\"cliente.endereco.cidade=$event\" [ngModel]=\"cliente?.endereco?.cidade\" name=\"cidade\" >\r\n\t\t\t\t\t\t\t\t<label for=\"cidade\">Cidade</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col s4\">\r\n\t\t\t\t\t\t\t<div class=\"input-field\">\r\n\t\t\t\t\t\t\t\t<select id=\"estado\" (ngModelChange)=\"cliente.endereco.estado=$event\" [ngModel]=\"cliente?.endereco?.estado\" name=\"estado\" materialize=\"material_select\" [materializeSelectOptions]=\"selectEstadoOptions\">\r\n\t\t\t\t\t\t\t\t  <option value=\"\" disabled selected>Estado</option>\r\n\t\t\t\t\t\t\t\t  <option *ngFor=\"let option of selectEstadoOptions\" [value]=\"option.value\">{{option.name}}</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t<label for=\"estado\"></label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col s4\">\r\n\t\t\t\t\t\t\t<div class=\"input-field\">\r\n\t\t\t\t\t\t\t\t<input id=\"cep\" type=\"text\" (ngModelChange)=\"cliente.endereco.cep=$event\" [ngModel]=\"cliente?.endereco?.cep\" name=\"cep\" >\r\n\t\t\t\t\t\t\t\t<label for=\"cep\">CEP</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col s5\">\r\n\t\t\t\t\t<div class=\"section\"></div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"lista-images\">\r\n\t\t\t\t\t\t\t<div class=\"col s3 center-align\" *ngFor=\"let imgCliente of cliente.images\">\r\n\t\t\t\t\t\t\t\t<a class=\"waves-effect waves-light btn grey darken-4\" (click)=\"removeItemFotos(imgCliente)\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">&#xE92B;</i>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<img src=\"{{ baseUrl + 'uploads/' + imgCliente }}\" class=\"responsive-img\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col s3 center-align\" *ngFor=\"let item of uploader.queue\">\r\n\t\t\t\t\t\t\t\t<a class=\"waves-effect waves-light btn grey darken-4\" (click)=\"item.remove()\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">&#xE92B;</i>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<img imgPreviewCliente [image]=\"item?._file\" class=\"responsive-img\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col s12\">\r\n\t\t\t\t\t\t\t<div ng2FileDrop\r\n\t\t\t\t                 [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\"\r\n\t\t\t\t                 (fileOver)=\"fileOverBase($event)\"\r\n\t\t\t\t                 [uploader]=\"uploader\"\r\n\t\t\t\t                 class=\"drop-zone\">\r\n\t\t\t\t                <i class=\"material-icons\">&#xE439;</i>\r\n\t\t\t\t                <h4>Arraste e solte aqui</h4>\r\n\t\t\t\t                <h5>ou</h5>\r\n\t\t\t\t                <div class=\"file-field input-field\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"btn red darken-1\">\r\n\t\t\t\t\t\t\t\t\t\t<span>Imagens</span>\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"file-path-wrapper\">\r\n\t\t\t\t\t\t\t\t\t\t<input class=\"file-path validate\" type=\"text\" placeholder=\"Upload de uma ou mais imagens\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t            </div>\r\n\t\t\t            </div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</form>\r\n<a (click)=\"triggerToast()\" materialize [materializeActions]=\"globalActions\"></a>"

/***/ }),

/***/ 509:
/***/ (function(module, exports) {

module.exports = "<nav class=\"header-pages white\">\r\n\t<div class=\"nav-wrapper\">\r\n\t\t<div class=\"col s12\">\r\n\t\t\t<a routerLink=\"/clientes\" class=\"breadcrumb\">Lista de Clientes</a>\r\n\t\t\t<span class=\"breadcrumb\">Novo Cliente</span>\r\n\t\t</div>\r\n\t</div>\r\n</nav>\r\n<form (submit)=\"novoCliente($event)\">\r\n\t<!-- Botoes de ação -->\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col s12 right-align\">\r\n\t\t\t<button type=\"submit\" class=\"waves-effect waves-light btn red darken-1\" name=\"action\">Salvar e Cadastrar</button>\r\n\t\t\t<a class=\"waves-effect waves-light btn grey\" routerLink=\"/clientes\">Cancelar e Voltar</a>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"section\"></div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col s12\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col s7\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col s12\">\r\n\t\t\t\t\t\t\t<div class=\"input-field\">\r\n\t\t\t\t\t\t\t\t<input id=\"nome\" type=\"text\" [(ngModel)]=\"nome\" name=\"nome\" required=\"true\" aria-required=\"true\">\r\n\t\t\t\t\t\t\t\t<label for=\"nome\">Nome do cliente</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col s6\">\r\n\t\t\t\t\t\t\t<div class=\"input-field\">\r\n\t\t\t\t\t\t\t\t<input id=\"representante\" type=\"text\" [(ngModel)]=\"representante\" name=\"representante\">\r\n\t\t\t\t\t\t\t\t<label for=\"representante\">Representante</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col s6\">\r\n\t\t\t\t\t\t\t<div class=\"input-field\">\r\n\t\t\t\t\t\t\t\t<input id=\"comprador\" type=\"text\" [(ngModel)]=\"comprador\" name=\"comprador\">\r\n\t\t\t\t\t\t\t\t<label for=\"comprador\">Comprador</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col s4\">\r\n\t\t\t\t\t\t\t<div class=\"input-field\">\r\n\t\t\t\t\t\t\t\t<input id=\"cnpj\" type=\"text\" [(ngModel)]=\"cnpj\" name=\"cnpj\" [textMask]=\"{mask: maskCnpj, placeholderChar: '\\u2000', keepCharPositions: true}\">\r\n\t\t\t\t\t\t\t\t<label for=\"cnpj\">CNPJ</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col s4\">\r\n\t\t\t\t\t\t\t<div class=\"input-field\">\r\n\t\t\t\t\t\t\t\t<input id=\"cpf\" type=\"text\" [(ngModel)]=\"cpf\" name=\"cpf\" [textMask]=\"{mask: maskCpf, placeholderChar: '\\u2000', keepCharPositions: true}\">\r\n\t\t\t\t\t\t\t\t<label for=\"cpf\">CPF</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col s4\">\r\n\t\t\t\t\t\t\t<div class=\"input-field\">\r\n\t\t\t\t\t\t\t\t<input id=\"insc_estadual\" type=\"text\" [(ngModel)]=\"insc_estadual\" name=\"insc_estadual\" >\r\n\t\t\t\t\t\t\t\t<label for=\"insc_estadual\">Inscrição Estadual</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col s4\">\r\n\t\t\t\t\t\t\t<div class=\"input-field\">\r\n\t\t\t\t\t\t\t\t<input id=\"fone\" type=\"text\" [(ngModel)]=\"fone\" name=\"fone\" [textMask]=\"{mask: maskFone, placeholderChar: '\\u2000', keepCharPositions: true}\" required=\"true\">\r\n\t\t\t\t\t\t\t\t<label for=\"fone\">Fone</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col s4\">\r\n\t\t\t\t\t\t\t<div class=\"input-field\">\r\n\t\t\t\t\t\t\t\t<input id=\"celular\" type=\"tel\" [(ngModel)]=\"celular\" name=\"celular\" [textMask]=\"{mask: maskCel, placeholderChar: '\\u2000', keepCharPositions: true}\" required=\"true\">\r\n\t\t\t\t\t\t\t\t<label for=\"celular\">Celular</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col s4\">\r\n\t\t\t\t\t\t\t<div class=\"input-field\">\r\n\t\t\t\t\t\t\t\t<input id=\"email\" type=\"email\" [(ngModel)]=\"email\" name=\"email\" required=\"true\">\r\n\t\t\t\t\t\t\t\t<label for=\"email\">Email</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col s6\">\r\n\t\t\t\t\t\t\t<div class=\"input-field\">\r\n\t\t\t\t\t\t\t\t<div id=\"loadCep\" class=\"preloader-wrapper small active right\" *ngIf=\"loadCep\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"spinner-layer spinner-red-only\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"circle-clipper left\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"circle\"></div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"gap-patch\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"circle\"></div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"circle-clipper right\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"circle\"></div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<input id=\"cep\" type=\"text\" [(ngModel)]=\"cep\" name=\"cep\" (blur)=\"buscaCep()\" [textMask]=\"{mask: maskCep, placeholderChar: '\\u2000', keepCharPositions: true}\">\r\n\t\t\t\t\t\t\t\t<label for=\"cep\">CEP</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col s6\">\r\n\t\t\t\t\t\t\t<div class=\"input-field\">\r\n\t\t\t\t\t\t\t\t<input id=\"cidade\" type=\"text\" [(ngModel)]=\"cidade\" name=\"cidade\" >\r\n\t\t\t\t\t\t\t\t<label for=\"cidade\">Cidade</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col s6\">\r\n\t\t\t\t\t\t\t<div class=\"input-field\">\r\n\t\t\t\t\t\t\t\t<input id=\"logradouro\" type=\"text\" [(ngModel)]=\"logradouro\" name=\"logradouro\" >\r\n\t\t\t\t\t\t\t\t<label for=\"logradouro\">Logradouro</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col s6\">\r\n\t\t\t\t\t\t\t<div class=\"input-field\">\r\n\t\t\t\t\t\t\t\t<input id=\"bairro\" type=\"text\" [(ngModel)]=\"bairro\" name=\"bairro\" >\r\n\t\t\t\t\t\t\t\t<label for=\"bairro\">Bairro</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col s4\">\r\n\t\t\t\t\t\t\t<div class=\"input-field\">\r\n\t\t\t\t\t\t\t\t<input id=\"numero\" type=\"number\" [(ngModel)]=\"numero\" name=\"numero\" >\r\n\t\t\t\t\t\t\t\t<label for=\"numero\">Número</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col s4\">\r\n\t\t\t\t\t\t\t<div class=\"input-field\">\r\n\t\t\t\t\t\t\t\t<input id=\"complemento\" type=\"text\" [(ngModel)]=\"complemento\" name=\"complemento\" >\r\n\t\t\t\t\t\t\t\t<label for=\"complemento\">Complemento</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col s4\">\r\n\t\t\t\t\t\t\t<div class=\"input-field\">\r\n\t\t\t\t\t\t\t\t<select id=\"estado\" [(ngModel)]=\"estado\" name=\"estado\" materialize=\"material_select\" [materializeSelectOptions]=\"selectEstadoOptions\">\r\n\t\t\t\t\t\t\t\t  <option value=\"\" disabled selected>Estado</option>\r\n\t\t\t\t\t\t\t\t  <option *ngFor=\"let option of selectEstadoOptions\" [value]=\"option.uf\">{{option.nome}}</option>\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t<label for=\"estado\"></label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col s5\">\r\n\t\t\t\t\t<div class=\"section\"></div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"lista-images\">\r\n\t\t\t\t\t\t\t<div class=\"col s3 center-align\" *ngFor=\"let imgCliente of cliente?.images\">\r\n\t\t\t\t\t\t\t\t<a class=\"waves-effect waves-light btn grey darken-4\" (click)=\"removeItemFotos(imgCliente)\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">&#xE92B;</i>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<img src=\"{{ baseUrl + 'uploads/' + imgCliente }}\" class=\"responsive-img\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col s3 center-align\" *ngFor=\"let item of uploader.queue\">\r\n\t\t\t\t\t\t\t\t<a class=\"waves-effect waves-light btn grey darken-4\" (click)=\"item.remove()\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">&#xE92B;</i>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<img imgPreviewCliente [image]=\"item?._file\" class=\"responsive-img\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col s12\">\r\n\t\t\t\t\t\t\t<div ng2FileDrop\r\n\t\t\t\t                 [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\"\r\n\t\t\t\t                 (fileOver)=\"fileOverBase($event)\"\r\n\t\t\t\t                 [uploader]=\"uploader\"\r\n\t\t\t\t                 class=\"drop-zone\">\r\n\t\t\t\t                <i class=\"material-icons\">&#xE439;</i>\r\n\t\t\t\t                <h4>Arraste e solte aqui</h4>\r\n\t\t\t\t                <h5>ou</h5>\r\n\t\t\t\t                <div class=\"file-field input-field\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"btn red darken-1\">\r\n\t\t\t\t\t\t\t\t\t\t<span>Imagens</span>\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"file-path-wrapper\">\r\n\t\t\t\t\t\t\t\t\t\t<input class=\"file-path validate\" type=\"text\" placeholder=\"Upload de uma ou mais imagens\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t            </div>\r\n\t\t\t            </div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</form>\r\n<a (click)=\"triggerToast()\" materialize [materializeActions]=\"globalActions\"></a>"

/***/ })

});
//# sourceMappingURL=4.chunk.js.map