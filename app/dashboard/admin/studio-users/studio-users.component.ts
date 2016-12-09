import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/Rx';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';


import { User } from 'app/user';

import { StudioUsersStore } from './studioUsersStore';



@Component({
    selector: 'studio_users',
    templateUrl: 'app/dashboard/admin/studio-users/studio_users.html'
})



/**
 *  smart component
 *  manage compnent state locally
 */
export class StudioUsersComponent implements OnInit, AfterViewInit {
    /**
     *  @constructor
     *  @param store: observable data store
     */
    constructor(private router: Router, private store: StudioUsersStore) {
    }


//    getUsers(): void {
//        this.studio_users_service
//            .getStudioUsers()
//            .then(USERS => this.users = USERS);
//        this.studio_users_service
//            .getStudioUsers()
//            .map((response: Response) => response.json().data as User[])
//            .subscribe(
//                data => this.users = data,
//                err => console.log('Error: ' + err),
//                () => console.log('getUsers() completed')
//            );
//    }


    addStudioUser(first_name:string, last_name:string, role:string, email:string, password:string): void {
        if (first_name && last_name && role && email && password) {
            first_name = first_name.trim();
            last_name = last_name.trim();
            role = role.trim();
            console.log('Adding user');
            this.store.addStudioUser(first_name, last_name, role, email, password);
//            this.studio_users_service
//                .createStudioUser(first_name, last_name, role, email, password)
//                .then(user => {
//                    this.users.push(user);
//                    this.selected_user = null;
//                });
        } else {
            console.log('Cannot add studio user. Missing fields.'); 
        }
    }


    deleteStudioUser(id: number): void {
        console.log('Deleting studio user with id ', id);
        this.store.deleteStudioUser(id);
 //        this.studio_users_service
 //           .deleteStudioUser(id)
 //           .then(() => {
                //TODO FIX THIS compile error 
//               let delete_id = this.search_results.findIndex((user) => user.id === id);
//                this.searchStudioUsers('');
//                this.search_results.toArray().splice(delete_id, 1);
                // TODO must re-render list of users
                // TODO remove
//                this.selected_user = null;
                // remove from search results
//                this.search_terms.next('');
                // TODO add reactive forms here
  //          });
    }


    /**
     *  @param user_name: first name of user to search for
     *  search db studio users for user with user_name
     */
//    searchStudioUsers(user_name: string): void {
//        this.search_terms.next(user_name);
//    }


    /**
     *  Lifecycle Hook
     *  called upon rendering this component's view
     *  fetches all users
     */
//    ngAfterViewInit(): void {
//        console.log('finished rendering view...');
//    }


    /**
     *  Lifecycle Hook
     *  called upon creation of StudioUsersComponent
     *  instantiates this.search_results as an Observable<User[]> 
     */
//    ngOnInit(): void {
////        this.getUsers();
//        this.selected_user = null;
//        this.search_results = this.search_terms
//            .debounceTime(200)
//            .distinctUntilChanged()
//            .switchMap((user_name) =>
//                user_name? this.studio_users_service
//                               .searchStudioUsers(user_name)
//                : this.studio_users_service
//                      .getStudioUsers()
//            )
//            .catch(error => {
//                console.log(error);
//                return Observable.of<User[]>([]);
//            });
//        this.search_results
//            .map(response => this.users = response)
//            .subscribe(
//                result => console.log(this.users),
//                error => console.log(error)
//            );
//        let obs = this.studio_users_service
//                      .http
//                      .get('app/orgs')
//                      .map(response => response = response.json().data);
//        obs.subscribe(
//            result => {
//                console.log(result);
//                this._organizations.next(result);
//            },
//            error => {
//                console.log('Error fetching organizations...');
//            }
//        );
//    }



    ngAfterViewInit(): void {
        console.log('finished rendering view...');
    }


    ngOnInit(): void {
        console.log('finished initializing component...');
    }


    onSelect(user?: User): void {
        if (user) {
                console.log('Selected user ', user.first_name);
                this.store.select(user);
        }
        else {
                console.log('No user selected');
                this.store.select(null);
        }
    }

    /**
     *  go back to admin view
     */
    goBack(): void {
        this.router.navigate(['/admin']);
    }
}
