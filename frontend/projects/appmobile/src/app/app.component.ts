import { Component, OnInit } from '@angular/core';
import {provide} from 'angular2/core';
import {TranslateService, TranslateLoader, TranslateStaticLoader} from 'ng2-translate/ng2-translate';


@Component({
    selector: 'mobile-app',
    templateUrl: 'app/app.component.html',
    providers: [
    provide(TranslateLoader, {
      useFactory: (http: Http) => new TranslateStaticLoader(http, 'assets/i18n', '.json'),
      deps: [Http]
    }),
    TranslateService
  ]
})
export class AppComponent implements OnInit {
    //constructor(private translate: TranslateService) { }

     ngOnInit() {
        
    }
}