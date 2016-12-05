/*
 * OrganizationStore: observable data service
 *
 * state is managed locally for the OrganizationsComponent
 * 
 * _organizations: private local state
 * organizations: public local state visible to other components, such that only
 *                this component may adjust its local state
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/Rx';

import { Organization } from 'app/organization';

import { OrganizationsBackendService } from './organizationsBackend.service';



@Injectable()
export class OrganizationsStore {

    /* local state */
    private _organizations: BehaviorSubject<Organization[]> = new BehaviorSubject([]);
    /* only expose observables to prevent store clients from emitting store values */
    public organizations: Observable<Organization[]> = this._organizations.asObservable();


    /**
     * @constructor
     * @param backendService: http backend service
     */
    constructor(private backendService: OrganizationsBackendService) {
        this.loadInitialOrganizations();
    }



    /**
     *  fetches initial array of organizations
     *  emits new value to _organizations
     *  organizations is updated
     *  view is rendered using organizations
     */
    loadInitialOrganizations() {
        let obs = this.backendService.getOrganizations()
                      .map(response => response = response.json().data);
        obs.subscribe(
            res => {
//                console.log(res);
//                console.log(<Organization>res[1]);
                this._organizations.next(res);
//                console.log(this._organizations);
//                console.log(this._organizations.getValue());
//                console.log(this.organizations);
            },
            err => console.log('Error fetching organizations...');
        );
    }
}
