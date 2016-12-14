// Imports
import { Component, OnInit } from '@angular/core';
import { EbayBanner } from './model/ebay-banner';
import { EbayBannerService } from './service/ebay-banner.service';
@Component({
    moduleId: module.id,
    selector: 'ebay-banner',
    templateUrl: 'ebay-banner.component.html'
})
// Component class implementing OnInit
export class EbayBannerComponent implements OnInit {
    public datas : EbayBanner[] = [];
    // Private property for binding
    // Load data ones componet is ready
    constructor(private ebayBannerService : EbayBannerService){}
    ngOnInit() {
        this.getData();
    }
    getData(){
        this.ebayBannerService.getBannerEbayHome().subscribe(
            data => {this.datas = data},
            err => console.error(err),
            () => console.log('done')
        );
    }
}
