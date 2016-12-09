import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { User } from 'app/user';

import { StudioUsersStore } from './studioUsersStore';

/**
 *  user-detail component extends component
 */
@Component({
    selector: 'user_detail',
    templateUrl: 'app/dashboard/admin/studio-users/user_detail.html'
})


export class UserDetailComponent {
    @Input()
    user: User | null;

    /**
     *  @constructor
     */
    constructor(
            private router: Router,
            private store: StudioUsersStore
    ) { }


    /**
     *  save changes made to this user in mock db
     */
    saveStudioUser(): void {
        if (this.user) {
            this.store.saveStudioUser(this.user);
        } else {
            console.log('cannot update user... user is undefined or null');
        }
    }


    goBack(): void {
        this.user = null;
        this.router.navigate(['/studio-users']);
    }
}
