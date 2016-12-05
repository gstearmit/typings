import { Component, OnInit } 	from '@angular/core';
import { EbayBoxService } 		from './services/ebay-box.service';
import { EbayBox }          	from'./model/ebay-box';
import { FormatPriceService } from '../../services-common/format-price.service';
import { TranslateService } from 'ng2-translate';

@Component({
    moduleId: module.id,
    selector: 'ebay-box',
    templateUrl: `ebay-box.component.html`,
	providers: [EbayBoxService,FormatPriceService,TranslateService]
})

export class EbayBoxComponent implements OnInit {
    public listimage:{};
    public slider:{};
    datas: EbayBox[] = []
    constructor(private ebayBoxService: EbayBoxService, public formatPriceService:FormatPriceService,public translateService:TranslateService) {
        this.getData();
    }
    ngOnInit(){
        this.translateService.addLangs(["en", "vn"]);
        this.translateService.setDefaultLang('vn');
        this.translateService.use('vn');
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