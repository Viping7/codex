(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-new/add-new.component.html":
/*!************************************************!*\
  !*** ./src/app/add-new/add-new.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-modal>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\" id=\"modal-basic-title\">Profile update</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <form>\n        <div class=\"form-group\">\n          <label for=\"dateOfBirth\">Date of birth</label>\n          <div class=\"input-group\">\n            <input id=\"dateOfBirth\" class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" ngbDatepicker #dp=\"ngbDatepicker\">\n            <div class=\"input-group-append\">\n              <button class=\"btn btn-outline-secondary calendar\" (click)=\"dp.toggle()\" type=\"button\"></button>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('Save click')\">Save</button>\n    </div>\n  </ng-template>\n  \n  <button class=\"btn btn-lg btn-outline-primary\" (click)=\"open(content)\">Launch demo modal</button>\n  \n  <hr>\n  \n  <pre>{{closeResult}}</pre>"

/***/ }),

/***/ "./src/app/add-new/add-new.component.scss":
/*!************************************************!*\
  !*** ./src/app/add-new/add-new.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1uZXcvYWRkLW5ldy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/add-new/add-new.component.ts":
/*!**********************************************!*\
  !*** ./src/app/add-new/add-new.component.ts ***!
  \**********************************************/
/*! exports provided: AddNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewComponent", function() { return AddNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



var AddNewComponent = /** @class */ (function () {
    function AddNewComponent(modalService) {
        this.modalService = modalService;
    }
    AddNewComponent.prototype.ngOnInit = function () {
    };
    AddNewComponent.prototype.open = function (content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
        }, function (reason) {
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddNewComponent.prototype, "openModal", void 0);
    AddNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-new',
            template: __webpack_require__(/*! ./add-new.component.html */ "./src/app/add-new/add-new.component.html"),
            styles: [__webpack_require__(/*! ./add-new.component.scss */ "./src/app/add-new/add-new.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], AddNewComponent);
    return AddNewComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _element_element_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./element/element.component */ "./src/app/element/element.component.ts");





var routes = [
    {
        path: "",
        pathMatch: 'full',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
    },
    {
        path: "component/:id",
        component: _element_element_component__WEBPACK_IMPORTED_MODULE_4__["ElementComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'CodeX';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _element_element_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./element/element.component */ "./src/app/element/element.component.ts");
/* harmony import */ var _add_new_add_new_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./add-new/add-new.component */ "./src/app/add-new/add-new.component.ts");
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-dropzone */ "./node_modules/ngx-dropzone/fesm5/ngx-dropzone.js");
/* harmony import */ var ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-dropzone-wrapper */ "./node_modules/ngx-dropzone-wrapper/dist/ngx-dropzone-wrapper.es5.js");















var DEFAULT_DROPZONE_CONFIG = {
    // Change this to your upload POST address:
    url: 'http://localhost:5000/saveFiles',
    maxFilesize: 50,
    acceptedFiles: 'application/zip'
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _element_element_component__WEBPACK_IMPORTED_MODULE_10__["ElementComponent"],
                _add_new_add_new_component__WEBPACK_IMPORTED_MODULE_11__["AddNewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                ngx_dropzone__WEBPACK_IMPORTED_MODULE_12__["NgxDropzoneModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_13__["DropzoneModule"]
            ],
            providers: [
                {
                    provide: ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_13__["DROPZONE_CONFIG"],
                    useValue: DEFAULT_DROPZONE_CONFIG
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1 class=\"heading pull-left\">Components</h1>\n  <div class=\"add-new pull-right\" (click)=\"open(content)\">+</div>\n  <div class=\"clear\"></div>\n  <div class=\"row\">\n    <div class=\"col-md-3\" *ngFor='let component of components' (click)=\"navigate(component._id)\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <h3>{{component.name}}</h3>\n          <p>{{component.description}}</p>\n          <button class=\"btn btn-custom\">View</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<ng-template #content let-modal >\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\" id=\"modal-basic-title\">Add Component</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label for=\"name\">Name</label>\n            <input id=\"name\" class=\"form-control\" placeholder=\"\" name=\"name\" [(ngModel)]=\"newComponent.name\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"desc\">Description</label>\n              <textarea id=\"desc\" class=\"form-control\" placeholder=\"\" name=\"desc\" [(ngModel)]=\"newComponent.description\"></textarea>\n          </div>\n    </div>\n    <div class=\"col-md-6\">\n      <dropzone [config]=\"config\" (success)=\"onUploadSucess($event)\" [message]=\"'Click or drag images here to upload'\"></dropzone>\n\n    </div>\n  </div>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-custom\" (click)=\"uploadAndParseFiles()\">Upload and Convert</button>\n    </div>\n  </ng-template>\n  \n  \n  <hr>\n  \n  <pre>{{closeResult}}</pre>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".heading {\n  height: 33px;\n  width: 154px;\n  font-size: 25px;\n  line-height: 33px;\n  color: #0CC9B3;\n  font-size: 25px;\n  margin-bottom: 30px;\n  width: 60%;\n  float: left; }\n\n.card {\n  margin-top: 20px; }\n\n.add-new {\n  float: right;\n  width: 40px;\n  height: 40px;\n  background: #0CC9B3;\n  color: #fff;\n  border-radius: 100px;\n  text-align: center;\n  font-size: 35px;\n  line-height: 40px;\n  transition: 0.2s all; }\n\n.add-new:hover {\n    background: #fff;\n    color: #0CC9B3;\n    cursor: pointer; }\n\n.card {\n  border: 1px solid transparent;\n  transition: 0.2s all;\n  cursor: pointer; }\n\n.card h3 {\n    margin-top: 0px;\n    color: rgba(255, 255, 255, 0.65);\n    font-size: 16px;\n    line-height: 26px; }\n\n.card p {\n    min-height: 38px;\n    font-size: 13px;\n    color: rgba(255, 255, 255, 0.65); }\n\n.card .btn-custom {\n    margin-top: 8px; }\n\n.card:hover {\n    border: 1px solid #0CC9B3; }\n\n.card:hover h3, .card:hover p {\n      color: rgba(255, 255, 255, 0.65); }\n\n.card:hover .btn-custom {\n      background: #0CC9B3;\n      color: #fff; }\n\nlabel {\n  color: rgba(255, 255, 255, 0.65); }\n\ntextarea {\n  height: 100px; }\n\n.form-control {\n  border: 1px solid rgba(255, 255, 255, 0.65);\n  background: none;\n  border-radius: 0px;\n  color: rgba(255, 255, 255, 0.65);\n  resize: none; }\n\n.form-control:focus {\n    outline: none !important;\n    box-shadow: none !important;\n    border-color: #0CC9B3; }\n\n.modal-footer .btn {\n  display: table;\n  margin: 0 auto; }\n\n.drop-area {\n  background: #1C312D;\n  height: 190px;\n  margin-top: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpcGluL3Byb2plY3RzL2NvZGV4L2NsaWVudC9zcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFdBQVcsRUFBQTs7QUFFYjtFQUNFLGdCQUFnQixFQUFBOztBQUVsQjtFQUNJLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG9CQUFvQixFQUFBOztBQVYxQjtJQVlVLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZUFBZSxFQUFBOztBQUd6QjtFQUNFLDZCQUE0QjtFQUM1QixvQkFBb0I7RUFDcEIsZUFBZSxFQUFBOztBQUhqQjtJQUtRLGVBQWU7SUFDYixnQ0FBNkI7SUFDN0IsZUFBZTtJQUNmLGlCQUFpQixFQUFBOztBQVIzQjtJQVlNLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0NBQTZCLEVBQUE7O0FBZG5DO0lBa0JRLGVBQWUsRUFBQTs7QUFsQnZCO0lBcUJRLHlCQUF3QixFQUFBOztBQXJCaEM7TUF1QlUsZ0NBQTZCLEVBQUE7O0FBdkJ2QztNQTBCVSxtQkFBbUI7TUFDbkIsV0FBVyxFQUFBOztBQUl2QjtFQUNJLGdDQUE2QixFQUFBOztBQUVqQztFQUNFLGFBQWEsRUFBQTs7QUFFZjtFQUNJLDJDQUF3QztFQUN4QyxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdDQUE2QjtFQUM3QixZQUFZLEVBQUE7O0FBTGhCO0lBT1Esd0JBQXdCO0lBQ3hCLDJCQUEyQjtJQUMzQixxQkFBcUIsRUFBQTs7QUFHN0I7RUFFUSxjQUFjO0VBQ2QsY0FBYyxFQUFBOztBQUd0QjtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRpbmcge1xuICAgIGhlaWdodDogMzNweDtcbiAgICB3aWR0aDogMTU0cHg7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzM3B4O1xuICAgIGNvbG9yOiAjMENDOUIzO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIHdpZHRoOiA2MCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cbiAgLmNhcmR7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxuICAuYWRkLW5ld3tcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgYmFja2dyb3VuZDogIzBDQzlCMztcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgIHRyYW5zaXRpb246IDAuMnMgYWxsO1xuICAgICAgICAmOmhvdmVye1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgIGNvbG9yOiAjMENDOUIzO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gIH1cbiAgLmNhcmR7XG4gICAgYm9yZGVyOjFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGFsbDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBoM3tcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjY1KTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4OyAgXG4gICAgICAgICAgICBcbiAgICAgIH1cbiAgICAgIHB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDM4cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC42NSk7XG5cbiAgICAgIH1cbiAgICAgIC5idG4tY3VzdG9te1xuICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgIH1cbiAgICAgICY6aG92ZXJ7XG4gICAgICAgICAgYm9yZGVyOjFweCBzb2xpZCAjMENDOUIzO1xuICAgICAgICAgIGgzLHB7XG4gICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjY1KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJ0bi1jdXN0b217XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMENDOUIzO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgfVxuICAgICAgfVxuICB9XG5sYWJlbHtcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjY1KVxufVxudGV4dGFyZWF7XG4gIGhlaWdodDogMTAwcHg7XG59XG4uZm9ybS1jb250cm9se1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC42NSk7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC42NSk7XG4gICAgcmVzaXplOiBub25lO1xuICAgICY6Zm9jdXN7XG4gICAgICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXItY29sb3I6ICMwQ0M5QjM7XG4gICAgfVxufVxuLm1vZGFsLWZvb3RlcntcbiAgICAuYnRue1xuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxufVxuLmRyb3AtYXJlYXtcbiAgYmFja2dyb3VuZDogIzFDMzEyRDtcbiAgaGVpZ2h0OiAxOTBweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/rest.service */ "./src/services/rest.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(restService, router, modalService) {
        this.restService = restService;
        this.router = router;
        this.modalService = modalService;
        this.components = [];
        this.newComponent = {
            name: "",
            description: ""
        };
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getComponents();
        this.formData = new FormData();
    };
    DashboardComponent.prototype.getComponents = function () {
        var _this = this;
        this.restService.getComponents().subscribe(function (component) {
            _this.components = component['result'].data;
        });
    };
    DashboardComponent.prototype.navigate = function (id) {
        this.router.navigate(["/component/" + id]);
    };
    DashboardComponent.prototype.open = function (content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result.then(function (result) {
        }, function (reason) {
        });
    };
    // onFilesAdded(files: File[]){
    //   console.log(files);
    //   const reader = new FileReader();
    //   reader.onload = (e: ProgressEvent) => {
    //     const content = (e.target as FileReader).result;
    //       console.log(content);
    //      };
    //   this.formData.append('file',files);
    //   this.newComponent["file"] = new Blob(files);
    // }
    DashboardComponent.prototype.onUploadSucess = function (event) {
        this.newComponent["id"] = event[1].result.data._id;
    };
    DashboardComponent.prototype.uploadAndParseFiles = function () {
        var _this = this;
        // this.formData.append('name',this.newComponent.name);
        // this.formData.append('description', this.newComponent.description)
        if (!this.newComponent["id"]) {
            alert("Please provide name and desc");
        }
        else {
            this.restService.saveComponent(this.newComponent).subscribe(function (data) {
                debugger;
                _this.modalService.dismissAll();
                if (data["result"].status == 200) {
                    _this.router.navigate(["/component/" + _this.newComponent["id"]]);
                }
            });
        }
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_rest_service__WEBPACK_IMPORTED_MODULE_2__["RestService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/element/element.component.html":
/*!************************************************!*\
  !*** ./src/app/element/element.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"header\">\n        <h1 class=\"heading\">{{component.name}}</h1>\n        <p class=\"desc\">{{component.description}}</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <button class=\"btn btn-custom\" (click)='download(component._id)'>Download As React</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/element/element.component.scss":
/*!************************************************!*\
  !*** ./src/app/element/element.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".heading {\n  color: #0CC9B3;\n  font-size: 20px;\n  line-height: 33px; }\n\np.desc {\n  padding-bottom: 20px;\n  color: rgba(255, 255, 255, 0.35);\n  font-size: 14px;\n  line-height: 26px; }\n\n.header {\n  position: relative; }\n\n.header:after {\n    content: '';\n    position: absolute;\n    bottom: 10px;\n    left: 0px;\n    background: #0CC9B3;\n    height: 1px;\n    width: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpcGluL3Byb2plY3RzL2NvZGV4L2NsaWVudC9zcmMvYXBwL2VsZW1lbnQvZWxlbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCLEVBQUE7O0FBRXpCO0VBQ1Esb0JBQW9CO0VBQ3BCLGdDQUE2QjtFQUM3QixlQUFlO0VBQ2YsaUJBQWlCLEVBQUE7O0FBRXpCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRHRCO0lBR1EsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osU0FBUztJQUNULG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZWxlbWVudC9lbGVtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRpbmd7XG5cbiAgICAgICAgY29sb3I6ICMwQ0M5QjM7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMzcHg7XG4gICAgfVxucC5kZXNje1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4zNSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG4uaGVhZGVye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAmOmFmdGVye1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDEwcHg7XG4gICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgYmFja2dyb3VuZDogIzBDQzlCMztcbiAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/element/element.component.ts":
/*!**********************************************!*\
  !*** ./src/app/element/element.component.ts ***!
  \**********************************************/
/*! exports provided: ElementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementComponent", function() { return ElementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_services_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/rest.service */ "./src/services/rest.service.ts");




var ElementComponent = /** @class */ (function () {
    function ElementComponent(activeRoute, restService) {
        this.activeRoute = activeRoute;
        this.restService = restService;
        this.component = {};
    }
    ElementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.params.subscribe(function (params) {
            if (params['id']) {
                _this.restService.getComponentById(params['id'])
                    .subscribe(function (data) { return _this.component = data['result'].data; });
            }
        });
    };
    ElementComponent.prototype.download = function (id) {
        window.open("/convertAndDownload/" + id);
    };
    ElementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-element',
            template: __webpack_require__(/*! ./element.component.html */ "./src/app/element/element.component.html"),
            styles: [__webpack_require__(/*! ./element.component.scss */ "./src/app/element/element.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_services_rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"]])
    ], ElementComponent);
    return ElementComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n    <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n      <div class=\"container\">\n        <a class=\"navbar-brand\" href=\"#\">code<span>x</span></a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n      \n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n          <ul class=\"navbar-nav ml-auto\">\n            <li class=\"nav-item active\">\n              <a class=\"nav-link\" href=\"#\">Dashboard <span class=\"sr-only\">(current)</span></a>\n            </li>\n          \n          </ul>\n\n        </div>\n      </div>\n      </nav>\n</header>"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  margin-bottom: 50px; }\n  header .bg-light {\n    background-color: transparent !important;\n    border-bottom: 1px solid #0CC9B3; }\n  header .bg-light .navbar-brand {\n      color: #fff; }\n  header .bg-light .navbar-brand span {\n        color: #0CC9B3; }\n  header .bg-light .navbar-nav li a {\n      color: #fff; }\n  header .bg-light .navbar-nav li a:hover {\n        color: #0CC9B3; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZpcGluL3Byb2plY3RzL2NvZGV4L2NsaWVudC9zcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBbUIsRUFBQTtFQUR2QjtJQUdRLHdDQUF3QztJQUN4QyxnQ0FBK0IsRUFBQTtFQUp2QztNQU1ZLFdBQVcsRUFBQTtFQU52QjtRQVFnQixjQUFjLEVBQUE7RUFSOUI7TUFjb0IsV0FBVyxFQUFBO0VBZC9CO1FBZ0J3QixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVye1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgLmJnLWxpZ2h0e1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjMENDOUIzO1xuICAgICAgICAubmF2YmFyLWJyYW5ke1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMENDOUIzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5uYXZiYXItbmF2e1xuICAgICAgICAgICAgbGl7XG4gICAgICAgICAgICAgICAgYXtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzBDQzlCMztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/services/rest.service.ts":
/*!**************************************!*\
  !*** ./src/services/rest.service.ts ***!
  \**************************************/
/*! exports provided: RestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestService", function() { return RestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var RestService = /** @class */ (function () {
    function RestService(http) {
        this.http = http;
    }
    RestService.prototype.success = function (title, message) {
        this.toastrOptions();
        toastr.success(title, message);
    };
    RestService.prototype.warning = function (title, message) {
        this.toastrOptions();
        toastr.warning(title, message);
    };
    RestService.prototype.error = function (title, message) {
        this.toastrOptions();
        toastr.error(title, message);
    };
    RestService.prototype.info = function (title, message) {
        this.toastrOptions();
        toastr.info(title, message);
    };
    RestService.prototype.toastrOptions = function () {
        toastr.options.timeOut = 1500;
        toastr.options.extendedTimeOut = 1500;
        toastr.options.closeButton = true;
        toastr.options.closeHtml = "<button><img src=\"../assets/images/declined-white.svg\" alt=\"close buttton\" /></button>";
    };
    RestService.prototype.getComponents = function () {
        return this.http.get('/components');
    };
    RestService.prototype.saveComponent = function (componentData) {
        return this.http.post('/components', componentData);
    };
    RestService.prototype.getComponentById = function (id) {
        return this.http.get("/component/" + id);
    };
    RestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RestService);
    return RestService;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/vipin/projects/codex/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map