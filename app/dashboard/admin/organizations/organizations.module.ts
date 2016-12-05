import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OrganizationsComponent } from './organizations.component';

import { OrganizationsService } from './organizations.service';

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
        OrganizationsService
    ]
})

export class OrganizationsModule { }
