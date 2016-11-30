import { Component } from '@angular/core';

/**
 *  decorator for dashboard component
 */
@Component({
    selector: 'dashboard',
    templateUrl: 'app/dashboard/dashboard.html'
})

/**
 *  defines any properties or methods that this component will be using
 *  @property title: title of component
 */
export class DashboardComponent { 
    title: string;

    /**
     *  @constructor
     */
    constructor() {
        this.title = 'Dashboard';
    }

}
