import { Component,OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';
@Component({
	moduleId: module.id,
	selector: 'mobile-app',
	templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
	onScroll () {
        console.log('scrolled!!')
    }
	constructor(private translate: TranslateService) { }

     ngOnInit() {
        this.translate.addLangs(["en", "fr"]);
        this.translate.setDefaultLang('fr');
        this.translate.use('fr');
    }
}