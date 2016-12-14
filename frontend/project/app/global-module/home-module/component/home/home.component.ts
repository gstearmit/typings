import { Component,OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';
@Component({
	moduleId: module.id,
	selector: 'mobile-app',
	templateUrl: 'home.component.html',
	providers: [
        TranslateService
    ],
})
export class HomeComponent  {
	constructor(private translate: TranslateService) { }

    ngOnInit() {
        this.translate.addLangs(["en", "vn","home.vn","home.en"]);
		this.translate.setDefaultLang('home.en');
        if(window.location.hostname=='localhost'){
            this.translate.use('home.vn');
        }else{
            this.translate.use('home.en');
        }
    }
   
}