import { Component, OnInit, Input } from '@angular/core';
import { BigSliderService } from './services/big-slider.service'
import { BigSlider }        from './model/big-slider'

@Component({
    moduleId: module.id,
    selector: 'big-slider-weshop',
    templateUrl: `big-slider-weshop.component.html`
})

export class BigSliderWeshopComponent implements OnInit {
    public datas: BigSlider[] = [];
    public dataImage: {};
    public uploadUrl:string;
    homeSlider: Object = {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop: true,
        autoplay: 1000
    };
    constructor(private sliderService: BigSliderService) {
       this.getData();
    }
    ngOnInit() {}
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