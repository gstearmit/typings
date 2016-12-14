// Imports
import { Component, OnInit } from '@angular/core';
import { EbayHotdeal } from './model/ebay-hotdeal';
import { EbayHotdealService } from './service/ebay-hotdeal.service';
@Component({
    moduleId: module.id,
    selector: 'ebay-hotdeal',
    templateUrl: 'ebay-hotdeal.component.html'
})
// Component class implementing OnInit
export class EbayHotdealComponent implements OnInit {
    public datas : EbayHotdeal[] = [];
    // Private property for binding
    // Load data ones componet is ready
    constructor(private ebayHotDealService : EbayHotdealService){
    }
    ngOnInit() {
        this.getData();
    }
    getData(){
        this.ebayHotDealService.getBannerCategory().subscribe(
                data => {this.datas = data},
                err => console.error(err),
            () => console.log('done')
        );
    }
}