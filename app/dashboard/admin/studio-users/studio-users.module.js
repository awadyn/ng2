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
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var studio_users_component_1 = require('./studio-users.component');
var user_detail_component_1 = require('./user-detail.component');
var studio_users_routing_module_1 = require('./studio-users-routing.module');
var studio_users_service_1 = require('./studio-users.service');
var StudioUsersModule = (function () {
    function StudioUsersModule() {
    }
    StudioUsersModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                studio_users_routing_module_1.StudioUsersRoutingModule
            ],
            exports: [
                studio_users_component_1.StudioUsersComponent,
                user_detail_component_1.UserDetailComponent
            ],
            declarations: [
                studio_users_component_1.StudioUsersComponent,
                user_detail_component_1.UserDetailComponent
            ],
            providers: [
                studio_users_service_1.StudioUsersService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], StudioUsersModule);
    return StudioUsersModule;
}());
exports.StudioUsersModule = StudioUsersModule;
//# sourceMappingURL=studio-users.module.js.map