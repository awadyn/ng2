import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from '@angular/http';

import { Organization } from 'app/organization';

import { OrganizationsService } from './organizations.service';



@Component({
    selector: 'organizations',
    templateUrl: 'app/dashboard/admin/organizations/organizations.html'
})



export class OrganizationsComponent implements OnInit, AfterViewInit {
    /* STATE */
    organizations: Organization[];


    /**
     *  @constructor
     */
    constructor(private router: Router, private service: OrganizationsService) {
    }


    /*
     * Get organizations in one chunk
     * */
    getOrganizations(): void {
        this.service
            .getOrganizations()
            .then(ORGS => this.organizations = ORGS);
    }

    /*
     *  Get organizations as stream
     */
    getOrganizationsAsStream(): void {
        this.service
            .getOrganizationsAsStream()                         // COLD
            .map(response => this.organizations = response)     // STILL COLD
            .subscribe();                                       // THIS IS WHY I'M HOT... THIS IS WHY I'M HOT
                                                                // THIS IS WHY.. THIS IS WHY.. THIS IS WHY I'M HOT
    }
    

    addOrganization(org_name:string, org_type:string, org_package:string): void {
        if (org_name && org_type && org_package) {
            org_name = org_name.trim();
            org_type = org_type.trim();
            org_package = org_package.trim();


        } else {
            console.log('Cannot add organization. Missing fields.'); 
            return;
        }
    }


    deleteOrganization(id: number): void {
    }


    updateOrganization(id: number): void {

    }


    searchOrganizations(org_name: string): void {
    }



    ngAfterViewInit(): void {
        console.log('finished rendering view...');
    }


    ngOnInit(): void {
        console.log('finished initializing component...');
//        this.getOrganizations();
        this.getOrganizationsAsStream();
    }


    /**
     *  go back to admin view
     */
    goBack(): void {
        this.router.navigate(['/admin']);
    }
}
