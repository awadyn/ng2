import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';


import { User } from 'app/user';

import { StudioUsersService } from './studio-users.service';



/**
 *  decorator for studio_users component
 */
@Component({
    selector: 'studio_users',
    templateUrl: 'app/dashboard/admin/studio-users/studio_users.html'
})



/**
 *  defines any properties or methods that this component will be using
 *  @property users: list of users
 *  @property selected_user: user to edit
 */
export class StudioUsersComponent implements OnInit, AfterViewInit {
    users: User[];
    selected_user: User | null;

    private search_terms = new Subject<string>();
    search_results: Observable<User[]>;

    /**
     *  @constructor
     */
    constructor(private studio_users_service: StudioUsersService, private studio_users_router: Router) {
    }


    /**
     *  fetches a list of users from StudioUsersService:
     *  1- StudioUsersService returns an asynchronous promise
     *  2- when the promise finishes its work, the callback function of the
     *     promise is called inside then()
     *  3- the callback function sets the users property of this component to
     *     USERS returned by the service
     */
    getUsers(): void {
        this.studio_users_service
            .getStudioUsers()
            .then(USERS => this.users = USERS);
//        this.studio_users_service
//            .getStudioUsers()
//            .map((response: Response) => response.json().data as User[])
//            .subscribe(
//                data => this.users = data,
//                err => console.log('Error: ' + err),
//                () => console.log('getUsers() completed')
//            );
    }


    /**
     *  @param [first_name, last_name, role, email, password]: details for user that we wish to add
     *  adds a studio user
     */
    addStudioUser(first_name:string, last_name:string, role:string, email:string, password:string): void {
        if (first_name && last_name && role && email && password) {
            first_name = first_name.trim();
            last_name = last_name.trim();
            role = role.trim();
            this.studio_users_service
                .createStudioUser(first_name, last_name, role, email, password)
                .then(user => {
                    this.users.push(user);
                    this.selected_user = null;
                });

        } else {
            console.log('Cannot add studio user. Missing fields.'); 
            return;
        }
    }


    /**
     *  @param user: user to delete
     *  deletes a studio user from the user-detail view
     *  nullifies the user-detail view
     */
    deleteStudioUser(id: number): void {
        this.studio_users_service
            .deleteStudioUser(id)
            .then(() => {
                this.users.splice(id - 1, 1);
                // TODO remove
                this.selected_user = null;
                // remove from search results
                this.search_terms.next('');
            });
    }


    /**
     *
     */
    searchStudioUsers(user_name: string): void {
        this.search_terms.next(user_name);
    }


    /**
     *  Lifecycle Hook
     *  called upon rendering this component's view
     *  fetches all users
     */
    ngAfterViewInit(): void {
        console.log('finished rendering view...');
        this.searchStudioUsers('');
    }


    /**
     *  Lifecycle Hook
     *  called upon creation of StudioUsersComponent
     *  instantiates this.search_results as an Observable<User[]> 
     */
    ngOnInit(): void {
        this.getUsers();
        this.selected_user = null;
        this.search_results = this.search_terms
            .debounceTime(200)
            .distinctUntilChanged()
            .switchMap((user_name) =>
                user_name? this.studio_users_service
                               .searchStudioUsers(user_name)
                : this.studio_users_service
                      .getStudioUsers()
            )
            .catch(error => {
                console.log(error);
                return Observable.of<User[]>([]);
            });

    }


    /**
     *  @param user: user that was clicked
     *  sets the selected_user property to user
     */
    onSelect(user?: User): void {
        if (user)
                this.selected_user = user;
        else
                this.selected_user = null;
    }

    /**
     *  go back to admin view
     */
    goBack(): void {
        this.studio_users_router.navigate(['/admin']);
    }
}
