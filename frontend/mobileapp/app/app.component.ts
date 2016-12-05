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
export class AppComponent implements OnInit {
    constructor(private translate: TranslateService) { }

     ngOnInit() {
        this.translate.addLangs(["en", "vn"]);
        this.translate.setDefaultLang('vn');
        this.translate.use('vn');
    }
}