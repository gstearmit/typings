import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'left-menu',
    templateUrl: `left-menu.component.html`
})

export class LeftMenuComponent implements OnInit {
    ngOnInit() {}

    public closeMenuToggle() {
        $('.left-menu').removeClass('open');
        $('.overlay-bg').hide();
        $('.page').css('overflow','inherit');
    }

    public openSubMenuAmz($event) {
        var thisParent = $($event.target.parentNode.parentNode);
        if(thisParent.prop('tagName') == 'UL'){
            thisParent = $($event.target.parentNode);
        }
        $(thisParent).addClass('active');
        $('.left-menu .menu-list .menu-content').addClass('open');
        $('.left-menu').addClass('amz-menu');
    }

    public openSubMenuEbay($event) {
        var thisParent = $($event.target.parentNode.parentNode);
        if(thisParent.prop('tagName') == 'UL'){
            thisParent = $($event.target.parentNode);
        }
        $(thisParent).addClass('active');
        $('.left-menu .menu-list .menu-content').addClass('open');
        $('.left-menu').addClass('ebay-menu');
    }

    public openSubMenu2($event) {
        var thisParent = $($event.target.parentNode.parentNode);
        if(thisParent.prop('tagName') == 'UL'){
            thisParent = $($event.target.parentNode);
        }
        $(thisParent).addClass('active');
        $('.left-menu .menu-list .menu-content').addClass('open');
    }

    public backSubMenu() {
        $('.left-menu .menu-list .menu-content').removeClass('open');
        $('.left-menu').removeClass('amz-menu');
        $('.left-menu').removeClass('ebay-menu');
        $('.left-menu .menu-list li').removeClass('active');
    }
}