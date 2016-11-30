/**
 * root module
 * entry point to application
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
//import { Ng2SmartTableModule } from 'ng2-smart-table';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome.component';

import { AppRoutingModule } from './app-routing.module';

import { DashboardModule } from './dashboard/dashboard.module';
import { AdminModule } from './dashboard/admin/admin.module';
import { StudioUsersModule } from './dashboard/admin/studio-users/studio-users.module';


@NgModule({
    imports: [
            BrowserModule,
            FormsModule,
            HttpModule,
            InMemoryWebApiModule.forRoot(InMemoryDataService),
            DashboardModule,
            AdminModule,
            StudioUsersModule,
//            Ng2SmartTableModule,
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
