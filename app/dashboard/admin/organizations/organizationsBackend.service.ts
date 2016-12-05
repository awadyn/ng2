/*
 * OrganizationBackendService: http backend for observable data service
 *
 * no state is managed here
 *
 */
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Organization } from 'app/organization';

@Injectable()
export class OrganizationsBackendService {

    private orgsUrl = 'app/orgs';
    private headers = new Headers({'Content-Type':'application/json'});

    constructor(private http: Http) { }

    /*
     *  fetch organizations as a stream from mock db
     */
    getOrganizations() {
        return this.http.get(this.orgsUrl);
    }

    /*
     *  handle errors from http requests
     */
    handleError(error: any): Promise<any> {
        console.error('An error occured, ', error);
        return Promise.reject(error.message || error);
    }
}

