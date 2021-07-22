(self["webpackChunkthree_d_experience"] = self["webpackChunkthree_d_experience"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 1787:
/*!*******************************************!*\
  !*** ./src/app/elements/elements.main.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _elements_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements.module */ 7764);




if (src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
const bootstrap = () => _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_elements_module__WEBPACK_IMPORTED_MODULE_1__.ElementsModule);
bootstrap().catch(err => console.error(err));


/***/ }),

/***/ 7764:
/*!*********************************************!*\
  !*** ./src/app/elements/elements.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ElementsModule": () => (/* binding */ ElementsModule)
/* harmony export */ });
/* harmony import */ var _angular_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/elements */ 558);
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/components */ 7667);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




// https://javascript.plainenglish.io/creating-web-component-with-angular-element-angular-11-1c53be854a07
class ElementsModule {
    constructor(injector) {
        this.injector = injector;
    }
    ngDoBootstrap() {
        const el = (0,_angular_elements__WEBPACK_IMPORTED_MODULE_2__.createCustomElement)(_shared_components__WEBPACK_IMPORTED_MODULE_0__.EbomToMbomComponent, { injector: this.injector });
        customElements.define('xlm-root', el);
    }
}
ElementsModule.ɵfac = function ElementsModule_Factory(t) { return new (t || ElementsModule)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector)); };
ElementsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ElementsModule });
ElementsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ElementsModule, { imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule], exports: [_shared_components__WEBPACK_IMPORTED_MODULE_0__.EbomToMbomComponent] }); })();


/***/ }),

/***/ 8211:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/ebom-to-mbom/ebom-to-mbom.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EbomToMbomComponent": () => (/* binding */ EbomToMbomComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _engineering_material_tree_engineering_material_tree_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../engineering-material-tree/engineering-material-tree.component */ 6145);
/* harmony import */ var _manufacturing_material_tree_manufacturing_material_tree_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../manufacturing-material-tree/manufacturing-material-tree.component */ 4131);



class EbomToMbomComponent {
}
EbomToMbomComponent.ɵfac = function EbomToMbomComponent_Factory(t) { return new (t || EbomToMbomComponent)(); };
EbomToMbomComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EbomToMbomComponent, selectors: [["xlm-ebom-to-mbom"]], decls: 10, vars: 0, consts: [[1, "f-row", "f-end"], ["type", "button"], [1, "fonticon", "fonticon-plus", "fonticon-clickable", "active"], [1, "fonticon", "fonticon-attributes-cog", "fonticon-clickable", "active"], [1, "fonticon", "fonticon-popup", "fonticon-clickable", "active"], [1, "f-row"]], template: function EbomToMbomComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "xlm-engineering-material-tree");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "xlm-manufacturing-material-tree");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [_engineering_material_tree_engineering_material_tree_component__WEBPACK_IMPORTED_MODULE_0__.EngineeringMaterialTreeComponent, _manufacturing_material_tree_manufacturing_material_tree_component__WEBPACK_IMPORTED_MODULE_1__.ManufacturingMaterialTreeComponent], styles: [".f-row[_ngcontent-%COMP%] {\n  display: flex;\n}\n\nxlm-engineering-material-tree[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\nxlm-manufacturing-material-tree[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\n.f-end[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}"], changeDetection: 0 });


/***/ }),

/***/ 6145:
/*!****************************************************************************************************!*\
  !*** ./src/app/shared/components/engineering-material-tree/engineering-material-tree.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EngineeringMaterialTreeComponent": () => (/* binding */ EngineeringMaterialTreeComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models */ 3157);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services */ 7253);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _pipes_empty_value_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pipes/empty-value.pipe */ 456);







function EngineeringMaterialTreeComponent_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
  }
}

function EngineeringMaterialTreeComponent_ng_template_26_ng_container_0_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 9);
  }
}

function EngineeringMaterialTreeComponent_ng_template_26_ng_container_0_span_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EngineeringMaterialTreeComponent_ng_template_26_ng_container_0_span_5_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return ctx_r12.toggleChildrenVisibility(item_r6);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function EngineeringMaterialTreeComponent_ng_template_26_ng_container_0_span_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EngineeringMaterialTreeComponent_ng_template_26_ng_container_0_span_6_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17);
      const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return ctx_r15.toggleChildrenVisibility(item_r6);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function EngineeringMaterialTreeComponent_ng_template_26_ng_container_0_ng_container_38_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
  }
}

const _c0 = function (a0, a1) {
  return {
    list: a0,
    depth: a1
  };
};

function EngineeringMaterialTreeComponent_ng_template_26_ng_container_0_ng_container_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, EngineeringMaterialTreeComponent_ng_template_26_ng_container_0_ng_container_38_ng_container_1_Template, 1, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const depth_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().depth;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](27);

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](2, _c0, item_r6.children, depth_r4 + 1));
  }
}

function EngineeringMaterialTreeComponent_ng_template_26_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, EngineeringMaterialTreeComponent_ng_template_26_ng_container_0_span_4_Template, 1, 0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, EngineeringMaterialTreeComponent_ng_template_26_ng_container_0_span_5_Template, 1, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, EngineeringMaterialTreeComponent_ng_template_26_ng_container_0_span_6_Template, 1, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "emptyValue");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "emptyValue");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "emptyValue");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "emptyValue");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](22, "emptyValue");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](25, "emptyValue");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](28, "emptyValue");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](31, "emptyValue");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](34, "emptyValue");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](37, "emptyValue");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](38, EngineeringMaterialTreeComponent_ng_template_26_ng_container_0_ng_container_38_Template, 2, 5, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const depth_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().depth;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r5.createDepthArray(depth_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (item_r6.children == null ? null : item_r6.children.length) && !item_r6.showChildren);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (item_r6.children == null ? null : item_r6.children.length) && item_r6.showChildren);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 14, item_r6.partNumber));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 16, item_r6.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](16, 18, item_r6.class));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](19, 20, item_r6.state));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](22, 22, item_r6.revision));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](25, 24, item_r6.itemStatus));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](28, 26, item_r6.description));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](31, 28, item_r6.quantity));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](34, 30, item_r6.balloonNumber));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](37, 32, item_r6.refDes));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (item_r6.children == null ? null : item_r6.children.length) && item_r6.showChildren);
  }
}

function EngineeringMaterialTreeComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, EngineeringMaterialTreeComponent_ng_template_26_ng_container_0_Template, 39, 34, "ng-container", 3);
  }

  if (rf & 2) {
    const list_r3 = ctx.list;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", list_r3);
  }
}

const _c1 = function (a0) {
  return {
    list: a0,
    depth: 0
  };
};

class EngineeringMaterialTreeComponent {
  constructor(searchService) {
    this.searchService = searchService;
    this.items$ = this.searchService.get().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(materialFlatList => _models__WEBPACK_IMPORTED_MODULE_0__.Heirarchy.toHeirarchy(materialFlatList.ebomNodes, this.sortNodesByNamePredicate)));
  }

  createDepthArray(i) {
    return new Array(i);
  }

  toggleChildrenVisibility(item) {
    item.showChildren = !item.showChildren;
  }

  sortNodesByNamePredicate(a, b) {
    return a.partNumber.localeCompare(b.partNumber);
  }

}

EngineeringMaterialTreeComponent.ɵfac = function EngineeringMaterialTreeComponent_Factory(t) {
  return new (t || EngineeringMaterialTreeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__.SearchService));
};

EngineeringMaterialTreeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: EngineeringMaterialTreeComponent,
  selectors: [["xlm-engineering-material-tree"]],
  decls: 28,
  vars: 6,
  consts: [[1, "table", "table-bordered", "table-hover", "table-striped"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["recursiveListTmpl", ""], [4, "ngFor", "ngForOf"], [1, "fonticon", "fonticon-checkbox-off", "fonticon-clickable", "active"], ["class", "padded", 4, "ngFor", "ngForOf"], ["class", "fonticon fonticon-plus-squared fonticon-clickable active", 3, "click", 4, "ngIf"], ["class", "fonticon fonticon-minus-squared fonticon-clickable active", 3, "click", 4, "ngIf"], [4, "ngIf"], [1, "padded"], [1, "fonticon", "fonticon-plus-squared", "fonticon-clickable", "active", 3, "click"], [1, "fonticon", "fonticon-minus-squared", "fonticon-clickable", "active", 3, "click"]],
  template: function EngineeringMaterialTreeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "table", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "thead");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Part Number");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Class");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "State");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Revision");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Item Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Description");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Qty");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Balloon Number");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Ref. Des.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, EngineeringMaterialTreeComponent_ng_container_24_Template, 1, 0, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](25, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, EngineeringMaterialTreeComponent_ng_template_26_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](27);

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](25, 2, ctx.items$)));
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe, _pipes_empty_value_pipe__WEBPACK_IMPORTED_MODULE_2__.EmptyValuePipe],
  styles: [".padded[_ngcontent-%COMP%] {\n  padding-left: 2em;\n}"],
  changeDetection: 0
});

/***/ }),

/***/ 7667:
/*!********************************************!*\
  !*** ./src/app/shared/components/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EngineeringMaterialTreeComponent": () => (/* reexport safe */ _engineering_material_tree_engineering_material_tree_component__WEBPACK_IMPORTED_MODULE_0__.EngineeringMaterialTreeComponent),
/* harmony export */   "EbomToMbomComponent": () => (/* reexport safe */ _ebom_to_mbom_ebom_to_mbom_component__WEBPACK_IMPORTED_MODULE_1__.EbomToMbomComponent),
/* harmony export */   "ManufacturingMaterialTreeComponent": () => (/* reexport safe */ _manufacturing_material_tree_manufacturing_material_tree_component__WEBPACK_IMPORTED_MODULE_2__.ManufacturingMaterialTreeComponent)
/* harmony export */ });
/* harmony import */ var _engineering_material_tree_engineering_material_tree_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engineering-material-tree/engineering-material-tree.component */ 6145);
/* harmony import */ var _ebom_to_mbom_ebom_to_mbom_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ebom-to-mbom/ebom-to-mbom.component */ 8211);
/* harmony import */ var _manufacturing_material_tree_manufacturing_material_tree_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manufacturing-material-tree/manufacturing-material-tree.component */ 4131);





/***/ }),

/***/ 4131:
/*!********************************************************************************************************!*\
  !*** ./src/app/shared/components/manufacturing-material-tree/manufacturing-material-tree.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManufacturingMaterialTreeComponent": () => (/* binding */ ManufacturingMaterialTreeComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models */ 3157);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services */ 7253);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _pipes_empty_value_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pipes/empty-value.pipe */ 456);







function ManufacturingMaterialTreeComponent_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
  }
}

function ManufacturingMaterialTreeComponent_ng_template_26_ng_container_0_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 9);
  }
}

function ManufacturingMaterialTreeComponent_ng_template_26_ng_container_0_span_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ManufacturingMaterialTreeComponent_ng_template_26_ng_container_0_span_5_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return ctx_r12.toggleChildrenVisibility(item_r6);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function ManufacturingMaterialTreeComponent_ng_template_26_ng_container_0_span_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ManufacturingMaterialTreeComponent_ng_template_26_ng_container_0_span_6_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17);
      const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return ctx_r15.toggleChildrenVisibility(item_r6);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function ManufacturingMaterialTreeComponent_ng_template_26_ng_container_0_ng_container_38_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
  }
}

const _c0 = function (a0, a1) {
  return {
    list: a0,
    depth: a1
  };
};

function ManufacturingMaterialTreeComponent_ng_template_26_ng_container_0_ng_container_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ManufacturingMaterialTreeComponent_ng_template_26_ng_container_0_ng_container_38_ng_container_1_Template, 1, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const depth_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().depth;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](27);

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](2, _c0, item_r6.children, depth_r4 + 1));
  }
}

function ManufacturingMaterialTreeComponent_ng_template_26_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ManufacturingMaterialTreeComponent_ng_template_26_ng_container_0_span_4_Template, 1, 0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ManufacturingMaterialTreeComponent_ng_template_26_ng_container_0_span_5_Template, 1, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ManufacturingMaterialTreeComponent_ng_template_26_ng_container_0_span_6_Template, 1, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "emptyValue");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "emptyValue");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "emptyValue");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "emptyValue");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](22, "emptyValue");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](25, "emptyValue");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](28, "emptyValue");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](31, "emptyValue");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](34, "emptyValue");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](37, "emptyValue");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](38, ManufacturingMaterialTreeComponent_ng_template_26_ng_container_0_ng_container_38_Template, 2, 5, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const depth_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().depth;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r5.createDepthArray(depth_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (item_r6.children == null ? null : item_r6.children.length) && !item_r6.showChildren);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (item_r6.children == null ? null : item_r6.children.length) && item_r6.showChildren);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 14, item_r6.partNumber));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 16, item_r6.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](16, 18, item_r6.class));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](19, 20, item_r6.state));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](22, 22, item_r6.revision));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](25, 24, item_r6.itemStatus));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](28, 26, item_r6.description));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](31, 28, item_r6.quantity));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](34, 30, item_r6.balloonNumber));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](37, 32, item_r6.refDes));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (item_r6.children == null ? null : item_r6.children.length) && item_r6.showChildren);
  }
}

function ManufacturingMaterialTreeComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ManufacturingMaterialTreeComponent_ng_template_26_ng_container_0_Template, 39, 34, "ng-container", 3);
  }

  if (rf & 2) {
    const list_r3 = ctx.list;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", list_r3);
  }
}

const _c1 = function (a0) {
  return {
    list: a0,
    depth: 0
  };
};

class ManufacturingMaterialTreeComponent {
  constructor(searchService) {
    this.searchService = searchService;
    this.items$ = this.searchService.get().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(materialFlatList => _models__WEBPACK_IMPORTED_MODULE_0__.Heirarchy.toHeirarchy(materialFlatList.mbomNodes, this.sortNodesByNamePredicate)));
  }

  createDepthArray(i) {
    return new Array(i);
  }

  toggleChildrenVisibility(item) {
    item.showChildren = !item.showChildren;
  }

  sortNodesByNamePredicate(a, b) {
    return a.partNumber.localeCompare(b.partNumber);
  }

}

ManufacturingMaterialTreeComponent.ɵfac = function ManufacturingMaterialTreeComponent_Factory(t) {
  return new (t || ManufacturingMaterialTreeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__.SearchService));
};

ManufacturingMaterialTreeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ManufacturingMaterialTreeComponent,
  selectors: [["xlm-manufacturing-material-tree"]],
  decls: 28,
  vars: 6,
  consts: [[1, "table", "table-bordered", "table-hover", "table-striped"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["recursiveListTmpl", ""], [4, "ngFor", "ngForOf"], [1, "fonticon", "fonticon-checkbox-off", "fonticon-clickable", "active"], ["class", "padded", 4, "ngFor", "ngForOf"], ["class", "fonticon fonticon-plus-squared fonticon-clickable active", 3, "click", 4, "ngIf"], ["class", "fonticon fonticon-minus-squared fonticon-clickable active", 3, "click", 4, "ngIf"], [4, "ngIf"], [1, "padded"], [1, "fonticon", "fonticon-plus-squared", "fonticon-clickable", "active", 3, "click"], [1, "fonticon", "fonticon-minus-squared", "fonticon-clickable", "active", 3, "click"]],
  template: function ManufacturingMaterialTreeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "table", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "thead");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Part Number");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Class");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "State");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Revision");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Item Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Description");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Qty");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Balloon Number");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Ref. Des.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, ManufacturingMaterialTreeComponent_ng_container_24_Template, 1, 0, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](25, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, ManufacturingMaterialTreeComponent_ng_template_26_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](27);

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](25, 2, ctx.items$)));
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe, _pipes_empty_value_pipe__WEBPACK_IMPORTED_MODULE_2__.EmptyValuePipe],
  styles: [".padded[_ngcontent-%COMP%] {\n  padding-left: 2em;\n}"],
  changeDetection: 0
});

/***/ }),

/***/ 3209:
/*!*******************************************************!*\
  !*** ./src/app/shared/models/engineering-material.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EngineeringMaterial": () => (/* binding */ EngineeringMaterial)
/* harmony export */ });
class EngineeringMaterial {
    constructor(dto) {
        var _a, _b, _c, _d, _e, _f;
        this.partNumber = dto.name;
        this.class = (_a = dto.attributes) === null || _a === void 0 ? void 0 : _a['sc_SandC_Deploy_Ref.sc_Class'];
        this.state = dto.current;
        this.description = (_b = dto.attributes) === null || _b === void 0 ? void 0 : _b['PLMEntity.V_description'];
        this.refDes = (_c = dto.attributes) === null || _c === void 0 ? void 0 : _c['sc_SandC_Deploy_Ins.sc_ReferenceDesignator_Description'];
        this.revision = dto.revision;
        this.quantity = (_d = dto.attributes) === null || _d === void 0 ? void 0 : _d['sc_SandC_Deploy_Ins.sc_Quantity'];
        this.balloonNumber = (_e = dto.attributes) === null || _e === void 0 ? void 0 : _e['sc_SandC_Deploy_Ins.sc_ReferenceDesignator'];
        this.type = dto.type;
        this.itemStatus = (_f = dto.attributes) === null || _f === void 0 ? void 0 : _f['sc_SandC_Deploy_Ref.sc_Itemstatus'];
        this.id = dto.physicalid;
        this.parentId = dto === null || dto === void 0 ? void 0 : dto['from.physicalid'];
    }
}


/***/ }),

/***/ 2042:
/*!****************************************************!*\
  !*** ./src/app/shared/models/heirarchical-item.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 6655:
/*!********************************************!*\
  !*** ./src/app/shared/models/heirarchy.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Heirarchy": () => (/* binding */ Heirarchy)
/* harmony export */ });
class Heirarchy {
    static toHeirarchy(materials, sortPredicate, parentId) {
        if (!(materials === null || materials === void 0 ? void 0 : materials.length)) {
            return [];
        }
        const [rootNodes, leaves] = materials.reduce(([rootNodes, leaves], node) => (node.parentId === parentId ? [[...rootNodes, node], leaves] : [rootNodes, [...leaves, node]]), [[], []]);
        rootNodes.sort(sortPredicate)
            .forEach(rootNode => {
            rootNode.children = this.toHeirarchy(leaves, sortPredicate, rootNode.id)
                .sort(sortPredicate);
            rootNode.showChildren = true;
        });
        return rootNodes;
    }
}


/***/ }),

/***/ 3157:
/*!****************************************!*\
  !*** ./src/app/shared/models/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EngineeringMaterial": () => (/* reexport safe */ _engineering_material__WEBPACK_IMPORTED_MODULE_0__.EngineeringMaterial),
/* harmony export */   "Heirarchy": () => (/* reexport safe */ _heirarchy__WEBPACK_IMPORTED_MODULE_2__.Heirarchy),
/* harmony export */   "ManufacturingMaterial": () => (/* reexport safe */ _manufacturing_material__WEBPACK_IMPORTED_MODULE_3__.ManufacturingMaterial)
/* harmony export */ });
/* harmony import */ var _engineering_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engineering-material */ 3209);
/* harmony import */ var _heirarchical_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./heirarchical-item */ 2042);
/* harmony import */ var _heirarchy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./heirarchy */ 6655);
/* harmony import */ var _manufacturing_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manufacturing-material */ 3941);






/***/ }),

/***/ 3941:
/*!*********************************************************!*\
  !*** ./src/app/shared/models/manufacturing-material.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManufacturingMaterial": () => (/* binding */ ManufacturingMaterial)
/* harmony export */ });
class ManufacturingMaterial {
    constructor(dto) {
        var _a, _b, _c, _d, _e, _f;
        this.partNumber = dto.name;
        this.class = (_a = dto.attributes) === null || _a === void 0 ? void 0 : _a['sc_SandC_Deploy_Ref.sc_Class'];
        this.state = dto.current;
        this.description = (_b = dto.attributes) === null || _b === void 0 ? void 0 : _b['PLMEntity.V_description'];
        this.refDes = (_c = dto.attributes) === null || _c === void 0 ? void 0 : _c['sc_SandC_Deploy_Ins.sc_ReferenceDesignator_Description'];
        this.revision = dto.revision;
        this.quantity = (_d = dto.attributes) === null || _d === void 0 ? void 0 : _d['sc_SandC_Deploy_Ins.sc_Quantity'];
        this.balloonNumber = (_e = dto.attributes) === null || _e === void 0 ? void 0 : _e['sc_SandC_Deploy_Ins.sc_ReferenceDesignator'];
        this.type = dto.type;
        this.itemStatus = (_f = dto.attributes) === null || _f === void 0 ? void 0 : _f['sc_SandC_Deploy_Ref.sc_Itemstatus'];
        this.id = dto.physicalid;
        this.parentId = dto === null || dto === void 0 ? void 0 : dto['from.physicalid'];
    }
}


/***/ }),

/***/ 456:
/*!**************************************************!*\
  !*** ./src/app/shared/pipes/empty-value.pipe.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmptyValuePipe": () => (/* binding */ EmptyValuePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class EmptyValuePipe {
    transform(value) {
        return value ? value : '--';
    }
}
EmptyValuePipe.ɵfac = function EmptyValuePipe_Factory(t) { return new (t || EmptyValuePipe)(); };
EmptyValuePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "emptyValue", type: EmptyValuePipe, pure: true });


/***/ }),

/***/ 9843:
/*!***************************************!*\
  !*** ./src/app/shared/pipes/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmptyValuePipe": () => (/* reexport safe */ _empty_value_pipe__WEBPACK_IMPORTED_MODULE_0__.EmptyValuePipe)
/* harmony export */ });
/* harmony import */ var _empty_value_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./empty-value.pipe */ 456);



/***/ }),

/***/ 7253:
/*!******************************************!*\
  !*** ./src/app/shared/services/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchService": () => (/* reexport safe */ _search_service__WEBPACK_IMPORTED_MODULE_0__.SearchService)
/* harmony export */ });
/* harmony import */ var _search_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.service */ 3763);



/***/ }),

/***/ 3763:
/*!***************************************************!*\
  !*** ./src/app/shared/services/search.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchService": () => (/* binding */ SearchService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5917);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models */ 3157);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 1841);





class SearchService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    get() {
        return this.httpClient
            .get('/assets/search.json')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)({
            "uitype": [
                {
                    "leftUI": "EBOM",
                    "nodes": [
                        {
                            "owner": "alexander.shpigelsky",
                            "physicalid": "568C217F0000811060F1153E0000000A",
                            "level": "0",
                            "type": "VPMReference",
                            "revision": "0.1",
                            "name": "MEA-1595681-302-357",
                            "current": "PRIVATE",
                            "attributes": {
                                "PLMEntity.V_Name": "attribute[PLMEntity.V_Name]",
                                "PLMEntity.V_description": "Test 0012"
                            },
                            "nodeid": 0
                        },
                        {
                            "owner": "alexander.shpigelsky",
                            "physicalid": "568C217F000067C060F39154000006C0",
                            "level": "1",
                            "type": "VPMReference",
                            "revision": "0.7",
                            "name": "C-762-358",
                            "current": "PRIVATE",
                            "attributes": {
                                "PLMEntity.V_Name": "C-762-358",
                                "PLMReference.V_DerivedFrom": "",
                                "PLMEntity.V_description": "",
                                "Quantity": "1"
                            },
                            "nodeid": 1,
                            "from.physicalid": "568C217F0000811060F1153E0000000A",
                            "physicalid[connection]": "568C217F000067C060F3915500000788"
                        },
                        {
                            "owner": "alexander.shpigelsky",
                            "physicalid": "568C217F000067C060F39155000007E2",
                            "level": "1",
                            "type": "VPMReference",
                            "name": "1340-206-358",
                            "revision": "0.0",
                            "current": "PRIVATE",
                            "attributes": {
                                "PLMEntity.V_Name": "1340-206-358",
                                "PLMReference.V_DerivedFrom": "",
                                "PLMEntity.V_description": "",
                                "Quantity": "2"
                            },
                            "nodeid": 2,
                            "from.physicalid": "568C217F0000811060F1153E0000000A",
                            "physicalid[connection]": "568C217F000067C060F39155000008AA"
                        },
                        {
                            "owner": "alexander.shpigelsky",
                            "physicalid": "568C217F000067C060F3915500000904",
                            "level": "1",
                            "type": "VPMReference",
                            "name": "CD-1133-358",
                            "revision": "0.5",
                            "current": "PRIVATE",
                            "attributes": {
                                "PLMEntity.V_Name": "CD-1133-358",
                                "PLMReference.V_DerivedFrom": "",
                                "PLMEntity.V_description": "",
                                "Quantity": "1"
                            },
                            "nodeid": 3,
                            "from.physicalid": "568C217F0000811060F1153E0000000A",
                            "physicalid[connection]": "568C217F000067C060F39156000009CC"
                        },
                        {
                            "owner": "alexander.shpigelsky",
                            "physicalid": "568C217F000067C060F3915600000A28",
                            "level": "1",
                            "type": "VPMReference",
                            "name": "CVU-1719-2-357",
                            "revision": "0.4",
                            "current": "PRIVATE",
                            "attributes": {
                                "PLMEntity.V_Name": "CVU-1719-2-357",
                                "PLMReference.V_DerivedFrom": "",
                                "PLMEntity.V_description": "",
                                "Quantity": "1"
                            },
                            "nodeid": 4,
                            "from.physicalid": "568C217F0000811060F1153E0000000A",
                            "physicalid[connection]": "568C217F000067C060F3915700000AF0"
                        },
                        {
                            "owner": "alexander.shpigelsky",
                            "physicalid": "568C217F000067C060F3915700000B46",
                            "level": "1",
                            "type": "VPMReference",
                            "revision": "0.1",
                            "name": "CDT-6261-360",
                            "current": "PRIVATE",
                            "attributes": {
                                "PLMEntity.V_Name": "CDT-6261-360",
                                "PLMReference.V_DerivedFrom": "",
                                "PLMEntity.V_description": "",
                                "Quantity": "2"
                            },
                            "nodeid": 5,
                            "from.physicalid": "568C217F0000811060F1153E0000000A",
                            "physicalid[connection]": "568C217F000067C060F3915700000C0E"
                        },
                        {
                            "owner": "alexander.shpigelsky",
                            "physicalid": "568C217F000067C060F3915800000C64",
                            "level": "1",
                            "type": "VPMReference",
                            "revision": "0.2",
                            "name": "CDAT-1670-357",
                            "current": "PRIVATE",
                            "attributes": {
                                "PLMEntity.V_Name": "CDAT-1670-357",
                                "PLMReference.V_DerivedFrom": "",
                                "PLMEntity.V_description": "",
                                "Quantity": "1"
                            },
                            "nodeid": 6,
                            "from.physicalid": "568C217F0000811060F1153E0000000A",
                            "physicalid[connection]": "568C217F000067C060F3915800000D2C"
                        },
                        {
                            "owner": "alexander.shpigelsky",
                            "physicalid": "568C217F000067C060F3915800000D76",
                            "level": "1",
                            "type": "VPMReference",
                            "name": "CD-2340-AA3-358",
                            "revision": "0.0",
                            "current": "PRIVATE",
                            "attributes": {
                                "PLMEntity.V_Name": "CD-2340-AA3-358",
                                "PLMReference.V_DerivedFrom": "",
                                "PLMEntity.V_description": "",
                                "Quantity": "2"
                            },
                            "nodeid": 7,
                            "from.physicalid": "568C217F0000811060F1153E0000000A",
                            "physicalid[connection]": "568C217F000067C060F3915900000E3E"
                        },
                        {
                            "owner": "alexander.shpigelsky",
                            "physicalid": "568C217F000067C060F3915900000E98",
                            "level": "1",
                            "type": "VPMReference",
                            "name": "TR-20223-358",
                            "revision": "0.0",
                            "current": "PRIVATE",
                            "attributes": {
                                "PLMEntity.V_Name": "TR-20223-358",
                                "PLMReference.V_DerivedFrom": "",
                                "PLMEntity.V_description": "",
                                "Quantity": "1"
                            },
                            "nodeid": 8,
                            "from.physicalid": "568C217F0000811060F1153E0000000A",
                            "physicalid[connection]": "568C217F000067C060F3915A00000F60"
                        },
                        {
                            "owner": "alexander.shpigelsky",
                            "physicalid": "568C217F000067C060F3915000000118",
                            "level": "1",
                            "type": "VPMReference",
                            "name": "1323-228-358",
                            "revision": "0.0",
                            "current": "PRIVATE",
                            "attributes": {
                                "PLMEntity.V_Name": "1323-228-358",
                                "PLMReference.V_DerivedFrom": "",
                                "PLMEntity.V_description": "",
                                "Quantity": "2"
                            },
                            "nodeid": 9,
                            "from.physicalid": "568C217F0000811060F1153E0000000A",
                            "physicalid[connection]": "568C217F000067C060F39151000001E0"
                        },
                        {
                            "owner": "alexander.shpigelsky",
                            "physicalid": "568C217F000067C060F3915100000236",
                            "level": "1",
                            "type": "VPMReference",
                            "name": "1323-824-358",
                            "revision": "0.0",
                            "current": "PRIVATE",
                            "attributes": {
                                "PLMEntity.V_Name": "1323-824-358",
                                "PLMReference.V_DerivedFrom": "",
                                "PLMEntity.V_description": "",
                                "Quantity": "1"
                            },
                            "nodeid": 10,
                            "from.physicalid": "568C217F0000811060F1153E0000000A",
                            "physicalid[connection]": "568C217F000067C060F39151000002FE"
                        },
                        {
                            "owner": "alexander.shpigelsky",
                            "physicalid": "568C217F000067C060F3915200000354",
                            "level": "1",
                            "type": "VPMReference",
                            "name": "1323-052-358",
                            "revision": "0.0",
                            "current": "PRIVATE",
                            "attributes": {
                                "PLMEntity.V_Name": "1323-052-358",
                                "PLMReference.V_DerivedFrom": "",
                                "PLMEntity.V_description": "",
                                "Quantity": "1"
                            },
                            "nodeid": 11,
                            "from.physicalid": "568C217F0000811060F1153E0000000A",
                            "physicalid[connection]": "568C217F000067C060F391520000041C"
                        },
                        {
                            "owner": "alexander.shpigelsky",
                            "physicalid": "568C217F000067C060F3915200000478",
                            "level": "1",
                            "type": "VPMReference",
                            "name": "CD-1163-358",
                            "revision": "0.0",
                            "current": "PRIVATE",
                            "attributes": {
                                "PLMEntity.V_Name": "CD-1163-358",
                                "PLMReference.V_DerivedFrom": "",
                                "PLMEntity.V_description": "",
                                "Quantity": "1"
                            },
                            "nodeid": 12,
                            "from.physicalid": "568C217F0000811060F1153E0000000A",
                            "physicalid[connection]": "568C217F000067C060F3915300000540"
                        },
                        {
                            "owner": "alexander.shpigelsky",
                            "physicalid": "568C217F000067C060F391530000059C",
                            "level": "1",
                            "type": "VPMReference",
                            "name": "1040-208-358",
                            "revision": "0.0",
                            "current": "PRIVATE",
                            "attributes": {
                                "PLMEntity.V_Name": "1040-208-358",
                                "PLMReference.V_DerivedFrom": "",
                                "PLMEntity.V_description": "",
                                "Quantity": "1"
                            },
                            "nodeid": 13,
                            "from.physicalid": "568C217F0000811060F1153E0000000A",
                            "physicalid[connection]": "568C217F000067C060F3915400000664"
                        },
                        {
                            "owner": "alexander.shpigelsky",
                            "physicalid": "568C217F000067C060F3915A00000FB8",
                            "level": "1",
                            "type": "VPMReference",
                            "name": "CD-6726-360",
                            "revision": "0.0",
                            "current": "PRIVATE",
                            "attributes": {
                                "PLMEntity.V_Name": "CD-6726-360",
                                "PLMReference.V_DerivedFrom": "",
                                "PLMEntity.V_description": "",
                                "Quantity": "2"
                            },
                            "nodeid": 14,
                            "from.physicalid": "568C217F0000811060F1153E0000000A",
                            "physicalid[connection]": "568C217F000067C060F3915A00001080"
                        },
                        {
                            "owner": "alexander.shpigelsky",
                            "physicalid": "568C217F000067C060F3915B000010D6",
                            "level": "1",
                            "type": "VPMReference",
                            "name": "MEW-1595681-302-357",
                            "revision": "0.0",
                            "current": "PRIVATE",
                            "attributes": {
                                "PLMEntity.V_Name": "MEW-1595681-302-357",
                                "PLMReference.V_DerivedFrom": "",
                                "PLMEntity.V_description": "",
                                "Quantity": "1"
                            },
                            "nodeid": 15,
                            "from.physicalid": "568C217F0000811060F1153E0000000A",
                            "physicalid[connection]": "568C217F000067C060F3915B0000119E"
                        }
                    ]
                },
                {
                    "nodes": [
                        {
                            "owner": "alexander.shpigelsky",
                            "physicalid": "568C217F0000536860F393EB00001D3C",
                            "level": "0",
                            "type": "sc_CHI",
                            "name": "MEA-1595681-302-357",
                            "revision": "000.1",
                            "current": "IN_WORK",
                            "attributes": {
                                "PLMEntity.V_Name": "attribute[PLMEntity.V_Name]",
                                "sc_SandC_Deploy_Ref.sc_Class": "attribute[sc_SandC_Deploy_Ref.sc_Class]",
                                "sc_SandC_Deploy_Ref.sc_Itemstatus": "attribute[sc_SandC_Deploy_Ref.sc_Itemstatus]",
                                "PLMEntity.V_description": "TEST SEARCH API"
                            },
                            "nodeid": 0
                        },
                        {
                            "owner": "alexander.shpigelsky",
                            "physicalid": "568C217F0000849C60F64FCB00000114",
                            "level": "1",
                            "type": "sc_CHI",
                            "name": "C-762-358",
                            "revision": "000.1",
                            "current": "IN_WORK",
                            "attributes": {
                                "PLMEntity.V_Name": "C-762-358",
                                "PLMReference.V_DerivedFrom": "",
                                "PLMEntity.V_description": "C-762-358 TEST",
                                "sc_SandC_Deploy_Ins.sc_Quantity": "1",
                                "sc_SandC_Deploy_Ins.sc_ReferenceDesignator_Description": "test ref desc",
                                "sc_SandC_Deploy_Ins.sc_ReferenceDesignator": "001",
                                "sc_SandC_Deploy_Ins.sc_Min": "1",
                                "sc_SandC_Deploy_Ins.sc_Max": "3",
                                "sc_SandC_Deploy_Ref.sc_Class": "Component",
                                "sc_SandC_Deploy_Ref.sc_Itemstatus": "Production"
                            },
                            "nodeid": 1,
                            "from.physicalid": "568C217F0000536860F393EB00001D3C",
                            "physicalid[connection]": "568C217F0000849C60F64FCE000001AE"
                        },
                        {
                            "owner": "alexander.shpigelsky",
                            "physicalid": "568C217F0000849C60F64FF70000020E",
                            "level": "1",
                            "type": "sc_CHI",
                            "name": "CVU-1719-2-357",
                            "revision": "000.1",
                            "current": "IN_WORK",
                            "attributes": {
                                "PLMEntity.V_Name": "CVU-1719-2-357",
                                "PLMReference.V_DerivedFrom": "",
                                "PLMEntity.V_description": "CVU-1719-2-357 TEST...",
                                "sc_SandC_Deploy_Ins.sc_Quantity": "1",
                                "sc_SandC_Deploy_Ins.sc_ReferenceDesignator_Description": "test ref desc",
                                "sc_SandC_Deploy_Ins.sc_ReferenceDesignator": "001",
                                "sc_SandC_Deploy_Ins.sc_Min": "1",
                                "sc_SandC_Deploy_Ins.sc_Max": "1",
                                "sc_SandC_Deploy_Ref.sc_Class": "Component",
                                "sc_SandC_Deploy_Ref.sc_Itemstatus": "Production"
                            },
                            "nodeid": 2,
                            "from.physicalid": "568C217F0000536860F393EB00001D3C",
                            "physicalid[connection]": "568C217F0000849C60F64FFA000002A8"
                        },
                        {
                            "owner": "alexander.shpigelsky",
                            "physicalid": "568C217F0000849C60F6501F00000308",
                            "level": "1",
                            "type": "sc_CHI",
                            "name": "CD-2340-AA3-358",
                            "revision": "000.1",
                            "current": "IN_WORK",
                            "attributes": {
                                "PLMEntity.V_Name": "CD-2340-AA3-358",
                                "PLMReference.V_DerivedFrom": "",
                                "PLMEntity.V_description": "CD-2340-AA3-358 TEST..",
                                "sc_SandC_Deploy_Ins.sc_Quantity": "1",
                                "sc_SandC_Deploy_Ins.sc_ReferenceDesignator_Description": "test ref desc",
                                "sc_SandC_Deploy_Ins.sc_ReferenceDesignator": "001",
                                "sc_SandC_Deploy_Ins.sc_Min": "1",
                                "sc_SandC_Deploy_Ins.sc_Max": "3",
                                "sc_SandC_Deploy_Ref.sc_Class": "Component",
                                "sc_SandC_Deploy_Ref.sc_Itemstatus": "Production"
                            },
                            "nodeid": 3,
                            "from.physicalid": "568C217F0000536860F393EB00001D3C",
                            "physicalid[connection]": "568C217F0000849C60F65022000003A2"
                        },
                        {
                            "owner": "alexander.shpigelsky",
                            "physicalid": "568C217F0000849C60F64FA900000018",
                            "level": "1",
                            "type": "sc_CHI",
                            "name": "1340-206-358",
                            "revision": "000.1",
                            "current": "IN_WORK",
                            "attributes": {
                                "PLMEntity.V_Name": "1340-206-358",
                                "PLMReference.V_DerivedFrom": "",
                                "PLMEntity.V_description": "TEST12",
                                "sc_SandC_Deploy_Ins.sc_Quantity": "1",
                                "sc_SandC_Deploy_Ins.sc_ReferenceDesignator_Description": "test ref desc",
                                "sc_SandC_Deploy_Ins.sc_ReferenceDesignator": "001",
                                "sc_SandC_Deploy_Ins.sc_Min": "1",
                                "sc_SandC_Deploy_Ins.sc_Max": "3",
                                "sc_SandC_Deploy_Ref.sc_Class": "Component",
                                "sc_SandC_Deploy_Ref.sc_Itemstatus": "Production"
                            },
                            "nodeid": 4,
                            "from.physicalid": "568C217F0000536860F393EB00001D3C",
                            "physicalid[connection]": "568C217F0000849C60F64FAE000000B4"
                        },
                        {
                            "owner": "alexander.shpigelsky",
                            "physicalid": "568C217F0000849C60F6503800000402",
                            "level": "1",
                            "type": "sc_CHI",
                            "name": "MEW-1595681-302-357",
                            "revision": "000.1",
                            "current": "IN_WORK",
                            "attributes": {
                                "PLMEntity.V_Name": "MEW-1595681-302-357",
                                "PLMReference.V_DerivedFrom": "",
                                "PLMEntity.V_description": "MEW-1595681-302-357 TEST....",
                                "sc_SandC_Deploy_Ins.sc_Quantity": "1",
                                "sc_SandC_Deploy_Ins.sc_ReferenceDesignator_Description": "test ref desc",
                                "sc_SandC_Deploy_Ins.sc_ReferenceDesignator": "002",
                                "sc_SandC_Deploy_Ins.sc_Min": "1",
                                "sc_SandC_Deploy_Ins.sc_Max": "3",
                                "sc_SandC_Deploy_Ref.sc_Class": "Component",
                                "sc_SandC_Deploy_Ref.sc_Itemstatus": "Production"
                            },
                            "nodeid": 5,
                            "from.physicalid": "568C217F0000536860F393EB00001D3C",
                            "physicalid[connection]": "568C217F0000849C60F6503B0000049C"
                        },
                        {
                            "owner": "alexander.shpigelsky",
                            "physicalid": "568C217F0000536860F3946700001EFC",
                            "level": "1",
                            "type": "sc_CHI",
                            "name": "1323-824-358",
                            "revision": "000.1",
                            "current": "IN_WORK",
                            "attributes": {
                                "PLMEntity.V_Name": "1323-824-358",
                                "PLMReference.V_DerivedFrom": "",
                                "PLMEntity.V_description": "TEST SEARCH API",
                                "sc_SandC_Deploy_Ins.sc_Quantity": "2",
                                "sc_SandC_Deploy_Ins.sc_ReferenceDesignator_Description": "test ref desc",
                                "sc_SandC_Deploy_Ins.sc_ReferenceDesignator": "001",
                                "sc_SandC_Deploy_Ins.sc_Min": "1",
                                "sc_SandC_Deploy_Ins.sc_Max": "1",
                                "sc_SandC_Deploy_Ref.sc_Class": "Component",
                                "sc_SandC_Deploy_Ref.sc_Itemstatus": "Production"
                            },
                            "nodeid": 6,
                            "from.physicalid": "568C217F0000536860F393EB00001D3C",
                            "physicalid[connection]": "568C217F0000536860F3946A00001F96"
                        },
                        {
                            "owner": "alexander.shpigelsky",
                            "physicalid": "568C217F0000536860F3949200001FF6",
                            "level": "1",
                            "type": "sc_CHI",
                            "name": "1040-208-358",
                            "revision": "000.1",
                            "current": "IN_WORK",
                            "attributes": {
                                "PLMEntity.V_Name": "1040-208-358",
                                "PLMReference.V_DerivedFrom": "",
                                "PLMEntity.V_description": "TEST SEARCH API",
                                "sc_SandC_Deploy_Ins.sc_Quantity": "2",
                                "sc_SandC_Deploy_Ins.sc_ReferenceDesignator_Description": "test ref desc",
                                "sc_SandC_Deploy_Ins.sc_ReferenceDesignator": "001",
                                "sc_SandC_Deploy_Ins.sc_Min": "1",
                                "sc_SandC_Deploy_Ins.sc_Max": "2",
                                "sc_SandC_Deploy_Ref.sc_Class": "Component",
                                "sc_SandC_Deploy_Ref.sc_Itemstatus": "Production"
                            },
                            "nodeid": 7,
                            "from.physicalid": "568C217F0000536860F393EB00001D3C",
                            "physicalid[connection]": "568C217F0000536860F3949500002090"
                        },
                        {
                            "owner": "alexander.shpigelsky",
                            "physicalid": "568C217F0000536860F3942600001DF2",
                            "level": "1",
                            "type": "sc_CHI",
                            "name": "DRW-MEA-1595681-302-357",
                            "revision": "000.1",
                            "current": "IN_WORK",
                            "attributes": {
                                "PLMEntity.V_Name": "DRW-MEA-1595681-302-357",
                                "PLMReference.V_DerivedFrom": "",
                                "PLMEntity.V_description": "TEST SEARCH API",
                                "sc_SandC_Deploy_Ins.sc_Quantity": "---",
                                "sc_SandC_Deploy_Ins.sc_ReferenceDesignator_Description": "---",
                                "sc_SandC_Deploy_Ins.sc_ReferenceDesignator": "---",
                                "sc_SandC_Deploy_Ref.sc_Class": "Document",
                                "sc_SandC_Deploy_Ref.sc_Itemstatus": "Production"
                            },
                            "nodeid": 8,
                            "from.physicalid": "568C217F0000536860F393EB00001D3C",
                            "physicalid[connection]": "568C217F0000536860F3942900001E9C"
                        },
                        {
                            "owner": "alexander.shpigelsky",
                            "physicalid": "568C217F0000536860F394B7000020F0",
                            "level": "1",
                            "type": "sc_CHI",
                            "name": "CD-1133-358",
                            "revision": "000.1",
                            "current": "IN_WORK",
                            "attributes": {
                                "PLMEntity.V_Name": "CD-1133-358",
                                "PLMReference.V_DerivedFrom": "",
                                "PLMEntity.V_description": "TEST SEARCH API",
                                "sc_SandC_Deploy_Ins.sc_Quantity": "1",
                                "sc_SandC_Deploy_Ins.sc_ReferenceDesignator_Description": "test ref desc",
                                "sc_SandC_Deploy_Ins.sc_ReferenceDesignator": "001",
                                "sc_SandC_Deploy_Ins.sc_Min": "1",
                                "sc_SandC_Deploy_Ins.sc_Max": "3",
                                "sc_SandC_Deploy_Ref.sc_Class": "Component",
                                "sc_SandC_Deploy_Ref.sc_Itemstatus": "Production"
                            },
                            "nodeid": 9,
                            "from.physicalid": "568C217F0000536860F393EB00001D3C",
                            "physicalid[connection]": "568C217F0000536860F394BA0000218A"
                        }
                    ],
                    "rightUI": "MBOM"
                }
            ]
        })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(searchResults => {
            const ebom = searchResults.uitype.find((t) => !!t.leftUI);
            const mbom = searchResults.uitype.find((t) => !!t.rightUI);
            return {
                ebomNodes: ebom.nodes.map(node => new _models__WEBPACK_IMPORTED_MODULE_0__.EngineeringMaterial(node)),
                mbomNodes: mbom.nodes.map(node => new _models__WEBPACK_IMPORTED_MODULE_0__.ManufacturingMaterial(node))
            };
        })
        // map(ebom => ebom.nodes.map(node => new EngineeringMaterial(node))),
        );
    }
}
SearchService.ɵfac = function SearchService_Factory(t) { return new (t || SearchService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient)); };
SearchService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: SearchService, factory: SearchService.ɵfac });


/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ 7667);
/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pipes */ 9843);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services */ 7253);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);







// https://javascript.plainenglish.io/creating-web-component-with-angular-element-angular-11-1c53be854a07
class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [
        _services__WEBPACK_IMPORTED_MODULE_2__.SearchService
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule
        ], _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components__WEBPACK_IMPORTED_MODULE_0__.EbomToMbomComponent,
        _components__WEBPACK_IMPORTED_MODULE_0__.EngineeringMaterialTreeComponent,
        _components__WEBPACK_IMPORTED_MODULE_0__.ManufacturingMaterialTreeComponent,
        _pipes__WEBPACK_IMPORTED_MODULE_1__.EmptyValuePipe], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule], exports: [_components__WEBPACK_IMPORTED_MODULE_0__.EbomToMbomComponent,
        _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule] }); })();


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(1787)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);