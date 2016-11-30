"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_module_1 = require('./app.module');
/**
 * initialize platform that application will run in: dynamic browser
 * bootstrap AppModule to platform: Angular will look for
 * the selector of AppModule in index.html, instantiate an
 * instance of AppComponent, and render it inside the selector tag
 */
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map