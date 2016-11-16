import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'header-amazon',
    templateUrl: `header-amazon.component.html`
})

export class HeaderAmazonComponent implements OnInit {
    ngOnInit() {}

    public openMenuToggle() {
        $('.left-menu').addClass('open');
        $('.overlay-bg').show();
        $('.page').css('overflow','hidden');
    }
}