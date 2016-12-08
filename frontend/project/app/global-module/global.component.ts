import { Component, OnInit } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'mobile-app',
	templateUrl: 'global.component.html',
    providers: [
    // TranslateService
  ],
})
export class GlobalComponent implements OnInit {
    constructor() { }

     ngOnInit() {
       
    }
}