import { Component, OnInit } from '@angular/core';
import { HotdealService } from './services/hotdeal.service'
import { FormatPriceService } from '../../../../services-common/format-price.service';
import { Hotdeal }           from './model/hotdeal';
@Component({
    moduleId: module.id,
    selector: 'hot-deal',
    templateUrl: `hot-deal.component.html`,
	providers: [HotdealService,FormatPriceService]
})

export class HotDealComponent  {
	public dataHotDeal:{};
    public datas: Hotdeal[] = [];
    public uploadUrl:string;
    public flag:boolean;
    constructor(private hotdealService: HotdealService, public formatPriceService:FormatPriceService) {
    }
  
    getHotDeal(){
        let self = this;
        this.hotdealService.getDataHotdeal().subscribe(function (res) {
            this.datas = res;
            self.dataHotDeal    = this.datas.data.cms_block_data_product.data;
            self.uploadUrl      = this.datas.data.uploadUrl;
            self.flag =true;
			//console.log(self.dataHotDeal);
        });
    }
    onScroll () {
        if(!this.flag){
            this.getHotDeal();
        } 
    }
}