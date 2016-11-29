import { Component, OnInit, Input } from '@angular/core';
import { SliderService } from './services/slider.service'
@Component({
    moduleId: module.id,
    selector: 'big-slider-weshop',
    templateUrl: `big-slider-weshop.component.html`
})

export class BigSliderWeshopComponent implements OnInit {
    homeSlider: Object = {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop: true,
        autoplay: 1000
    };
    dataSlider: {};
    constructor(private sliderService: SliderService) {
        this.dataSlider =  this.sliderService.getSliders();
    }
    ngOnInit() {
        this.dataSlider =  this.sliderService.getSliders();
    }
}