import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OrganizationsComponent } from './organizations.component';

import { OrganizationsBackendService } from './organizationsBackend.service';
import { OrganizationsStore } from './organizationsStore';

import { OrganizationsRoutingModule } from './organizations-routing.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        OrganizationsRoutingModule
    ],
    exports: [
        OrganizationsComponent
    ],
    declarations: [
        OrganizationsComponent
    ],
    providers: [
        OrganizationsBackendService,
        OrganizationsStore
    ]
})

export class OrganizationsModule { }
