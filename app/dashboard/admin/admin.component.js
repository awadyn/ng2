/**
 * AppComponent: root component
 * component: controls a view through the associated template
 * view: is a portion of the screen
 */
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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
/**
 *  decorator for root component
 *  render AppComponent properties through the associated template
 */
var AdminComponent = (function () {
    /**
     *  @constructor
     */
    function AdminComponent(admin_router) {
        this.admin_router = admin_router;
        this.title = 'Admin';
    }
    /**
     *  go back to dashboard
     */
    AdminComponent.prototype.goBack = function () {
        this.admin_router.navigate(['']);
    };
    AdminComponent = __decorate([
        core_1.Component({
            selector: 'admin',
            templateUrl: 'app/dashboard/admin/admin.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AdminComponent);
    return AdminComponent;
}());
exports.AdminComponent = AdminComponent;
//# sourceMappingURL=admin.component.js.map