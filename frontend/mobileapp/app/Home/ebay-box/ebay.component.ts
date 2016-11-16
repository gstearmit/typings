import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'ebay',
    templateUrl: `ebay.component.html`
})

export class EbayComponent implements OnInit {
    bannerEbay = {data1:[], data2:{}};
    ngOnInit() {
        this.loadBannerEbay();
    }

    private loadBannerEbay() {
        // this.homeService.getBanner();
        this.bannerEbay.data1 =[
            {
                "ebayBannerId" : "1",
                "ebayBannerLink" : "app/common/img/ws-pd-banner5.jpg",
                "ebayBannerName" : "Banner test 1"
            },
            {
                "ebayBannerId" : "2",
                "ebayBannerLink" : "app/common/img/ws-pd-banner2.jpg",
                "ebayBannerName" : "Banner test 2"
            },
            {
                "ebayBannerId" : "3",
                "ebayBannerLink" : "app/common/img/ws-pd-banner6.jpg",
                "ebayBannerName" : "Banner test 3"
            },
            {
                "ebayBannerId" : "4",
                "ebayBannerLink" : "app/common/img/ws-pd-banner7.jpg",
                "ebayBannerName" : "Banner test 4"
            }
        ];
        this.bannerEbay.data2 =
        {
            "portalBannerId" : "1",
            "portalBannerLink" : "app/common/img/banner-ebay.jpg",
            "portalBannerName" : "Banner test 2"
        }
    }
}