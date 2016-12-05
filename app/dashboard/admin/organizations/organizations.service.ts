import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Organization } from 'app/organization';

@Injectable()
export class OrganizationsService {

    private orgsUrl = 'app/orgs';
    private headers = new Headers({'Content-Type':'application/json'});

    constructor(private http: Http) { }

    /*
     *  fetch organizations from mock db
     */
    getOrganizations(): Promise<Organization[]> {
        return this.http.get(this.orgsUrl)
                   .toPromise()
                   .then(response => response.json().data as Organization[])
                   .catch(this.handleError);
    }


    /*
     *  handle errors from http requests
     */
    handleError(error: any): Promise<any> {
        console.error('An error occured, ', error);
        return Promise.reject(error.message || error);
    }
}

