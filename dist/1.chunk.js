webpackJsonp([1,10],{

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_materialize__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_materialize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_materialize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_text_mask__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_text_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_pagination__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_pagination__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_order_pipe__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_order_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_order_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__produtos_routing_module__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__produtos_component__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__novo_produto_novo_produto_component__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__detalhe_produto_detalhe_produto_component__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__editar_produto_editar_produto_component__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__directives_image_preview_produto_directive__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pipes_currency_format_produtos_pipe__ = __webpack_require__(444);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutosModule", function() { return ProdutosModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var ProdutosModule = (function () {
    function ProdutosModule() {
    }
    return ProdutosModule;
}());
ProdutosModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__produtos_component__["a" /* ProdutosComponent */],
            __WEBPACK_IMPORTED_MODULE_11__novo_produto_novo_produto_component__["a" /* NovoProdutoComponent */],
            __WEBPACK_IMPORTED_MODULE_12__detalhe_produto_detalhe_produto_component__["a" /* DetalheProdutoComponent */],
            __WEBPACK_IMPORTED_MODULE_13__editar_produto_editar_produto_component__["a" /* EditarProdutoComponent */],
            __WEBPACK_IMPORTED_MODULE_14__directives_image_preview_produto_directive__["a" /* ImagePreviewProduto */],
            __WEBPACK_IMPORTED_MODULE_15__pipes_currency_format_produtos_pipe__["a" /* CurrencyFormatProdutosPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_materialize__["MaterializeModule"],
            __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__["FileUploadModule"],
            __WEBPACK_IMPORTED_MODULE_6_angular2_text_mask__["TextMaskModule"],
            __WEBPACK_IMPORTED_MODULE_7_ng2_pagination__["Ng2PaginationModule"],
            __WEBPACK_IMPORTED_MODULE_8_ng2_order_pipe__["Ng2OrderModule"],
            __WEBPACK_IMPORTED_MODULE_9__produtos_routing_module__["a" /* ProdutosRoutingModule */]
        ],
        providers: []
    })
], ProdutosModule);

//# sourceMappingURL=C:/Users/desenvolvedor/extinfire_v2/src/produtos.module.js.map

/***/ }),

/***/ 417:
/***/ (function(module, exports, __webpack_require__) {

!function(e,r){ true?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.textMaskCore=r():e.textMaskCore=r()}(this,function(){return function(e){function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}var t={};return r.m=e,r.c=t,r.p="",r(0)}([function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(r,"__esModule",{value:!0});var o=t(3);Object.defineProperty(r,"conformToMask",{enumerable:!0,get:function(){return n(o).default}});var i=t(2);Object.defineProperty(r,"adjustCaretPosition",{enumerable:!0,get:function(){return n(i).default}});var a=t(5);Object.defineProperty(r,"createTextMaskInputElement",{enumerable:!0,get:function(){return n(a).default}})},function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.placeholderChar="_"},function(e,r){"use strict";function t(e){var r=e.previousConformedValue,t=void 0===r?o:r,i=e.currentCaretPosition,a=void 0===i?0:i,u=e.conformedValue,l=e.rawValue,f=e.placeholderChar,s=e.placeholder,d=e.indexesOfPipedChars,c=void 0===d?n:d,p=e.caretTrapIndexes,v=void 0===p?n:p;if(0===a)return 0;var h=l.length,m=t.length,g=s.length,y=u.length,b=h-m,C=b>0,P=0===m,x=b>1&&!C&&!P;if(x)return a;var k=C&&(t===u||u===s),O=0;if(k)O=a-b;else for(var j=u.toLowerCase(),M=l.toLowerCase(),T=M.substr(0,a).split(o),_=T.filter(function(e){return j.indexOf(e)!==-1}),w=_[_.length-1],S=c.map(function(e){return j[e]}),V=S.filter(function(e){return e===w}).length,N=_.filter(function(e){return e===w}).length,E=s.substr(0,s.indexOf(f)).split(o).filter(function(e,r){return e===w&&l[r]!==e}).length,A=E+N+V,R=0,I=0;I<y;I++){var J=j[I];if(O=I+1,J===w&&R++,R>=A)break}if(C){for(var q=O,F=O;F<=g;F++)if(s[F]===f&&(q=F),s[F]===f||v.indexOf(F)!==-1||F===g)return q}else for(var L=O;L>=0;L--)if(s[L-1]===f||v.indexOf(L)!==-1||0===L)return L}Object.defineProperty(r,"__esModule",{value:!0}),r.default=t;var n=[],o=""},function(e,r,t){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=t.guide,u=void 0===n||n,l=t.previousConformedValue,f=void 0===l?a:l,s=t.placeholderChar,d=void 0===s?i.placeholderChar:s,c=t.placeholder,p=void 0===c?(0,o.convertMaskToPlaceholder)(r,d):c,v=t.currentCaretPosition,h=t.keepCharPositions,m=u===!1&&void 0!==f,g=e.length,y=f.length,b=p.length,C=r.length,P=g-y,x=P>0,k=v+(x?-P:0),O=k+Math.abs(P);if(h===!0&&!x){for(var j=a,M=k;M<O;M++)p[M]===d&&(j+=d);e=e.slice(0,k)+j+e.slice(k,g)}for(var T=e.split(a).map(function(e,r){return{char:e,isNew:r>=k&&r<O}}),_=g-1;_>=0;_--){var w=T[_].char;if(w!==d){var S=_>=k&&y===C;w===p[S?_-P:_]&&T.splice(_,1)}}var V=a,N=!1;e:for(var E=0;E<b;E++){var A=p[E];if(A===d){if(T.length>0)for(;T.length>0;){var R=T.shift(),I=R.char,J=R.isNew;if(I===d&&m!==!0){V+=d;continue e}if(r[E].test(I)){if(h===!0&&J!==!1&&f!==a&&u!==!1&&x){for(var q=T.length,F=null,L=0;L<q;L++){var W=T[L];if(W.char!==d&&W.isNew===!1)break;if(W.char===d){F=L;break}}null!==F?(V+=I,T.splice(F,1)):E--}else V+=I;continue e}N=!0}m===!1&&(V+=p.substr(E,b));break}V+=A}if(m&&x===!1){for(var z=null,B=0;B<V.length;B++)p[B]===d&&(z=B);V=null!==z?V.substr(0,z+1):a}return{conformedValue:V,meta:{someCharsRejected:N}}}Object.defineProperty(r,"__esModule",{value:!0}),r.default=n;var o=t(4),i=t(1),a=""},function(e,r,t){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u.placeholderChar;if(e.indexOf(r)!==-1)throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\n"+("The placeholder character that was received is: "+JSON.stringify(r)+"\n\n")+("The mask that was received is: "+JSON.stringify(e)));return e.map(function(e){return e instanceof RegExp?r:e}).join("")}function o(e){return"string"==typeof e||e instanceof String}function i(e){return"number"==typeof e&&void 0===e.length&&!isNaN(e)}function a(e){for(var r=[],t=void 0;t=e.indexOf(f),t!==-1;)r.push(t),e.splice(t,1);return{maskWithoutCaretTraps:e,indexes:r}}Object.defineProperty(r,"__esModule",{value:!0}),r.convertMaskToPlaceholder=n,r.isString=o,r.isNumber=i,r.processCaretTraps=a;var u=t(1),l=[],f="[]"},function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var r={previousConformedValue:void 0};return{state:r,update:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,o=n.inputElement,f=n.mask,d=n.guide,g=n.pipe,b=n.placeholderChar,C=void 0===b?v.placeholderChar:b,P=n.keepCharPositions,x=void 0!==P&&P;if("undefined"==typeof t&&(t=o.value),t!==r.previousConformedValue){("undefined"==typeof f?"undefined":l(f))===y&&void 0!==f.pipe&&void 0!==f.mask&&(g=f.pipe,f=f.mask);var k=void 0,O=void 0;if(f instanceof Array&&(k=(0,p.convertMaskToPlaceholder)(f,C)),f!==!1){var j=a(t),M=o.selectionStart,T=r.previousConformedValue,_=void 0;if(("undefined"==typeof f?"undefined":l(f))===h){if(O=f(j,{currentCaretPosition:M,previousConformedValue:T,placeholderChar:C}),O===!1)return;var w=(0,p.processCaretTraps)(O),S=w.maskWithoutCaretTraps,V=w.indexes;O=S,_=V,k=(0,p.convertMaskToPlaceholder)(O,C)}else O=f;var N={previousConformedValue:T,guide:d,placeholderChar:C,pipe:g,placeholder:k,currentCaretPosition:M,keepCharPositions:x},E=(0,c.default)(j,O,N),A=E.conformedValue,R=("undefined"==typeof g?"undefined":l(g))===h,I={};R&&(I=g(A,u({rawValue:j},N)),I===!1?I={value:T,rejected:!0}:(0,p.isString)(I)&&(I={value:I}));var J=R?I.value:A,q=(0,s.default)({previousConformedValue:T,conformedValue:J,placeholder:k,rawValue:j,currentCaretPosition:M,placeholderChar:C,indexesOfPipedChars:I.indexesOfPipedChars,caretTrapIndexes:_}),F=J===k&&0===q,L=F?m:J;r.previousConformedValue=L,o.value!==L&&(o.value=L,i(o,q))}}}}}function i(e,r){document.activeElement===e&&(b?C(function(){return e.setSelectionRange(r,r,g)},0):e.setSelectionRange(r,r,g))}function a(e){if((0,p.isString)(e))return e;if((0,p.isNumber)(e))return String(e);if(void 0===e||null===e)return m;throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n "+JSON.stringify(e))}Object.defineProperty(r,"__esModule",{value:!0});var u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};r.default=o;var f=t(2),s=n(f),d=t(3),c=n(d),p=t(4),v=t(1),h="function",m="",g="none",y="object",b="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),C="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:setTimeout}])});

/***/ }),

/***/ 418:
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.createNumberMask=t():e.createNumberMask=t()}(this,function(){return function(e){function t(n){if(o[n])return o[n].exports;var i=o[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){e.exports=o(2)},,function(e,t){"use strict";function o(){function e(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=e.length;if(e===l||e[0]===y[0]&&1===t)return y.split(l).concat([v]).concat(h.split(l));var o=e.lastIndexOf(k),c=o!==-1,u=e[0]===d&&q,a=void 0,b=void 0,g=void 0;if(e.slice(T*-1)===h&&(e=e.slice(0,T*-1)),c&&(M||$)?(a=e.slice(e.slice(0,R)===y?R:0,o),b=e.slice(o+1,t),b=n(b.replace(f,l))):a=e.slice(0,R)===y?e.slice(R):e,P&&("undefined"==typeof P?"undefined":r(P))===p){var S="."===j?"[.]":""+j,w=(a.match(new RegExp(S,"g"))||[]).length;a=a.slice(0,P+w*Z)}return a=a.replace(f,l),E||(a=a.replace(/^0+(0$|[^0])/,"$1")),a=x?i(a,j):a,g=n(a),(c&&M||$===!0)&&(e[o-1]!==k&&g.push(m),g.push(k,m),b&&(("undefined"==typeof L?"undefined":r(L))===p&&(b=b.slice(0,L)),g=g.concat(b)),$===!0&&e[o-1]===k&&g.push(v)),R>0&&(g=y.split(l).concat(g)),u&&(g.length===R&&g.push(v),g=[s].concat(g)),h.length>0&&(g=g.concat(h.split(l))),g}var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=t.prefix,y=void 0===o?c:o,b=t.suffix,h=void 0===b?l:b,g=t.includeThousandsSeparator,x=void 0===g||g,S=t.thousandsSeparatorSymbol,j=void 0===S?u:S,w=t.allowDecimal,M=void 0!==w&&w,N=t.decimalSymbol,k=void 0===N?a:N,D=t.decimalLimit,L=void 0===D?2:D,O=t.requireDecimal,$=void 0!==O&&O,_=t.allowNegative,q=void 0!==_&&_,B=t.allowLeadingZeroes,E=void 0!==B&&B,I=t.integerLimit,P=void 0===I?null:I,R=y&&y.length||0,T=h&&h.length||0,Z=j&&j.length||0;return e.instanceOf="createNumberMask",e}function n(e){return e.split(l).map(function(e){return v.test(e)?v:e})}function i(e,t){return e.replace(/\B(?=(\d{3})+(?!\d))/g,t)}Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=o;var c="$",l="",u=",",a=".",d="-",s=/-/,f=/\D+/g,p="number",v=/\d/,m="[]"}])});

/***/ }),

/***/ 419:
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
var forms_1 = __webpack_require__(176);
var textMaskCore_1 = __webpack_require__(417);
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
var textMaskCore_2 = __webpack_require__(417);
exports.conformToMask = textMaskCore_2.conformToMask;
//# sourceMappingURL=angular2TextMask.js.map

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_itens_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_config__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalheProdutoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetalheProdutoComponent = (function () {
    function DetalheProdutoComponent(itensService, route, router) {
        this.itensService = itensService;
        this.route = route;
        this.router = router;
        this.globalActions = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.produto = {};
        this.loadStatus = false;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__app_config__["a" /* AppSettings */].API_ENDPOINT;
    }
    DetalheProdutoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.inscricao = this.route.params.subscribe(function (params) {
            _this.itensService.getItem(params['id']).subscribe(function (produto) {
                _this.produto = produto;
                _this.produto.valor_custo = _this.produto.valor_custo.replace('.', '').replace('.', '').replace(',', '.');
                _this.produto.valor_venda = _this.produto.valor_venda.replace('.', '').replace('.', '').replace(',', '.');
                _this.loadStatus = true;
            });
        });
    };
    DetalheProdutoComponent.prototype.deleteProduto = function (produto) {
        var _this = this;
        this.itensService.deleteItem(produto).subscribe(function (data) {
            if (data.n) {
                _this.router.navigate(['produtos']);
                _this.triggerToast('Produto excluido com sucesso!', 'green');
            }
        });
    };
    DetalheProdutoComponent.prototype.triggerToast = function (stringToast, bgColor) {
        this.globalActions.emit({ action: 'toast', params: [stringToast, 4000, bgColor] });
    };
    DetalheProdutoComponent.prototype.ngOnDestroy = function () {
        this.inscricao.unsubscribe();
    };
    return DetalheProdutoComponent;
}());
DetalheProdutoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-detalhe-produto',
        template: __webpack_require__(477),
        styles: [__webpack_require__(456)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_itens_service__["a" /* ItensService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_itens_service__["a" /* ItensService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object])
], DetalheProdutoComponent);

var _a, _b, _c;
//# sourceMappingURL=C:/Users/desenvolvedor/extinfire_v2/src/detalhe-produto.component.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_itens_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_text_mask_addons_dist_createNumberMask__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_text_mask_addons_dist_createNumberMask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_text_mask_addons_dist_createNumberMask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_config__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditarProdutoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var numberMask = __WEBPACK_IMPORTED_MODULE_4_text_mask_addons_dist_createNumberMask___default()({
    prefix: 'R$',
    allowDecimal: true,
    integerLimit: 7,
    decimalLimit: 2,
    thousandsSeparatorSymbol: '.',
    decimalSymbol: ',',
});
var EditarProdutoComponent = (function () {
    function EditarProdutoComponent(itensService, route, router) {
        this.itensService = itensService;
        this.route = route;
        this.router = router;
        this.maskMoney = numberMask;
        this.globalActions = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.produto = {};
        this.loadStatus = false;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_5__app_config__["a" /* AppSettings */].API_ENDPOINT;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__["FileUploader"]({
            url: this.baseUrl + 'api/upload'
        });
        this.hasBaseDropZoneOver = false;
    }
    EditarProdutoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.inscricao = this.route.params.subscribe(function (params) {
            _this.itensService.getItem(params['id']).subscribe(function (produto) {
                _this.produto = produto;
                _this.produto.valor_custo = _this.produto.valor_custo.replace('.', '').replace('.', '').replace(',', '.');
                _this.produto.valor_venda = _this.produto.valor_venda.replace('.', '').replace('.', '').replace(',', '.');
                _this.loadStatus = true;
            });
        });
    };
    EditarProdutoComponent.prototype.ngAfterViewChecked = function () {
        if (Materialize.updateTextFields)
            Materialize.updateTextFields();
    };
    EditarProdutoComponent.prototype.updateProuto = function () {
        var _this = this;
        for (var j = 0; j < this.uploader.queue.length; ++j) {
            this.produto.images.push(this.uploader.queue[j].file.name);
        }
        this.uploader.clearQueue();
        this.produto.valor_venda = this.produto.valor_venda.replace('R$', '');
        this.produto.valor_custo = this.produto.valor_custo.replace('R$', '');
        this.itensService.updateItem(this.produto).subscribe(function (data) {
            if (data._id) {
                _this.uploader.uploadAll();
                _this.router.navigate(['produtos']);
                _this.triggerToast('Produto editado com sucesso!', 'green');
            }
        });
    };
    EditarProdutoComponent.prototype.removeItemFotos = function (item) {
        this.produto.images.splice(this.produto.images.indexOf(item), 1);
    };
    EditarProdutoComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    EditarProdutoComponent.prototype.triggerToast = function (stringToast, bgColor) {
        this.globalActions.emit({ action: 'toast', params: [stringToast, 4000, bgColor] });
    };
    EditarProdutoComponent.prototype.ngOnDestroy = function () {
        this.inscricao.unsubscribe();
    };
    return EditarProdutoComponent;
}());
EditarProdutoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-editar-produto',
        template: __webpack_require__(478),
        styles: [__webpack_require__(457)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_itens_service__["a" /* ItensService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_itens_service__["a" /* ItensService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object])
], EditarProdutoComponent);

var _a, _b, _c;
//# sourceMappingURL=C:/Users/desenvolvedor/extinfire_v2/src/editar-produto.component.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_text_mask_addons_dist_createNumberMask__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_text_mask_addons_dist_createNumberMask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_text_mask_addons_dist_createNumberMask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_itens_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_config__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NovoProdutoComponent; });
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
    decimalSymbol: ',',
});
var NovoProdutoComponent = (function () {
    function NovoProdutoComponent(itensService, router) {
        this.itensService = itensService;
        this.router = router;
        this.maskMoney = numberMask;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_5__app_config__["a" /* AppSettings */].API_ENDPOINT;
        this.globalActions = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.uploader = new __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload__["FileUploader"]({
            url: this.baseUrl + 'api/upload'
        });
        this.hasBaseDropZoneOver = false;
    }
    NovoProdutoComponent.prototype.ngOnInit = function () {
    };
    NovoProdutoComponent.prototype.ngAfterViewChecked = function () {
        if (Materialize.updateTextFields)
            Materialize.updateTextFields();
    };
    NovoProdutoComponent.prototype.novoProduto = function (event) {
        var _this = this;
        event.preventDefault();
        var newProduto = {
            images: [],
            nome: this.nome,
            valor_venda: this.valor_venda.replace('R$', ''),
            valor_custo: this.valor_custo.replace('R$', ''),
            qntde_atual: this.qntde_atual,
            qntde_minima: this.qntde_minima
        };
        for (var i = 0; i < this.uploader.queue.length; ++i) {
            newProduto.images.push(this.uploader.queue[i].file.name);
        }
        this.itensService.addItem(newProduto).subscribe(function (produto) {
            _this.uploader.uploadAll();
            _this.router.navigate(['produtos']);
            _this.triggerToast('Produto cadastrado com sucesso!', 'green');
        });
    };
    ////////////////////////// Upload ///////////////////////////
    ////////////////////////////////////////////////////////////
    NovoProdutoComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    NovoProdutoComponent.prototype.triggerToast = function (stringToast, bgColor) {
        this.globalActions.emit({ action: 'toast', params: [stringToast, 4000, bgColor] });
    };
    return NovoProdutoComponent;
}());
NovoProdutoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-novo-produto',
        template: __webpack_require__(479),
        styles: [__webpack_require__(458)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_itens_service__["a" /* ItensService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_itens_service__["a" /* ItensService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], NovoProdutoComponent);

var _a, _b;
//# sourceMappingURL=C:/Users/desenvolvedor/extinfire_v2/src/novo-produto.component.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_itens_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdutosComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProdutosComponent = (function () {
    function ProdutosComponent(itensService) {
        this.itensService = itensService;
        this.produtos = [];
        this.order = 'updatedAt';
        this.reverse = false;
        this.loadStatus = false;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* AppSettings */].API_ENDPOINT;
    }
    ProdutosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.inscricao = this.itensService.getItens().subscribe(function (produtos) {
            for (var i = 0; i < produtos.length; ++i) {
                if (produtos[i].qntde_minima) {
                    produtos[i].valor_custo = produtos[i].valor_custo.replace('.', '').replace('.', '').replace(',', '.');
                    produtos[i].valor_venda = produtos[i].valor_venda.replace('.', '').replace('.', '').replace(',', '.');
                    // Tem quantidade minima
                    // Então é produto
                    _this.produtos.push(produtos[i]);
                }
            }
            _this.loadStatus = true;
        });
    };
    ProdutosComponent.prototype.setOrder = function (value) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
    };
    return ProdutosComponent;
}());
ProdutosComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-produtos',
        template: __webpack_require__(480),
        styles: [__webpack_require__(459)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_itens_service__["a" /* ItensService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_itens_service__["a" /* ItensService */]) === "function" && _a || Object])
], ProdutosComponent);

var _a;
//# sourceMappingURL=C:/Users/desenvolvedor/extinfire_v2/src/produtos.component.js.map

/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagePreviewProduto; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImagePreviewProduto = (function () {
    function ImagePreviewProduto(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        console.log('ImagePreviewProdutoDirective Initialize...');
    }
    ImagePreviewProduto.prototype.ngOnInit = function () {
    };
    ImagePreviewProduto.prototype.ngOnChanges = function (changes) {
        var reader = new FileReader();
        var el = this.el;
        reader.onloadend = function (e) {
            el.nativeElement.src = reader.result;
        };
        if (this.image) {
            return reader.readAsDataURL(this.image);
        }
    };
    return ImagePreviewProduto;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ImagePreviewProduto.prototype, "image", void 0);
ImagePreviewProduto = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: 'img[imgPreviewProduto]' }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _b || Object])
], ImagePreviewProduto);

var _a, _b;
//# sourceMappingURL=C:/Users/desenvolvedor/extinfire_v2/src/image-preview-produto.directive.js.map

/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyFormatProdutosPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CurrencyFormatProdutosPipe = (function () {
    function CurrencyFormatProdutosPipe() {
    }
    CurrencyFormatProdutosPipe.prototype.transform = function (value, currencyCode, symbolDisplay, digits) {
        if (currencyCode === void 0) { currencyCode = 'BRL'; }
        if (symbolDisplay === void 0) { symbolDisplay = true; }
        if (!value) {
            return '';
        }
        var currencyPipe = new __WEBPACK_IMPORTED_MODULE_1__angular_common__["CurrencyPipe"]('pt-BR');
        var newValue = currencyPipe.transform(value, currencyCode, symbolDisplay, digits);
        return newValue;
    };
    return CurrencyFormatProdutosPipe;
}());
CurrencyFormatProdutosPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'currencyformat'
    })
], CurrencyFormatProdutosPipe);

//# sourceMappingURL=C:/Users/desenvolvedor/extinfire_v2/src/currency-format-produtos.pipe.js.map

/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__produtos_component__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__novo_produto_novo_produto_component__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editar_produto_editar_produto_component__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__detalhe_produto_detalhe_produto_component__ = __webpack_require__(424);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdutosRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

;





var produtosRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__produtos_component__["a" /* ProdutosComponent */]
    },
    {
        path: 'novo',
        component: __WEBPACK_IMPORTED_MODULE_3__novo_produto_novo_produto_component__["a" /* NovoProdutoComponent */]
    },
    {
        path: ':id',
        component: __WEBPACK_IMPORTED_MODULE_5__detalhe_produto_detalhe_produto_component__["a" /* DetalheProdutoComponent */]
    },
    {
        path: ':id/editar',
        component: __WEBPACK_IMPORTED_MODULE_4__editar_produto_editar_produto_component__["a" /* EditarProdutoComponent */]
    }
];
var ProdutosRoutingModule = (function () {
    function ProdutosRoutingModule() {
    }
    return ProdutosRoutingModule;
}());
ProdutosRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(produtosRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], ProdutosRoutingModule);

//# sourceMappingURL=C:/Users/desenvolvedor/extinfire_v2/src/produtos.routing.module.js.map

/***/ }),

/***/ 456:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 459:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 477:
/***/ (function(module, exports) {

module.exports = "<nav class=\"header-pages white\">\r\n\t<div class=\"nav-wrapper\">\r\n\t\t<div class=\"col s12\">\r\n\t\t\t<a routerLink=\"/produtos\" class=\"breadcrumb\">Lista de Produtos</a>\r\n\t\t\t<span class=\"breadcrumb\">Detalhe do Produto</span>\r\n\t\t</div>\r\n\t</div>\r\n</nav>\r\n<!-- Carregando -->\r\n<div class=\"row\" *ngIf=\"!loadStatus\">\r\n\t<div class=\"col s12\">\r\n\t\t<div id=\"loader\" class=\"preloader-wrapper big active\">\r\n\t\t\t<div class=\"spinner-layer spinner-red-only\">\r\n\t\t\t\t<div class=\"circle-clipper left\">\r\n\t\t\t\t\t<div class=\"circle\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"gap-patch\">\r\n\t\t\t\t\t<div class=\"circle\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"circle-clipper right\">\r\n\t\t\t\t\t<div class=\"circle\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<!-- Botoes de ação -->\r\n<div class=\"row\" *ngIf=\"produto&&loadStatus\">\r\n\t<div class=\"col s12 right-align\">\r\n\t\t<a class=\"waves-effect waves-light btn red darken-1\" [routerLink]=\"['/produtos', produto._id, 'editar']\">Editar</a>\r\n\t\t<a class=\"waves-effect waves-light btn grey darken-4\" (click)=\"deleteProduto(produto)\">Excluir</a>\r\n\t\t<a class=\"waves-effect waves-light btn grey\" routerLink=\"/produtos\">Cancelar</a>\r\n\t</div>\r\n</div>\r\n<div class=\"section\"></div>\r\n<div class=\"row\" *ngIf=\"produto&&loadStatus\">\r\n\t<div class=\"col s6\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col s12\">\r\n\t\t\t\t<label>Nome do produto</label>\r\n\t\t\t\t<h5>{{ produto.nome }}</h5>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col s12\">\r\n\t\t\t\t<label>Data de cadastro</label>\r\n\t\t\t\t<h5>{{ produto.updatedAt | date:'dd/MM/yyyy HH:mm:ss' }}</h5>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col s6\">\r\n\t\t\t\t<label>Valor de venda</label>\r\n\t\t\t\t<h5>{{ produto.valor_venda | currencyformat }}</h5>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col s6\">\r\n\t\t\t\t<label>Valor de custo</label>\r\n\t\t\t\t<h5>{{ produto.valor_custo | currencyformat }}</h5>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col s6\">\r\n\t\t\t\t<label>Quantidade em estoque</label>\r\n\t\t\t\t<h5>{{ produto.qntde_atual }}</h5>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col s6\">\r\n\t\t\t\t<label>Quantidade mínima necessária</label>\r\n\t\t\t\t<h5>{{ produto.qntde_minima }}</h5>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"col s6\">\r\n\t\t<img src=\"{{ baseUrl + 'uploads/' + (!image ? 'sem-foto.jpg' : image) }}\" class=\"circle img-table\" *ngFor=\"let image of produto.images\">\r\n\t</div>\r\n</div>\r\n<a (click)=\"triggerToast()\" materialize [materializeActions]=\"globalActions\"></a>"

/***/ }),

/***/ 478:
/***/ (function(module, exports) {

module.exports = "<nav class=\"header-pages white\">\r\n\t<div class=\"nav-wrapper\">\r\n\t\t<div class=\"col s12\">\r\n\t\t\t<a routerLink=\"/produtos\" class=\"breadcrumb\">Lista de Produtos</a>\r\n\t\t\t<a [routerLink]=\"['/produtos', produto._id]\" class=\"breadcrumb\">Detalhe do Produto</a>\r\n\t\t\t<span class=\"breadcrumb\">Editar Produto</span>\r\n\t\t</div>\r\n\t</div>\r\n</nav>\r\n<!-- Carregando -->\r\n<div class=\"row\" *ngIf=\"!loadStatus\">\r\n\t<div class=\"col s12\">\r\n\t\t<div id=\"loader\" class=\"preloader-wrapper big active\">\r\n\t\t\t<div class=\"spinner-layer spinner-red-only\">\r\n\t\t\t\t<div class=\"circle-clipper left\">\r\n\t\t\t\t\t<div class=\"circle\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"gap-patch\">\r\n\t\t\t\t\t<div class=\"circle\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"circle-clipper right\">\r\n\t\t\t\t\t<div class=\"circle\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<form (submit)=\"updateProuto()\" *ngIf=\"loadStatus\">\r\n\t<!-- Botoes de ação -->\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col s12 right-align\">\r\n\t\t\t<button type=\"submit\" class=\"waves-effect waves-light btn red darken-1\" name=\"action\">Salvar e Editar</button>\r\n\t\t\t<a class=\"waves-effect waves-light btn grey\" [routerLink]=\"['/produtos', produto._id]\">Cancelar e Voltar</a>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"section\"></div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col s12\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col s7\">\r\n\t\t\t\t\t<div class=\"section\"></div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-s12\">\r\n\t\t\t\t\t\t\t<div class=\"input-field\">\r\n\t\t\t\t\t\t\t\t<input id=\"nomeNovoProduto\" type=\"text\" [(ngModel)]=\"produto.nome\" name=\"nomeNovoProduto\" required=\"\" aria-required=\"true\">\r\n\t\t\t\t\t\t\t\t<label for=\"nomeNovoProduto\">Nome do produto</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col s6\">\r\n\t\t\t\t\t\t\t<div class=\"input-field\">\r\n\t\t\t\t\t\t\t\t<input \r\n\t\t\t\t\t\t\t\tid=\"valorVendaProduto\" \r\n\t\t\t\t\t\t\t\ttype=\"text\" \r\n\t\t\t\t\t\t\t\t[(ngModel)]=\"produto.valor_venda\" \r\n\t\t\t\t\t\t\t\tname=\"valorVendaProduto\" \r\n\t\t\t\t\t\t\t\trequired=\"\" \r\n\t\t\t\t\t\t\t\taria-required=\"true\" \r\n\t\t\t\t\t\t\t\t[textMask]=\"{mask: maskMoney}\"\r\n\t\t\t\t\t\t\t\tclass=\"decimal\" \r\n\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t<label for=\"valorVendaProduto\">Valor de venda do produto</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col s6\">\r\n\t\t\t\t\t\t\t<div class=\"input-field\">\r\n\t\t\t\t\t\t\t\t<input \r\n\t\t\t\t\t\t\t\tid=\"valorCustoProduto\" \r\n\t\t\t\t\t\t\t\ttype=\"text\" \r\n\t\t\t\t\t\t\t\t[(ngModel)]=\"produto.valor_custo\" \r\n\t\t\t\t\t\t\t\tname=\"valorCustoProduto\" \r\n\t\t\t\t\t\t\t\trequired=\"\" \r\n\t\t\t\t\t\t\t\taria-required=\"true\" \r\n\t\t\t\t\t\t\t\t[textMask]=\"{mask: maskMoney}\"\r\n\t\t\t\t\t\t\t\tclass=\"decimal\" \r\n\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t<label for=\"valorCustoProduto\">Valor de custo do produto</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col s6\">\r\n\t\t\t\t\t\t\t<div class=\"input-field\">\r\n\t\t\t\t\t\t\t\t<input id=\"qntdeMinProduto\" type=\"number\" min=\"1\" [(ngModel)]=\"produto.qntde_minima\" name=\"qntdeMinProduto\" required=\"\" aria-required=\"true\">\r\n\t\t\t\t\t\t\t\t<label for=\"qntdeMinProduto\">Quantidade mínima</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col s6\">\r\n\t\t\t\t\t\t\t<div class=\"input-field\">\r\n\t\t\t\t\t\t\t\t<input id=\"qntdeAtualProduto\" type=\"number\" min=\"1\" [(ngModel)]=\"produto.qntde_atual\" name=\"qntdeAtualProduto\" required=\"\" aria-required=\"true\">\r\n\t\t\t\t\t\t\t\t<label for=\"qntdeAtualProduto\">Quantidade atual deste produto</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col s5\">\r\n\t\t\t\t\t<div class=\"section\"></div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"lista-images\">\r\n\t\t\t\t\t\t\t<div class=\"col s3 center-align\" *ngFor=\"let imgPrdt of produto.images\">\r\n\t\t\t\t\t\t\t\t<a class=\"waves-effect waves-light btn grey darken-4\" (click)=\"removeItemFotos(imgPrdt)\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">&#xE92B;</i>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<img src=\"{{ baseUrl + 'uploads/' + imgPrdt }}\" class=\"responsive-img\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col s3 center-align\" *ngFor=\"let item of uploader.queue\">\r\n\t\t\t\t\t\t\t\t<a class=\"waves-effect waves-light btn grey darken-4\" (click)=\"item.remove()\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">&#xE92B;</i>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t<img imgPreviewProduto [image]=\"item?._file\" class=\"responsive-img\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col s12\">\r\n\t\t\t\t\t\t\t<div ng2FileDrop\r\n\t\t\t\t                 [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\"\r\n\t\t\t\t                 (fileOver)=\"fileOverBase($event)\"\r\n\t\t\t\t                 [uploader]=\"uploader\"\r\n\t\t\t\t                 class=\"drop-zone\">\r\n\t\t\t\t                <i class=\"material-icons\">&#xE439;</i>\r\n\t\t\t\t                <h4>Arraste e solte aqui</h4>\r\n\t\t\t\t                <h5>ou</h5>\r\n\t\t\t\t                <div class=\"file-field input-field\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"btn red darken-1\">\r\n\t\t\t\t\t\t\t\t\t\t<span>Imagens</span>\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"file-path-wrapper\">\r\n\t\t\t\t\t\t\t\t\t\t<input class=\"file-path validate\" type=\"text\" placeholder=\"Upload de uma ou mais imagens\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t            </div>\r\n\t\t\t            </div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</form>\r\n<a (click)=\"triggerToast()\" materialize [materializeActions]=\"globalActions\"></a>"

/***/ }),

/***/ 479:
/***/ (function(module, exports) {

module.exports = "<nav class=\"header-pages white\">\r\n\t<div class=\"nav-wrapper\">\r\n\t\t<div class=\"col s12\">\r\n\t\t\t<a routerLink=\"/produtos\" class=\"breadcrumb\">Lista de Produtos</a>\r\n\t\t\t<span class=\"breadcrumb\">Novo Produto</span>\r\n\t\t</div>\r\n\t</div>\r\n</nav>\r\n<form (submit)=\"novoProduto($event)\" ngNativeValidate>\r\n\t<!-- Botoes de ação -->\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col s12 right-align\">\r\n\t\t\t<button type=\"submit\" class=\"waves-effect waves-light btn red darken-1\" name=\"action\">Salvar e Cadastrar</button>\r\n\t\t\t<a class=\"modal-action modal-close waves-effect waves-light btn grey\" routerLink=\"/produtos\">Cancelar e Voltar</a>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"section\"></div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col s12\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col s7\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col s12\">\r\n\t\t\t\t\t\t\t<div class=\"input-field\">\r\n\t\t\t\t\t\t\t\t<input id=\"nomeNovoProduto\" type=\"text\" [(ngModel)]=\"nome\" name=\"nomeNovoProduto\" required=\"true\" aria-required=\"true\">\r\n\t\t\t\t\t\t\t\t<label for=\"nomeNovoProduto\">Nome do produto</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col s6\">\r\n\t\t\t\t\t\t\t<div class=\"input-field\">\r\n\t\t\t\t\t\t\t\t<input id=\"valorVendaProduto\" type=\"text\" [(ngModel)]=\"valor_venda\" name=\"valorVendaProduto\" required=\"true\" aria-required=\"true\" class=\"decimal\" [textMask]=\"{mask: maskMoney}\">\r\n\t\t\t\t\t\t\t\t<label for=\"valorVendaProduto\">Valor de venda do produto</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col s6\">\r\n\t\t\t\t\t\t\t<div class=\"input-field\">\r\n\t\t\t\t\t\t\t\t<input id=\"valorCustoProduto\" type=\"text\" [(ngModel)]=\"valor_custo\" name=\"valorCustoProduto\" required=\"true\" aria-required=\"true\" class=\"decimal\" [textMask]=\"{mask: maskMoney}\">\r\n\t\t\t\t\t\t\t\t<label for=\"valorCustoProduto\">Valor de custo do produto</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col s6\">\r\n\t\t\t\t\t\t\t<div class=\"input-field\">\r\n\t\t\t\t\t\t\t\t<input id=\"qntdeMinProduto\" type=\"number\" [(ngModel)]=\"qntde_minima\" name=\"qntdeMinProduto\" required=\"true\" aria-required=\"true\" min=\"1\">\r\n\t\t\t\t\t\t\t\t<label for=\"qntdeMinProduto\">Quantidade mínima</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col s6\">\r\n\t\t\t\t\t\t\t<div class=\"input-field\">\r\n\t\t\t\t\t\t\t\t<input id=\"qntdeAtualProduto\" type=\"number\" [(ngModel)]=\"qntde_atual\" name=\"qntdeAtualProduto\" required=\"true\" aria-required=\"true\" min=\"1\">\r\n\t\t\t\t\t\t\t\t<label for=\"qntdeAtualProduto\">Quantidade atual deste produto</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col s5\">\r\n\t\t\t\t\t<div class=\"section\"></div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"lista-images\">\r\n\t\t\t\t\t\t\t<div class=\"col s3 center-align eng-del-image\" *ngFor=\"let item of uploader.queue\">\r\n\t\t\t\t\t\t\t\t<div class=\"waves-effect waves-light btn grey darken-4\" (click)=\"item.remove()\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">&#xE92B;</i>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<img imgPreviewProduto [image]=\"item?._file\" class=\"responsive-img\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col s12\">\r\n\t\t\t\t\t\t\t<div ng2FileDrop\r\n\t\t\t\t                 [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\"\r\n\t\t\t\t                 (fileOver)=\"fileOverBase($event)\"\r\n\t\t\t\t                 [uploader]=\"uploader\"\r\n\t\t\t\t                 class=\"drop-zone\">\r\n\t\t\t\t                <i class=\"material-icons\">&#xE439;</i>\r\n\t\t\t\t                <h4>Arraste e solte aqui</h4>\r\n\t\t\t\t                <h5>ou</h5>\r\n\t\t\t\t\t\t\t\t<div class=\"file-field input-field\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"btn red darken-1\">\r\n\t\t\t\t\t\t\t\t\t\t<span>Imagens</span>\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"file-path-wrapper\">\r\n\t\t\t\t\t\t\t\t\t\t<input class=\"file-path validate\" type=\"text\" placeholder=\"Upload de uma ou mais imagens\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t            </div>\r\n\t\t\t            </div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</form>\r\n<a (click)=\"triggerToast()\" materialize [materializeActions]=\"globalActions\"></a>"

/***/ }),

/***/ 480:
/***/ (function(module, exports) {

module.exports = "<nav class=\"header-pages white\">\r\n\t<div class=\"nav-wrapper\">\r\n\t\t<div class=\"col s12\">\r\n\t\t\t<span class=\"breadcrumb\">Lista de Produtos</span>\r\n\t\t</div>\r\n\t</div>\r\n</nav>\r\n<!-- Botoes de ação -->\r\n<div class=\"row\" *ngIf=\"loadStatus\">\r\n\t<div class=\"col s12 right-align\">\r\n\t\t<a routerLink=\"novo\" class=\"waves-effect waves-light btn red darken-1\">Novo Produto</a>\r\n\t</div>\r\n</div>\r\n<div class=\"section\"></div>\r\n<!-- Carregando -->\r\n<div class=\"row\" *ngIf=\"!loadStatus\">\r\n\t<div class=\"col s12\">\r\n\t\t<div id=\"loader\" class=\"preloader-wrapper big active\">\r\n\t\t\t<div class=\"spinner-layer spinner-red-only\">\r\n\t\t\t\t<div class=\"circle-clipper left\">\r\n\t\t\t\t\t<div class=\"circle\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"gap-patch\">\r\n\t\t\t\t\t<div class=\"circle\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"circle-clipper right\">\r\n\t\t\t\t\t<div class=\"circle\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<!-- Sem nenhum serviço -->\r\n<div class=\"row\" *ngIf=\"!produtos.length&&loadStatus\">\r\n\t<div class=\"col s12\">\r\n\t\t<div class=\"section\"></div>\r\n\t\t<div class=\"center-align\">\r\n\t\t\t<div class=\"grey-text text-lighten-2\">\r\n\t\t\t\t<h2>Sem nenhum produto aqui <br><small>clique em Novo Produto</small></h2>\r\n\t\t\t\t<i class=\"material-icons big\">&#xE814;</i>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<div class=\"row\" *ngIf=\"produtos.length\">\r\n\t<div class=\"col s12\">\r\n\t\t<table class=\"bordered highlight responsive-table\">\r\n\t\t\t<thead>\r\n\t\t\t\t<tr class=\"orders\">\r\n\t\t\t\t\t<th \r\n\t\t\t\t\tdata-field=\"nome\" \r\n\t\t\t\t\t(click)=\"setOrder('nome')\"\r\n\t\t\t\t\t[class.active]=\"order === 'nome'\"\r\n\t\t\t\t\t>\r\n\t\t\t\t\t\tProduto\r\n\t\t\t\t\t\t<span [hidden]=\"reverse\">\r\n\t\t\t\t\t\t\t<i class=\"material-icons right\">&#xE5C5;</i>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t<span [hidden]=\"!reverse\">\r\n\t\t\t\t\t\t\t<i class=\"material-icons right\">&#xE5C7;</i>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</th>\r\n\t\t\t\t\t<th \r\n\t\t\t\t\tdata-field=\"qntdeMinima\" \r\n\t\t\t\t\t(click)=\"setOrder('qntde_minima')\"\r\n\t\t\t\t\t[class.active]=\"order === 'qntde_minima'\"\r\n\t\t\t\t\t>\r\n\t\t\t\t\t\tQntde. Minima\r\n\t\t\t\t\t\t<span [hidden]=\"reverse\">\r\n\t\t\t\t\t\t\t<i class=\"material-icons right\">&#xE5C5;</i>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t<span [hidden]=\"!reverse\">\r\n\t\t\t\t\t\t\t<i class=\"material-icons right\">&#xE5C7;</i>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</th>\r\n\t\t\t\t\t<th \r\n\t\t\t\t\tdata-field=\"qntdeAtual\" \r\n\t\t\t\t\t(click)=\"setOrder('qntde_atual')\"\r\n\t\t\t\t\t[class.active]=\"order === 'qntde_atual'\"\r\n\t\t\t\t\t>\r\n\t\t\t\t\t\tQntde. Atual\r\n\t\t\t\t\t\t<span [hidden]=\"reverse\">\r\n\t\t\t\t\t\t\t<i class=\"material-icons right\">&#xE5C5;</i>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t<span [hidden]=\"!reverse\">\r\n\t\t\t\t\t\t\t<i class=\"material-icons right\">&#xE5C7;</i>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</th>\r\n\t\t\t\t\t<th \r\n\t\t\t\t\tdata-field=\"valorVenda\" \r\n\t\t\t\t\t(click)=\"setOrder('valor_venda')\"\r\n\t\t\t\t\t[class.active]=\"order === 'valor_venda'\"\r\n\t\t\t\t\t>\r\n\t\t\t\t\t\tValor Venda\r\n\t\t\t\t\t\t<span [hidden]=\"reverse\">\r\n\t\t\t\t\t\t\t<i class=\"material-icons right\">&#xE5C5;</i>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t<span [hidden]=\"!reverse\">\r\n\t\t\t\t\t\t\t<i class=\"material-icons right\">&#xE5C7;</i>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</th>\r\n\t\t\t\t\t<th \r\n\t\t\t\t\tdata-field=\"valorCusto\" \r\n\t\t\t\t\t(click)=\"setOrder('valor_custo')\"\r\n\t\t\t\t\t[class.active]=\"order === 'valor_custo'\"\r\n\t\t\t\t\t>\r\n\t\t\t\t\t\tValor Custo\r\n\t\t\t\t\t\t<span [hidden]=\"reverse\">\r\n\t\t\t\t\t\t\t<i class=\"material-icons right\">&#xE5C5;</i>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t<span [hidden]=\"!reverse\">\r\n\t\t\t\t\t\t\t<i class=\"material-icons right\">&#xE5C7;</i>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</th>\r\n\t\t\t\t\t<th \r\n\t\t\t\t\tdata-field=\"dataCriado\" \r\n\t\t\t\t\t(click)=\"setOrder('updatedAt')\"\r\n\t\t\t\t\t[class.active]=\"order === 'updatedAt'\"\r\n\t\t\t\t\t>\r\n\t\t\t\t\t\tData Criado\r\n\t\t\t\t\t\t<span [hidden]=\"reverse\">\r\n\t\t\t\t\t\t\t<i class=\"material-icons right\">&#xE5C5;</i>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t<span [hidden]=\"!reverse\">\r\n\t\t\t\t\t\t\t<i class=\"material-icons right\">&#xE5C7;</i>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</th>\r\n\t\t\t\t\t<th></th>\r\n\t\t\t\t\t<th></th>\r\n\t\t\t\t</tr>\r\n\t\t\t</thead>\r\n\t\t\t<tbody>\r\n\t\t\t\t<tr *ngFor=\"let produto of produtos | orderBy: order:reverse | paginate: { itemsPerPage: 10, currentPage: p }\" [routerLink]=\"[produto._id]\">\r\n\t\t\t\t\t<td>\r\n\t\t\t\t\t\t<img src=\"{{ baseUrl + 'uploads/' + (!produto.images[0] ? 'sem-foto.jpg' : produto.images[0]) }}\" class=\"circle img-table\">\r\n\t\t\t\t\t\t{{ produto.nome }}\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td>{{ produto.qntde_minima }}</td>\r\n\t\t\t\t\t<td>{{ produto.qntde_atual }}</td>\r\n\t\t\t\t\t<td>{{ produto.valor_venda | currencyformat }}</td>\r\n\t\t\t\t\t<td>{{ produto.valor_custo | currencyformat }}</td>\r\n\t\t\t\t\t<td>{{ produto.updatedAt | date:'dd/MM/yyyy HH:mm:ss' }}</td>\r\n\t\t\t\t\t<td>\r\n\t\t\t\t\t\t<div \r\n\t\t\t\t\t\t*ngIf=\"(produto.qntde_atual <= 0) || (produto.qntde_atual > 0&&produto.qntde_atual < produto.qntde_minima)\" \r\n\t\t\t\t\t\tclass=\"chip white-text\" \r\n\t\t\t\t\t\t[ngClass]=\"{'red text-white': produto.qntde_atual <= 0, 'orange text-white': produto.qntde_atual > 0&&produto.qntde_atual < produto.qntde_minima}\"\r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t<h6 *ngIf=\"produto.qntde_atual <= 0\">Acabou!</h6>\r\n\t\t\t\t\t\t\t<h6 *ngIf=\"produto.qntde_atual > 0&&produto.qntde_atual < produto.qntde_minima\">Está Acabando</h6>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t\t<td><i class=\"material-icons\">&#xE315;</i></td>\r\n\t\t\t\t</tr>\r\n\t\t\t</tbody>\r\n\t\t</table>\r\n\t\t<pagination-controls \r\n\t\t(pageChange)=\"p = $event\" \r\n\t\tpreviousLabel=\"Anterior\"\r\n        nextLabel=\"Próximo\"\r\n        *ngIf=\"produtos.length>9\"\r\n        ></pagination-controls>\r\n\t</div>\r\n</div>"

/***/ })

});
//# sourceMappingURL=1.chunk.js.map