/**
 *  asynchronous service that provides studio users
 */

import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { User } from 'app/user';
//import { USERS } from './mock-studio-users';

@Injectable()
export class StudioUsersService {
    private usersUrl = 'app/users';
    private headers = new Headers({'Content-Type':'application/json'});

    constructor(private http: Http) { }


    /**
     *  @param user_name: first_name of user
     *  searches and returns users with first_name = user_name
     */
//    searchStudioUsers(user_name: string): Promise<User[]> {
//        return this.http.get(this.usersUrl + `?first_name=${user_name}`)
//            .toPromise()
//            .then(response => response.json().data as User[])
//            .catch(this.handleError);
//    }
    searchStudioUsers(user_name: string): Observable<User[]> {
        return this.http.get(this.usersUrl + `?first_name=${user_name}`)
            .map((response: Response) => response.json().data as User[])
//            .map((response: Response) => console.log(response.json().data))
            .catch(this.handleError);
    }

    /**
     *  http.get returns an RxJS observable
     *  observable is converted to a promise to return a list of users
     *  returns User[]
     */
    getStudioUsersAsObservable(): Observable<User[]> {
        return this.http.get(this.usersUrl)
            .map((response: Response) => response.json().data as User[])
            .catch(this.handleError);
    }    
    getStudioUsers(): Promise<User[]> {
        return this.http.get(this.usersUrl)
            .toPromise()
            .then(response => response.json().data as User[])
            .catch(this.handleError);
    }

    /**
     *  simulate slow connection
     */
    getStudioUsersSlowly(): Promise<User[]> {
        return new Promise<User[]>(resolve => setTimeout(resolve, 2000)).then(() => this.getStudioUsers());
    }

    /**
     *  @param pin: pin of studio user whose data we want to retrieve
     *  returns User
     */
    getStudioUser(pin: number): Promise<User> {
        return this.getStudioUsers()
            .then(users => users.find(user => user.pin === pin))
            .catch(this.handleError);
    }


    /**
     *  @param user: updated user
     *  updates user details based on the changes made
     */
    updateStudioUser(user?: User): void {
        if (user) {
            const url = `${this.usersUrl}/${user.id}`;
            this.http.put(url, JSON.stringify(user), {headers: this.headers})
                .toPromise()
                .then(res => console.log(res))
                .catch(this.handleError);
        } else {
            console.log('cannot update... user undefined or null');
        }
    }


    /**
     * @param first_name: first name of user to be added
     * @param last_name: last name of user to be added
     * @param role: role of user to be added
     * @param email: email of user to be added
     * @param password: password of user to be added
     * adds a user to list of users
     */
    createStudioUser(first_name:string, last_name:string, role:string, email:string, password:string): Promise<User> {
            return this.http
                .post(this.usersUrl, JSON.stringify({first_name:first_name, last_name:last_name, role:role, email:email, password:password, pin:1111}), {headers:this.headers})
                .toPromise()
                .then(res => res.json().data) 
                .catch(this.handleError);
    }


    /**
     * @param id: id of user to be deleted
     * deletes a user from list of users
     */
    deleteStudioUser(id: number): Promise<any> {
        const url = `${this.usersUrl}/${id}`;
        return this.http
                   .delete(url, {headers: this.headers})
                   .toPromise()
                   .then(res => console.log(res))
                   .catch(this.handleError);
    }


    /**
     *  error handler
     */
    private handleError(error: any): Promise<any> {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    }
}
