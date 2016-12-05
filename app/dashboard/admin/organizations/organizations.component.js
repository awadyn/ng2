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
var organizations_service_1 = require('./organizations.service');
var OrganizationsComponent = (function () {
    /**
     *  @constructor
     */
    function OrganizationsComponent(router, service) {
        this.router = router;
        this.service = service;
    }
    /*
     * Get organizations in one chunk
     * */
    OrganizationsComponent.prototype.getOrganizations = function () {
        var _this = this;
        this.service
            .getOrganizations()
            .then(function (ORGS) { return _this.organizations = ORGS; });
    };
    OrganizationsComponent.prototype.addOrganization = function (org_name, org_type, org_package) {
        if (org_name && org_type && org_package) {
            org_name = org_name.trim();
            org_type = org_type.trim();
            org_package = org_package.trim();
        }
        else {
            console.log('Cannot add organization. Missing fields.');
            return;
        }
    };
    OrganizationsComponent.prototype.deleteOrganization = function (id) {
    };
    OrganizationsComponent.prototype.updateOrganization = function (id) {
    };
    OrganizationsComponent.prototype.searchOrganizations = function (org_name) {
    };
    OrganizationsComponent.prototype.ngAfterViewInit = function () {
        console.log('finished rendering view...');
    };
    OrganizationsComponent.prototype.ngOnInit = function () {
        console.log('finished initializing component...');
        this.getOrganizations();
    };
    /**
     *  go back to admin view
     */
    OrganizationsComponent.prototype.goBack = function () {
        this.router.navigate(['/admin']);
    };
    OrganizationsComponent = __decorate([
        core_1.Component({
            selector: 'organizations',
            templateUrl: 'app/dashboard/admin/organizations/organizations.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, organizations_service_1.OrganizationsService])
    ], OrganizationsComponent);
    return OrganizationsComponent;
}());
exports.OrganizationsComponent = OrganizationsComponent;
//# sourceMappingURL=organizations.component.js.map