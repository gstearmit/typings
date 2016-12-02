import { Component, OnInit, Input } from '@angular/core';
import { SliderService } from './services/slider.service'
import { Slider }           from './model/slider';

@Component({
    moduleId: module.id,
    selector: 'big-slider-weshop',
    templateUrl: `big-slider-weshop.component.html`
})

export class BigSliderWeshopComponent implements OnInit {
    public datas: Slider[] = [];
    public dataImage: {};
    public uploadUrl:string;
    homeSlider: Object = {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop: true,
        autoplay: 1000
    };
    constructor(private sliderService: SliderService) {
       this.getData();
    }
    ngOnInit() {
    }
	getData(){
        let self = this;
        this.sliderService.getSliders().subscribe(function (res) {
            this.datas = res;
            self.dataImage    = this.datas.data.cms_block_data_image_slide;
            self.uploadUrl    = this.datas.data.uploadUrl;
			//console.log(this.datas.data);
        });
    }
}