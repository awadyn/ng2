import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrganizationsComponent } from './organizations.component';

const organizationsRoutes: Routes = [
    { path: "organizations", component: OrganizationsComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(organizationsRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class OrganizationsRoutingModule {  }
