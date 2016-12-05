/**
 * root module
 * entry point to application
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome.component';

import { AppRoutingModule } from './app-routing.module';

import { DashboardModule } from './dashboard/dashboard.module';
import { AdminModule } from './dashboard/admin/admin.module';
import { StudioUsersModule } from './dashboard/admin/studio-users/studio-users.module';
import { OrganizationsModule } from './dashboard/admin/organizations/organizations.module';

@NgModule({
    imports: [
            BrowserModule,
            FormsModule,
            HttpModule,
            InMemoryWebApiModule.forRoot(InMemoryDataService),
            DashboardModule,
            AdminModule,
            StudioUsersModule,
            OrganizationsModule,
            AppRoutingModule
    ],
    declarations: [
            AppComponent,
            WelcomeComponent
    ],
    /**
     * AppComponent: the main application view that hosts all other views
     */
    bootstrap: [AppComponent]
})

export class AppModule { }
