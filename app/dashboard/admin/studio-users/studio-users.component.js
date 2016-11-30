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
var Observable_1 = require('rxjs/Observable');
var Subject_1 = require('rxjs/Subject');
require('rxjs/add/operator/debounceTime');
require('rxjs/add/operator/distinctUntilChanged');
require('rxjs/add/observable/of');
require('rxjs/add/operator/switchMap');
require('rxjs/add/operator/catch');
var studio_users_service_1 = require('./studio-users.service');
/**
 *  decorator for studio_users component
 */
var StudioUsersComponent = (function () {
    /**
     *  @constructor
     */
    function StudioUsersComponent(studio_users_service, studio_users_router) {
        this.studio_users_service = studio_users_service;
        this.studio_users_router = studio_users_router;
        this.search_terms = new Subject_1.Subject();
    }
    /**
     *  fetches a list of users from StudioUsersService:
     *  1- StudioUsersService returns an asynchronous promise
     *  2- when the promise finishes its work, the callback function of the
     *     promise is called inside then()
     *  3- the callback function sets the users property of this component to
     *     USERS returned by the service
     */
    StudioUsersComponent.prototype.getUsers = function () {
        var _this = this;
        this.studio_users_service
            .getStudioUsers()
            .then(function (USERS) { return _this.users = USERS; });
        //        this.studio_users_service
        //            .getStudioUsers()
        //            .map((response: Response) => response.json().data as User[])
        //            .subscribe(
        //                data => this.users = data,
        //                err => console.log('Error: ' + err),
        //                () => console.log('getUsers() completed')
        //            );
    };
    /**
     *  @param [first_name, last_name, role, email, password]: details for user that we wish to add
     *  adds a studio user
     */
    StudioUsersComponent.prototype.addStudioUser = function (first_name, last_name, role, email, password) {
        var _this = this;
        if (first_name && last_name && role && email && password) {
            first_name = first_name.trim();
            last_name = last_name.trim();
            role = role.trim();
            this.studio_users_service
                .createStudioUser(first_name, last_name, role, email, password)
                .then(function (user) {
                _this.users.push(user);
                _this.selected_user = null;
            });
        }
        else {
            console.log('Cannot add studio user. Missing fields.');
            return;
        }
    };
    /**
     *  @param user: user to delete
     *  deletes a studio user from the user-detail view
     *  nullifies the user-detail view
     */
    StudioUsersComponent.prototype.deleteStudioUser = function (id) {
        var _this = this;
        this.studio_users_service
            .deleteStudioUser(id)
            .then(function () {
            _this.users.splice(id - 1, 1);
            // TODO remove
            _this.selected_user = null;
            // remove from search results
            _this.search_terms.next('');
        });
    };
    /**
     *
     */
    StudioUsersComponent.prototype.searchStudioUsers = function (user_name) {
        this.search_terms.next(user_name);
    };
    /**
     *  Lifecycle Hook
     *  called upon rendering this component's view
     *  fetches all users
     */
    StudioUsersComponent.prototype.ngAfterViewInit = function () {
        console.log('finished rendering view...');
        this.searchStudioUsers('');
    };
    /**
     *  Lifecycle Hook
     *  called upon creation of StudioUsersComponent
     *  instantiates this.search_results as an Observable<User[]>
     */
    StudioUsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getUsers();
        this.selected_user = null;
        this.search_results = this.search_terms
            .debounceTime(200)
            .distinctUntilChanged()
            .switchMap(function (user_name) {
            return user_name ? _this.studio_users_service
                .searchStudioUsers(user_name)
                : _this.studio_users_service
                    .getStudioUsers();
        })
            .catch(function (error) {
            console.log(error);
            return Observable_1.Observable.of([]);
        });
    };
    /**
     *  @param user: user that was clicked
     *  sets the selected_user property to user
     */
    StudioUsersComponent.prototype.onSelect = function (user) {
        if (user)
            this.selected_user = user;
        else
            this.selected_user = null;
    };
    /**
     *  go back to admin view
     */
    StudioUsersComponent.prototype.goBack = function () {
        this.studio_users_router.navigate(['/admin']);
    };
    StudioUsersComponent = __decorate([
        core_1.Component({
            selector: 'studio_users',
            templateUrl: 'app/dashboard/admin/studio-users/studio_users.html'
        }), 
        __metadata('design:paramtypes', [studio_users_service_1.StudioUsersService, router_1.Router])
    ], StudioUsersComponent);
    return StudioUsersComponent;
}());
exports.StudioUsersComponent = StudioUsersComponent;
//# sourceMappingURL=studio-users.component.js.map