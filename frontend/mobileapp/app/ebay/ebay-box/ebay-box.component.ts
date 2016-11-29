import { Component, OnInit } from '@angular/core';
import { EbayBoxService } from './services/ebay-box.service';
import { EbayBox }          from'./model/ebay-box';

@Component({
    moduleId: module.id,
    selector: 'ebay-box',
    templateUrl: `ebay-box.component.html`
})

export class EbayBoxComponent implements OnInit {
    public listimage:{};
    public slider:{};
    datas: EbayBox[] = []
    constructor(private ebayBoxService: EbayBoxService) {
        this.getData();
    }
    ngOnInit(){

    }
    getData(){
        let self = this;
        this.ebayBoxService.getDataEbayBox().subscribe(function (res) {
            this.datas = res;
            self.listimage = this.datas.listimage;
            self.slider    = this.datas.slider;
        });
    }
}