import { Component, OnInit } from '@angular/core';
import { TranslateService,TranslatePipe } from 'ng2-translate';

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
        if(window.location.hostname=='localhost'){
            this.translate.setDefaultLang('home.en');
            this.translate.use('home.en');
        }else{
            this.translate.setDefaultLang('home.en');
           this.translate.use('home.en');
        }
    }
}