import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StudioUsersComponent } from './studio-users.component';
import { UserDetailComponent } from './user-detail.component';

import { StudioUsersRoutingModule } from './studio-users-routing.module';

import { StudioUsersService } from './studio-users.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        StudioUsersRoutingModule
    ],
    exports: [
        StudioUsersComponent,
        UserDetailComponent
    ],
    declarations: [
        StudioUsersComponent,
        UserDetailComponent
    ],
    providers: [
        StudioUsersService
    ]
})

export class StudioUsersModule { }
