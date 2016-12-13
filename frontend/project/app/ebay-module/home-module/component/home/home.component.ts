import { Component,OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';
@Component({
	moduleId: module.id,
	selector: 'mobile-app',
	templateUrl: 'home.component.html'
})
export class HomeComponent  {
	constructor(private translate: TranslateService) { }

     ngOnInit() {
    }
}