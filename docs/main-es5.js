(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"authenticationService.isAuthenticated\">\r\n    <app-dashboard></app-dashboard>\r\n</div>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/contacts/contacts.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/contacts/contacts.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>contacts works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/groups/groups.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/groups/groups.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"4\" gutterSïze=\"10px\">\n    <mat-grid-tile *ngFor=\"let group of groups\">\n        <mat-card class=\"mat-elevation-z4\">\n            <mat-card-header>\n              <mat-card-title>{{group.name}}</mat-card-title>\n            </mat-card-header>\n            <mat-card-content>\n                <p>{{group.numContacts}} Contacts</p>  \n                <p>Status:{{group.status}}</p>\n            </mat-card-content>\n            <mat-card-actions>\n              <button mat-button>pageview</button>\n              <button mat-button>delete_outline</button>\n            </mat-card-actions>\n        </mat-card>\n    </mat-grid-tile>\n</mat-grid-list>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/home.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>home works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"mat-elevation-z8\">\n    <mat-toolbar-row class=\"justify-content-between\">\n        <button mat-icon-button *ngIf=\"sidenav.mode === 'over'\" (click)=\"sidenav.toggle()\">\n            <mat-icon *ngIf=\"!sidenav.opened\">\n                menu\n            </mat-icon>\n            <mat-icon *ngIf=\"sidenav.opened\">\n                close\n            </mat-icon>\n        </button>\n        Contacts Manager\n        <div class=\"row mr-2 ml-auto\">\n            <ul>\n                <li>\n                    <button mat-button [matMenuTriggerFor]=\"menu\" class=\"user mt-2 d-flex align-items-center\">\n                        <img src=\"favicon.ico\" alt=\"\" class=\"user-image mr-1 p-2\">\n                        User Name\n                        <mat-icon class=\"user-image-icon ml-1\">arrow_drop_down</mat-icon>\n                    </button>\n                    <mat-menu #menu=\"matMenu\">\n                        <button mat-menu-item>\n                            <mat-icon>exit_to_app</mat-icon>\n                            Logout\n                        </button>\n                    </mat-menu>\n                </li>\n            </ul>\n        </div>\n    </mat-toolbar-row>\n</mat-toolbar>\n\n<mat-sidenav-container>\n    <mat-sidenav #sidenav=\"matSidenav\" class=\"mat-elevation-z8\">\n\n        <h4 class=\"name\">Employee</h4>\n\n        <mat-divider></mat-divider>\n\n        <a routerLink=\"dashboard\">\n            <button mat-button class=\"menu-button\">\n                <mat-icon>home</mat-icon>\n                <span>Home</span>\n            </button>\n        </a>\n        <a routerLink=\"groups\">\n            <button mat-button class=\"menu-button\">\n                <mat-icon>group</mat-icon>\n                <span>My Groups</span>\n            </button>\n        </a>\n        <a routerLink=\"contacts\">\n            <button mat-button class=\"menu-button\">\n                <mat-icon>contacts</mat-icon>\n                <span>My contacts</span>\n            </button>\n        </a>\n\n        <mat-divider></mat-divider>\n\n        <button mat-button class=\"menu-button\">\n            <mat-icon>help</mat-icon>\n            <span>Help</span>\n        </button>\n\n    </mat-sidenav>\n    <mat-sidenav-content>\n        <div class=\"content mat-elevation-z8\">\n            <router-outlet></router-outlet>\n        </div>\n    </mat-sidenav-content>\n    \n</mat-sidenav-container>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/register-user/register-user.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register-user/register-user.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page\"> \n  <mat-card class=\"mat-elevation-z12\">\n    <mat-card-title style=\"text-align:center;\">SignIn/SignUp</mat-card-title>\n    <mat-tab-group>\n      <mat-tab label=\"Login\">\n          <mat-card-content>\n            <form action=\"\" (ngSubmit)=\"onSubmit(signInForm)\" #signInForm=\"ngForm\">\n              <mat-form-field>\n                <input\n                  matInput\n                  placeholder=\"Email\"\n                  required\n                  name=\"email\"\n                  ngModel\n                  #email=\"ngModel\">\n                  <mat-error *ngIf=\"email.invalid\">Email is required</mat-error>\n                <mat-icon matSuffix>email</mat-icon>\n              </mat-form-field>\n              <mat-form-field>\n                <input\n                  matInput\n                  placeholder=\"Password\"\n                  type=\"password\"\n                  required\n                  minlength=\"6\"\n                  name=\"password\"\n                  ngModel\n                  #password=\"ngModel\">\n                  <mat-error\n                    *ngIf=\"password.errors && password.errors.required\">\n                    Password is required\n                  </mat-error>\n                  <mat-error\n                    *ngIf=\"password.errors && password.errors.minlength\">\n                    Password must be of length 6\n                  </mat-error>\n                <mat-icon matSuffix>lock</mat-icon>\n              </mat-form-field>\n              <!-- <mat-checkbox>Remember Me!</mat-checkbox> -->\n              <button\n                mat-raised-button\n                color=\"primary\"\n                class=\"login-button\">\n                Submit\n              </button>\n            </form>\n          </mat-card-content>\n      </mat-tab>\n      <mat-tab label=\"Sign Up\">\n        <mat-card-content>\n          <form action=\"\">\n            <mat-form-field>\n              <input\n                matInput\n                placeholder=\"User Name\"\n                required\n                name=\"username\"\n                ngModel\n                #username=\"ngModel\">\n              <mat-icon matSuffix>perm_identity</mat-icon>\n              <mat-error\n                *ngIf=\"username.invalid\">\n                Username is required\n              </mat-error>\n\n            </mat-form-field>\n            <mat-form-field>\n              <input\n                matInput\n                placeholder=\"Email\"\n                required\n                name=\"email\"\n                ngModel\n                #email=\"ngModel\">\n                <mat-error *ngIf=\"email.invalid\">Email is required</mat-error>\n              <mat-icon matSuffix>email</mat-icon>\n            </mat-form-field>\n            <mat-form-field>\n              <input\n                matInput\n                placeholder=\"Password\"\n                type=\"password\"\n                required\n                minlength=\"6\"\n                name=\"password\"\n                ngModel\n                #password=\"ngModel\">\n                <mat-error\n                  *ngIf=\"password.errors && password.errors.required\">\n                  Password is required\n                </mat-error>\n                <mat-error\n                  *ngIf=\"password.errors && password.errors.minlength\">\n                  Password must be of length 6\n                </mat-error>\n              <mat-icon matSuffix>lock</mat-icon>\n\n            </mat-form-field>\n            <mat-form-field>\n                <input\n                matInput\n                placeholder=\"Re-enter Password\"\n                type=\"password\"\n                required\n                minlength=\"6\"\n                name=\"repassword\"\n                ngModel\n                #repassword=\"ngModel\">\n                <mat-error\n                  *ngIf=\"repassword.errors && repassword.errors.required\">\n                  Re-Enter Password is required\n                </mat-error>\n              <mat-icon matSuffix>lock</mat-icon>\n            </mat-form-field>\n            <button\n              mat-raised-button\n              color=\"primary\"\n              class=\"login-button\">\n              Sign Up\n            </button>\n          </form>\n        </mat-card-content>\n      </mat-tab>\n    </mat-tab-group>\n  </mat-card>\n</div>\n"

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
/* harmony import */ var _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/contacts/contacts.component */ "./src/app/components/contacts/contacts.component.ts");
/* harmony import */ var _components_groups_groups_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/groups/groups.component */ "./src/app/components/groups/groups.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _register_user_register_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register-user/register-user.component */ "./src/app/register-user/register-user.component.ts");







var routes = [
    { path: 'dashboard', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'groups', component: _components_groups_groups_component__WEBPACK_IMPORTED_MODULE_4__["GroupsComponent"] },
    { path: 'contacts', component: _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_3__["ContactsComponent"] },
    { path: '', component: _register_user_register_user_component__WEBPACK_IMPORTED_MODULE_6__["RegisterUserComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/authentication/authentication.service */ "./src/app/services/authentication/authentication.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(authenticationService) {
        this.authenticationService = authenticationService;
        this.title = 'contacts-manager';
    }
    AppComponent.prototype.logout = function () {
        this.authenticationService.logout();
    };
    AppComponent.ctorParameters = function () { return [
        { type: _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _register_user_register_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register-user/register-user.component */ "./src/app/register-user/register-user.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _components_groups_groups_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/groups/groups.component */ "./src/app/components/groups/groups.component.ts");
/* harmony import */ var _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/contacts/contacts.component */ "./src/app/components/contacts/contacts.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _register_user_register_user_component__WEBPACK_IMPORTED_MODULE_8__["RegisterUserComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
                _components_groups_groups_component__WEBPACK_IMPORTED_MODULE_10__["GroupsComponent"],
                _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_11__["ContactsComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/contacts/contacts.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/contacts/contacts.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdHMvY29udGFjdHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/contacts/contacts.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/contacts/contacts.component.ts ***!
  \***********************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactsComponent = /** @class */ (function () {
    function ContactsComponent() {
    }
    ContactsComponent.prototype.ngOnInit = function () {
    };
    ContactsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contacts',
            template: __webpack_require__(/*! raw-loader!./contacts.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/contacts/contacts.component.html"),
            styles: [__webpack_require__(/*! ./contacts.component.css */ "./src/app/components/contacts/contacts.component.css")]
        })
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "./src/app/components/groups/groups.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/groups/groups.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ3JvdXBzL2dyb3Vwcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/groups/groups.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/groups/groups.component.ts ***!
  \*******************************************************/
/*! exports provided: GroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsComponent", function() { return GroupsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GroupsComponent = /** @class */ (function () {
    function GroupsComponent() {
        this.groups = [
            {
                "id": 4387,
                "name": "Group One",
                "numContacts": 12,
                "status": "active"
            },
            {
                "id": 4388,
                "name": "Group Two",
                "numContacts": 15,
                "status": "active"
            },
            {
                "id": 4389,
                "name": "Group Three",
                "numContacts": 8,
                "status": "inactive"
            },
            {
                "id": 4390,
                "name": "Group Four",
                "numContacts": 20,
                "status": "active"
            }
        ];
    }
    GroupsComponent.prototype.ngOnInit = function () {
    };
    GroupsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-groups',
            template: __webpack_require__(/*! raw-loader!./groups.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/groups/groups.component.html"),
            styles: [__webpack_require__(/*! ./groups.component.css */ "./src/app/components/groups/groups.component.css")]
        })
    ], GroupsComponent);
    return GroupsComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-toolbar {\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n    background: #004a9f;\r\n    color: white;\r\n    top: 0;\r\n    z-index: 100\r\n}\r\n\r\nmat-sidenav {\r\n    margin: 16px;\r\n    width: 200px;\r\n    border-right: none;\r\n    background: #002b5c;\r\n    color: white;\r\n    border-radius: 10px;\r\n    padding: 16px;\r\n    text-align: center;\r\n}\r\n\r\n.content {\r\n    height: calc(100vh - 98px);\r\n    border-radius: 10px;\r\n    margin: 16px;\r\n    margin-left: 32px;\r\n\r\n    display: -webkit-box;\r\n\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n\r\n    font-size: 2rem;\r\n    color: lightgray;\r\n}\r\n\r\nmat-sidenav-container {\r\n    height: calc(100vh - 65px);\r\n}\r\n\r\n.menu-button {\r\n    width: 100%;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: start;\r\n            justify-content: flex-start;\r\n    font-size: 1rem;\r\n}\r\n\r\nmat-icon {\r\n        margin-right: 8px;\r\n    }\r\n\r\n.avatar {\r\n    margin-top: 16px;\r\n    width: 100px;\r\n    height: 100px;\r\n    border-radius: 50%;\r\n}\r\n\r\n.name {\r\n    margin-top: 8px;\r\n    font-weight: normal;\r\n}\r\n\r\n.designation {\r\n    margin-top: 2px;\r\n    font-size: 0.7rem;\r\n    color: lightgrey;\r\n}\r\n\r\nmat-divider {\r\n    margin-top: 16px;\r\n    margin-bottom: 16px;\r\n    background-color: rgba(255, 255, 255, 0.5);\r\n}\r\n\r\na.sidenav-button{\r\n    display: inline;\r\n    color: rgba(255, 255, 255, 0.5);\r\n    margin-right: 10px;\r\n    -webkit-transition: all .3s ease 0s;\r\n    transition: all .3s ease 0s;\r\n}\r\n\r\na.sidenav-button:hover{\r\n    color: rgba(255, 255, 255, 0.8);\r\n    -webkit-transition: all .3s ease 0s;\r\n    transition: all .3s ease 0s;\r\n}\r\n\r\n.navbar .photo {\r\n    display: inline-block;\r\n    height: 30px;\r\n    width: 30px;\r\n    border-radius: 50%;\r\n    vertical-align: middle;\r\n    overflow: hidden;\r\n}\r\n\r\n.navbar .photo img{\r\n    width: 100%;\r\n}\r\n\r\nli{\r\n    list-style: none;\r\n}\r\n\r\nbutton{\r\n    border:0;\r\n    outline:none;\r\n    background:transparent\r\n}\r\n\r\n.user{\r\n    font-size: 14px;\r\n}\r\n\r\n.user-image{\r\n    border-radius:50%;\r\n    width: 40px;\r\n    height: 40px;\r\n}\r\n\r\n.user-image-icon{\r\n    height: 18px;\r\n    font-size: 16px;\r\n}\r\n\r\n::ng-deep .mat-menu-content{\r\n    width:160px\r\n}\r\n\r\na{\r\n    text-decoration:none; \r\n    color:white\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQWdCO0lBQWhCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLE1BQU07SUFDTjtBQUNKOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQjs7SUFFakIsb0JBQWE7O0lBQWIsYUFBYTtJQUNiLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIseUJBQW1CO1lBQW5CLG1CQUFtQjs7SUFFbkIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHVCQUEyQjtZQUEzQiwyQkFBMkI7SUFDM0IsZUFBZTtBQUNuQjs7QUFDSTtRQUNJLGlCQUFpQjtJQUNyQjs7QUFHSjtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsMENBQTBDO0FBQzlDOztBQUNBO0lBQ0ksZUFBZTtJQUNmLCtCQUErQjtJQUMvQixrQkFBa0I7SUFDbEIsbUNBQTJCO0lBQTNCLDJCQUEyQjtBQUMvQjs7QUFDQTtJQUNJLCtCQUErQjtJQUMvQixtQ0FBMkI7SUFBM0IsMkJBQTJCO0FBQy9COztBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxRQUFRO0lBQ1IsWUFBWTtJQUNaO0FBQ0o7O0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSTtBQUNKOztBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtdG9vbGJhciB7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgYmFja2dyb3VuZDogIzAwNGE5ZjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IDEwMFxyXG59XHJcblxyXG5tYXQtc2lkZW5hdiB7XHJcbiAgICBtYXJnaW46IDE2cHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAyYjVjO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDk4cHgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbjogMTZweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMnB4O1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgY29sb3I6IGxpZ2h0Z3JheTtcclxufVxyXG5cclxubWF0LXNpZGVuYXYtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDY1cHgpO1xyXG59XHJcblxyXG4ubWVudS1idXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG4gICAgbWF0LWljb24ge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgfVxyXG5cclxuXHJcbi5hdmF0YXIge1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5uYW1lIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5kZXNpZ25hdGlvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgIGNvbG9yOiBsaWdodGdyZXk7XHJcbn1cclxuXHJcbm1hdC1kaXZpZGVyIHtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG59XHJcbmEuc2lkZW5hdi1idXR0b257XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlIDBzO1xyXG59XHJcbmEuc2lkZW5hdi1idXR0b246aG92ZXJ7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlIDBzO1xyXG59XHJcbi5uYXZiYXIgLnBob3RvIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLm5hdmJhciAucGhvdG8gaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmxpe1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5idXR0b257XHJcbiAgICBib3JkZXI6MDtcclxuICAgIG91dGxpbmU6bm9uZTtcclxuICAgIGJhY2tncm91bmQ6dHJhbnNwYXJlbnRcclxufVxyXG4udXNlcntcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4udXNlci1pbWFnZXtcclxuICAgIGJvcmRlci1yYWRpdXM6NTAlO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuLnVzZXItaW1hZ2UtaWNvbntcclxuICAgIGhlaWdodDogMThweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG46Om5nLWRlZXAgLm1hdC1tZW51LWNvbnRlbnR7XHJcbiAgICB3aWR0aDoxNjBweFxyXG59XHJcbmF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTsgXHJcbiAgICBjb2xvcjp3aGl0ZVxyXG59Il19 */"

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
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(observer) {
        this.observer = observer;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.observer
            .observe(['(max-width: 800px)'])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(1))
            .subscribe(function (res) {
            if (res.matches) {
                _this.sidenav.mode = 'over';
                _this.sidenav.close();
            }
            else {
                _this.sidenav.mode = 'side';
                _this.sidenav.open();
            }
        });
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenav"], null)
    ], DashboardComponent.prototype, "sidenav", void 0);
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/models/signInData.ts":
/*!**************************************!*\
  !*** ./src/app/models/signInData.ts ***!
  \**************************************/
/*! exports provided: SignInData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInData", function() { return SignInData; });
var SignInData = /** @class */ (function () {
    function SignInData(email, password) {
        this.email = email;
        this.password = password;
    }
    SignInData.prototype.getEmail = function () {
        return this.email;
    };
    SignInData.prototype.getPPassword = function () {
        return this.password;
    };
    SignInData.ctorParameters = function () { return [
        { type: String },
        { type: String }
    ]; };
    return SignInData;
}());



/***/ }),

/***/ "./src/app/register-user/register-user.component.css":
/*!***********************************************************!*\
  !*** ./src/app/register-user/register-user.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-page {\r\n  top: 0;\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: block;\r\n  background-color: #FFFFFF;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  overflow: hidden;\r\n}\r\n\r\nmat-card {\r\n  width: 30%;\r\n  margin: 10% auto;\r\n  border-radius: 8px;\r\n}\r\n\r\nmat-form-field, mat-checkbox {\r\n  width: 80%;\r\n  display: block;\r\n  margin: auto;\r\n}\r\n\r\nmat-card-content {\r\n  margin-top: 20px;\r\n}\r\n\r\n.login-button {\r\n  margin-top: 20px;\r\n  display: block;\r\n  width: 80%;\r\n  margin: 20px auto;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXItdXNlci9yZWdpc3Rlci11c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxNQUFNO0VBQ04sU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyLXVzZXIvcmVnaXN0ZXItdXNlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLXBhZ2Uge1xyXG4gIHRvcDogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbm1hdC1jYXJkIHtcclxuICB3aWR0aDogMzAlO1xyXG4gIG1hcmdpbjogMTAlIGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcbm1hdC1mb3JtLWZpZWxkLCBtYXQtY2hlY2tib3gge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbm1hdC1jYXJkLWNvbnRlbnQge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5sb2dpbi1idXR0b24ge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXJnaW46IDIwcHggYXV0bztcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/register-user/register-user.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/register-user/register-user.component.ts ***!
  \**********************************************************/
/*! exports provided: RegisterUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterUserComponent", function() { return RegisterUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_signInData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/signInData */ "./src/app/models/signInData.ts");
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication/authentication.service */ "./src/app/services/authentication/authentication.service.ts");




var RegisterUserComponent = /** @class */ (function () {
    function RegisterUserComponent(authenticationService) {
        this.authenticationService = authenticationService;
    }
    RegisterUserComponent.prototype.ngOnInit = function () {
    };
    RegisterUserComponent.prototype.onSubmit = function (signInForm) {
        var signInData = new _models_signInData__WEBPACK_IMPORTED_MODULE_2__["SignInData"](signInForm.value.email, signInForm.value.password);
        this.authenticationService.authenticate(signInData);
    };
    RegisterUserComponent.ctorParameters = function () { return [
        { type: _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
    ]; };
    RegisterUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register-user',
            template: __webpack_require__(/*! raw-loader!./register-user.component.html */ "./node_modules/raw-loader/index.js!./src/app/register-user/register-user.component.html"),
            styles: [__webpack_require__(/*! ./register-user.component.css */ "./src/app/register-user/register-user.component.css")]
        })
    ], RegisterUserComponent);
    return RegisterUserComponent;
}());



/***/ }),

/***/ "./src/app/services/authentication/authentication.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/services/authentication/authentication.service.ts ***!
  \*******************************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_signInData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/signInData */ "./src/app/models/signInData.ts");




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(router) {
        this.router = router;
        this.mockUser = new src_app_models_signInData__WEBPACK_IMPORTED_MODULE_3__["SignInData"]('sarada@inmar.com', 'test123');
        this.isAuthenticated = false;
    }
    AuthenticationService.prototype.authenticate = function (signInData) {
        if (this.checkCredentials(signInData)) {
            this.isAuthenticated = true;
            this.router.navigate(['dashboard']);
            return true;
        }
        this.isAuthenticated = false;
        return false;
    };
    AuthenticationService.prototype.checkCredentials = function (signInData) {
        return this.checkEmail(signInData.getEmail()) && this.checkPassword(signInData.getPPassword());
    };
    AuthenticationService.prototype.checkEmail = function (email) {
        return email === this.mockUser.getEmail();
    };
    AuthenticationService.prototype.checkPassword = function (password) {
        return password === this.mockUser.getPPassword();
    };
    AuthenticationService.prototype.logout = function () {
        this.isAuthenticated = false;
        this.router.navigate(['']);
    };
    AuthenticationService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthenticationService);
    return AuthenticationService;
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

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! B:\personal_projects\contacts-manager\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map