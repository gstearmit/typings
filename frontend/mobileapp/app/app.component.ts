import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';
// Import router directives
// Deprecated
// import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
    selector: 'mobile-app',
    templateUrl: 'app/app.component.html',
    providers: [
    // TranslateService
  ],
})
<<<<<<< HEAD
export class AppComponent{}
=======
export class AppComponent implements OnInit {
    constructor(private translate: TranslateService) { }

     ngOnInit() {
        this.translate.addLangs(["en", "fr"]);
        this.translate.setDefaultLang('en');
        this.translate.use('en');
    }
}
>>>>>>> d73e875111bcbee05b3957ede1ddb38f7cb8f7b4
