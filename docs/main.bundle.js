webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/admin/admin-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_admin_component__ = __webpack_require__("../../../../../src/app/admin/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_guard__ = __webpack_require__("../../../../../src/app/auth/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_2__admin_admin_component__["a" /* AdminComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_auth_guard__["a" /* AuthGuard */]] }
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/admin/admin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_routing_module__ = __webpack_require__("../../../../../src/app/admin/admin-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_admin_component__ = __webpack_require__("../../../../../src/app/admin/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__products_dialog_products_dialog_component__ = __webpack_require__("../../../../../src/app/admin/products-dialog/products-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__products_products_component__ = __webpack_require__("../../../../../src/app/admin/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__upload_service__ = __webpack_require__("../../../../../src/app/admin/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__upload_form_upload_form_component__ = __webpack_require__("../../../../../src/app/admin/upload-form/upload-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__admin_routing_module__["a" /* AdminRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__admin_admin_component__["a" /* AdminComponent */], __WEBPACK_IMPORTED_MODULE_5__products_dialog_products_dialog_component__["a" /* ProductsDialogComponent */], __WEBPACK_IMPORTED_MODULE_6__products_products_component__["a" /* ProductsComponent */], __WEBPACK_IMPORTED_MODULE_8__upload_form_upload_form_component__["a" /* UploadFormComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_5__products_dialog_products_dialog_component__["a" /* ProductsDialogComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_7__upload_service__["a" /* UploadService */]]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "../../../../../src/app/admin/admin/admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-tab-group *ngIf=\"auth.user | async as user\" class=\"container_max\">\n  <mat-tab label=\"Administrar tienda\" *ngIf=\"user.role === 'admin' || user.role === 'editor'\">\n    <app-products></app-products>\n  </mat-tab>\n</mat-tab-group>\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminComponent = /** @class */ (function () {
    function AdminComponent(auth) {
        this.auth = auth;
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin',
            template: __webpack_require__("../../../../../src/app/admin/admin/admin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/products-dialog/products-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/products-dialog/products-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-tab-group *ngIf=\"auth.user | async as user\">\n  <mat-tab label=\"Formulario de producto\" *ngIf=\"user.role === 'admin' || user.role === 'editor'\">\n    <div class=\"mt-2\">\n      <mat-form-field class=\"full-width\">\n        <input matInput placeholder=\"Nombre\" [(ngModel)]=\"data.name\" />\n      </mat-form-field>\n      <mat-form-field class=\"full-width\">\n        <input matInput placeholder=\"Precio\" [(ngModel)]=\"data.price\" />\n      </mat-form-field>\n      <mat-form-field class=\"full-width\">\n        <textarea matInput placeholder=\"Descripción\" [(ngModel)]=\"data.description\"></textarea>\n      </mat-form-field>\n      <div class=\"btn-wrapper\">\n        <button mat-raised-button color=\"accent\" (click)=\"saveProduct()\">Guardar</button>\n      </div>\n    </div>\n  </mat-tab>\n  <mat-tab label=\"Adjuntar archivos\" *ngIf=\"user.role === 'admin' && data.id\">\n    <div>\n      <app-upload-form [id]=\"data.id\"></app-upload-form>\n      <mat-grid-list cols=\"2\">\n        <mat-grid-tile class=\"tile_block\" *ngFor=\"let upload of uploads | async\">\n          <div>\n            <img [src]=\"upload.url\" [alt]=\"upload.name\" />\n            <button mat-icon-button color=\"warn\" (click)=\"removeUpload(upload)\">Eliminar <i class=\"material-icons\">delete</i></button>\n          </div>\n        </mat-grid-tile>\n      </mat-grid-list>\n    </div>\n  </mat-tab>\n</mat-tab-group>\n"

/***/ }),

/***/ "../../../../../src/app/admin/products-dialog/products-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_products_service__ = __webpack_require__("../../../../../src/app/common/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_snack_service__ = __webpack_require__("../../../../../src/app/common/snack.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_product__ = __webpack_require__("../../../../../src/app/models/product.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__admin_upload_service__ = __webpack_require__("../../../../../src/app/admin/upload.service.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var ProductsDialogComponent = /** @class */ (function () {
    function ProductsDialogComponent(afs, dialogRef, data, snackService, auth, productService, uploadService) {
        this.afs = afs;
        this.dialogRef = dialogRef;
        this.data = data;
        this.snackService = snackService;
        this.auth = auth;
        this.productService = productService;
        this.uploadService = uploadService;
        if (data.id) {
            this.uploads = this.productService.product(this.data.id).collection('uploads').snapshotChanges().map(function (actions) {
                return actions.map(function (upload) {
                    var data = upload.payload.doc.data();
                    var id = upload.payload.doc.id;
                    return __assign({ id: id }, data);
                });
            });
        }
    }
    ProductsDialogComponent.prototype.saveProduct = function () {
        var _this = this;
        if (this.data.id) {
            this.productService.update(this.data).then(function () {
                _this.snackService.launch("Producto actualizado", "Tienda", 4000);
            })
                .catch(function (error) {
                _this.snackService.launch("Error: " + error.message, "Tienda", 4000);
            });
        }
        else {
            this.productService.save(this.data).then(function () {
                _this.snackService.launch("Producto creado", "Tienda", 4000);
            })
                .catch(function (error) {
                _this.snackService.launch("Error: " + error.message, "Tienda", 4000);
            });
        }
        this.dialogRef.close();
    };
    ProductsDialogComponent.prototype.removeUpload = function (upload) {
        var _this = this;
        this.uploadService.removeFile(upload.id).then(function () {
            _this.afs.doc("products/" + _this.data.id + "/uploads/" + upload.id).delete().then(function () {
                _this.snackService.launch("Elemento eliminado", "Tienda", 4000);
            })
                .catch(function (error) {
                _this.snackService.launch("Error: " + error.message, "Tienda", 4000);
            });
        });
    };
    ProductsDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-products-dialog',
            template: __webpack_require__("../../../../../src/app/admin/products-dialog/products-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/products-dialog/products-dialog.component.css")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_6__models_product__["a" /* Product */],
            __WEBPACK_IMPORTED_MODULE_5__common_snack_service__["a" /* SnackService */],
            __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__common_products_service__["a" /* ProductsService */],
            __WEBPACK_IMPORTED_MODULE_7__admin_upload_service__["a" /* UploadService */]])
    ], ProductsDialogComponent);
    return ProductsDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/products/products.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/products/products.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"btn-wrapper\">\r\n  <button class=\"mt-2\" mat-raised-button color=\"accent\" (click)=\"addProduct()\">\r\n    <i class=\"material-icons\">playlist_add</i> Añadir producto\r\n  </button>\r\n</div>\r\n\r\n<mat-form-field>\r\n  <mat-label><i class=\"material-icons\">&#xE880;</i> Filtrar productos</mat-label>\r\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" />\r\n</mat-form-field>\r\n\r\n<mat-table #table [dataSource]=\"dataSource\" matSort [trackBy]=\"trackById\" class=\"animate\">\r\n\r\n  <ng-container matColumnDef=\"name\">\r\n    <mat-header-cell *matHeaderCellDef mat-sort-header>Nombre</mat-header-cell>\r\n    <mat-cell color=\"primary\" *matCellDef=\"let product\"> {{ product.name }} </mat-cell>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"price\">\r\n    <mat-header-cell *matHeaderCellDef mat-sort-header>Precio</mat-header-cell>\r\n    <mat-cell *matCellDef=\"let product\"> {{ product.price }} € </mat-cell>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"description\">\r\n    <mat-header-cell *matHeaderCellDef mat-sort-header>Descripción</mat-header-cell>\r\n    <mat-cell *matCellDef=\"let product\"> {{ product.description }} </mat-cell>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"edit\">\r\n    <mat-header-cell *matHeaderCellDef></mat-header-cell>\r\n    <mat-cell *matCellDef=\"let product\">\r\n      <button mat-icon-button color=\"primary\" (click)=\"openDialog(product)\" title=\"Editar\"><i class=\"material-icons\">edit</i></button>\r\n    </mat-cell>\r\n  </ng-container>\r\n\r\n  <ng-container matColumnDef=\"delete\">\r\n    <mat-header-cell *matHeaderCellDef></mat-header-cell>\r\n    <mat-cell *matCellDef=\"let product\">\r\n      <div *ngIf=\"auth.user | async as user\">\r\n        <button mat-icon-button *ngIf=\"user.role === 'admin'\" color=\"warn\" (click)=\"remove(product)\" title=\"Eliminar\"><i class=\"material-icons\">delete</i></button>\r\n        <button *ngIf=\"user.role === 'editor'\" mat-icon-button [disabled]=\"user.role !== 'admin'\" color=\"warn\" title=\"No tienes permisos\"><i class=\"material-icons\">delete</i></button>\r\n      </div>\r\n    </mat-cell>\r\n  </ng-container>\r\n\r\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n  <mat-row *matRowDef=\"let row; columns: displayedColumns;\" class=\"animate\"></mat-row>\r\n</mat-table>\r\n"

/***/ }),

/***/ "../../../../../src/app/admin/products/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_product__ = __webpack_require__("../../../../../src/app/models/product.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_snack_service__ = __webpack_require__("../../../../../src/app/common/snack.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_products_service__ = __webpack_require__("../../../../../src/app/common/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__admin_products_dialog_products_dialog_component__ = __webpack_require__("../../../../../src/app/admin/products-dialog/products-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(productService, dialog, snackService, auth) {
        var _this = this;
        this.productService = productService;
        this.dialog = dialog;
        this.snackService = snackService;
        this.auth = auth;
        this.displayedColumns = ['name', 'price', 'description', 'edit', 'delete'];
        this.productService.products().valueChanges().subscribe(function (data) {
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatTableDataSource */](data);
            _this.dataSource.sort = _this.sort;
        }, function (err) {
            _this.snackService.launch("Error obteniendo productos: " + err.message, "Productos", 5000);
        });
    }
    ProductsComponent_1 = ProductsComponent;
    ProductsComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
    };
    ProductsComponent.prototype.trackById = function (index, product) {
        return product.id;
    };
    ProductsComponent.prototype.openDialog = function (product) {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__admin_products_dialog_products_dialog_component__["a" /* ProductsDialogComponent */], ProductsComponent_1.dialogConfig(product));
    };
    ProductsComponent.prototype.addProduct = function () {
        var product = new __WEBPACK_IMPORTED_MODULE_3__models_product__["a" /* Product */];
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__admin_products_dialog_products_dialog_component__["a" /* ProductsDialogComponent */], ProductsComponent_1.dialogConfig(product));
    };
    ProductsComponent.dialogConfig = function (data) {
        var config = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialogConfig */];
        config.data = data;
        return config;
    };
    ProductsComponent.prototype.remove = function (product) {
        var _this = this;
        this.productService.remove(product.id).then(function () {
            _this.snackService.launch('Producto eliminado correctamente', "Productos", 5000);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatSort */])
    ], ProductsComponent.prototype, "sort", void 0);
    ProductsComponent = ProductsComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-products',
            template: __webpack_require__("../../../../../src/app/admin/products/products.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/products/products.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__common_products_service__["a" /* ProductsService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_4__common_snack_service__["a" /* SnackService */],
            __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */]])
    ], ProductsComponent);
    return ProductsComponent;
    var ProductsComponent_1;
}());



/***/ }),

/***/ "../../../../../src/app/admin/upload-form/upload-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/upload-form/upload-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"upload_content\">\n  <div *ngIf=\"currentFileUploaded\">\n    <p>{{ progress.percentage }}%</p>\n\n    <mat-progress-bar\n      [color]=\"primary\"\n      [mode]=\"buffer\"\n      [value]=\"progress.percentage\"\n      [bufferValue]=\"progress.percentage\"\n      class=\"mb-2\">\n    </mat-progress-bar>\n  </div>\n\n  <input type=\"file\" (change)=\"selectFile($event)\">\n\n  <div class=\"btn-wrapper\">\n    <button mat-raised-button color=\"accent\" [disabled]=\"!selectedFiles\" (click)=\"upload()\">Subir archivo</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/admin/upload-form/upload-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__admin_upload_service__ = __webpack_require__("../../../../../src/app/admin/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_upload__ = __webpack_require__("../../../../../src/app/models/upload.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UploadFormComponent = /** @class */ (function () {
    function UploadFormComponent(uploadService) {
        this.uploadService = uploadService;
        this.progress = { percentage: 0 };
    }
    UploadFormComponent.prototype.ngOnInit = function () {
    };
    UploadFormComponent.prototype.selectFile = function (event) {
        this.selectedFiles = event.target.files;
    };
    UploadFormComponent.prototype.upload = function () {
        var file = this.selectedFiles.item(0);
        this.currentFileUploaded = new __WEBPACK_IMPORTED_MODULE_2__models_upload__["a" /* Upload */](file);
        this.uploadService.pushFileToStorage(this.currentFileUploaded, this.progress, this.id);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], UploadFormComponent.prototype, "id", void 0);
    UploadFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-upload-form',
            template: __webpack_require__("../../../../../src/app/admin/upload-form/upload-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/upload-form/upload-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__admin_upload_service__["a" /* UploadService */]])
    ], UploadFormComponent);
    return UploadFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/upload.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_faker__ = __webpack_require__("../../../../faker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_faker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_faker__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UploadService = /** @class */ (function () {
    function UploadService(afs) {
        this.afs = afs;
        this.basePath = '/products';
    }
    UploadService.prototype.pushFileToStorage = function (fileUpload, progress, id) {
        var _this = this;
        var storageRef = __WEBPACK_IMPORTED_MODULE_1_firebase__["storage"]().ref();
        var fileId = __WEBPACK_IMPORTED_MODULE_3_faker__["random"].alphaNumeric(16);
        var uploadTask = storageRef.child(this.basePath + "/" + fileId).put(fileUpload.file);
        uploadTask.on(__WEBPACK_IMPORTED_MODULE_1_firebase__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) {
            //en progreso
            var snap = snapshot;
            progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
        }, function (error) {
            // TODO manejar error
        }, function () {
            // correcto
            fileUpload.id = fileId;
            fileUpload.url = uploadTask.snapshot.downloadURL;
            fileUpload.name = fileUpload.file.name;
            _this.saveFileData(fileUpload, id);
        });
    };
    UploadService.prototype.saveFileData = function (fileUpload, id) {
        var product = this.afs.collection('products').doc(id);
        var newRef = product.collection('uploads').doc(fileUpload.id);
        newRef.set({
            id: fileUpload.id,
            name: fileUpload.name,
            url: fileUpload.url
        });
    };
    UploadService.prototype.removeFile = function (fileId) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase__["storage"]().ref().child(this.basePath + "/" + fileId).delete();
    };
    UploadService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], UploadService);
    return UploadService;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n\n<div class=\"container\">\n\n  <mat-spinner *ngIf=\"appService.loading$ | async\"></mat-spinner>\n\n  <router-outlet></router-outlet>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_app_service__ = __webpack_require__("../../../../../src/app/common/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(appService) {
        this.appService = appService;
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_app_service__["a" /* AppService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_auth_module__ = __webpack_require__("../../../../../src/app/auth/auth.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_navigation_navigation_component__ = __webpack_require__("../../../../../src/app/common/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__admin_admin_module__ = __webpack_require__("../../../../../src/app/admin/admin.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shop_shop_module__ = __webpack_require__("../../../../../src/app/shop/shop.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__common_navigation_navigation_component__["a" /* NavigationComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_8__auth_auth_module__["a" /* AuthModule */],
                __WEBPACK_IMPORTED_MODULE_11__admin_admin_module__["a" /* AdminModule */],
                __WEBPACK_IMPORTED_MODULE_12__shop_shop_module__["a" /* ShopModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_register_register_component__ = __webpack_require__("../../../../../src/app/auth/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_login_login_component__ = __webpack_require__("../../../../../src/app/auth/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'registro', component: __WEBPACK_IMPORTED_MODULE_2__auth_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__auth_login_login_component__["a" /* LoginComponent */] },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/take.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.auth.user.take(1).map(function (user) { return !!user; }).do(function (loggedIn) {
            if (!loggedIn) {
                _this.router.navigate(['/login']);
            }
        });
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_routing_module__ = __webpack_require__("../../../../../src/app/auth/auth-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__form_form_component__ = __webpack_require__("../../../../../src/app/auth/form/form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__register_register_component__ = __webpack_require__("../../../../../src/app/auth/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__("../../../../../src/app/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_guard__ = __webpack_require__("../../../../../src/app/auth/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__customer_guard__ = __webpack_require__("../../../../../src/app/auth/customer.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__auth_routing_module__["a" /* AuthRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_6__form_form_component__["a" /* FormComponent */], __WEBPACK_IMPORTED_MODULE_7__register_register_component__["a" /* RegisterComponent */], __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_9__auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_10__customer_guard__["a" /* CustomerGuard */]]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthService = /** @class */ (function () {
    function AuthService(afAuth, afs, router) {
        var _this = this;
        this.afAuth = afAuth;
        this.afs = afs;
        this.router = router;
        this.user = this.afAuth.authState.switchMap(function (user) {
            if (user) {
                return _this.afs.doc("users/" + user.uid).valueChanges();
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].of(null);
            }
        });
    }
    AuthService.prototype.oAuthLogin = function (provider) {
        var _this = this;
        return this.afAuth.auth.signInWithPopup(provider).then(function (credentials) {
            var user = credentials.user;
            _this.afs.collection('users', function (ref) { return ref.where('email', '==', user.email); }).valueChanges().subscribe(function (data) {
                if (!data.length) {
                    var newUser = {
                        uid: user.uid,
                        email: user.email,
                        displayName: user.displayName,
                        photoUrl: user.photoURL,
                        role: 'customer'
                    };
                    _this.afs.collection('users').doc(user.uid).set(newUser).then(function () {
                        _this.router.navigate(['/tienda']);
                        return;
                    });
                }
                _this.router.navigate(['/tienda']);
            });
        });
    };
    AuthService.prototype.googleLogin = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"].GoogleAuthProvider();
        return this.oAuthLogin(provider);
    };
    AuthService.prototype.emailAndPassword = function (email, password) {
        return this.afAuth.auth.signInWithEmailAndPassword(email.value, password.value);
    };
    AuthService.prototype.signUp = function (email, password) {
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
    };
    AuthService.prototype.signOut = function () {
        var _this = this;
        this.afAuth.auth.signOut().then(function () {
            _this.router.navigate(['/login']);
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/auth/customer.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerGuard = /** @class */ (function () {
    function CustomerGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    CustomerGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.auth.user.map(function (user) {
            if (user && user.role === 'customer') {
                return true;
            }
            return _this.router.navigate(['/tienda']);
        });
    };
    CustomerGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], CustomerGuard);
    return CustomerGuard;
}());



/***/ }),

/***/ "../../../../../src/app/auth/form/form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/form/form.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"animated fadeIn\">\r\n    <mat-form-field>\r\n      <input\r\n        matInput\r\n        #email\r\n        placeholder=\"Email\"\r\n        [formControl]=\"emailFormControl\"\r\n        [errorStateMatcher]=\"matcher\"\r\n        autocomplete=\"off\"\r\n      >\r\n      <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\r\n        Introduce un email correcto\r\n      </mat-error>\r\n\r\n      <mat-error *ngIf=\"emailFormControl.hasError('required')\">\r\n        Campo <strong>obligatorio</strong>\r\n      </mat-error>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <input\r\n        matInput\r\n        #password\r\n        placeholder=\"Password\"\r\n        type=\"password\"\r\n        [formControl]=\"passwordFormControl\"\r\n        [errorStateMatcher]=\"matcher\"\r\n        autocomplete=\"off\"\r\n      >\r\n      <mat-error *ngIf=\"passwordFormControl.hasError('required')\">\r\n        Campo <strong>obligatorio</strong>\r\n      </mat-error>\r\n    </mat-form-field>\r\n\r\n    <div class=\"btn-wrapper\">\r\n      <button\r\n        (click)=\"submit(email, password)\"\r\n        type=\"submit\"\r\n        mat-raised-button\r\n        color=\"accent\"\r\n      >\r\n        {{ btnText }}\r\n      </button>\r\n    </div>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/auth/form/form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FormErrorStateMatcher */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormErrorStateMatcher = /** @class */ (function () {
    function FormErrorStateMatcher() {
    }
    FormErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return FormErrorStateMatcher;
}());

var FormComponent = /** @class */ (function () {
    function FormComponent() {
        this.onSubmit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.emailFormControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].email
        ]);
        this.passwordFormControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required
        ]);
        this.matcher = new FormErrorStateMatcher();
    }
    FormComponent.prototype.ngOnInit = function () {
    };
    FormComponent.prototype.submit = function (email, password) {
        this.onSubmit.emit({ email: email, password: password });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], FormComponent.prototype, "onSubmit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], FormComponent.prototype, "btnText", void 0);
    FormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-auth-form',
            template: __webpack_require__("../../../../../src/app/auth/form/form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/auth/form/form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/auth/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"1\" rowHeight=\"60px\" class=\"mb-2\">\n  <mat-grid-tile>\n    <button (click)=\"auth.googleLogin()\" mat-raised-button color=\"warn\">Entrar con Google</button>\n  </mat-grid-tile>\n</mat-grid-list>\n\n<mat-card>\n  <mat-toolbar class=\"title\"><h1>Iniciar sesión</h1></mat-toolbar>\n  <mat-card-content>\n    <app-auth-form (onSubmit)=\"login($event)\" [btnText]=\"'Entra &rarr;'\"></app-auth-form>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/auth/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Auth */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_snack_service__ = __webpack_require__("../../../../../src/app/common/snack.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_app_service__ = __webpack_require__("../../../../../src/app/common/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Auth = /** @class */ (function () {
    function Auth(email, password) {
        this.email = email;
        this.password = password;
    }
    return Auth;
}());

var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router, snackService, appService) {
        this.auth = auth;
        this.router = router;
        this.snackService = snackService;
        this.appService = appService;
    }
    LoginComponent.prototype.login = function (user) {
        var _this = this;
        this.appService.fireLoader();
        this.auth.emailAndPassword(user.email, user.password).then(function (credentials) {
            _this.router.navigate(['/tienda']).then(function () {
                _this.appService.stopLoader();
            })
                .catch(function (err) {
                _this.snackService.launch("Error: " + err.message, "La ruta no existe", 5000);
                _this.appService.stopLoader();
            });
        })
            .catch(function (err) {
            _this.snackService.launch("Error: " + err.message, "Inicio de sesión", 5000);
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/auth/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/auth/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__common_snack_service__["a" /* SnackService */],
            __WEBPACK_IMPORTED_MODULE_4__common_app_service__["a" /* AppService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/auth/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-toolbar class=\"title\"><h1>Formulario de registro</h1></mat-toolbar>\n  <mat-card-content>\n    <app-auth-form (onSubmit)=\"signUp($event)\" [btnText]=\"'Regístrate &rarr;'\"></app-auth-form>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/auth/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_snack_service__ = __webpack_require__("../../../../../src/app/common/snack.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_app_service__ = __webpack_require__("../../../../../src/app/common/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(auth, snackService, afs, title, router, appService) {
        this.auth = auth;
        this.snackService = snackService;
        this.afs = afs;
        this.title = title;
        this.router = router;
        this.appService = appService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.title.setTitle('Formulario de registro');
    };
    RegisterComponent.prototype.signUp = function (user) {
        var _this = this;
        this.appService.fireLoader();
        this.auth.signUp(user.email.value, user.password.value).then(function (value) {
            var userJson = value.toJSON();
            _this.snackService.launch('Registro correcto, iniciando sesión', 'Alta usuario', 5000);
            var data = {
                uid: userJson.uid,
                email: user.email.value,
                displayName: user.email.value,
                photoUrl: null,
                role: 'customer'
            };
            _this.afs.collection('users').doc(userJson.uid).set(data).then(function () {
                _this.appService.stopLoader();
                _this.auth.emailAndPassword(user.email, user.password).then(function () {
                    _this.router.navigate(['/tienda']);
                });
            })
                .catch(function (error) {
                _this.appService.stopLoader();
            });
        })
            .catch(function (err) {
            _this.appService.stopLoader();
            _this.snackService.launch("Error: " + err.message, "Alta usuario", 5000);
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/auth/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/auth/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__common_snack_service__["a" /* SnackService */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["f" /* Title */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_6__common_app_service__["a" /* AppService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppService = /** @class */ (function () {
    function AppService() {
        this.loading$ = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of(false);
    }
    AppService.prototype.fireLoader = function () {
        this.loading$ = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of(true);
    };
    AppService.prototype.stopLoader = function () {
        this.loading$ = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of(false);
    };
    AppService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "../../../../../src/app/common/cart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartService = /** @class */ (function () {
    function CartService(auth, afs) {
        this.auth = auth;
        this.afs = afs;
    }
    CartService_1 = CartService;
    CartService.prototype.createCart = function (id) {
        this.afs.collection('carts').doc(id).set({ id: id, products: [], totalProducts: 0 });
    };
    CartService.prototype.myCart = function (uid) {
        return this.afs.doc("carts/" + uid).snapshotChanges();
    };
    CartService.prototype.myCartRef = function (uid) {
        return this.afs.collection('carts').doc(uid).ref;
    };
    CartService.prototype.addProduct = function (product) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.auth.user.subscribe(function (data) {
                if (data) {
                    var ref_1 = _this.myCartRef(data.uid);
                    ref_1.get().then(function (doc) {
                        var cartData = doc.data();
                        var productsInCart = cartData.products;
                        var productToCart = {
                            id: product.id,
                            name: product.name,
                            qty: 1,
                            price: product.price
                        };
                        var exists = CartService_1.findProductByKey(productsInCart, 'id', product.id);
                        if (!exists) {
                            productsInCart.push(productToCart);
                            cartData.totalProducts += 1;
                        }
                        else {
                            exists.qty += 1;
                            cartData.totalProducts += 1;
                        }
                        return ref_1.update(cartData).then(function () {
                            resolve(true);
                        }).catch(function (err) {
                            reject(err);
                        });
                    });
                }
            });
        });
    };
    CartService.prototype.updateProduct = function (product, qty, uid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var ref = _this.myCartRef(uid);
            ref.get().then(function (doc) {
                var cartData = doc.data();
                var productsInCart = cartData.products;
                var exists = CartService_1.findProductByKey(productsInCart, 'id', product.id);
                if (exists) {
                    if (exists.qty != qty) {
                        exists.qty = qty;
                        cartData.totalProducts = CartService_1.totalProductsInCart(cartData.products);
                    }
                    return ref.update(cartData).then(function () {
                        resolve(true);
                    }).catch(function (err) {
                        reject(err);
                    });
                }
            });
        });
    };
    CartService.prototype.removeProduct = function (product, uid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var ref = _this.myCartRef(uid);
            ref.get().then(function (doc) {
                var cartData = doc.data();
                var productsInCart = cartData.products;
                var totalQty = cartData.totalProducts;
                cartData.totalProducts = parseInt(totalQty) - parseInt(product.qty);
                var exists = CartService_1.findProductByKey(productsInCart, 'id', product.id);
                if (exists) {
                    var index = productsInCart.findIndex(function (obj) { return obj.id === product.id; });
                    cartData.products = productsInCart.slice(0, index).concat(productsInCart.slice(index + 1));
                    return ref.update(cartData).then(function () {
                        resolve(true);
                    }).catch(function (err) {
                        reject(err);
                    });
                }
            });
        });
    };
    CartService.findProductByKey = function (array, key, value) {
        for (var i = 0; i < array.length; i++) {
            if (array[i][key] === value) {
                return array[i];
            }
        }
        return null;
    };
    CartService.totalProductsInCart = function (products) {
        var sum = 0;
        for (var i = 0; i < products.length; i++) {
            sum += parseInt(products[i]['qty']);
        }
        return sum;
    };
    CartService.prototype.totalPrice = function (products) {
        var total = 0;
        for (var i = 0; i < products.length; i++) {
            total += (parseInt(products[i]['qty']) * products[i]['price']);
        }
        return total;
    };
    CartService.prototype.resetCart = function (uid) {
        var ref = this.myCartRef(uid);
        return ref.get().then(function (doc) {
            var cartData = doc.data();
            cartData.products = [];
            cartData.totalProducts = 0;
            return ref.update(cartData);
        });
    };
    CartService = CartService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], CartService);
    return CartService;
    var CartService_1;
}());



/***/ }),

/***/ "../../../../../src/app/common/navigation/navigation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/common/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"auth.user | async; then authenticated else guest\">\r\n</div>\r\n\r\n<ng-template #authenticated>\r\n  <mat-toolbar color=\"primary\">\r\n    <mat-toolbar-row *ngIf=\"auth.user | async as user\">\r\n      <a\r\n        *ngIf=\"user.role === 'customer'\"\r\n        routerLinkActive=\"active\"\r\n        routerLink=\"/pedidos\"\r\n        [routerLinkActiveOptions]=\"{exact:true}\"\r\n      >\r\n        <i class=\"material-icons\">speaker_notes</i> Pedidos\r\n      </a>\r\n      <a\r\n        *ngIf=\"user.role === 'admin' || user.role === 'editor'\"\r\n        routerLinkActive=\"active\"\r\n        routerLink=\"/admin\"\r\n        [routerLinkActiveOptions]=\"{exact:true}\"\r\n      >\r\n        <i class=\"material-icons\">supervisor_account</i> Administración\r\n      </a>\r\n      <a\r\n        routerLinkActive=\"active\"\r\n        routerLink=\"/tienda\"\r\n        [routerLinkActiveOptions]=\"{exact:true}\"\r\n      >\r\n        <i class=\"material-icons\">store</i> Tienda\r\n      </a>\r\n      <a\r\n        class=\"cart\"\r\n        *ngIf=\"user.role === 'customer'\"\r\n        routerLinkActive=\"active\"\r\n        routerLink=\"/cesta\"\r\n        [routerLinkActiveOptions]=\"{exact:true}\"\r\n      >\r\n        <i class=\"material-icons\">shopping_cart</i><span class=\"cart_number\">{{ cart?.totalProducts }}</span>\r\n      </a>\r\n      <a\r\n        (click)=\"auth.signOut()\"\r\n      >\r\n        <i class=\"material-icons\">exit_to_app</i> Salir\r\n      </a>\r\n    </mat-toolbar-row>\r\n  </mat-toolbar>\r\n</ng-template>\r\n\r\n<ng-template #guest>\r\n  <mat-toolbar color=\"primary\">\r\n    <mat-toolbar-row>\r\n      <a\r\n        routerLinkActive=\"active\"\r\n        routerLink=\"/tienda\"\r\n        [routerLinkActiveOptions]=\"{exact:true}\"\r\n      >\r\n        <i class=\"material-icons\">store</i> Tienda\r\n      </a>\r\n      <a\r\n        routerLinkActive=\"active\"\r\n        routerLink=\"/login\"\r\n        [routerLinkActiveOptions]=\"{exact:true}\"\r\n      >\r\n        <i class=\"material-icons\">input</i> Login\r\n      </a>\r\n      <a\r\n        routerLinkActive=\"active\"\r\n        routerLink=\"/registro\"\r\n        [routerLinkActiveOptions]=\"{exact:true}\"\r\n      >\r\n        <i class=\"material-icons\">person_add</i> Registro\r\n      </a>\r\n    </mat-toolbar-row>\r\n  </mat-toolbar>\r\n</ng-template>\r\n"

/***/ }),

/***/ "../../../../../src/app/common/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_cart_service__ = __webpack_require__("../../../../../src/app/common/cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(auth, cartService) {
        this.auth = auth;
        this.cartService = cartService;
    }
    NavigationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.user.subscribe(function (data) {
            if (data) {
                if (data.role === 'customer') {
                    var cartRef = _this.cartService.myCartRef(data.uid).get();
                    cartRef.then(function (cart) {
                        if (cart.exists) {
                            _this.cartService.myCart(data.uid).subscribe(function (myCart) {
                                _this.cart = myCart.payload.data();
                            });
                        }
                        else {
                            _this.cartService.createCart(data.uid);
                            _this.cartService.myCart(data.uid).subscribe(function (myCart) {
                                _this.cart = myCart.payload.data();
                            });
                        }
                    });
                }
            }
        });
    };
    NavigationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navigation',
            template: __webpack_require__("../../../../../src/app/common/navigation/navigation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/common/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__common_cart_service__["a" /* CartService */]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common/orders.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_faker__ = __webpack_require__("../../../../faker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_faker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_faker__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrdersService = /** @class */ (function () {
    function OrdersService(afs) {
        this.afs = afs;
    }
    OrdersService.prototype.orders = function (uid) {
        if (uid) {
            return this.afs.collection('orders', function (ref) { return ref.where('uid', '==', uid); });
        }
        return this.afs.collection('orders');
    };
    OrdersService.prototype.order = function (id) {
        return this.afs.doc("orders/" + id);
    };
    OrdersService.prototype.save = function (order) {
        var id = __WEBPACK_IMPORTED_MODULE_2_faker__["random"].alphaNumeric(16);
        order.id = id;
        return this.orders().doc(id).set(Object.assign({}, order));
    };
    OrdersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], OrdersService);
    return OrdersService;
}());



/***/ }),

/***/ "../../../../../src/app/common/products.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_faker__ = __webpack_require__("../../../../faker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_faker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_faker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_upload_service__ = __webpack_require__("../../../../../src/app/admin/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_fromPromise__ = __webpack_require__("../../../../rxjs/_esm5/observable/fromPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductsService = /** @class */ (function () {
    function ProductsService(afs, uploadService) {
        this.afs = afs;
        this.uploadService = uploadService;
    }
    ProductsService.prototype.products = function () {
        return this.afs.collection('products');
    };
    ProductsService.prototype.product = function (id) {
        return this.afs.doc("products/" + id);
    };
    ProductsService.prototype.save = function (product) {
        product.id = __WEBPACK_IMPORTED_MODULE_2_faker__["random"].alphaNumeric(16);
        return this.products().doc(product.id).set(Object.assign({}, product));
    };
    ProductsService.prototype.update = function (product) {
        return this.product(product.id).update(Object.assign({}, product));
    };
    ProductsService.prototype.getProductImages = function (productId) {
        return this.afs.doc("products/" + productId).collection('uploads');
    };
    ProductsService.prototype.remove = function (id) {
        var _this = this;
        var ref = this.product(id);
        ref.delete();
        return new Promise(function (resolve, reject) {
            _this.deleteUploadsCollection("products/" + id + "/uploads", 1).subscribe(function () {
                ref.delete().then(function () {
                    resolve(true);
                })
                    .catch(function (error) {
                    reject(error);
                });
            });
        });
    };
    ProductsService.prototype.deleteUploadsCollection = function (path, limit) {
        var _this = this;
        var source = this.deleteBatch(path, limit);
        return source.pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["a" /* expand */])(function (val) { return _this.deleteBatch(path, limit); }), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["d" /* takeWhile */])(function (val) { return val > 0; }));
    };
    ProductsService.prototype.deleteBatch = function (path, limit) {
        var _this = this;
        var ref = this.afs.collection(path, function (ref) { return ref.orderBy('__name__').limit(limit); });
        return ref.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["c" /* take */])(1), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["b" /* mergeMap */])(function (snapshot) {
            var batch = _this.afs.firestore.batch();
            snapshot.forEach(function (doc) {
                _this.uploadService.removeFile(doc.payload.doc.id);
                batch.delete(doc.payload.doc.ref);
            });
            return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_fromPromise__["a" /* fromPromise */])(batch.commit()).map(function () { return snapshot.length; });
        }));
    };
    ProductsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_3__admin_upload_service__["a" /* UploadService */]])
    ], ProductsService);
    return ProductsService;
}());



/***/ }),

/***/ "../../../../../src/app/common/snack.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SnackService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SnackService = /** @class */ (function () {
    function SnackService(snackBar) {
        this.snackBar = snackBar;
        this.snackBarOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatSnackBarConfig */];
    }
    SnackService.prototype.launch = function (message, action, duration) {
        this.snackBarOptions.duration = duration;
        this.snackBar.open(message, action, this.snackBarOptions);
    };
    SnackService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatSnackBar */]])
    ], SnackService);
    return SnackService;
}());



/***/ }),

/***/ "../../../../../src/app/models/product.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
var Product = /** @class */ (function () {
    function Product() {
        this.created_at = new Date;
    }
    return Product;
}());



/***/ }),

/***/ "../../../../../src/app/models/upload.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Upload; });
var Upload = /** @class */ (function () {
    function Upload(file) {
        this.createdAt = new Date();
        this.file = file;
    }
    return Upload;
}());



/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_app_service__ = __webpack_require__("../../../../../src/app/common/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_snack_service__ = __webpack_require__("../../../../../src/app/common/snack.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_products_service__ = __webpack_require__("../../../../../src/app/common/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_cart_service__ = __webpack_require__("../../../../../src/app/common/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_orders_service__ = __webpack_require__("../../../../../src/app/common/orders.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["t" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["z" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatOptionModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["v" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["x" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["y" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatProgressSpinnerModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__common_app_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_5__common_snack_service__["a" /* SnackService */], __WEBPACK_IMPORTED_MODULE_6__common_products_service__["a" /* ProductsService */], __WEBPACK_IMPORTED_MODULE_7__common_cart_service__["a" /* CartService */], __WEBPACK_IMPORTED_MODULE_8__common_orders_service__["a" /* OrdersService */]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "../../../../../src/app/shop/cart/cart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shop/cart/cart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container_max\">\r\n  <h1>Cesta de la compra</h1>\r\n  <table *ngIf=\"cart && cart.products.length\" class=\"table_cart\">\r\n    <thead>\r\n      <tr>\r\n        <th scope=\"col\">Nombre</th>\r\n        <th scope=\"col\">Precio unitario</th>\r\n        <th scope=\"col\">Cantidad</th>\r\n        <th scope=\"col\">Precio total</th>\r\n        <th scope=\"col\" class=\"text-center\">Acciones</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let product of cart.products\">\r\n        <td>{{ product.name }}</td>\r\n        <td>{{ product.price }} €</td>\r\n        <td><input #qty [value]=\"product.qty\" /></td>\r\n        <td>{{ (product.price * product.qty).toFixed(2) }} €</td>\r\n        <td>\r\n          <button mat-button color=\"accent\" (click)=\"update(product, qty)\">\r\n            <i class=\"material-icons\">update</i> <span class=\"btn_small\">Actualizar</span>\r\n          </button>\r\n          <button mat-button color=\"warn\" (click)=\"remove(product)\">\r\n            <i class=\"material-icons\">delete</i> <span class=\"btn_small\">Eliminar</span>\r\n          </button>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n  <div *ngIf=\"totalPrice\">\r\n    <div class=\"total_cart\"><span>Compra total:</span> {{ totalPrice }} €</div>\r\n\r\n    <div class=\"btn_cart\">\r\n      <button [disabled]=\"!totalPrice\" color=\"warn\" mat-raised-button class=\"full-width\" (click)=\"processOrder()\">\r\n        <i class=\"material-icons\">done</i> Finalizar pedido\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"!totalPrice\" class=\"message\">\r\n    <i class=\"material-icons message_cart\">remove_shopping_cart</i> La cesta está vacía\r\n    <button mat-raised-button color=\"warn\" routerLink=\"/tienda\">\r\n      <i class=\"material-icons\">keyboard_return</i> Volver a la tienda\r\n    </button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/shop/cart/cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_cart_service__ = __webpack_require__("../../../../../src/app/common/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_snack_service__ = __webpack_require__("../../../../../src/app/common/snack.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_app_service__ = __webpack_require__("../../../../../src/app/common/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_orders_service__ = __webpack_require__("../../../../../src/app/common/orders.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CartComponent = /** @class */ (function () {
    function CartComponent(auth, cartService, snackService, router, appService, ordersService) {
        var _this = this;
        this.auth = auth;
        this.cartService = cartService;
        this.snackService = snackService;
        this.router = router;
        this.appService = appService;
        this.ordersService = ordersService;
        this.auth.user.subscribe(function (user) {
            if (user) {
                _this.cartService.myCart(user.uid).subscribe(function (cart) {
                    _this.cart = cart.payload.data();
                    _this.totalPrice = _this.cartService.totalPrice(_this.cart.products);
                    _this.uid = user.uid;
                });
            }
        });
    }
    CartComponent.prototype.update = function (product, qty) {
        var _this = this;
        this.appService.fireLoader();
        this.cartService.updateProduct(product, qty.value, this.uid).then(function () {
            _this.snackService.launch("Producto actualizado", "Cesta", 4000);
            _this.appService.stopLoader();
        })
            .catch(function () {
            _this.snackService.launch('Error actualizando el producto', 'Cesta', 4000);
            _this.appService.stopLoader();
        });
    };
    CartComponent.prototype.remove = function (product) {
        var _this = this;
        this.appService.fireLoader();
        this.cartService.removeProduct(product, this.uid).then(function () {
            _this.snackService.launch("Producto eliminado", "Cesta", 4000);
            _this.appService.stopLoader();
        })
            .catch(function () {
            _this.snackService.launch('Error eliminando el producto', 'Cesta', 4000);
            _this.appService.stopLoader();
        });
    };
    CartComponent.prototype.ngOnInit = function () {
    };
    CartComponent.prototype.processOrder = function () {
        var _this = this;
        var order = {
            id: null,
            uid: this.uid,
            products: this.cart.products,
            amount: this.totalPrice,
            totalProducts: this.cart.totalProducts,
            created_at: moment(new Date).format('DD/MM/YYYY')
        };
        this.ordersService.save(order).then(function () {
            _this.cartService.resetCart(_this.uid).then(function () {
                _this.snackService.launch('Carrito eliminado y pedido creado', 'Cesta', 6000);
                _this.router.navigate(['/pedidos']);
            });
        });
    };
    CartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cart',
            template: __webpack_require__("../../../../../src/app/shop/cart/cart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shop/cart/cart.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__common_cart_service__["a" /* CartService */],
            __WEBPACK_IMPORTED_MODULE_3__common_snack_service__["a" /* SnackService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__common_app_service__["a" /* AppService */],
            __WEBPACK_IMPORTED_MODULE_6__common_orders_service__["a" /* OrdersService */]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shop/orders/orders.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shop/orders/orders.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container_max\">\n  <mat-form-field>\n    <mat-label><i class=\"material-icons\">&#xE880;</i> Filtrar productos</mat-label>\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" />\n  </mat-form-field>\n\n  <mat-table #table [dataSource]=\"dataSource\" matSort [trackBy]=\"trackById\" class=\"animate\">\n    <ng-container matColumnDef=\"id\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>ID</mat-header-cell>\n      <mat-cell color=\"primary\" *matCellDef=\"let order\"> {{ order.id }} </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"created_at\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Fecha </mat-header-cell>\n      <mat-cell *matCellDef=\"let order\"> {{ order.created_at }} </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"amount\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Importe pedido </mat-header-cell>\n      <mat-cell *matCellDef=\"let order\"> {{ order.amount }}€ </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"totalProducts\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Número de productos </mat-header-cell>\n      <mat-cell *matCellDef=\"let order\"> {{ order.totalProducts }} </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\" class=\"animate\"></mat-row>\n  </mat-table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shop/orders/orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_snack_service__ = __webpack_require__("../../../../../src/app/common/snack.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_orders_service__ = __webpack_require__("../../../../../src/app/common/orders.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OrdersComponent = /** @class */ (function () {
    function OrdersComponent(ordersService, snackService, auth) {
        var _this = this;
        this.ordersService = ordersService;
        this.snackService = snackService;
        this.auth = auth;
        this.displayedColumns = ['id', 'created_at', 'amount', 'totalProducts'];
        this.auth.user.subscribe(function (user) {
            if (user) {
                _this.ordersService.orders(user.uid).valueChanges().subscribe(function (data) {
                    _this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatTableDataSource */](data);
                    _this.dataSource.sort = _this.sort;
                }, function (err) {
                    _this.snackService.launch("Error obteniendo pedidos: " + err.message, "Pedidos", 5000);
                });
            }
        });
    }
    OrdersComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
    };
    OrdersComponent.prototype.trackById = function (index, order) {
        return order.id;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatSort */])
    ], OrdersComponent.prototype, "sort", void 0);
    OrdersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-orders',
            template: __webpack_require__("../../../../../src/app/shop/orders/orders.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shop/orders/orders.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__common_orders_service__["a" /* OrdersService */],
            __WEBPACK_IMPORTED_MODULE_3__common_snack_service__["a" /* SnackService */],
            __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */]])
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shop/product/product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shop/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card *ngIf=\"product | async as p\" class=\"card_carousel\">\n  <mat-card-title>{{ p.name }}</mat-card-title>\n  <ngx-slick class=\"carousel\" #slickModal [config]=\"slideConfig\" *ngIf=\"slides.length\">\n    <div ngxSlickItem *ngFor=\"let slide of slides\">\n      <img src=\"{{ slide.img }}\" />\n    </div>\n  </ngx-slick>\n\n  <img *ngIf=\"!slides.length\" mat-card-image src=\"http://fakeimg.pl/350x250/?text=Sin imagen\">\n\n  <mat-card-content>\n    <p>{{ p.description}}</p>\n    <h2>{{ p.price }}€</h2>\n  </mat-card-content>\n  <mat-card-actions *ngIf=\"auth.user | async as user\">\n    <button\n      *ngIf=\"user.role === 'customer'\"\n      (click)=\"cartService.addProduct(p)\"\n      mat-raised-button color=\"warn\"\n    > <i class=\"material-icons\">add_shopping_cart</i> Añadir a la cesta\n    </button>\n  </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/shop/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_products_service__ = __webpack_require__("../../../../../src/app/common/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_cart_service__ = __webpack_require__("../../../../../src/app/common/cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductComponent = /** @class */ (function () {
    function ProductComponent(route, productService, auth, cartService) {
        var _this = this;
        this.route = route;
        this.productService = productService;
        this.auth = auth;
        this.cartService = cartService;
        this.slides = [];
        this.slideConfig = { "slidesToShow": 3, "slidesToScroll": 3 };
        var id = this.route.snapshot.paramMap.get('id');
        var product = this.productService.product(id);
        product.collection('uploads').valueChanges().subscribe(function (uploadSnap) {
            uploadSnap.map(function (upload) {
                _this.slides.push({ img: upload.url });
            });
        });
        this.product = product.valueChanges();
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    ProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product',
            template: __webpack_require__("../../../../../src/app/shop/product/product.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shop/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__common_products_service__["a" /* ProductsService */],
            __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__common_cart_service__["a" /* CartService */]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shop/products/products.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shop/products/products.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"3\" rowHeight=\"1:1\" class=\"mt-2\">\n  <mat-grid-tile *ngFor=\"let product of products | async\" [colspan]=\"1\">\n    <mat-card class=\"custom_card\">\n      <img *ngIf=\"!product.uploads[0]\" mat-card-image src=\"http://fakeimg.pl/350x250/?text=Sin imagen\" />\n      <img *ngIf=\"product.uploads[0]\" mat-card-image [src]=\"product.uploads[0].url\" />\n      <mat-card-title>{{ product.name }}</mat-card-title>\n      <mat-card-content>\n        <p>{{ product.price }} €</p>\n      </mat-card-content>\n      <mat-card-actions>\n        <div *ngIf=\"auth.user | async as user\">\n          <button\n            *ngIf=\"user.role === 'customer'\"\n            (click)=\"addProduct(product)\"\n            mat-raised-button\n            color=\"warn\"\n          >\n            <i class=\"material-icons\">add_shopping_cart</i> Añadir a la cesta\n          </button>\n          <button\n            routerLink=\"/producto/{{ product.id }}\"\n            mat-raised-button\n            color=\"accent\"\n          >\n            <i class=\"material-icons\">remove_red_eye</i> Ver detalle\n          </button>\n        </div>\n      </mat-card-actions>\n    </mat-card>\n  </mat-grid-tile>\n</mat-grid-list>\n"

/***/ }),

/***/ "../../../../../src/app/shop/products/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_combineLatest__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/combineLatest.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_cart_service__ = __webpack_require__("../../../../../src/app/common/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_products_service__ = __webpack_require__("../../../../../src/app/common/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_app_service__ = __webpack_require__("../../../../../src/app/common/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_snack_service__ = __webpack_require__("../../../../../src/app/common/snack.service.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(productsService, auth, cartService, appService, snackService) {
        this.productsService = productsService;
        this.auth = auth;
        this.cartService = cartService;
        this.appService = appService;
        this.snackService = snackService;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.products = this.productsService.products().snapshotChanges().map(function (productSnapsh) {
            return productSnapsh.map(function (product) {
                var productData = product.payload.doc.data();
                var productId = product.payload.doc.id;
                return _this.productsService.getProductImages(productId).snapshotChanges().map(function (uploadSnap) {
                    var number = 0;
                    return uploadSnap.map(function (upload) {
                        if (number === 0) {
                            number++;
                            return upload.payload.doc.data();
                        }
                    });
                })
                    .map(function (uploads) {
                    return __assign({ productId: productId }, productData, { uploads: uploads });
                });
            });
        })
            .flatMap(function (products) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].combineLatest(products); });
    };
    ProductsComponent.prototype.addProduct = function (product) {
        var _this = this;
        this.cartService.addProduct(product).then(function () {
            _this.snackService.launch('Producto añadido', 'Productos', 3000);
        })
            .catch(function (error) {
            _this.snackService.launch('Error: ' + error.message, 'Productos', 3000);
        });
    };
    ProductsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-products',
            template: __webpack_require__("../../../../../src/app/shop/products/products.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shop/products/products.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__common_products_service__["a" /* ProductsService */],
            __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5__common_cart_service__["a" /* CartService */],
            __WEBPACK_IMPORTED_MODULE_7__common_app_service__["a" /* AppService */],
            __WEBPACK_IMPORTED_MODULE_8__common_snack_service__["a" /* SnackService */]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shop/shop-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shop_products_products_component__ = __webpack_require__("../../../../../src/app/shop/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shop_product_product_component__ = __webpack_require__("../../../../../src/app/shop/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shop_cart_cart_component__ = __webpack_require__("../../../../../src/app/shop/cart/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shop_orders_orders_component__ = __webpack_require__("../../../../../src/app/shop/orders/orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_customer_guard__ = __webpack_require__("../../../../../src/app/auth/customer.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: 'tienda', component: __WEBPACK_IMPORTED_MODULE_2__shop_products_products_component__["a" /* ProductsComponent */] },
    { path: 'producto/:id', component: __WEBPACK_IMPORTED_MODULE_3__shop_product_product_component__["a" /* ProductComponent */] },
    { path: 'cesta', component: __WEBPACK_IMPORTED_MODULE_4__shop_cart_cart_component__["a" /* CartComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__auth_customer_guard__["a" /* CustomerGuard */]] },
    { path: 'pedidos', component: __WEBPACK_IMPORTED_MODULE_5__shop_orders_orders_component__["a" /* OrdersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__auth_customer_guard__["a" /* CustomerGuard */]] }
];
var ShopRoutingModule = /** @class */ (function () {
    function ShopRoutingModule() {
    }
    ShopRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], ShopRoutingModule);
    return ShopRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/shop/shop.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shop_routing_module__ = __webpack_require__("../../../../../src/app/shop/shop-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__products_products_component__ = __webpack_require__("../../../../../src/app/shop/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_slick__ = __webpack_require__("../../../../ngx-slick/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product_product_component__ = __webpack_require__("../../../../../src/app/shop/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cart_cart_component__ = __webpack_require__("../../../../../src/app/shop/cart/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__orders_orders_component__ = __webpack_require__("../../../../../src/app/shop/orders/orders.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ShopModule = /** @class */ (function () {
    function ShopModule() {
    }
    ShopModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__shop_routing_module__["a" /* ShopRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_slick__["a" /* SlickModule */].forRoot()
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__products_products_component__["a" /* ProductsComponent */], __WEBPACK_IMPORTED_MODULE_6__product_product_component__["a" /* ProductComponent */], __WEBPACK_IMPORTED_MODULE_7__cart_cart_component__["a" /* CartComponent */], __WEBPACK_IMPORTED_MODULE_8__orders_orders_component__["a" /* OrdersComponent */]]
        })
    ], ShopModule);
    return ShopModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    firebase: {
        apiKey: "AIzaSyDu34lvOCoj52YmOqP6x5pBerpP8G6iwz4",
        authDomain: "storeapp-c5867.firebaseapp.com",
        databaseURL: "https://storeapp-c5867.firebaseio.com",
        projectId: "storeapp-c5867",
        storageBucket: "storeapp-c5867.appspot.com",
        messagingSenderId: "492220283825"
    }
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map