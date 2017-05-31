webpackJsonp([2,10],{

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_materialize__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_materialize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_materialize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_pagination__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_pagination__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_text_mask__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_text_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_order_pipe__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_order_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_order_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__vendas_routing_module__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__vendas_component__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__detalhe_venda_detalhe_venda_component__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__editar_venda_editar_venda_component__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__nova_venda_nova_venda_component__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pipes_currency_format_vendas_pipe__ = __webpack_require__(479);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendasModule", function() { return VendasModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var VendasModule = (function () {
    function VendasModule() {
    }
    return VendasModule;
}());
VendasModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__vendas_component__["a" /* VendasComponent */],
            __WEBPACK_IMPORTED_MODULE_11__detalhe_venda_detalhe_venda_component__["a" /* DetalheVendaComponent */],
            __WEBPACK_IMPORTED_MODULE_12__editar_venda_editar_venda_component__["a" /* EditarVendaComponent */],
            __WEBPACK_IMPORTED_MODULE_13__nova_venda_nova_venda_component__["a" /* NovaVendaComponent */],
            __WEBPACK_IMPORTED_MODULE_14__pipes_currency_format_vendas_pipe__["a" /* CurrencyFormatVendasPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_materialize__["MaterializeModule"],
            __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__["FileUploadModule"],
            __WEBPACK_IMPORTED_MODULE_6_ng2_pagination__["Ng2PaginationModule"],
            __WEBPACK_IMPORTED_MODULE_7_angular2_text_mask__["TextMaskModule"],
            __WEBPACK_IMPORTED_MODULE_8_ng2_order_pipe__["Ng2OrderModule"],
            __WEBPACK_IMPORTED_MODULE_9__vendas_routing_module__["a" /* VendasRoutingModule */]
        ],
        providers: []
    })
], VendasModule);

//# sourceMappingURL=C:/Users/desenvolvedor/Desktop/extinfire_v2/src/vendas.module.js.map

/***/ }),

/***/ 450:
/***/ (function(module, exports, __webpack_require__) {

!function(e,r){ true?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.textMaskCore=r():e.textMaskCore=r()}(this,function(){return function(e){function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}var t={};return r.m=e,r.c=t,r.p="",r(0)}([function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(r,"__esModule",{value:!0});var o=t(3);Object.defineProperty(r,"conformToMask",{enumerable:!0,get:function(){return n(o).default}});var i=t(2);Object.defineProperty(r,"adjustCaretPosition",{enumerable:!0,get:function(){return n(i).default}});var a=t(5);Object.defineProperty(r,"createTextMaskInputElement",{enumerable:!0,get:function(){return n(a).default}})},function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.placeholderChar="_"},function(e,r){"use strict";function t(e){var r=e.previousConformedValue,t=void 0===r?o:r,i=e.currentCaretPosition,a=void 0===i?0:i,u=e.conformedValue,l=e.rawValue,f=e.placeholderChar,s=e.placeholder,d=e.indexesOfPipedChars,c=void 0===d?n:d,p=e.caretTrapIndexes,v=void 0===p?n:p;if(0===a)return 0;var h=l.length,m=t.length,g=s.length,y=u.length,b=h-m,C=b>0,P=0===m,x=b>1&&!C&&!P;if(x)return a;var k=C&&(t===u||u===s),O=0;if(k)O=a-b;else for(var j=u.toLowerCase(),M=l.toLowerCase(),T=M.substr(0,a).split(o),_=T.filter(function(e){return j.indexOf(e)!==-1}),w=_[_.length-1],S=c.map(function(e){return j[e]}),V=S.filter(function(e){return e===w}).length,N=_.filter(function(e){return e===w}).length,E=s.substr(0,s.indexOf(f)).split(o).filter(function(e,r){return e===w&&l[r]!==e}).length,A=E+N+V,R=0,I=0;I<y;I++){var J=j[I];if(O=I+1,J===w&&R++,R>=A)break}if(C){for(var q=O,F=O;F<=g;F++)if(s[F]===f&&(q=F),s[F]===f||v.indexOf(F)!==-1||F===g)return q}else for(var L=O;L>=0;L--)if(s[L-1]===f||v.indexOf(L)!==-1||0===L)return L}Object.defineProperty(r,"__esModule",{value:!0}),r.default=t;var n=[],o=""},function(e,r,t){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=t.guide,u=void 0===n||n,l=t.previousConformedValue,f=void 0===l?a:l,s=t.placeholderChar,d=void 0===s?i.placeholderChar:s,c=t.placeholder,p=void 0===c?(0,o.convertMaskToPlaceholder)(r,d):c,v=t.currentCaretPosition,h=t.keepCharPositions,m=u===!1&&void 0!==f,g=e.length,y=f.length,b=p.length,C=r.length,P=g-y,x=P>0,k=v+(x?-P:0),O=k+Math.abs(P);if(h===!0&&!x){for(var j=a,M=k;M<O;M++)p[M]===d&&(j+=d);e=e.slice(0,k)+j+e.slice(k,g)}for(var T=e.split(a).map(function(e,r){return{char:e,isNew:r>=k&&r<O}}),_=g-1;_>=0;_--){var w=T[_].char;if(w!==d){var S=_>=k&&y===C;w===p[S?_-P:_]&&T.splice(_,1)}}var V=a,N=!1;e:for(var E=0;E<b;E++){var A=p[E];if(A===d){if(T.length>0)for(;T.length>0;){var R=T.shift(),I=R.char,J=R.isNew;if(I===d&&m!==!0){V+=d;continue e}if(r[E].test(I)){if(h===!0&&J!==!1&&f!==a&&u!==!1&&x){for(var q=T.length,F=null,L=0;L<q;L++){var W=T[L];if(W.char!==d&&W.isNew===!1)break;if(W.char===d){F=L;break}}null!==F?(V+=I,T.splice(F,1)):E--}else V+=I;continue e}N=!0}m===!1&&(V+=p.substr(E,b));break}V+=A}if(m&&x===!1){for(var z=null,B=0;B<V.length;B++)p[B]===d&&(z=B);V=null!==z?V.substr(0,z+1):a}return{conformedValue:V,meta:{someCharsRejected:N}}}Object.defineProperty(r,"__esModule",{value:!0}),r.default=n;var o=t(4),i=t(1),a=""},function(e,r,t){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u.placeholderChar;if(e.indexOf(r)!==-1)throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\n"+("The placeholder character that was received is: "+JSON.stringify(r)+"\n\n")+("The mask that was received is: "+JSON.stringify(e)));return e.map(function(e){return e instanceof RegExp?r:e}).join("")}function o(e){return"string"==typeof e||e instanceof String}function i(e){return"number"==typeof e&&void 0===e.length&&!isNaN(e)}function a(e){for(var r=[],t=void 0;t=e.indexOf(f),t!==-1;)r.push(t),e.splice(t,1);return{maskWithoutCaretTraps:e,indexes:r}}Object.defineProperty(r,"__esModule",{value:!0}),r.convertMaskToPlaceholder=n,r.isString=o,r.isNumber=i,r.processCaretTraps=a;var u=t(1),l=[],f="[]"},function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var r={previousConformedValue:void 0};return{state:r,update:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,o=n.inputElement,f=n.mask,d=n.guide,g=n.pipe,b=n.placeholderChar,C=void 0===b?v.placeholderChar:b,P=n.keepCharPositions,x=void 0!==P&&P;if("undefined"==typeof t&&(t=o.value),t!==r.previousConformedValue){("undefined"==typeof f?"undefined":l(f))===y&&void 0!==f.pipe&&void 0!==f.mask&&(g=f.pipe,f=f.mask);var k=void 0,O=void 0;if(f instanceof Array&&(k=(0,p.convertMaskToPlaceholder)(f,C)),f!==!1){var j=a(t),M=o.selectionStart,T=r.previousConformedValue,_=void 0;if(("undefined"==typeof f?"undefined":l(f))===h){if(O=f(j,{currentCaretPosition:M,previousConformedValue:T,placeholderChar:C}),O===!1)return;var w=(0,p.processCaretTraps)(O),S=w.maskWithoutCaretTraps,V=w.indexes;O=S,_=V,k=(0,p.convertMaskToPlaceholder)(O,C)}else O=f;var N={previousConformedValue:T,guide:d,placeholderChar:C,pipe:g,placeholder:k,currentCaretPosition:M,keepCharPositions:x},E=(0,c.default)(j,O,N),A=E.conformedValue,R=("undefined"==typeof g?"undefined":l(g))===h,I={};R&&(I=g(A,u({rawValue:j},N)),I===!1?I={value:T,rejected:!0}:(0,p.isString)(I)&&(I={value:I}));var J=R?I.value:A,q=(0,s.default)({previousConformedValue:T,conformedValue:J,placeholder:k,rawValue:j,currentCaretPosition:M,placeholderChar:C,indexesOfPipedChars:I.indexesOfPipedChars,caretTrapIndexes:_}),F=J===k&&0===q,L=F?m:J;r.previousConformedValue=L,o.value!==L&&(o.value=L,i(o,q))}}}}}function i(e,r){document.activeElement===e&&(b?C(function(){return e.setSelectionRange(r,r,g)},0):e.setSelectionRange(r,r,g))}function a(e){if((0,p.isString)(e))return e;if((0,p.isNumber)(e))return String(e);if(void 0===e||null===e)return m;throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n "+JSON.stringify(e))}Object.defineProperty(r,"__esModule",{value:!0});var u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};r.default=o;var f=t(2),s=n(f),d=t(3),c=n(d),p=t(4),v=t(1),h="function",m="",g="none",y="object",b="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),C="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:setTimeout}])});

/***/ }),

/***/ 451:
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.createNumberMask=t():e.createNumberMask=t()}(this,function(){return function(e){function t(n){if(o[n])return o[n].exports;var i=o[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){e.exports=o(2)},,function(e,t){"use strict";function o(){function e(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=e.length;if(e===l||e[0]===y[0]&&1===t)return y.split(l).concat([m]).concat(g.split(l));var o=e.lastIndexOf(k),c=o!==-1,u=e[0]===d&&B,a=void 0,b=void 0,h=void 0;if(e.slice(Z*-1)===g&&(e=e.slice(0,Z*-1)),c&&(w||_)?(a=e.slice(e.slice(0,T)===y?T:0,o),b=e.slice(o+1,t),b=n(b.replace(f,l))):a=e.slice(0,T)===y?e.slice(T):e,R&&("undefined"==typeof R?"undefined":r(R))===p){var S="."===N?"[.]":""+N,j=(a.match(new RegExp(S,"g"))||[]).length;a=a.slice(0,R+j*$)}return a=a.replace(f,l),I||(a=String(Number(a))),a=x?i(a,N):a,h=n(a),(c&&w||_===!0)&&(e[o-1]!==k&&h.push(v),h.push(k,v),b&&(("undefined"==typeof L?"undefined":r(L))===p&&(b=b.slice(0,L)),h=h.concat(b)),_===!0&&e[o-1]===k&&h.push(m)),T>0&&(h=y.split(l).concat(h)),u&&(h.length===T&&h.push(m),h=[s].concat(h)),g.length>0&&(h=h.concat(g.split(l))),h}var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=t.prefix,y=void 0===o?c:o,b=t.suffix,g=void 0===b?l:b,h=t.includeThousandsSeparator,x=void 0===h||h,S=t.thousandsSeparatorSymbol,N=void 0===S?u:S,j=t.allowDecimal,w=void 0!==j&&j,M=t.decimalSymbol,k=void 0===M?a:M,D=t.decimalLimit,L=void 0===D?2:D,O=t.requireDecimal,_=void 0!==O&&O,q=t.allowNegative,B=void 0!==q&&q,E=t.allowLeadingZeroes,I=void 0!==E&&E,P=t.integerLimit,R=void 0===P?null:P,T=y&&y.length||0,Z=g&&g.length||0,$=N&&N.length||0;return e.instanceOf="createNumberMask",e}function n(e){return e.split(l).map(function(e){return m.test(e)?m:e})}function i(e,t){return e.replace(/\B(?=(\d{3})+(?!\d))/g,t)}Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=o;var c="$",l="",u=",",a=".",d="-",s=/-/,f=/\D+/g,p="number",m=/\d/,v="[]"}])});

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

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_vendas_service__ = __webpack_require__(71);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalheVendaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetalheVendaComponent = (function () {
    function DetalheVendaComponent(vendasService, route, router) {
        this.vendasService = vendasService;
        this.route = route;
        this.router = router;
        this.globalActions = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    DetalheVendaComponent.prototype.ngOnInit = function () {
        var _this = this;
        /*this.inscricao = this.route.data.subscribe(
            (data: {venda: any}) => {
                this.venda = data.venda;
                
                this.urlPdf = AppSettings.API_ENDPOINT + 'pdf/' + this.venda._id;

                for (var i = 0; i < this.venda.itens.length; ++i) {

                    this.venda.itens[i].item.valor_venda = this.venda.itens[i].item.valor_venda.replace('.','').replace('.','').replace(',','.');
                    
                    this.venda.itens[i].total = this.venda.itens[i].total.replace('.','').replace('.','').replace(',','.');
                }
            }
        );*/
        this.vendasService.getVenda(this.route.params['id']).subscribe(function (venda) {
            _this.venda = venda;
        });
    };
    DetalheVendaComponent.prototype.deleteVenda = function (venda) {
        var _this = this;
        this.vendasService.deleteVenda(venda).subscribe(function (data) {
            _this.router.navigate(['vendas']);
            _this.triggerToast('Venda excluida!');
        });
    };
    DetalheVendaComponent.prototype.triggerToast = function (stringToast) {
        this.globalActions.emit({ action: 'toast', params: [stringToast, 4000] });
    };
    return DetalheVendaComponent;
}());
DetalheVendaComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-detalhe-venda',
        template: __webpack_require__(523),
        styles: [__webpack_require__(502)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_vendas_service__["a" /* VendasService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_vendas_service__["a" /* VendasService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object])
], DetalheVendaComponent);

var _a, _b, _c;
//# sourceMappingURL=C:/Users/desenvolvedor/Desktop/extinfire_v2/src/detalhe-venda.component.js.map

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_text_mask_addons_dist_createNumberMask__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_text_mask_addons_dist_createNumberMask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_text_mask_addons_dist_createNumberMask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_vendas_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_clientes_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_itens_service__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditarVendaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var numberMask = __WEBPACK_IMPORTED_MODULE_2_text_mask_addons_dist_createNumberMask___default()({
    prefix: 'R$',
    allowDecimal: true,
    integerLimit: 7,
    decimalLimit: 2,
    thousandsSeparatorSymbol: '.',
    decimalSymbol: ','
});
var EditarVendaComponent = (function () {
    function EditarVendaComponent(vendasService, clientesService, itensService, route, router) {
        this.vendasService = vendasService;
        this.clientesService = clientesService;
        this.itensService = itensService;
        this.route = route;
        this.router = router;
        this.maskMoney = numberMask;
        this.globalActions = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.venda = {
            cliente: {},
            itens: [{
                    item: {},
                    qntde: undefined,
                    validade: undefined,
                    total: undefined,
                    tipo: undefined
                }],
            valor_total: undefined,
            observacao: undefined,
            tipo: undefined
        };
    }
    EditarVendaComponent.prototype.ngOnInit = function () {
        /*this.inscricao = this.route.data.subscribe(
            (data: {venda: any, produtos: any, servicos: any, clientes: any}) => {
                this.venda = data.venda;
                this.produtos = data.produtos;
                this.servicos = data.servicos;
                this.clientes = data.clientes;

                this.itens = data.produtos.concat(data.servicos);

                // Adiciona uma linha de itens ao carregar
                let lastItem = this.venda.itens.length-1;
                this.setItem(lastItem, true, this.venda.itens[lastItem]._id);

                //this.venda.valor_total = this.venda.valor_total.replace('.','').replace('.','').replace(',','.');

                // Mesmo mudando de tipo, não poderá aterar o cliente
                this.tipoVenda = this.venda.tipo;
            }
        );*/
        var _this = this;
        this.vendasService.getVenda(this.route.params['id']).subscribe(function (venda) {
            _this.venda = venda;
        });
        this.itensService.getItens().subscribe(function (produtos) {
            _this.produtos = produtos;
        });
        this.clientesService.getClientes().subscribe(function (clientes) {
            _this.clientes = clientes;
        });
    };
    EditarVendaComponent.prototype.setCliente = function () {
        for (var i = 0; i < this.clientes.length; ++i) {
            if (this.venda.cliente._id === this.clientes[i]._id) {
                this.venda.cliente = this.clientes[i];
            }
        }
    };
    EditarVendaComponent.prototype.deleteRow = function (index) {
        this.venda.itens.splice(index, 1);
    };
    EditarVendaComponent.prototype.setItem = function (index, last, id) {
        if (!id)
            return false;
        // Se tem valor de custo é um produto
        // Caso não: é um serviço
        this.venda.itens[index].tipo = !this.venda.itens[index].item.valor_custo ? false : true;
        for (var i = 0; i < this.produtos.length; ++i) {
            if (id === this.produtos[i]._id) {
                this.venda.itens[index].item.images = this.produtos[i].images;
                this.venda.itens[index].item.nome = this.produtos[i].nome;
                this.venda.itens[index].item.qntde_atual = this.produtos[i].qntde_atual;
                this.venda.itens[index].item.qntde_minima = this.produtos[i].qntde_minima;
                this.venda.itens[index].item.updatedAt = this.produtos[i].updatedAt;
                this.venda.itens[index].item.valor_custo = this.produtos[i].valor_custo;
                this.venda.itens[index].item.valor_venda = this.produtos[i].valor_venda;
            }
        }
        if (!this.venda.itens[index].item.valor_venda)
            this.venda.itens[index].item.valor_venda = 0;
        if (!this.venda.itens[index].qntde)
            this.venda.itens[index].qntde = 1;
        this.venda.itens[index].validade = new Date();
        this.sum(index);
        if (last) {
            this.venda.itens.push({
                item: {}
            });
        }
    };
    EditarVendaComponent.prototype.sum = function (index) {
        var priceFloat = parseFloat(this.venda.itens[index].item.valor_venda.replace('R$', '').replace('.', '').replace('.', '').replace(',', '.'));
        var priceCalculed = priceFloat * this.venda.itens[index].qntde;
        this.venda.itens[index].total = priceCalculed.toString().replace('.', ',');
        var valorTotalNew = 0;
        for (var j = 0; j < this.venda.itens.length; ++j) {
            if (this.venda.itens[j].total) {
                valorTotalNew += parseFloat(this.venda.itens[j].total.replace('.', '').replace('.', '').replace(',', '.'));
            }
        }
        this.venda.valor_total = valorTotalNew;
    };
    EditarVendaComponent.prototype.updateVenda = function (event) {
        var _this = this;
        event.preventDefault();
        if (!this.venda.cliente.length && this.venda.itens.length <= 1) {
            alert('Adicione ao menos 1 produto');
            return false;
        }
        ;
        // Elimina oultimo produto que fica em vazio
        for (var i = 0; i < this.venda.itens.length; ++i) {
            if (!this.venda.itens[i].item.nome) {
                this.venda.itens.splice(this.venda.itens.indexOf(this.venda.itens[i]), 1);
            }
        }
        this.vendasService.updateVenda(this.venda).subscribe(function (venda) {
            _this.router.navigate(['vendas']);
            _this.triggerToast('Venda editada!');
        });
    };
    EditarVendaComponent.prototype.ngAfterViewChecked = function () {
        if (Materialize.updateTextFields)
            Materialize.updateTextFields();
    };
    EditarVendaComponent.prototype.triggerToast = function (stringToast) {
        this.globalActions.emit({ action: 'toast', params: [stringToast, 4000] });
    };
    return EditarVendaComponent;
}());
EditarVendaComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-editar-venda',
        template: __webpack_require__(524),
        styles: [__webpack_require__(503)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_vendas_service__["a" /* VendasService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_vendas_service__["a" /* VendasService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_clientes_service__["a" /* ClientesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_clientes_service__["a" /* ClientesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_itens_service__["a" /* ItensService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_itens_service__["a" /* ItensService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _e || Object])
], EditarVendaComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=C:/Users/desenvolvedor/Desktop/extinfire_v2/src/editar-venda.component.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_text_mask_addons_dist_createNumberMask__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_text_mask_addons_dist_createNumberMask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_text_mask_addons_dist_createNumberMask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_vendas_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_clientes_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_itens_service__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NovaVendaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var numberMask = __WEBPACK_IMPORTED_MODULE_3_text_mask_addons_dist_createNumberMask___default()({
    prefix: 'R$',
    allowDecimal: true,
    integerLimit: 7,
    decimalLimit: 2,
    thousandsSeparatorSymbol: '.',
    decimalSymbol: ','
});
var NovaVendaComponent = (function () {
    function NovaVendaComponent(vendasService, clientesService, itensService, router) {
        this.vendasService = vendasService;
        this.clientesService = clientesService;
        this.itensService = itensService;
        this.router = router;
        this.maskMoney = numberMask;
        this.loadStatus = false;
        this.globalActions = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.itens = [];
        this.clientes = [];
        this.produtos = [];
        this.servicos = [];
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
            selectYears: 15
        };
        this.venda = {
            cliente: {
                images: []
            },
            itens: [],
            valor_total: 0,
            observacao: undefined,
            tipo: undefined
        };
        this.novoItem = {
            item: {
                valor_venda: undefined,
                images: []
            },
            qntde: undefined,
            validade: undefined,
            total: undefined,
            tipo: undefined
        };
    }
    NovaVendaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.itensService.getItens().subscribe(function (itens) {
            for (var i = 0; i < itens.length; ++i) {
                if (itens[i].qntde_minima && itens[i].qntde_atual > 0) {
                    // Tem quantidade minima
                    // ENtão é produto
                    _this.produtos.push(itens[i]);
                }
                else {
                    _this.servicos.push(itens[i]);
                }
                _this.itens.push(itens[i]);
            }
        });
        this.clientesService.getClientes().subscribe(function (clientes) {
            _this.clientes = clientes;
            _this.loadStatus = true;
        });
    };
    NovaVendaComponent.prototype.ngAfterViewChecked = function () {
        if (Materialize.updateTextFields)
            Materialize.updateTextFields();
    };
    NovaVendaComponent.prototype.addItem = function () {
        if (!this.novoItem.item._id)
            return false;
        this.venda.itens.push(this.novoItem);
        // Reseta novoItem
        this.novoItem = {
            item: {
                valor_venda: undefined,
                images: []
            },
            qntde: undefined,
            validade: undefined,
            total: undefined,
            tipo: undefined
        };
    };
    NovaVendaComponent.prototype.currencyPipe = function (value, currencyCode, symbolDisplay, digits) {
        if (currencyCode === void 0) { currencyCode = 'BRL'; }
        if (symbolDisplay === void 0) { symbolDisplay = true; }
        if (!value) {
            return '';
        }
        var currencyPipe = new __WEBPACK_IMPORTED_MODULE_1__angular_common__["CurrencyPipe"]('pt-BR');
        var newValue = currencyPipe.transform(value, currencyCode, symbolDisplay, digits);
        return newValue.replace('R$', '');
    };
    NovaVendaComponent.prototype.setNovoItem = function () {
        if (!this.novoItem.item._id)
            return false;
        // Se tem valor de custo é um produto
        // Caso não: é um serviço
        this.novoItem.tipo = !this.novoItem.item.valor_custo ? false : true;
        this.novoItem.qntde = 1;
        // Validade do produto
        // APENAS produto
        if (this.novoItem.tipo) {
            var date = new Date();
            date.setMonth(date.getMonth() + 12);
            this.novoItem.validade = date.toLocaleDateString('pt-BR');
        }
        this.sumNovo();
        /*this.produtos.filter((produto) => {
            if(produto._id === this.novoItem.item._id) produto.selected = true;
        });*/
        this.addItem();
        //this.itemSendoUsado(this.novoItem);
    };
    /*itemSendoUsado(item: any) {
        
        // Marcar produto ja sendo usado
        this.venda.itens.filter((filterItem) => {
            console.log(filterItem)
            if(item._id === filterItem._id)
                return true;
        });

        return false;

        for (var x = 0; x < this.venda.itens.length; ++x) {
            if(this.venda.itens[x].tipo) {
                // Produto
                this.produtos.filter((produto) => {
                    produto.selected = false;
                    produto.selected = produto._id === this.venda.itens[x].item._id ? true : false;
                });
            } else {

                this.servicos.filter((servico) => {
                    servico.selected = false;
                    servico.selected = servico._id === this.venda.itens[x].item._id ? true : false;
                });
            }
        }

        //this.servicos = this.servicos.slice();
        //this.produtos = this.produtos.slice();
    }*/
    NovaVendaComponent.prototype.getProdutos = function () {
        return this.produtos;
    };
    NovaVendaComponent.prototype.setItem = function (item) {
        if (!item.item._id)
            return false;
        // Se tem valor de custo é um produto
        // Caso não: é um serviço
        item.tipo = !item.item.valor_custo ? false : true;
        // Validade do produto
        // APENAS produto
        var date = new Date();
        date.setMonth(date.getMonth() + 12);
        item.validade = item.tipo ? date.toLocaleDateString('pt-BR') : undefined;
        this.sumRow(item);
        //this.itemSendoUsado(item);
    };
    NovaVendaComponent.prototype.formatDecimal = function (decimal) {
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
    NovaVendaComponent.prototype.deleteRow = function (index) {
        this.venda.itens[index] = undefined;
        this.venda.itens.splice(index, 1);
    };
    NovaVendaComponent.prototype.sumNovo = function () {
        var priceFloat = parseFloat(this.formatDecimal(this.novoItem.item.valor_venda));
        var priceCalculed = priceFloat * this.novoItem.qntde;
        this.novoItem.total = priceCalculed.toFixed(2).toString().replace('.', ',');
        this.verificaQntdeMax(this.novoItem);
    };
    NovaVendaComponent.prototype.valorTotal = function () {
        var valorTotal = 0;
        for (var i = 0; i < this.venda.itens.length; ++i) {
            var priceFloat = parseFloat(this.formatDecimal(this.venda.itens[i].total));
            valorTotal += priceFloat;
        }
        this.venda.valor_total = this.currencyPipe(valorTotal);
        return valorTotal;
    };
    NovaVendaComponent.prototype.sumRow = function (item) {
        var priceFloat = parseFloat(this.formatDecimal(item.item.valor_venda));
        var priceCalculed = priceFloat * item.qntde;
        item.total = priceCalculed.toFixed(2).toString().replace('.', ',');
        this.verificaQntdeMax(item);
    };
    NovaVendaComponent.prototype.verificaQntdeMax = function (item) {
        // Quantidade máxima em estoque permitida
        if (item.qntde >= item.item.qntde_atual) {
            this.triggerToast('Apenas ' + item.item.qntde_atual + ' unidades existentes em estoque', 'blue');
            item.qntde = item.item.qntde_atual;
            return false;
        }
    };
    NovaVendaComponent.prototype.novaVenda = function (event) {
        var _this = this;
        event.preventDefault();
        if (!this.venda.cliente.length && !this.venda.itens.length) {
            this.triggerToast('Adicione ao menos 1 produto', 'red');
            return false;
        }
        ;
        for (var i = 0; i < this.venda.itens.length; ++i) {
            //this.venda.itens[i].total = this.currencyPipe(this.venda.itens[i].total);
        }
        this.vendasService.addVenda(this.venda).subscribe(function (venda) {
            _this.router.navigate(['vendas']);
            _this.triggerToast('Venda efetuada com sucesso!', 'green');
        });
    };
    NovaVendaComponent.prototype.triggerToast = function (stringToast, bgColor) {
        this.globalActions.emit({ action: 'toast', params: [stringToast, 4000, bgColor] });
    };
    return NovaVendaComponent;
}());
NovaVendaComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-nova-venda',
        template: __webpack_require__(525),
        styles: [__webpack_require__(504)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_vendas_service__["a" /* VendasService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_vendas_service__["a" /* VendasService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_clientes_service__["a" /* ClientesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_clientes_service__["a" /* ClientesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__services_itens_service__["a" /* ItensService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_itens_service__["a" /* ItensService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _d || Object])
], NovaVendaComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=C:/Users/desenvolvedor/Desktop/extinfire_v2/src/nova-venda.component.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_vendas_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_clientes_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_itens_service__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VendasComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VendasComponent = (function () {
    function VendasComponent(vendasService, clientesService, itensService) {
        this.vendasService = vendasService;
        this.clientesService = clientesService;
        this.itensService = itensService;
        this.vendas = [];
        this.clientes = [];
        this.produtos = [];
        this.order = 'updatedAt';
        this.reverse = true;
        this.loadStatus = false;
    }
    VendasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.vendasService.getVendas().subscribe(function (vendas) {
            _this.vendas = vendas;
            _this.loadStatus = true;
            _this.itensService.getItens().subscribe(function (produtos) {
                _this.produtos = produtos;
                _this.clientesService.getClientes().subscribe(function (clientes) {
                    _this.clientes = clientes;
                });
            });
        });
    };
    VendasComponent.prototype.setOrder = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
    };
    return VendasComponent;
}());
VendasComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-vendas',
        template: __webpack_require__(526),
        styles: [__webpack_require__(505)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_vendas_service__["a" /* VendasService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_vendas_service__["a" /* VendasService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_clientes_service__["a" /* ClientesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_clientes_service__["a" /* ClientesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_itens_service__["a" /* ItensService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_itens_service__["a" /* ItensService */]) === "function" && _c || Object])
], VendasComponent);

var _a, _b, _c;
//# sourceMappingURL=C:/Users/desenvolvedor/Desktop/extinfire_v2/src/vendas.component.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyFormatVendasPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CurrencyFormatVendasPipe = (function () {
    function CurrencyFormatVendasPipe() {
    }
    CurrencyFormatVendasPipe.prototype.transform = function (value, currencyCode, symbolDisplay, digits) {
        if (currencyCode === void 0) { currencyCode = 'BRL'; }
        if (symbolDisplay === void 0) { symbolDisplay = true; }
        if (!value) {
            return '';
        }
        var currencyPipe = new __WEBPACK_IMPORTED_MODULE_1__angular_common__["CurrencyPipe"]('pt-BR');
        var newValue = currencyPipe.transform(value, currencyCode, symbolDisplay, digits);
        return newValue;
    };
    return CurrencyFormatVendasPipe;
}());
CurrencyFormatVendasPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'currencyformat'
    })
], CurrencyFormatVendasPipe);

//# sourceMappingURL=C:/Users/desenvolvedor/Desktop/extinfire_v2/src/currency-format-vendas.pipe.js.map

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vendas_component__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detalhe_venda_detalhe_venda_component__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editar_venda_editar_venda_component__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nova_venda_nova_venda_component__ = __webpack_require__(472);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VendasRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

;





var vendasRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__vendas_component__["a" /* VendasComponent */]
    },
    {
        path: 'novo',
        component: __WEBPACK_IMPORTED_MODULE_5__nova_venda_nova_venda_component__["a" /* NovaVendaComponent */]
    },
    {
        path: ':id',
        component: __WEBPACK_IMPORTED_MODULE_3__detalhe_venda_detalhe_venda_component__["a" /* DetalheVendaComponent */]
    },
    {
        path: ':id/editar',
        component: __WEBPACK_IMPORTED_MODULE_4__editar_venda_editar_venda_component__["a" /* EditarVendaComponent */] /*,
        resolve: {
            venda: VendaResolver,
            produtos: ProdutosResolver,
            servicos: ServicosResolver,
            clientes: ClientesResolver
        }*/
    }
];
var VendasRoutingModule = (function () {
    function VendasRoutingModule() {
    }
    return VendasRoutingModule;
}());
VendasRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(vendasRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], VendasRoutingModule);

//# sourceMappingURL=C:/Users/desenvolvedor/Desktop/extinfire_v2/src/vendas.routing.module.js.map

/***/ }),

/***/ 502:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 503:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 504:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, ".row .col.s05 {\n\twidth: 5.3%;\n}\n.row .col.s1105 {\n    width: 94.7%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 505:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 523:
/***/ (function(module, exports) {

module.exports = "<nav class=\"header-pages white\">\n\t<div class=\"nav-wrapper\">\n\t\t<div class=\"col s12\">\n\t\t\t<a routerLink=\"/vendas\" class=\"breadcrumb\">Lista de Vendas</a>\n\t\t\t<span class=\"breadcrumb\">Detalhe da Venda</span>\n\t\t</div>\n\t</div>\n</nav>\n<!-- Botoes de ação -->\n<div class=\"row\">\n\t<div class=\"col s12 right-align\">\n\t\t<a target=\"_blank\" href=\"{{ urlPdf }}\" class=\"modal-action modal-close waves-effect waves-light btn blue darken-4\">Emitir PDF</a>\n\t\t<a class=\"waves-effect waves-light btn red darken-1\" [routerLink]=\"['/vendas', venda._id, 'editar']\">Editar</a>\n\t\t<a class=\"waves-effect waves-light btn grey darken-4\" (click)=\"deleteVenda(venda)\">Excluir</a>\n\t\t<a class=\"waves-effect waves-light btn grey\" routerLink=\"/vendas\">Cancelar</a>\n\t</div>\n</div>\n<div class=\"section\"></div>\n<div class=\"row\">\n\t<div class=\"col s12\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col s12\">\n\t\t\t\t<div class=\"section\">\n\t\t\t\t\t<h4>Geral</h4>\n\t\t\t\t\t<div class=\"divider\"></div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Valor total -->\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col s12\">\n\t\t\t\t\t\t<label>Valor total</label>\n\t\t\t\t\t\t<h5>{{ 'R$' + venda.valor_total }}</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Observacao -->\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col s12\">\n\t\t\t\t\t\t<label>Observação</label>\n\t\t\t\t\t\t<h5>{{ venda.observacao }}</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Tipo -->\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col s12\">\n\t\t\t\t\t\t<label>Tipo</label>\n\t\t\t\t\t\t<h5>{{ !venda.tipo?'Orçamento':'Pedido' }}</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- Data -->\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col s12\">\n\t\t\t\t\t\t<label>Data de criação</label>\n\t\t\t\t\t\t<h5>{{ venda.updatedAt | date:'dd/MM/yyyy hh:mm:ss' }}</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"row\">\n\t<div class=\"row\">\n\t\t<div class=\"col s12\">\n\t\t\t<div class=\"section\">\n\t\t\t\t<h4>Cliente</h4>\n\t\t\t\t<div class=\"divider\"></div>\n\t\t\t</div>\n\t\t\t<!-- Fotos -->\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col s12\">\n\t\t\t\t\t<label>Imagens</label>\n\t\t\t\t\t<br>\n\t\t\t\t\t<img src=\"{{ '/uploads/' + (!venda.cliente.images[0] ? 'sem-foto.jpg' : venda.cliente.images[0]) }}\" class=\"circle img-table\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- nome -->\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col s12\">\n\t\t\t\t\t<label>Nome</label>\n\t\t\t\t\t<h5>{{ venda.cliente.nome }}</h5>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- comprador -->\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col s12\">\n\t\t\t\t\t<label>Comprador</label>\n\t\t\t\t\t<h5>{{ venda.cliente.comprador }}</h5>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- Representante -->\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col s12\">\n\t\t\t\t\t<label>Representante</label>\n\t\t\t\t\t<h5>{{ venda.cliente.representante }}</h5>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"row\">\n\t<div class=\"row\">\n\t\t<div class=\"col s12\">\n\t\t\t<div class=\"section\">\n\t\t\t\t<h4>Itens</h4>\n\t\t\t\t<div class=\"divider\"></div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col s12\">\n\t\t\t\t\t<table class=\"bordered responsive-table\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th data-field=\"nome\">Produtos / Serviços</th>\n\t\t\t\t\t\t\t\t<th data-field=\"unit\">Valor Unitário</th>\n\t\t\t\t\t\t\t\t<th data-field=\"qntde\">Quantidade</th>\n\t\t\t\t\t\t\t\t<th data-field=\"total\">Total da Venda</th>\n\t\t\t\t\t\t\t\t<th data-field=\"valida\">Validade desta Venda</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr *ngFor=\"let item of venda.itens; let i = index; let last = last;let first = first;\">\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<img src=\"{{ '/uploads/' + (!venda.itens[i].item.images[0] ? 'sem-foto.jpg' : venda.itens[i].item.images[0]) }}\" class=\"circle img-table\">\n\t\t\t\t\t\t\t\t\t{{ venda.itens[i].item.nome }}\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>{{ venda.itens[i].item.valor_venda }}</td>\n\t\t\t\t\t\t\t\t<td>{{ venda.itens[i].qntde }}</td>\n\t\t\t\t\t\t\t\t<td>{{ venda.itens[i].total }}</td>\n\t\t\t\t\t\t\t\t<td>{{ venda.itens[i].validade }}</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<a (click)=\"triggerToast()\" materialize [materializeActions]=\"globalActions\"></a>"

/***/ }),

/***/ 524:
/***/ (function(module, exports) {

module.exports = "<nav class=\"header-pages white\">\n\t<div class=\"nav-wrapper\">\n\t\t<div class=\"col s12\">\n\t\t\t<a routerLink=\"/vendas\" class=\"breadcrumb\">Lista de Vendas</a>\n\t\t\t<a [routerLink]=\"['/vendas', venda._id]\" class=\"breadcrumb\">Detalhe da Venda</a>\n\t\t\t<span class=\"breadcrumb\">Editar Venda</span>\n\t\t</div>\n\t</div>\n</nav>\n<form (submit)=\"updateVenda($event)\">\n\t<!-- Botoes de ação -->\n\t<div class=\"row\">\n\t\t<div class=\"col s12 right-align\">\n\t\t\t<button type=\"submit\" class=\"waves-effect waves-light btn red darken-1\" name=\"action\">Salvar e Cadastrar</button>\n\t\t\t<a class=\"modal-action modal-close waves-effect waves-light btn grey\" [routerLink]=\"['/vendas', venda._id]\">Cancelar e VOltar</a>\n\t\t</div>\n\t</div>\n\t<div class=\"section\"></div>\n\t<div class=\"row\">\n\t    <div class=\"col s12\">\n\t    \t<div class=\"row\">\n\t\t\t\t<div class=\"col s12\">\n\t\t\t\t\t<div class=\"input-field\">\n\t\t\t\t\t\t<select \n\t\t\t\t\t\tid=\"cliente\" \n\t\t\t\t\t\tmaterialize=\"material_select\" \n\t\t\t\t\t\t[materializeSelectOptions]=\"clientes\" \n\t\t\t\t\t\t[(ngModel)]=\"venda.cliente._id\" \n\t\t\t\t\t\tname=\"cliente\"\n\t\t\t\t\t\t(change)=\"setCliente()\"\n\t\t\t\t\t\t[disabled]=\"tipoVenda=='Pedido'\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t  <option value=\"\" disabled selected>Selecione o cliente</option>\n\t\t\t\t\t\t  <option \n\t\t\t\t\t\t  *ngFor=\"let cliente of clientes\" \n\t\t\t\t\t\t  [value]=\"cliente._id\"\n\t\t\t\t\t\t  [attr.data-icon]=\"'/uploads/' + (!cliente.images[0] ? 'sem-foto.jpg' : cliente.images[0])\" \n\t\t\t\t\t\t  class=\"left circle\"\n\t\t\t\t\t\t  >{{cliente.nome}}</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"section\"></div>\n\t\t\t\t\t<!-- Switch -->\n\t\t\t\t\t<div class=\"switch\">\n\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\tOrçamento\n\t\t\t\t\t\t\t<input type=\"checkbox\" [(ngModel)]=\"venda.tipo\" name=\"tipo\">\n\t\t\t\t\t\t\t<span class=\"lever\"></span>\n\t\t\t\t\t\t\tPedido (Baixa no estoque)\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"section\"></div>\n\t\t\t\t\t<div *ngIf=\"(venda.cliente | json) != '{}'\">\n\t\t\t\t\t\t<table>\n\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<th data-field=\"item\">Produtos / Serviços</th>\n\t\t\t\t\t\t\t\t\t<th data-field=\"qntde\">Quant.</th> \n\t\t\t\t\t\t\t\t\t<th data-field=\"valor_venda\">Valor Unitário</th>\n\t\t\t\t\t\t\t\t\t<th data-field=\"total\">Total</th>\n\t\t\t\t\t\t\t\t\t<th data-field=\"validade\">Validade</th>\n\t\t\t\t\t\t\t\t\t<th data-field=\"acoes\" class=\"center-align\">Ações</th>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</thead>\n\n\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t<tr *ngFor=\"let item of venda.itens; let i = index; let last = last;let first = first\">\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-field\">\n\t\t\t\t\t\t\t\t\t\t\t<select \n\t\t\t\t\t\t\t\t\t\t\tid=\"item{{i}}\" \n\t\t\t\t\t\t\t\t\t\t\tmaterialize=\"material_select\" \n\t\t\t\t\t\t\t\t\t\t\t[materializeSelectOptions]=\"itens\" \n\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"venda.itens[i].item._id\" \n\t\t\t\t\t\t\t\t\t\t\tname=\"item{{i}}\" \n\t\t\t\t\t\t\t\t\t\t\t(change)=\"setItem(i, last, venda.itens[i].item._id)\"\n\t\t\t\t\t\t\t\t\t\t\t[attr.required]=\"venda.itens[i].item.nome&&!first ? true : undefined\"\n\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\" disabled selected>Selecione</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<optgroup label=\"Produtos\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option \n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let produto of produtos\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"produto._id\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[attr.data-icon]=\"'/uploads/' + (!produto.images[0] ? 'sem-foto.jpg' : produto.images[0])\" \n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"left circle\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t>{{produto.nome}}</option>\n\t\t\t\t\t\t\t\t\t\t\t\t</optgroup>\n\t\t\t\t\t\t\t\t\t\t\t\t<optgroup label=\"Servicos\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option \n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let servico of servicos\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"servico._id\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[attr.data-icon]=\"'/uploads/' + (!servico.images[0] ? 'sem-foto.jpg' : servico.images[0])\" \n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"left circle\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t>{{servico.nome}}</option>\n\t\t\t\t\t\t\t\t\t\t\t\t</optgroup>\n\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-field\">\n\t\t\t\t\t\t\t\t\t\t\t<input \n\t\t\t\t\t\t\t\t\t\t\tid=\"qntde\" \n\t\t\t\t\t\t\t\t\t\t\tmin=\"1\" \n\t\t\t\t\t\t\t\t\t\t\t[max]=\"venda.itens[i].item.qntde_atual\"\n\t\t\t\t\t\t\t\t\t\t\ttype=\"number\" \n\t\t\t\t\t\t\t\t\t\t\t(change)=\"sum(i)\" \n\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"venda.itens[i].qntde\" \n\t\t\t\t\t\t\t\t\t\t\tname=\"qntde{{i}}\"\n\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"qntde\">Quantidade</label>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-field\">\n\t\t\t\t\t\t\t\t\t\t\t<input \n\t\t\t\t\t\t\t\t\t\t\tid=\"valor_venda\" \n\t\t\t\t\t\t\t\t\t\t\ttype=\"text\" \n\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"venda.itens[i]?.item.valor_venda\" \n\t\t\t\t\t\t\t\t\t\t\tname=\"valor_venda{{i}}\" \n\t\t\t\t\t\t\t\t\t\t\t[attr.required]=\"venda.itens[i].item?.nome&&!first ? true : undefined\"\n\t\t\t\t\t\t\t\t\t\t\t[textMask]=\"{mask: maskMoney}\"\n\t\t\t\t\t\t\t\t\t\t\treadonly=\"\" \n\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"valor_venda\">Valor unitário</label>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-field\">\n\t\t\t\t\t\t\t\t\t\t\t<input \n\t\t\t\t\t\t\t\t\t\t\tid=\"total\" \n\t\t\t\t\t\t\t\t\t\t\ttype=\"text\" \n\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"venda.itens[i].total\" \n\t\t\t\t\t\t\t\t\t\t\tname=\"total{{i}}\" \n\t\t\t\t\t\t\t\t\t\t\treadonly=\"\" \n\t\t\t\t\t\t\t\t\t\t\t[textMask]=\"{mask: maskMoney}\"\n\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"total\">Valor total</label>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-field\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"validade\">Validade deste serviço</label>\n\t\t\t\t\t\t\t\t\t\t\t<input \n\t\t\t\t\t\t\t\t\t\t\tid=\"validade\" \n\t\t\t\t\t\t\t\t\t\t\tmaterialize=\"pickadate\" \n\t\t\t\t\t\t\t\t\t\t\t[materializeParams]=\"[{ selectMonths: true }]\"\n\t\t\t\t\t\t\t\t\t\t\ttype=\"text\" \n\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"venda.itens[i].validade\" \n\t\t\t\t\t\t\t\t\t\t\tname=\"validade{{i}}\" \n\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<a class=\"waves-effect waves-light btn-flat secondary-content\" (click)=\"deleteRow(i)\" *ngIf=\"!last\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">&#xE92B;</i>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t\t<div class=\"row valign-wrapper\">\n\t\t\t\t\t\t\t<div class=\"col s8\">\n\t\t\t\t\t\t\t\t<div class=\"input-field\">\n\t\t\t\t\t\t\t\t\t<textarea \n\t\t\t\t\t\t\t\t\tid=\"observacoes\" \n\t\t\t\t\t\t\t\t\tclass=\"materialize-textarea\" \n\t\t\t\t\t\t\t\t\tdata-length=\"120\" \n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"venda.observacao\" \n\t\t\t\t\t\t\t\t\tname=\"observacao\"\n\t\t\t\t\t\t\t\t\t></textarea>\n\t\t\t\t\t\t\t\t\t<label for=\"observacoes\">Observações</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col s4 center-align\">\n\t\t\t\t\t\t\t\t<h5>Valor Total</h5>\n\t\t\t\t\t\t\t\t<h4>{{ venda.valor_total | currencyformat }}</h4>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t    </div>\n\t</div>\n</form>\n<a (click)=\"triggerToast()\" materialize [materializeActions]=\"globalActions\"></a>"

/***/ }),

/***/ 525:
/***/ (function(module, exports) {

module.exports = "<nav class=\"header-pages white\">\n\t<div class=\"nav-wrapper\">\n\t\t<div class=\"col s12\">\n\t\t\t<a routerLink=\"/vendas\" class=\"breadcrumb\">Lista de Vendas</a>\n\t\t\t<span class=\"breadcrumb\">Nova Venda</span>\n\t\t</div>\n\t</div>\n</nav>\n<!-- Carregando -->\n<div class=\"row\" *ngIf=\"!loadStatus\">\n\t<div class=\"col s12\">\n\t\t<div id=\"loader\" class=\"preloader-wrapper big active\">\n\t\t\t<div class=\"spinner-layer spinner-red-only\">\n\t\t\t\t<div class=\"circle-clipper left\">\n\t\t\t\t\t<div class=\"circle\"></div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"gap-patch\">\n\t\t\t\t\t<div class=\"circle\"></div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"circle-clipper right\">\n\t\t\t\t\t<div class=\"circle\"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<!-- Sem nenhum cliente -->\n<div class=\"row\" *ngIf=\"!clientes?.length&&loadStatus\">\n\t<div class=\"col s12\">\n\t\t<div class=\"section\"></div>\n\t\t<div class=\"center-align\">\n\t\t\t<div class=\"grey-text text-lighten-2\">\n\t\t\t\t<h2>Nenhum cliente cadastrado <br><small>necessário para que se crie uma nova venda</small></h2>\n\t\t\t\t<i class=\"material-icons big\">&#xE814;</i>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<form (submit)=\"novaVenda($event)\" *ngIf=\"clientes?.length\">\n\t<!-- Botoes de ação -->\n\t<div class=\"row\">\n\t\t<div class=\"col s12 right-align\">\n\t\t\t<button type=\"submit\" class=\"waves-effect waves-light btn red darken-1\" name=\"action\">Salvar e Cadastrar</button>\n\t\t\t<a class=\"modal-action modal-close waves-effect waves-light btn grey\" routerLink=\"/vendas\">Cancelar e Voltar</a>\n\t\t</div>\n\t</div>\n\t<div class=\"section\"></div>\n\t<div class=\"row\">\n\t\t<div class=\"col s8\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col s12\">\n\t\t\t\t\t<div class=\"row valign-wrapper\">\n\t\t\t\t\t\t<div class=\"col s05\">\n\t\t\t\t\t\t\t<img [src]=\"'/uploads/' + (!venda.cliente.images[0] ? 'sem-foto.jpg' : venda.cliente.images[0])\" alt=\"{{venda.cliente.nome}}\" class=\"responsive-img circle img-table\" title=\"{{venda.cliente.nome}}\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col s1105\">\n\t\t\t\t\t\t\t<div class=\"input-field\">\n\t\t\t\t\t\t\t\t<select \n\t\t\t\t\t\t\t\tid=\"cliente\" \n\t\t\t\t\t\t\t\tmaterialize=\"material_select\" \n\t\t\t\t\t\t\t\t[materializeSelectOptions]=\"clientes\" \n\t\t\t\t\t\t\t\t[(ngModel)]=\"venda.cliente\" \n\t\t\t\t\t\t\t\tname=\"cliente\"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t  <option value=\"\" disabled selected>Selecione o cliente</option>\n\t\t\t\t\t\t\t\t  <option \n\t\t\t\t\t\t\t\t  *ngFor=\"let cliente of clientes\" \n\t\t\t\t\t\t\t\t  [attr.data-icon]=\"'/uploads/' + (!cliente.images[0] ? 'sem-foto.jpg' : cliente.images[0])\" \n\t\t\t\t\t\t\t\t  [ngValue]=\"cliente\" \n\t\t\t\t\t\t\t\t  class=\"left circle\"\n\t\t\t\t\t\t\t\t  >{{cliente.nome}}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t<label for=\"cliente\">Selecione o cliente</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"section\"></div>\n\t\t\t\t\t<!-- Switch -->\n\t\t\t\t\t<div class=\"switch\">\n\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\tOrçamento\n\t\t\t\t\t\t\t<input type=\"checkbox\" [(ngModel)]=\"venda.tipo\" name=\"tipo\">\n\t\t\t\t\t\t\t<span class=\"lever\"></span>\n\t\t\t\t\t\t\tPedido (Baixa no estoque)\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"section\"></div>\n\t\t\t\t\t<!-- Sem nenhum serviço ou produtos -->\n\t\t\t\t\t<div class=\"row\" *ngIf=\"!produtos?.length&&!servicos?.length\">\n\t\t\t\t\t\t<div class=\"col s12\">\n\t\t\t\t\t\t\t<div class=\"section\"></div>\n\t\t\t\t\t\t\t<div class=\"center-align\">\n\t\t\t\t\t\t\t\t<div class=\"grey-text text-lighten-2\">\n\t\t\t\t\t\t\t\t\t<h2>Nenhum produto e/ou serviço cadastrado <br><small>necessário para adiciona-los a uma nova venda</small></h2>\n\t\t\t\t\t\t\t\t\t<i class=\"material-icons big\">&#xE814;</i>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div *ngIf=\"venda.cliente._id&&(produtos?.length||servicos?.length)\">\n\t\t\t\t\t\t<table class=\"responsive-table\">\n\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<th data-field=\"foto\"></th>\n\t\t\t\t\t\t\t\t\t<th data-field=\"item\">Produtos / Serviços</th>\n\t\t\t\t\t\t\t\t\t<th data-field=\"qntde\">Quant.</th> \n\t\t\t\t\t\t\t\t\t<th data-field=\"valor_venda\">Valor Unitário</th>\n\t\t\t\t\t\t\t\t\t<th data-field=\"total\">Total</th>\n\t\t\t\t\t\t\t\t\t<th data-field=\"validade\">Validade</th>\n\t\t\t\t\t\t\t\t\t<th data-field=\"acoes\" class=\"center-align\">Ações</th>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t<tr *ngFor=\"let item of venda.itens; let i = index; let first = first;\">\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<img [src]=\"'/uploads/' + (!venda.itens[i].item.images[0] ? 'sem-foto.jpg' : venda.itens[i].item.images[0])\" alt=\"{{venda.itens[i].item.nome}}\" class=\"responsive-img circle img-table\" title=\"{{venda.itens[i].item.nome}}\">\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-field\">\n\t\t\t\t\t\t\t\t\t\t\t<select \n\t\t\t\t\t\t\t\t\t\t\tid=\"item{{i}}\" \n\t\t\t\t\t\t\t\t\t\t\tmaterialize=\"material_select\" \n\t\t\t\t\t\t\t\t\t\t\t[materializeSelectOptions]=\"itens\" \n\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"venda.itens[i].item\" \n\t\t\t\t\t\t\t\t\t\t\tname=\"item{{i}}\" \n\t\t\t\t\t\t\t\t\t\t\t(change)=\"setItem(venda.itens[i])\"\n\t\t\t\t\t\t\t\t\t\t\t[attr.required]=\"venda.itens[i].item.nome&&!first ? true : undefined\"\n\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\" disabled selected>Selecione</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<optgroup label=\"Produtos\" *ngIf=\"produtos?.length\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option \n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let produto of produtos\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"produto._id\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[attr.data-icon]=\"'/uploads/' + (!produto.images[0] ? 'sem-foto.jpg' : produto.images[0])\" \n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"left circle\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[disabled]=\"\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t>{{produto.nome}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t\t\t\t\t</optgroup>\n\t\t\t\t\t\t\t\t\t\t\t\t<optgroup label=\"Servicos\" *ngIf=\"servicos?.length\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option \n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let servico of servicos\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"servico._id\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[attr.data-icon]=\"'/uploads/' + (!servico.images[0] ? 'sem-foto.jpg' : servico.images[0])\" \n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"left circle\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[disabled]=\"\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t>{{servico.nome}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t\t\t\t\t</optgroup>\n\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"item{{i}}\">Selecione</label>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-field\">\n\t\t\t\t\t\t\t\t\t\t\t<input \n\t\t\t\t\t\t\t\t\t\t\tid=\"qntde{{i}}\" \n\t\t\t\t\t\t\t\t\t\t\tmin=\"1\" \n\t\t\t\t\t\t\t\t\t\t\t[max]=\"venda.itens[i].item.qntde_atual\" \n\t\t\t\t\t\t\t\t\t\t\ttype=\"number\" \n\t\t\t\t\t\t\t\t\t\t\t(change)=\"sumRow(venda.itens[i])\"\n\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"venda.itens[i].qntde\" \n\t\t\t\t\t\t\t\t\t\t\tname=\"qntde{{i}}\" \n\t\t\t\t\t\t\t\t\t\t\t[attr.required]=\"venda.itens[i].item.nome&&!first ? true : undefined\"\n\t\t\t\t\t\t\t\t\t\t\t[disabled]=\"!venda.itens[i].item.nome\"\n\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"qntde{{i}}\">Quantidade</label>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-field\">\n\t\t\t\t\t\t\t\t\t\t\t<input \n\t\t\t\t\t\t\t\t\t\t\tid=\"valor_venda\" \n\t\t\t\t\t\t\t\t\t\t\tclass=\"decimal\" \n\t\t\t\t\t\t\t\t\t\t\ttype=\"text\" \n\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"venda.itens[i].item.valor_venda\" \n\t\t\t\t\t\t\t\t\t\t\tname=\"valor_venda{{i}}\" \n\t\t\t\t\t\t\t\t\t\t\t[attr.required]=\"venda.itens[i].item.nome&&!first ? true : undefined\"\n\t\t\t\t\t\t\t\t\t\t\treadonly=\"\" \n\t\t\t\t\t\t\t\t\t\t\t[textMask]=\"{mask: maskMoney}\"\n\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"valor_venda\">Valor unitário</label>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-field\">\n\t\t\t\t\t\t\t\t\t\t\t<input \n\t\t\t\t\t\t\t\t\t\t\tid=\"total\" \n\t\t\t\t\t\t\t\t\t\t\tclass=\"decimal\" \n\t\t\t\t\t\t\t\t\t\t\ttype=\"text\" \n\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"venda.itens[i].total\" \n\t\t\t\t\t\t\t\t\t\t\tname=\"total{{i}}\" \n\t\t\t\t\t\t\t\t\t\t\treadonly=\"\" \n\t\t\t\t\t\t\t\t\t\t\t[attr.required]=\"venda.itens[i].item.nome&&!first ? true : undefined\"\n\t\t\t\t\t\t\t\t\t\t\t[textMask]=\"{mask: maskMoney}\"\n\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"total\">Valor total</label>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-field\" *ngIf=\"venda.itens[i].validade\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"validade\">Validade deste produto</label>\n\t\t\t\t\t\t\t\t\t\t\t<input \n\t\t\t\t\t\t\t\t\t\t\tid=\"validade\" \n\t\t\t\t\t\t\t\t\t\t\tmaterialize=\"pickadate\" \n\t\t\t\t\t\t\t\t\t\t\t[materializeParams]=\"[paramsPickdate]\"\n\t\t\t\t\t\t\t\t\t\t\ttype=\"date\" \n\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"venda.itens[i].validade\" \n\t\t\t\t\t\t\t\t\t\t\tname=\"validade{{i}}\" \n\t\t\t\t\t\t\t\t\t\t\t[attr.required]=\"venda.itens[i].item.nome&&!first ? true : undefined\"\n\t\t\t\t\t\t\t\t\t\t\t[disabled]=\"!venda.itens[i].item.nome\"\n\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td class=\"center-align\">\n\t\t\t\t\t\t\t\t\t\t<a class=\"waves-effect waves-light btn-flat\" (click)=\"deleteRow(i)\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">&#xE92B;</i>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<!-- Novo Item -->\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<img [src]=\"'/uploads/' + (!novoItem.item.images[0] ? 'sem-foto.jpg' : novoItem.item.images[0])\" alt=\"{{novoItem.item.nome}}\" class=\"responsive-img circle img-table\" title=\"{{novoItem.item.nome}}\">\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-field\">\n\t\t\t\t\t\t\t\t\t\t\t<select \n\t\t\t\t\t\t\t\t\t\t\tid=\"novoItem\" \n\t\t\t\t\t\t\t\t\t\t\tmaterialize=\"material_select\" \n\t\t\t\t\t\t\t\t\t\t\t[materializeSelectOptions]=\"itens\" \n\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"novoItem.item\" \n\t\t\t\t\t\t\t\t\t\t\tname=\"novoItem\" \n\t\t\t\t\t\t\t\t\t\t\t[attr.required]=\"novoItem.item.nome ? true : undefined\"\n\t\t\t\t\t\t\t\t\t\t\t(change)=\"setNovoItem()\"\n\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\" disabled selected>Selecione</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<optgroup label=\"Produtos\" *ngIf=\"produtos?.length\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option \n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let produto of produtos\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"produto._id\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[attr.data-icon]=\"'/uploads/' + (!produto.images[0] ? 'sem-foto.jpg' : produto.images[0])\" \n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"left circle\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[disabled]=\"\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t>{{produto.nome}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t\t\t\t\t</optgroup>\n\t\t\t\t\t\t\t\t\t\t\t\t<optgroup label=\"Servicos\" *ngIf=\"servicos?.length\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option \n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let servico of servicos\" \n\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"servico._id\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[attr.data-icon]=\"'/uploads/' + (!servico.images[0] ? 'sem-foto.jpg' : servico.images[0])\" \n\t\t\t\t\t\t\t\t\t\t\t\t\tclass=\"left circle\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[disabled]=\"\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t>{{servico.nome}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t\t\t\t\t</optgroup>\n\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-field\">\n\t\t\t\t\t\t\t\t\t\t\t<input \n\t\t\t\t\t\t\t\t\t\t\tid=\"qntde\" \n\t\t\t\t\t\t\t\t\t\t\tmin=\"1\" \n\t\t\t\t\t\t\t\t\t\t\t[max]=\"novoItem.item.qntde_atual\" \n\t\t\t\t\t\t\t\t\t\t\ttype=\"number\" \n\t\t\t\t\t\t\t\t\t\t\t(change)=\"sumNovo()\" \n\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"novoItem.qntde\" \n\t\t\t\t\t\t\t\t\t\t\tname=\"qntde\" \n\t\t\t\t\t\t\t\t\t\t\t[attr.required]=\"novoItem.item.nome ? true : undefined\"\n\t\t\t\t\t\t\t\t\t\t\t[disabled]=\"!novoItem.item.nome\"\n\t\t\t\t\t\t\t\t\t\t\t[attr.readonly]=\"!novoItem.tipo ? true : undefined\"\n\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"qntde\">Quantidade</label>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-field\">\n\t\t\t\t\t\t\t\t\t\t\t<input \n\t\t\t\t\t\t\t\t\t\t\tid=\"valor_venda\" \n\t\t\t\t\t\t\t\t\t\t\tclass=\"decimal\" \n\t\t\t\t\t\t\t\t\t\t\ttype=\"text\" \n\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"novoItem.item.valor_venda\" \n\t\t\t\t\t\t\t\t\t\t\tname=\"valor_venda{{i}}\" \n\t\t\t\t\t\t\t\t\t\t\t[attr.required]=\"novoItem.item.nome ? true : undefined\"\n\t\t\t\t\t\t\t\t\t\t\treadonly=\"true\" \n\t\t\t\t\t\t\t\t\t\t\t[textMask]=\"{mask: maskMoney}\"\n\t\t\t\t\t\t\t\t\t\t\t[disabled]=\"!novoItem.item.nome\"\n\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"valor_venda\">Valor unitário</label>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-field\">\n\t\t\t\t\t\t\t\t\t\t\t<input \n\t\t\t\t\t\t\t\t\t\t\tid=\"total\" \n\t\t\t\t\t\t\t\t\t\t\tclass=\"decimal\" \n\t\t\t\t\t\t\t\t\t\t\ttype=\"text\" \n\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"novoItem.total\" \n\t\t\t\t\t\t\t\t\t\t\tname=\"total\" \n\t\t\t\t\t\t\t\t\t\t\treadonly=\"true\" \n\t\t\t\t\t\t\t\t\t\t\t[attr.required]=\"novoItem.item.nome ? true : undefined\"\n\t\t\t\t\t\t\t\t\t\t\t[textMask]=\"{mask: maskMoney}\"\n\t\t\t\t\t\t\t\t\t\t\t[disabled]=\"!novoItem.item.nome\"\n\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"total\">Valor total</label>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-field\" *ngIf=\"novoItem.tipo || !novoItem.item.nome\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"validade\">Validade deste produto</label>\n\t\t\t\t\t\t\t\t\t\t\t<input \n\t\t\t\t\t\t\t\t\t\t\tid=\"validade\" \n\t\t\t\t\t\t\t\t\t\t\tmaterialize=\"pickadate\" \n\t\t\t\t\t\t\t\t\t\t\t[materializeParams]=\"[paramsPickdate]\"\n\t\t\t\t\t\t\t\t\t\t\ttype=\"date\" \n\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"novoItem.validade\" \n\t\t\t\t\t\t\t\t\t\t\tname=\"validade\" \n\t\t\t\t\t\t\t\t\t\t\t[attr.required]=\"novoItem.item.nome ? true : undefined\"\n\t\t\t\t\t\t\t\t\t\t\t[disabled]=\"!novoItem.item.nome\"\n\t\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t\t<div class=\"row valign-wrapper\">\n\t\t\t\t\t\t\t<div class=\"col s8\">\n\t\t\t\t\t\t\t\t<div class=\"input-field\">\n\t\t\t\t\t\t\t\t\t<textarea \n\t\t\t\t\t\t\t\t\tid=\"observacoes\" \n\t\t\t\t\t\t\t\t\tclass=\"materialize-textarea\" \n\t\t\t\t\t\t\t\t\tdata-length=\"120\" \n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"venda.observacao\" \n\t\t\t\t\t\t\t\t\tname=\"observacao\"\n\t\t\t\t\t\t\t\t\t></textarea>\n\t\t\t\t\t\t\t\t\t<label for=\"observacoes\">Observações</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col s4 center-align\">\n\t\t\t\t\t\t\t\t<h5>Valor Total</h5>\n\t\t\t\t\t\t\t\t<h4>{{ valorTotal() || '0' | currencyformat }}</h4>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col s4\">\n\t\t\t<pre>{{ venda | json }}</pre>\n\t\t</div>\n\t</div>\n</form>\n<a (click)=\"triggerToast()\" materialize [materializeActions]=\"globalActions\"></a>"

/***/ }),

/***/ 526:
/***/ (function(module, exports) {

module.exports = "<nav class=\"header-pages white\">\n\t<div class=\"nav-wrapper\">\n\t\t<div class=\"col s12\">\n\t\t\t<span class=\"breadcrumb\">Lista de Vendas</span>\n\t\t</div>\n\t</div>\n</nav>\n<!-- Botoes de ação -->\n<div class=\"row\">\n\t<div class=\"col s12 right-align\">\n\t\t<a routerLink=\"novo\" class=\"waves-effect waves-light btn red darken-1\">Nova Venda</a>\n\t</div>\n</div>\n<div class=\"section\"></div>\n<!-- Carregando -->\n<div class=\"row\" *ngIf=\"!loadStatus\">\n\t<div class=\"col s12\">\n\t\t<div id=\"loader\" class=\"preloader-wrapper big active\">\n\t\t\t<div class=\"spinner-layer spinner-red-only\">\n\t\t\t\t<div class=\"circle-clipper left\">\n\t\t\t\t\t<div class=\"circle\"></div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"gap-patch\">\n\t\t\t\t\t<div class=\"circle\"></div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"circle-clipper right\">\n\t\t\t\t\t<div class=\"circle\"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<!-- Sem nenhuma venda -->\n<div class=\"row\" *ngIf=\"!vendas.length&&loadStatus\">\n\t<div class=\"col s12\">\n\t\t<div class=\"section\"></div>\n\t\t<div class=\"center-align\">\n\t\t\t<div class=\"grey-text text-lighten-2\">\n\t\t\t\t<h2>Sem nenhuma venda aqui <br><small>clique em Nova Venda</small></h2>\n\t\t\t\t<i class=\"material-icons big\">&#xE814;</i>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"row\" *ngIf=\"vendas.length\">\n\t<div class=\"col s12\">\n\t\t<table class=\"bordered highlight responsive-table\">\n\t\t\t<thead>\n\t\t\t\t<tr class=\"orders\">\n\t\t\t\t\t<th \n\t\t\t\t\tdata-field=\"nome\" \n\t\t\t\t\t(click)=\"setOrder('nome')\"\n\t\t\t\t\t[class.active]=\"order === 'nome'\"\n\t\t\t\t\t>\n\t\t\t\t\t\tNome do cliente\n\t\t\t\t\t\t<span [hidden]=\"reverse\">\n\t\t\t\t\t\t\t<i class=\"material-icons right\">&#xE5C5;</i>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<span [hidden]=\"!reverse\">\n\t\t\t\t\t\t\t<i class=\"material-icons right\">&#xE5C7;</i>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</th>\n\t\t\t\t\t<th \n\t\t\t\t\tdata-field=\"cidade\" \n\t\t\t\t\t(click)=\"setOrder('valor_total')\"\n\t\t\t\t\t[class.active]=\"order === 'valor_total'\"\n\t\t\t\t\t>\n\t\t\t\t\t\tValor Total\n\t\t\t\t\t\t<span [hidden]=\"reverse\">\n\t\t\t\t\t\t\t<i class=\"material-icons right\">&#xE5C5;</i>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<span [hidden]=\"!reverse\">\n\t\t\t\t\t\t\t<i class=\"material-icons right\">&#xE5C7;</i>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</th>\n\t\t\t\t\t<th \n\t\t\t\t\tdata-field=\"tipo\" \n\t\t\t\t\t(click)=\"setOrder('tipo')\"\n\t\t\t\t\t[class.active]=\"order === 'tipo'\"\n\t\t\t\t\t>\n\t\t\t\t\t\tTipo\n\t\t\t\t\t\t<span [hidden]=\"reverse\">\n\t\t\t\t\t\t\t<i class=\"material-icons right\">&#xE5C5;</i>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<span [hidden]=\"!reverse\">\n\t\t\t\t\t\t\t<i class=\"material-icons right\">&#xE5C7;</i>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</th>\n\t\t\t\t\t<th \n\t\t\t\t\tdata-field=\"obs\" \n\t\t\t\t\t(click)=\"setOrder('observacao')\"\n\t\t\t\t\t[class.active]=\"order === 'observacao'\"\n\t\t\t\t\t>\n\t\t\t\t\t\tObs.\n\t\t\t\t\t\t<span [hidden]=\"reverse\">\n\t\t\t\t\t\t\t<i class=\"material-icons right\">&#xE5C5;</i>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<span [hidden]=\"!reverse\">\n\t\t\t\t\t\t\t<i class=\"material-icons right\">&#xE5C7;</i>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</th>\n\t\t\t\t\t<th \n\t\t\t\t\tdata-field=\"dataCriado\" \n\t\t\t\t\t(click)=\"setOrder('updatedAt')\"\n\t\t\t\t\t[class.active]=\"order === 'updatedAt'\"\n\t\t\t\t\t>\n\t\t\t\t\t\tData Criado\n\t\t\t\t\t\t<span [hidden]=\"reverse\">\n\t\t\t\t\t\t\t<i class=\"material-icons right\">&#xE5C5;</i>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<span [hidden]=\"!reverse\">\n\t\t\t\t\t\t\t<i class=\"material-icons right\">&#xE5C7;</i>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</th>\n\t\t\t\t\t<th></th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t<tr *ngFor=\"let venda of vendas | orderBy: order:reverse | paginate: { itemsPerPage: 10, currentPage: p }\" [routerLink]=\"[venda._id]\">\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<img src=\"{{ '/uploads/' + (!venda.cliente.images[0] ? 'sem-foto.jpg' : venda.cliente.images[0]) }}\" class=\"circle img-table\">\n\t\t\t\t\t\t{{ venda.nome }}\n\t\t\t\t\t</td>\n\t\t\t\t\t<td>{{ 'R$' + venda.valor_total }}</td>\n\t\t\t\t\t<td>{{ venda.tipo }}</td>\n\t\t\t\t\t<td>{{ venda.observacao || '---' }}</td>\n\t\t\t\t\t<td>{{ venda.updatedAt | date:'dd/MM/yyyy HH:mm:ss' }}</td>\n\t\t\t\t\t<td><i class=\"material-icons\">&#xE315;</i></td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n\t\t</table>\n\t\t<pagination-controls \n\t\t(pageChange)=\"p = $event\" \n\t\tpreviousLabel=\"Anterior\"\n        nextLabel=\"Próximo\"\n        *ngIf=\"vendas.length>9\"\n        ></pagination-controls>\n\t</div>\n</div>"

/***/ })

});
//# sourceMappingURL=2.chunk.js.map