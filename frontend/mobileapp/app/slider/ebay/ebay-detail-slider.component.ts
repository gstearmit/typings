import { Component, OnInit } from '@angular/core';
import { EbayDetailImageService } from './services/slider.service'
@Component({
    moduleId: module.id,
    selector: 'ebay-detail-slider',
    templateUrl: `ebay-detail-slider.component.html`
})

export class EbayDetailSliderComponent implements OnInit {
    ebayDetailSlider: Object = {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop: true,
        autoplay: 1000
    };
    dataSlider: {};
    constructor(private ebaySliderService: EbayDetailImageService) {
        this.dataSlider =  this.ebaySliderService.getEbayDetailImage();
    }
    ngOnInit() {
        this.dataSlider =  this.ebaySliderService.getEbayDetailImage();
    }
}