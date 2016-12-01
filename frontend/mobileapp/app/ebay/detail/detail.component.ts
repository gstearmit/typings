// Imports
import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
    moduleId: module.id,
    templateUrl: 'detail.component.html'
})
// Component class implementing OnInit
export class EbayDetailComponent implements OnInit {
    // Private property for binding
    // Load data ones componet is ready
    ngOnInit() {
        $('.page').addClass('ebay-detail');
    }
}
