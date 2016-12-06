import { Component, OnInit } 	from '@angular/core';
import { EbayBoxService } 		from './services/ebay-box.service';
import { EbayBox }          	from'./model/ebay-box';
import { FormatPriceService } from '../../services-common/format-price.service';

@Component({
    moduleId: module.id,
    selector: 'ebay-box',
    templateUrl: `ebay-box.component.html`,
	providers: [EbayBoxService,FormatPriceService]
})

export class EbayBoxComponent {
    public listimage:{};
    public slider:{};
    datas: EbayBox[] = []
    constructor(private ebayBoxService: EbayBoxService, public formatPriceService:FormatPriceService) {
        this.getData();
    }
   
    getData(){
		//console.log(this.formatPriceService.getDefault(50000000000,1));
        let self = this;
        this.ebayBoxService.getDataEbayBox().subscribe(function (res) {
            this.datas = res;
            self.listimage = this.datas.listimage;
            self.slider    = this.datas.slider;
        });
    }
}