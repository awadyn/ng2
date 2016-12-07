import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Organization } from 'app/organization';

import { OrganizationsStore } from './organizationsStore';

/**
 *  organization-detail component extends component
 */
@Component({
    selector: 'organization-detail',
    templateUrl: 'app/dashboard/admin/organizations/organization-detail.html'
})


export class OrganizationDetailComponent {
    @Input()
    organization: Organization | null;

    /**
     *  @constructor
     */
    constructor(
        private store: OrganizationsStore,
        private router: Router
    ) { }

    goBack(): void {
        this.organization = null;
        this.router.navigate(['/organizations']);
    }
}
