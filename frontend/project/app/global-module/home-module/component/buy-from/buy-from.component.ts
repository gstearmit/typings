import { Component, OnInit } from '@angular/core';
import { BuyFromService } from './services/buy-from.service'
import { BuyFrom }        from './model/buy-from'

@Component({
    moduleId: module.id,
    selector: 'buy-from',
    templateUrl: `buy-from.component.html`
})

export class BuyFromComponent implements OnInit {
    public active: number;
    public datas: BuyFrom[] = [];
    public dataBuyFromTop: {};
    public dataBuyFromContent= [];
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
        this.active = 0;
    }

    tabClick(index){
        this.active = index;
    }
    isActive(categoryId){
        if(this.active==categoryId){
            return 'tab-pane active';
        }else{
            return 'tab-pane';
        }

    }
    getData(){
        let self = this;
        this.buyFromService.getBuyFrom().subscribe(function (res) {
            this.datas = res;
            self.dataBuyFromTop    = this.datas.data.cms_block_data_category;
            for (let key in this.datas.data.cms_block_data_image_brand) {
                self.dataBuyFromContent.push(this.datas.data.cms_block_data_image_brand[key]);
            }
            self.uploadUrl    = this.datas.data.uploadUrl;
        });
    }

    
}