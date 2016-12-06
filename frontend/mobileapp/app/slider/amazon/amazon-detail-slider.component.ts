import { Component, OnInit } from '@angular/core';
import { AmazonDetailImageService } from './services/slider.service'
@Component({
    moduleId: module.id,
    selector: 'amazon-detail-slider',
    templateUrl: `amazon-detail-slider.component.html`
})

export class AmazonDetailSliderComponent implements OnInit {
    ebayDetailSlider: Object = {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop: true,
        autoplay: 1000
    };
    dataSlider: {};
    constructor(private amazonSliderService: AmazonDetailImageService) {
        this.dataSlider =  this.amazonSliderService.getAmazonDetailImage();
    }
    ngOnInit() {
        this.dataSlider =  this.amazonSliderService.getAmazonDetailImage();
    }
}