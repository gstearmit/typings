import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'header-weshop',
    templateUrl: `header-weshop.component.html`
})

export class HeaderWeshopComponent implements OnInit {
    ngOnInit() {
	}

    public openMenuToggle() {
        $('.left-menu').addClass('open');
        $('.overlay-bg').show();
        $('.page').css('overflow','hidden');
    }
}