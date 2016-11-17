"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_module_1 = require('./app.module');
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
// import {bootstrap} from '@angular/platform-browser-dynamic'
// import {disableDeprecatedForms, provideForms} from '@angular/forms'
// import {AppComponent} from './app.component';
// bootstrap(AppComponent, [disableDeprecatedForms(), provideForms()]).catch((err:any) => console.error(err));
// When Angular finds a match in the DOM for a component selector, it will inject the component markup into that DOM element
// that it found a match on. The markup it will inject comes from the component metadata template properties. There are two, 
// the template and the template URL. Let's check these out. In the app Component, we can see that it is using the template 
// property and setting it to a string value of some markup. This is an inline template. The markup is declared within the 
// component metadata. If we switch over to our browser, I'm using Chrome here, and look at the run time results by inspecting 
// the DOM, we can see that the element named media-tracker-app has the markup from the metadata inserted inside of it.
// We can change that markup in the template metadata property. Add some new content, like a <p> tag with a description of 
// what the media tracker app is all about. And when we reload our browser we can see that our new content is there. Using 
// the template metadata property is an easy way to compose our Angular components. And since we are writing our JavaScript 
// using TypeScript, we can leverage future forward syntax like the backtick to surround strings. ES2015 has support for 
// backticks which allow multi-line string definitions in JavaScript so we can use backticks around the template value and start moving things to multiple lines for better readability.
// The other metadata property we can use is the template URL. This property allows us to specify a file that contains the 
// template content. Angular will load the template file for us and do the same content injection. We can create a new 
// file named app.component.html to hold the template and we can grab the markup from the template property and paste it 
// into the new file. Then we can go back to the app.component.ts file and change the template property to be templateUrl.
// Remove the backticks and replace them with a single quoted string that represents the path to the new template file. This 
// path is the relative path to the file from the base path of the web application. In our case, there's a directory named App, 
// so we use app/app.component.html. Either template property can be used, it's really just a matter of situational needs. 
//# sourceMappingURL=main.js.map