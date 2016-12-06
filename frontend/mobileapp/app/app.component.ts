import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';

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
        this.translate.addLangs(["en", "vn","home.vn","home.en"]);
        this.translate.setDefaultLang('home.en');
        this.translate.use('home.en');
    }
}