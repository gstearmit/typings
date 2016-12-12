import { Component, OnInit } 	from '@angular/core';
import { EbayBoxService } 		from './services/ebay-box.service';
import { EbayBox }          	from'./model/ebay-box';
import { FormatPriceService } from '../../../../services-common/format-price.service';

@Component({
    moduleId: module.id,
    selector: 'ebay-box',
    templateUrl: `ebay-box.component.html`,
	providers: [EbayBoxService,FormatPriceService]
})

export class EbayBoxComponent {
    public dataImage: {};
    public uploadUrl:string;
    public image:string;
    datas: EbayBox[] = [];
    constructor(private ebayBoxService: EbayBoxService) {
        this.getData();
    }

    getData(){
        let self = this;
        this.ebayBoxService.getDataEbayBox().subscribe(function (res) {
            this.datas = res;
            self.dataImage = this.datas.data.cms_block_data_image_banner;
            self.uploadUrl = this.datas.data.uploadUrl;
            self.image = this.datas.data.image;
        });
    }
}