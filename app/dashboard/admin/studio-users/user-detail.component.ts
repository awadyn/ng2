import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { User } from 'app/user';

import { StudioUsersService } from './studio-users.service';

/**
 *  decorator for user_detail component
 */
@Component({
    selector: 'user_detail',
    templateUrl: 'app/dashboard/admin/studio-users/user_detail.html'
})

/**
 *  defines any properties or methods that this component will be using
 *  @property user: user to edit
 */
export class UserDetailComponent {
    @Input()
    user: User | null;

    /**
     *  @constructor
     */
    constructor(
            private studio_users_service: StudioUsersService,
            private user_detail_router: Router,
            private user_detail_route: ActivatedRoute
    ) { }

    /**
     *  persist changes made to this user
     */
    saveStudioUser(): void {
        if (this.user) {
            this.studio_users_service.updateStudioUser(this.user);
        } else {
            console.log('cannot update user... user is undefined or null');
        }
    }

    /**
     *  go back to view without user detail
     */
    goBack(): void {
        this.user = null;
        this.user_detail_router.navigate(['/studio-users']);
    }

//    ngOnInit() {
//        this.user_detail_route.params
//            .switchMap((params: Params) => this.studio_users_service.getStudioUser(+params['pin']))
//            .subscribe((user: User) => this.user = user);
//    }
}
