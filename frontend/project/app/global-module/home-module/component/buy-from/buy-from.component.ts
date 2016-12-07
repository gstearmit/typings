import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'buy-from',
    templateUrl: `buy-from.component.html`
})

export class BuyFromComponent implements OnInit {
    public active: string;
    brandUS: Object = {
        paginationClickable: true,
        loop: true,
        autoplay: 1000,
        breakpoints: {
            640: {
                slidesPerView: 3,
            },
            533: {
                slidesPerView: 2,
            }
        }
    }

    ngOnInit() {
        this.active = 'us';
    }

    tabClick(index){
       this.active = index;
    }
}