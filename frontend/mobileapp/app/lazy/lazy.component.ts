import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'mobile-app',
	templateUrl: 'lazy.component.html'
})
export class LazyComponent {
	onScroll () {
        console.log('scrolled!!')
    }
}