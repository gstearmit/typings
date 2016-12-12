import { Component, OnInit } from '@angular/core';
import { BuyFromService } from './services/buy-from.service'
import { BuyFrom }        from './model/buy-from'

@Component({
    moduleId: module.id,
    selector: 'buy-from',
    templateUrl: `buy-from.component.html`
})

export class BuyFromComponent implements OnInit {
    public active: string;
    public datas: BuyFrom[] = [];
    public dataBuyFromTop: {};
    public dataBuyFromContent: {};
    public uploadUrl:string;
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
    constructor(private buyFromService: BuyFromService) {
        this.getData();
    }

    ngOnInit() {
        this.active = 'us';
    }

    tabClick(index){
        this.active = index;
    }

    getData(){
        let self = this;
        this.buyFromService.getBuyFrom().subscribe(function (res) {
            this.datas = res;
            self.dataBuyFromTop    = this.datas.data.cms_block_data_category;
            self.dataBuyFromContent    = this.datas.data.cms_block_data_image_brand;
            self.uploadUrl    = this.datas.data.uploadUrl;
        });
    }

    
}